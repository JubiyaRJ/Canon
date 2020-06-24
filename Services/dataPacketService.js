var dataPacketService = require("poca-common").dataPacketService;

var DataPacketService = function (info) {
    this.ticketManagementService = info.ticketManagementService;
}

module.exports = DataPacketService;

DataPacketService.prototype.updateContext = function (_context, callback) {
    this.ticketManagementService.updateTicketContext(_context.email, _context.ticketDetails.ticketID, _context.ticketDetails.context, callback);
}

DataPacketService.prototype.formatter = function (prefix, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    var sections = [],
        buttArr = [],
        imageArr = [],
        buttons = [];
    let images = context.categoryContext.questionDetails.images;
    let videos = context.categoryContext.questionDetails.videos;
    var headerText = ((prefix == '') ? '' : prefix) + context.categoryContext.questionDetails.question;
    var voice = headerText;
    sections.push(dataPacketService.createTextPacket(headerText));
    let options = [];
    if (context.categoryContext.questionDetails.hasOwnProperty("options") && !isEmpty(context.categoryContext.questionDetails.options)) {
        if (_context.email.includes("::guest")) {
            if (context.categoryContext.lastAsedQuestion == context.categoryContext.questionDetails.question) {
                voice = generateVoiceCall(voice, context.categoryContext.questionDetails.options);
            } else {
                voice = generateVoice(voice, context.categoryContext.questionDetails.options);
            }
        }
        for (var key in context.categoryContext.questionDetails.options) {
            options.push(key);
            buttArr.push(dataPacketService.createChoiceTextOption(key, "", "D_TREE", null, {
                value: key
            }))
        }
        sections.push(dataPacketService.createChoicePacket("", null, buttArr));
    }
    var cards = [];
    if (images && (images.length > 0)) {
        imageArr.push(dataPacketService.createImageArrayPacket(images));
    }
    if (videos && (videos.length > 0)) {
        for (var i = 0; i < videos.length; i++) {
            imageArr.push(dataPacketService.createVideoPacket(videos[i].title, videos[i].description, videos[i].url));
        }
    }
    if (imageArr.length > 0) {
        sections.push(dataPacketService.createSensePacket("", "", imageArr));
    }
    context.categoryContext.lastAsedQuestion = context.categoryContext.questionDetails.question;
    this.updateContext(_context, function () {
        if (_this.areAnswersAvailable(context)) {
            _this.createScencePacket(_context, function (scencePacket, answerText) {
                if (scencePacket) {
                    _this.cardType1PreMergePacket(answerText + voice, headerText, "D_TREE", options, scencePacket, _context, callback);
                    return;
                } else {
                    response = dataPacketService.createCardType1Packet(voice, sections, buttons);
                    callback(response);
                }
            });
        } else {
            response = dataPacketService.createCardType1Packet(voice, sections, buttons);
            callback(response);
        }
    });
}

DataPacketService.prototype.areAnswersAvailable = function (context) {
    return (context.categoryContext.commonAnswers && typeof context.categoryContext.commonAnswers == "object" && (context.categoryContext.commonAnswers.length > 0 || Object.keys(context.categoryContext.commonAnswers).length > 0));
}

function generateVoiceCall(voice, options) {
    voice = "__NUMBER__1::" + voice;
    var index = 0;
    for (var key in options) {
        voice += " press " + (index + 1) + " for, " + key + ". ";
        index++;
    }
    return voice;
}

function generateVoice(voice, options) {
    voice += " the options are "
    var index = 0;
    for (var key in options) {
        voice += " option " + String.fromCharCode("A".charCodeAt(0) + index) + " , " + key + ".";
        index++;
    }
    return voice;
}

//Scence Packet
DataPacketService.prototype.createScencePacket = function (_context, callback) {
    this.createScencePacketCore(_context, !_context.email.includes("::guest"), callback);
}

DataPacketService.prototype.createScencePacketCore = function (_context, showScence, callback) {
    var context = _context.ticketDetails.context;
    var senseSuggestionObject = dataPacketService.createSenseSuggestionObject();
    var result = appendInfoAndVideo(senseSuggestionObject, showScence, context.categoryContext.commonAnswers);
    context.categoryContext.commonAnswers = null;
    this.updateContext(_context, function () {
        callback((result.senseSuggestionObject ? dataPacketService.createSenseSuggestionPacket(result.senseSuggestionObject) : null), result.voice);
    });
}

function appendInfoAndVideo(senseSuggestionObject, showScence, data) {
    var packetArr = [];
    var videoPackets = [];
    var CollectedData = [];
    var voice = "",
        onlyVoice = false;

    for (var i = 0; i < data.length; i++) {
        //for (var j = 0; j < data[i].questions.length; j++) {
        CollectedData.push(data[i]);
        // }
    }
    if (CollectedData.length != 0) {
        if (CollectedData.length == 1 && CollectedData[0].youtube_link == "") {
            voice = CollectedData[0].answer + " ";
            onlyVoice = true;
        } else if (showScence) {
            for (var i = 0; i < CollectedData.length; i++) {
                if (CollectedData[i].answer != "") {
                    packetArr.push(dataPacketService.createPara1Packet(CollectedData[i].answer));
                }
                if (CollectedData[i].youtube_link != "") {
                    videoPackets.push(dataPacketService.createVideoPacket(CollectedData[i].answer, "Try after seeing this.", CollectedData[i].youtube_link));
                }
            }
            voice = "Click on view for more details about your query. "
        }
    }
    if (packetArr.length > 0) dataPacketService.appendInfoSenseSuggestionData(senseSuggestionObject, "Related information: ", packetArr)
    if (videoPackets.length > 0) dataPacketService.appendVideoSenseSuggestionData(senseSuggestionObject, "Related videos: ", videoPackets)
    return {
        "senseSuggestionObject": (onlyVoice ? null : senseSuggestionObject),
        "voice": voice
    };
}

DataPacketService.prototype.textPacketPreMerge = function (voice, text, scencePacket, _context, callback) {
    var obj = {
        voice: voice,
        text: text,
        scencePacket: scencePacket
    }
    this.mergeScencePAcket("text", obj, _context, callback);
}

DataPacketService.prototype.cardType1PreMergePacket = function (voice, text, id, options, scencePacket, _context, callback) {
    var obj = {
        voice: voice,
        text: text,
        id: id,
        options: options,
        scencePacket: scencePacket
    }
    this.mergeScencePAcket("cardType1", obj, _context, callback);
}

DataPacketService.prototype.mergeScencePAcket = function (packetId, obj, _context, callback) {
    var context = _context.ticketDetails.context;
    switch (packetId) {
        case "text":
            this.mergeTextPacket(obj, callback);
            break;
        case "cardType1":
            this.mergeCardType1Packet(obj, callback);
            break;
        default:
            callback(null);
            //this.handleBasedOnLastState("", context.categoryContext.currentState.state, _context, callback)
    }
}

DataPacketService.prototype.mergeTextPacket = function (obj, callback) {
    var sections = [],
        buttons = [];
    sections.push(dataPacketService.createTextPacket(obj.text));
    sections.push(obj.scencePacket);
    callback(dataPacketService.createCardType1Packet(obj.voice, sections, buttons));
}

DataPacketService.prototype.mergeCardType1Packet = function (obj, callback) {
    let buttons = [];
    let sections = [];
    let index = 0;
    let card = null;
    obj.options.forEach(element => {
        buttons.push(dataPacketService.createChoiceTextOption(element, "", obj.id, null, {
            index: index,
            value: element
        }));
        index++;
    });

    sections.push(dataPacketService.createTextPacket(obj.text));
    sections.push(obj.scencePacket);
    card = dataPacketService.createCardType1Packet(obj.voice, sections, buttons);
    callback(card);
}

function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}