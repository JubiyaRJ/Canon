var utils = require("poca-common").utils;
var Utility = require("../Utility/utils");
var HookService = function (info, contextManager) {
    this.logger = info.logger;
    this.config = info.config;
    this.contextManager = contextManager;
    this.utility = new Utility(info.config, info.logger);
}

module.exports = HookService;

//GuideExample
HookService.prototype.getGuideExample = function (currentState, _context, callback) {
    let context = _context.ticketDetails.context;
    let guideUser = [];
    if (context.categoryContext.isAskConfirm || context.categoryContext.isCNF.status) {
        guideUser = ["Yes", "No"];
    } else if (currentState == "SERIAL_NO") {
        if (context.categoryContext.current_order.productType == 'Printer') {
            guideUser = ["KMAG52055", "Serial number is KMAG52055"];
        } else if (context.categoryContext.current_order.productType == 'Scanner') {
            guideUser = ["KLUY42789", "Serial number is KLUY42789"];
        } else if (context.categoryContext.current_order.productType == 'Multi-function Devices') {
            guideUser = ["960110847", "Serial number is 960110847"];
        }
    } else if (currentState == "MODEL_NO") {
        guideUser = ["option one", "select option one"];
    } else if (currentState == "METER_READING") {
        guideUser = ["1234", "my meter reading is 1234"];
    } else if (currentState == "TONER_COLOR") {
        guideUser = ["Cyan", "I need a Cyan toner"];
    } else if (currentState == "PRODUCT_TYPE") {
        guideUser = ["Printer", "Scanner"];
    } else if (currentState == "ADDRESS") {
        guideUser = ["Show me the Map", "Show me the saved addresses"];
        if (context.categoryContext.hasOwnProperty("userInfo")) {
            if (context.categoryContext.userInfo.hasOwnProperty("addresses")) {
                if (context.categoryContext.userInfo.addresses != null && context.categoryContext.userInfo.addresses.length > 0) {
                    guideUser = ["Take my " + context.categoryContext.userInfo.addresses[0].type + " address", "Show me the saved addresses"]
                }
            }
        }
    } else if (currentState == "MOBILE_NO") {
        guideUser = ["7349017975", "Mobile number is 7349017975"]
    } else if (currentState == "CATEGORY") {
        guideUser = ["Toner Booking", "I want to book a toner"]
    } else if (currentState == "PROBLEM_CATEGORY") {
        guideUser = ["Machine Installation", "I want to install a machine"]
    } else if (currentState == "PROBLEM") {
        guideUser = ["Printing issue", "Paper Jamming issue"]
    } else {
        return callback(null);
    }
    callback(guideUser)
}

//EntityBuilder
HookService.prototype.buildEntity = function (currentState, _context, callback) {
    let context = _context.ticketDetails.context;
    let res = [];

    /*Saved Address*/
    var savedAddressEntities = [];
    if (context.categoryContext.userInfo != null) {
        if (context.categoryContext.userInfo.hasOwnProperty("addresses")) {
            var keysAddress = context.categoryContext.userInfo.addresses == null ? [] : context.categoryContext.userInfo.addresses;
            if (keysAddress.length > 0) {
                for (var i = 0; i < keysAddress.length; i++) {
                    savedAddressEntities.push(utils.createNewSynonym(keysAddress[i].type));
                }
            }
        }
    }
    let changeStateEntities = getChangeStateEntities(_context.email);
    let colorEntities = []

    //options of category
    var optionOfCategoryEntities = [];
    if (currentState == "CATEGORY") {
        var arr = ["Toner Booking", "Register Complaint"];
        var keysOption = this.optionForCategory(arr);
        optionOfCategoryEntities = keysOption;
    } else if (currentState == "PROBLEM") {
        var keysOption = this.optionForProblem(context.categoryContext.problemOptions);
        optionOfCategoryEntities = keysOption;
    } else if (currentState == "PROBLEM_CATEGORY") {
        var keysOption = this.optionForProblemCategory(["Machine Installation", "Machine Service/Breakdown"]);
        optionOfCategoryEntities = keysOption;
    } else if (currentState == "PRODUCT_TYPE") {
        var optionsCmp = context.categoryContext.isCMPEnabled ? ["Printer", "Scanner", "Mulit-function Devices"] : ["Printer", "Scanner"]
        var keysOption = this.optionForProductType(optionsCmp);
        optionOfCategoryEntities = keysOption;
    } else if (currentState == "MODEL_NUMBER" && context.categoryContext.current_order.modelNumbers.length > 1) {
        var keysOption = this.optionForModelNumber(context.categoryContext.current_order.modelNumbers);
        optionOfCategoryEntities = keysOption;
    } else if (currentState == "SYMPTOM" && context.categoryContext.symptomValues.length > 1) {
        var keysOption = this.optionForSymptoms(context.categoryContext.symptomValues);
        optionOfCategoryEntities = keysOption;
    } else if (currentState == "CONFIRMATION" && context.categoryContext.option.length > 0) {
        var keysOption = this.optionForReject(context.categoryContext.option);
        optionOfCategoryEntities = keysOption;
    } else if (context.categoryContext.changeStatesWhatsapp.status && context.categoryContext.changeStatesWhatsapp.states.length > 0) {
        var keysOption = this.optionForReject(context.categoryContext.changeStatesWhatsapp.states);
        optionOfCategoryEntities = keysOption;
    }
    var optionProblemEntities = [];
    var optionProductTypeEntities = [];
    var optionProblemCategoryEntities = [];
    var savedAddressEntities = [];

    res.push(utils.createNewEntity("savedAddress", savedAddressEntities));
    res.push(utils.createNewEntity("changeState", changeStateEntities));
    res.push(utils.createNewEntity("option", optionOfCategoryEntities));
    res.push(utils.createNewEntity("problem", optionProblemEntities));
    res.push(utils.createNewEntity("PROBLEM_CATEGORY", optionProblemCategoryEntities));
    res.push(utils.createNewEntity("PRODUCT_TYPE", optionProductTypeEntities));
    res.push(utils.createNewEntity("tonerColor", colorEntities));
    res.push(utils.createNewEntity("MODEL_NUMBER", optionOfCategoryEntities));
    callback(res);
}

function getChangeStateEntities(email) {
    if (email.includes("::guest:WHATSAPP")) {
        var arr = [{
            value: 'SERIAL_NO',
            synonyms: ['change serial number', 'change serial no', 'change serialno', "change serialnumber"]
        },
        {
            value: 'PROBLEM',
            synonyms: ["change problem", 'change issue']
        },
        {
            value: 'TONER_COLOR',
            synonyms: ['change toner color', "change color", "change toner colour", "change colour"]
        },
        {
            value: 'METER_READING',
            synonyms: ["change reading", "change meter reading"]
        },
        {
            value: 'NAME',
            synonyms: ['change name']
        },
        {
            value: 'ADDRESS',
            synonyms: ['change address']
        },
        {
            value: 'MOBILE_NO',
            synonyms: ['change mobile no', 'change mobile number', 'change phone number', "change phone no"]
        },
        {
            value: 'MODEL_NO',
            synonyms: ['change model number', 'change modelnumber', 'change modelno']
        },
        {
            value: 'LOCALITY_PINCODE',
            synonyms: ['change pincode', 'change pin', 'change pin code', 'change pin number', 'change pin num', 'change pin no']
        },
        {
            value: 'LOCALITY',
            synonyms: ['change locality', 'change locality name']
        },
        {
            value: 'PRODUCT_TYPE',
            synonyms: ['change product', 'change product type', 'change type']
        },
        {
            value: 'CATEGORY',
            synonyms: ['change category']
        },
        {
            value: 'PROBLEM_CATEGORY',
            synonyms: ['change problem category', 'change problem catagory']
        },
        ];
        return arr;
    } else {
        var arr = [{
            value: 'SERIAL_NO',
            synonyms: ['serial number', 'serial no', 'serialno', "serialnumber", "serialnum", "serial num", "serial"]
        },
        {
            value: 'PROBLEM',
            synonyms: ["problem", 'issue']
        },
        {
            value: 'TONER_COLOR',
            synonyms: ['toner color', "color", "toner colour", "colour", "tonic color", "tonic colour", "tonic", 'chronicle']
        },
        {
            value: 'METER_READING',
            synonyms: ["reading", "meter reading"]
        },
        {
            value: 'NAME',
            synonyms: ['name']
        },
        {
            value: 'ADDRESS',
            synonyms: ['address']
        },
        {
            value: 'MOBILE_NO',
            synonyms: ['mobile no', 'mobile number', 'phone number', "phone no"]
        },
        {
            value: 'MODEL_NO',
            synonyms: ['model number', 'modelnumber', 'modelno', 'model no', "modelnum", "model num", "model"]
        },
        {
            value: 'LOCALITY_PINCODE',
            synonyms: ['change pincode', 'change pin', 'change pin code', 'change pin number', 'pin num', 'pin no']
        },
        {
            value: 'LOCALITY',
            synonyms: ['locality', 'locality name']
        },
        {
            value: 'PRODUCT_TYPE',
            synonyms: ['product', 'product type', 'type']
        },
        {
            value: 'CATEGORY',
            synonyms: ['category']
        },
        {
            value: 'PROBLEM_CATEGORY',
            synonyms: ['problem category', 'problem catagory']
        },
        ];
        return arr;
    }
}

HookService.prototype.optionForCategory = function (arr) {
    let _this = this;
    var optionTypes = [];
    for (var i = 0; i < arr.length; i++) {
        option = String.fromCharCode("A".charCodeAt(0) + i);
        let ind = i + 1;
        var tempArr = this.utility.createOptionsArray(ind, ['category']);
        optionTypes.push(utils.createNewSynonym("option " + option, tempArr))
    }
    return optionTypes
}

HookService.prototype.optionForProductType = function (arr) {
    let _this = this;
    var optionTypes = [];
    for (var i = 0; i < arr.length; i++) {
        option = String.fromCharCode("A".charCodeAt(0) + i);
        let ind = i + 1;
        var tempArr = this.utility.createOptionsArray(ind, ['product type', 'product']);
        optionTypes.push(utils.createNewSynonym("option " + option, tempArr))
    }
    return optionTypes
}

HookService.prototype.optionForModelNumber = function (arr) {
    let _this = this;
    var optionTypes = [];
    for (var i = 0; i < arr.length; i++) {
        option = String.fromCharCode("A".charCodeAt(0) + i);
        let ind = i + 1;
        var tempArr = this.utility.createOptionsArray(ind, ['model', 'model number']);
        tempArr.push(arr[i]);
        optionTypes.push(utils.createNewSynonym("option " + option, tempArr))
    }
    return optionTypes
}

HookService.prototype.optionForSymptoms = function (arr) {
    let _this = this;
    var optionTypes = [];
    for (var i = 0; i < arr.length; i++) {
        option = String.fromCharCode("A".charCodeAt(0) + i);
        let ind = i + 1;
        var tempArr = this.utility.createOptionsArray(ind, ['symptom', 'symptoms']);
        tempArr.push(arr[i]);
        optionTypes.push(utils.createNewSynonym("option " + option, tempArr))
    }
    return optionTypes
}

HookService.prototype.optionForReject = function (arr) {
    let _this = this;
    var optionTypes = [];
    for (var i = 0; i < arr.length; i++) {
        option = String.fromCharCode("A".charCodeAt(0) + i);
        let ind = i + 1;
        var tempArr = this.utility.createOptionsArray(ind, ['change']);
        tempArr.push(arr[i]);
        optionTypes.push(utils.createNewSynonym("option " + option, tempArr))
    }
    return optionTypes
}


HookService.prototype.optionForProblemCategory = function (arr) {
    let _this = this;
    var optionTypes = [];
    for (var i = 0; i < arr.length; i++) {
        option = String.fromCharCode("A".charCodeAt(0) + i);
        let ind = i + 1;
        var tempArr = this.utility.createOptionsArray(ind, ['problem category']);
        tempArr.push(arr[i]);
        optionTypes.push(utils.createNewSynonym("option " + option, tempArr))
    }
    return optionTypes
}

HookService.prototype.optionForProblem = function (arr) {
    let _this = this;
    var optionTypes = [];
    for (var i = 0; i < arr.length; i++) {
        option = String.fromCharCode("A".charCodeAt(0) + i);
        let ind = i + 1;
        var tempArr = this.utility.createOptionsArray(ind, ['problem']);
        tempArr.push(arr[i]);
        optionTypes.push(utils.createNewSynonym("option " + option, tempArr))
    }
    return optionTypes
}

function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}