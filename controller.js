var dataPacketService = require("poca-common").dataPacketService;
var ContextManager = require("poca-category-lib").contextManagementService;
var HookService = require("./Services/hookService");
var categoryConfigController = require("poca-category-lib").categoryConfigController;
var Validator = require("./Services/validatorService");
var ComplaintRegisterService = require("./Services/complaintRegisterService");
var TonerRequestService = require("./Services/tonerRequestService");
var DataPacketcreate = require("./Services/dataPacketService");
var CanonUtility = require("./Utility/canonUtils");
var RandomSentences = require("./Services/randomSentenceServices")
var Utility = require("./Utility/utils");
var MessageCreation = require("./Services/messageCreationServices");
var L1Agent = require("./Services/L1AgentSupportService");
var ModelNoDecideQuestion = require("./Services/modelNoDecideQuestionservice");
var SmsService = require("./Services/smsServices");
var customerDetails = require("./Services/customerDetails");
var ValidatePrevious = require("./Services/validatePrevious");

var Controller = function (info, categoryConfig) {
    this.info = info;
    this.categoryConfig = categoryConfig;
    this.assistanceService = info.assistanceService;
    this.config = info.config;
    this.logger = info.logger;
    this.mailer = info.mailer;
    this.ticketManagementService = info.ticketManagementService;
    this.dbManager = info.dbManager;
    this.contextManager = new ContextManager(this.info, this.categoryConfig);
    this.hookService = new HookService(this.info, this.contextManager);
    this.configController = new categoryConfigController(this.info, this.categoryConfig);
    this.validator = new Validator(this.info);
    this.complaintService = new ComplaintRegisterService(this.info.config, this.info.logger);
    this.tonerRequest = new TonerRequestService(this.info.config, this.info.logger);
    this.dataPacketcreate = new DataPacketcreate(this.info);
    this.canonUtility = new CanonUtility(this.info.config, this.info.logger);
    this.randomSentences = new RandomSentences(this.info);
    this.utility = new Utility(this.info.config, this.info.logger);
    this.messageCreation = new MessageCreation(this.info.config, this.info.logger);
    this.L1SupportService = new L1Agent(this.info, this.categoryConfig);
    this.modelNoDecideQuestion = new ModelNoDecideQuestion(this.info.config, this.info.logger);
    this.smsService = new SmsService(this.info.config, this.info.logger);
    this.customerDetails = new customerDetails(this.info.config, this.info.logger);
    this.validatePrevious = new ValidatePrevious(this.info, this.contextManager)
}

module.exports = Controller;

/**
 * It will initialize the categoryContext
 * This method is compulsory 
 */

//InitHandler

Controller.prototype.initCategoryContext = function (context, callback) {
    this.initContext = this.contextManager.getInitContext(this.categoryConfig);
    this.initContext.categoryContext = {
        "current_order": {
            category: '',
            serialNumber: '',
            meterReading: 0,
            tonerColor: '',
            problem: '',
            name: '',
            address: '',
            mailId: '',
            mobileNumber: 0,
            modelNumber: '',
            modelName: '',
            requestStatus: null,
            RequestId: "",
            isAlreadyRegistered: false,
            openTicketStatus: '',
            isNotRegistered: false,
            email: "",
            warranty: '',
            contract: '',
            problemCategory: '',
            entityName: '',
            serialNumberMatches: [],
            problems: [],
            changeStates: [],
            tempMobileNumber: 0,
            tempEmail: '',
            tempName: '',
            tempSerialNumberFst: '',
            tempSerialNumberArray: [],
            tempSerialnumberFlag: false,
            productType: '',
            modelNumbers: [],
            reqIdAnalysis: '',
            SMS_Flow_State: '',
            symptomCode: '',
            rating: null,
            symptomValue: '',
            localityPincode: null,
            locality: null,
            localityCode: null,
            loggedToners: '',
            deviceType: '',
            oldTicketID: ''
        },
        AddressDetails: {
            pincode: 0,
            buildingNo: '',
            doorNo: '',
            streetName: ''
        },
        currentState: {
            state: "PRODUCT_TYPE",
            count: 0
        },
        cnfTempState: {
            state: "",
            count: 0
        },
        isCNF: {
            state: "",
            status: false,
            value: ""
        },
        AnalyticData: {
            "CallHandlingTime": 0,
            "TollFreeOrWebOrAppBased": "",
            "ReferenceNumberprovided": false,
            "L1SupportRequested": {
                status: false,
                reason: ""
            },
            category: {
                status: false,
                count: 0
            },
            problemCategory: {
                status: false,
                count: 0
            },
            serialNo: {
                status: false,
                count: 0
            },
            problem: {
                status: false,
                count: 0
            },
            entityName: {
                status: false,
                count: 0
            },
            productType: {
                status: false,
                count: 0
            },
            meterReading: {
                status: false,
                count: 0
            },
            tonerColor: {
                status: false,
                count: 0
            },
            name: {
                status: false,
                count: 0
            },
            mobileNo: {
                status: false,
                count: 0
            },
            modelNumber: {
                status: false,
                count: 0
            },
            serviceChargeConfirm: {
                status: false,
                count: 0
            },
            completeAddress: {
                status: false,
                count: 0
            },
            doorNo: {
                status: false,
                count: 0
            },
            buildingNo: {
                status: false,
                count: 0
            },
            pincode: {
                status: false,
                count: 0
            },
            locality: {
                status: false,
                count: 0
            },
            streetName: {
                status: false,
                count: 0
            },
            feedBack: {
                status: false,
                count: 0
            }
        },
        UsageTiming: {
            "startTime": 0,
            "endTime": 0
        },
        changeStatesWhatsapp: {
            status: false,
            states: []
        },
        openComplaintDetails: {},
        option: [],
        reasonForL1: '',
        whatsappL1Flag: false,
        L1Flag: false,
        flagCNF: false,
        yesnoFlag: false,
        lastMeterReading: 0,
        tonerColorDetails: [],
        resultCode: '',
        alreadyBookedToners: '',
        summaryFlag: false,
        modelNoDecideQuestionTree: null,
        Qquestion: null,
        serialNoDecideQuestionTree: null,
        Squestion: null,
        tempSerialNumber: "",
        isAskConfirm: false,
        userInfo: null,
        L1SupportCount: 0,
        userSpecifiedToners: null,
        canBeRequestTonerColor: null,
        availableLocality: null,
        nameFlag: false,
        contractStatus: true,
        addressFlag: false,
        validateSerial: false,
        serverBusy: false,
        symptomValues: [],
        categoryInitiateBot: this.getInsightEngineUrl(),
        isCMPEnabled: this.getInsightEngineUrlCMP(),
        isSendSMS: false,
        prefixL1Whatsapp: ''
    }
    callback(this.initContext);
}

Controller.prototype.smallTalkEventHandler = function (_context, callback) {
    var _this = this;
    let prefix = '';
    let currentState = this.contextManager.getRecentObj(_context).state;
    if (_context.action == "smalltalk.welcome") {
        prefix = getRandomGreethingPreText() + ' ';
    } else {
        prefix = _context.response + ' ';
    }
    if (currentState == "OPEN_TICKET" && (_context.query && _context.query == "true")) {
        _this.configController.setCompleted(_context, ["OPEN_TICKET"], false, function (res) {
            _this.createDataPacket("", "", res, _context, callback);
        });
        return;
    }
    this.smallTalkEventHandlerForDiffStates(prefix, currentState, _context, callback);
}

function getRandomGreethingPreText() {
    var randomizer = Math.floor(Math.random() * 8);
    switch (randomizer) {
        case 1:
            return "Hi!"
            break;
        case 2:
            return "Greetings!"
            break;
        case 3:
            return "Hello!"
            break;
        case 4:
            return "Good day!"
            break;
    }
    return "Have a lovely day!";
}

Controller.prototype.getEntityBuilder = function (_context, callback) {
    this.hookService.buildEntity(_context.ticketDetails.context.categoryContext.currentState.state, _context, callback);
}

Controller.prototype.getGuideExample = function (_context, callback) {
    let context = _context.ticketDetails.context;
    this.hookService.getGuideExample(context.categoryContext.currentState.state, _context, callback);
}

Controller.prototype.confirmationHandler = function (_context, callback) {
    this.createConfirmationHZPacket(_context.ticketDetails.context.categoryContext, _context, false, false, (_context.email.includes("::guest:WHATSAPP") ? "::guest:WHATSAPP" : (_context.email.includes("::guest") ? "::guest" : false)), callback);
}

Controller.prototype.L1AgentHandler = function (_context, callback) {
    this.validator.setAnalyticData(_context.ticketDetails.context.categoryContext.currentState.state, 'L1AGENT', null, '', '', _context, function () {
        _this.L1SupportDecideCoreWhatsapp('', "yes", "SERIAL_NO", _context, callback);
    });
}

Controller.prototype.getCartInfo = function (_context, callback) {
    this.createConfirmationHZPacket(_context.ticketDetails.context.categoryContext, _context, false, _context.ticketDetails.detailed, false, function (response) {
        if (callback) {
            callback(response);
        }
    });
}

//checking the constraints for fulfilling the ticket
Controller.prototype.isTicketCompleted = function (_context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context.categoryContext;
    let current_order = context.current_order;

    let TonerBookingDecision = current_order.serialNumber != '' && current_order.tonerColor != '' && current_order.meterReading != 0 && context.currentState.state == "COMPLETED"

    let RegisterComplaintDecision = current_order.serialNumber != '' && current_order.problem != "" && context.currentState.state == "COMPLETED" && current_order.address != "" && current_order.mobileNumber != 0;

    let RegisterComplaintDecision_ProductType = current_order.serialNumber != '' && current_order.problem != "" && context.currentState.state == "COMPLETED";

    var productTypeTaker = (current_order.productType == 'Multi-function Devices') ? RegisterComplaintDecision_ProductType : ((current_order.productType == 'Printer' || current_order.productType == 'Scanner') ? RegisterComplaintDecision : false);

    var descisionTaker = (current_order.category == 'Toner Booking' ? TonerBookingDecision : (current_order.category == 'Register Complaint' ? productTypeTaker : false));
    if (context.whatsappL1Flag) {
        return true;
    } else if (current_order.isAlreadyRegistered) {
        return true;
    } else if (current_order.isNotRegistered) {
        return true;
    } else if (context.categoryInitiateBot && (context.current_order.serialNumber == '' || ((context.current_order.name == '' || context.current_order.address == '') && (context.current_order.productType != 'Multi-function Devices'))) && _context.email.includes("::guest:TOLL_FREE:")) {
        return true;
    } else if (descisionTaker) {
        return true;
    } else {
        return false;
    }
}

//updating the initCategoryContext
Controller.prototype.updateContext = function (_context, callback) {
    this.ticketManagementService.updateTicketContext(_context.email, _context.ticketDetails.ticketID, _context.ticketDetails.context, callback);
}

Controller.prototype.smallTalkEventHandlerForDiffStates = function (prefix, currentState, _context, callback) {
    switch (currentState) {
        case "PRODUCT_TYPE":
            this.isProductTypeAvailable(prefix, _context.query, currentState, _context, callback);
            break;
        case "SERIAL_NO":
            this.isSerialNumberAvailable(prefix, _context.query, currentState, _context, callback);
            break;
        case "SERIAL_NO_CNF":
            this.isSerialNumberAvailable(prefix, _context.query, currentState, _context, callback);
            break;
        case "CATEGORY":
            this.isCategoryAvailable(prefix, _context.query, currentState, _context, callback);
            break;
        case "TONER_COLOR":
            this.isTonerAvailable(prefix, _context.query, currentState, _context, callback);
            break;
        case "METER_READING":
            this.isMeterAvailable(prefix, _context.query, currentState, _context, callback);
            break;
        case "PROBLEM":
            this.isProblemAvailable(prefix, _context.query, currentState, _context, callback);
            break;
        case "NAME":
            this.nameAvail(_context.query, currentState, _context, callback);
            break;
        case "PROBLEM_CATEGORY":
            this.isProblemCategoryAvailable(prefix, _context.query, currentState, _context, callback);
            break;
        case "ADDRESS":
            this.isAddressAvail(_context.query, currentState, _context, callback);
            break;
        case "DOOR_NO":
            this.doorNoAvail(_context.query, currentState, _context, callback);
            break;
        case "STREET_NAME":
            this.streetNameAvail(_context.query, currentState, _context, callback);
            break;
        case "BUILDING_NO_CNF":
            this.buildingNoAvail(_context.query, currentState, _context, callback);
            break;
        case "PINCODE":
            this.pinCodeAvail(_context.query, currentState, _context, callback);
            break;
        case "LOCALITY_PINCODE":
            this.localityPinCodeAvail(_context.query, currentState, _context, callback);
            break;
        case "LOCALITY":
            this.localityAvail(_context.query, currentState, _context, callback);
            break;
        case "MOBILE_NO":
            this.isMobileNumberAvailable(prefix, _context.query, currentState, _context, callback);
            break;
        default:
            this.handleBasedOnLastState(prefix, currentState, _context, callback);
    }
}

Controller.prototype.updateSavedAddress = function (_context, callback) {
    let _this = this;
    var currentState = this.contextManager.getRecentObj(_context).state;
    let context = _context.ticketDetails.context;
    let prefix = '';
    let resetCondition = false;
    if (currentState == "PROBLEM_CATEGORY") {
        this.isProblemCategoryAvailable('', _context.query, currentState, _context, callback);
        return;
    }
    var userMentionedAddress = this.canonUtility.removeWords(_context.parameters.savedAddress);
    var foundPostalAddress = null;
    if (context.categoryContext.userInfo && context.categoryContext.userInfo.hasOwnProperty("addresses") && context.categoryContext.userInfo.addresses.length != 0) {
        for (var i = 0; i < context.categoryContext.userInfo.addresses.length; i++) {
            if (context.categoryContext.userInfo.addresses[i].type.toLocaleLowerCase() == userMentionedAddress.toLocaleLowerCase()) {
                foundPostalAddress = context.categoryContext.userInfo.addresses[i].postal_address;
                this.configController.setCompleted(_context, ["ADDRESS"], resetCondition, function (res) {
                    _this.validator.updateAddressCore(currentState, foundPostalAddress, _context, function () {
                        _this.createDataPacket('', '', res, _context, callback);
                    });
                });
                return;
            } else {
                prefix = this.randomSentences.randomSenForSavedAddress();
                this.handleBasedOnLastState(prefix, this.contextManager.getRecentObj(_context).state, _context, callback);
                return;
            }
        }
    } else {
        this.handleBasedOnLastState(prefix, this.contextManager.getRecentObj(_context).state, _context, callback);
    }
}

Controller.prototype.changeDetailSpecification = function (_context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    var choice = _context.parameters.changeState;
    let currentState = (this.contextManager.getRecentObj(_context) ? this.contextManager.getRecentObj(_context).state : this.contextManager.getBackupRecentObj(_context).state);
    if (_context.query.toLowerCase().trim() == 'make changes' || _context.query.toLowerCase().trim() == 'make change') {
        if (currentState == 'FEEDBACK') {
            var sym = _context.email.includes("::guest:WHATSAPP") ? '*' : '';
            this.handleBasedOnLastState('You have ' + sym + 'already raised a complaint' + sym + ' so you are ' + sym + 'not allowed to make any more changes' + sym + ' at this stage. ', this.contextManager.getRecentObj(_context).state, _context, callback);
        } else {
            this.confirmationRejectHandler(_context, callback);
        }
        return;
    }
    if (currentState == 'CATEGORY' && (currentState == choice || choice == '')) {
        this.isCategoryAvailable('', _context.query, currentState, _context, callback);
        return;
    }

    if (currentState == 'METER_READING' && (currentState == choice || choice == '')) {
        this.isMeterAvailable('', _context.query, currentState, _context, callback);
        return;
    }

    if (currentState == 'MOBILE_NO' && (currentState == choice || choice == '')) {
        this.isMobileNumberAvailable('', _context.query, currentState, _context, callback);
        return;
    }

    if (currentState == 'PROBLEM' && (currentState == choice || choice == '')) {
        this.isProblemAvailable('', _context.query, currentState, _context, callback);
        return;
    }

    if (currentState == 'PROBLEM_CATEGORY' && (currentState == choice || choice == '')) {
        this.isProblemCategoryAvailable('', _context.query, currentState, _context, callback);
        return;
    }

    if (currentState == 'PRODUCT_TYPE' && (currentState == choice || choice == '')) {
        this.isProductTypeAvailable('', _context.query, currentState, _context, callback);
        return;
    }

    if (currentState == 'SERIAL_NO' && (currentState == choice || choice == '')) {
        this.isSerialNumberAvailable('', _context.query, currentState, _context, callback);
        return;
    }

    if (currentState == 'SERIAL_NO_CNF' && (currentState == choice || choice == '')) {
        this.isSerialNumberAvailable('', _context.query, currentState, _context, callback);
        return;
    }

    if (currentState == 'NAME' && (currentState == choice || choice == '')) {
        this.nameAvail(_context.query, currentState, _context, callback);
        return;
    }

    if (currentState == 'TONER_COLOR' && (currentState == choice || choice == '')) {
        this.isTonerAvailable('', _context.query, currentState, _context, callback);
        return;
    }

    if (currentState == 'DOOR_NO' && (currentState == choice || choice == '')) {
        this.doorNoAvail(_context.query, currentState, _context, callback);
        return;
    }

    if (currentState == 'STREET_NAME' && (currentState == choice || choice == '')) {
        this.streetNameAvail(_context.query, currentState, _context, callback);
        return;
    }

    if (currentState == 'BUILDING_NO_CNF' && (currentState == choice || choice == '')) {
        this.buildingNoAvail(_context.query, currentState, _context, callback);
        return;
    }

    if (currentState == 'PINCODE' && (currentState == choice || choice == '')) {
        this.pinCodeAvail(_context.query, currentState, _context, callback);
        return;
    }
    if (currentState == 'LOCALITY_PINCODE' && (currentState == choice || choice == '')) {
        this.localityPinCodeAvail(_context.query, currentState, _context, callback);
        return;
    }
    if (currentState == 'LOCALITY' && (currentState == choice || choice == '')) {
        this.localityAvail(_context.query, currentState, _context, callback);
        return;
    }
    if (currentState == 'ADDRESS' && (currentState == choice || choice == '')) {
        this.isAddressAvail(_context.query, currentState, _context, callback);
        return;
    }
    if (currentState == 'COMPLETED' && choice == "") {
        this.confirmationRejectHandler(_context, callback);
        return;
    }
    if (_context.parameters.changeState != '') {
        this.changeDetail(_context, choice, callback);
    } else {
        this.handleBasedOnLastState('', currentState, _context, callback);
    }
}

Controller.prototype.changeDetail = function (_context, state, callback) {
    var _this = this;
    var resetValue = [];
    resetValue.push(state)
    var changeStates = _context.ticketDetails.context.categoryContext.current_order.changeStates;
    changeStates.push(state);
    resetContextValues(state, _context.ticketDetails.context);
    if (state == 'SERIAL_NO' || state == 'MODEL_NO' || state == 'CATEGORY') {
        _context.ticketDetails.context.categoryContext.current_order.isAlreadyRegistered = false;
    }
    if (state == "TONER_COLOR") {
        resetValue.push("OPEN_TICKET")
    }
    this.configController.resetState(_context, resetValue, true, function (res) {
        _this.createDataPacket("", '', res, _context, callback);
    });
}

Controller.prototype.resetToUnknownMessage = function (value, _context, callback) {
    _context["resolvedQuery"] = value;
    this.process("UNKNOWN_MESSAGE_HANDLER", _context, callback);
};

//Set unknown messages
Controller.prototype.setUnknown = function (_context) {
    let context = _context.ticketDetails.context;
    if (_context.hasOwnProperty("resolvedQuery")) {
        context.categoryContext.isUnknown = true;
    } else {
        context.categoryContext.isUnknown = false;
    }

    if (_context.hasOwnProperty("query")) {
        _context.ticketDetails.context.categoryContext.tempQuery = _context.query;
    }
    return;
}

Controller.prototype.process = function (state, _context, callback) {
    let _this = this;
    let context = _context.ticketDetails.context;
    this.setUnknown(_context);
    context.categoryContext.validationMessage = '';
    this.updateContext(_context, function () {
        _this.processCore('', state, true, _context, function (res) {
            _this.validator.setAnalyticData(context.categoryContext.currentState.state, '', null, context.categoryContext.currentState.count, _context, function () {
                callback(res);
            })
        });
    });
}

Controller.prototype.processCore = function (prefix, state, previousValueChk, _context, callback) {
    let context = _context.ticketDetails.context;
    let currentState = (this.contextManager.getRecentObj(_context) ? this.contextManager.getRecentObj(_context).state : this.contextManager.getBackupRecentObj(_context).state);
    var _this = this;
    if (context.categoryContext.isCNF.status && _context.hasOwnProperty("resolvedQuery") && (_context.resolvedQuery.trim().toUpperCase() == 'Y' || _context.resolvedQuery.trim().toUpperCase() == 'N')) {
        let confirmation = _context.resolvedQuery.trim().toUpperCase() == 'Y' ? "yes" : "no"
        _this.handleConfirmation(confirmation, _context, callback);
        return;
    }
    if (_context.hasOwnProperty("resolvedQuery") && _context.resolvedQuery.trim() == 'what next') {
        _this.handleBasedOnLastState('', currentState, _context, callback);
        return;
    }
    if (previousValueChk && _context.hasOwnProperty("resolvedQuery") && _context.email.includes("::guest:WHATSAPP") && _context.resolvedQuery.includes("*")) {
        this.validatePreviousHandler(_context, callback);
        return;
    }
    this.updateContext(_context, function () {
        _this.configController.process(state, _context, function (res, validateCallback) {
            _this.validator.validate(res, currentState, _context, validateCallback);
        }, function (res) {
            if (context.categoryContext.isCNF.status && context.categoryContext.isCNF.state == "L1_AGENT") {
                _this.L1SupportDecide(_context, callback);
                return;
            }
            if (context.categoryContext.isCNF.status && (_context.hasOwnProperty("confirmation") || _context.choice == "CONFIRMATION")) {
                let confirmation = (_context.hasOwnProperty("confirmation") ? _context.confirmation : _context.context.value);
                _this.handleConfirmation(confirmation, _context, callback);
                return;
            }
            if (_context.hasOwnProperty("confirmation") && (context.categoryContext.serialNoDecideQuestionTree != null) && context.categoryContext.Squestion != null) {
                let confirmation = (_context.hasOwnProperty("confirmation") ? _context.confirmation : _context.context.value)
                _this.serialNumberDiagnDecide(confirmation, _context, callback);
                return;
            }
            if (currentState == "COMPLETED" && (_context.hasOwnProperty("confirmation") || _context.choice == "CONFIRMATION")) {
                let confirmation = (_context.hasOwnProperty("confirmation") ? _context.confirmation : _context.context.value);
                _this.completeTicketConfirmation(confirmation, _context, callback);
                return;
            }
            if (currentState == "SERIAL_NO" && _context.hasOwnProperty("confirmation") && _context.hasOwnProperty("query")) {
                _this.isSerialNumberAvailable("", _context.query, currentState, _context, callback)
                return;
            }
            if (_context.hasOwnProperty("confirmation") || _context.choice == "CONFIRMATION") {
                _this.handlingUnknownConfirmations(_context, callback);
                return;
            }
            _this.createDataPacket(prefix, '', res, _context, callback);
        });
    });
}

//handle previous values
Controller.prototype.validatePreviousHandler = function (_context, callback) {
    var _this = this;
    this.validatePrevious.validatingPreviousValues(_context, function (res) {
        if (res.status) {
            _this.setPreviousValue(res, _context, function (result) {
                let prefix = _this.messageCreation.prefixMakerForChangeStates(res.changeState, res.value);
                _this.createDataPacketCore(prefix, '', false, result, _context, callback);
            })
        } else {
            _this.processCore('', "UNKNOWN_MESSAGE_HANDLER", false, res.context, callback);
        }
    });
}

Controller.prototype.setPreviousValue = function (result, _context, callback) {
    let _this = this;
    let resetStates = this.contextManager.getFullDependentStates(result.changeState, _context);
    this.resetDependsIntermediator(resetStates, _context.ticketDetails.context)
    this.configController.resetState(_context, resetStates, true, function (res) {
        if (result.changeState == 'ADDRESS') {
            _this.validator.setAddress(result.value, _context, result.currentState, function () {
                callback(res)
            });
            return;
        } else if (result.changeState == 'SERIAL_NO') {
            _this.validator.setSerialNumber(result.value, _context, result.changeState, function () {
                callback(res)
            });
            return;
        } else {
            _this.validator.setValues(result.value, result.changeState, _context, function () {
                callback(res)
            });
        }
    })
}

//handle Confirmation
Controller.prototype.handleConfirmation = function (confirmation, _context, callback) {
    var context = _context.ticketDetails.context;
    var currentState = (this.contextManager.getRecentObj(_context) ? this.contextManager.getRecentObj(_context).state : context.categoryContext.currentState.state);
    if (context.categoryContext.isCNF.status) {
        switch (context.categoryContext.isCNF.state) {
            case "MOBILE_NO":
                this.mobileNumberConfirmationDecide(confirmation, _context, callback);
                break;
            case "OPEN_TICKET":
                this.L1confirmation(confirmation, _context, callback);
                break;
            case "NAME":
                this.nameConfirmationDecide(confirmation, _context, callback);
                break;
            case "NAME_CNF":
                this.nameConfirmationDecide(confirmation, _context, callback);
                break;
            case "ADDRESS":
                this.addressConfirmationDecide(confirmation, _context, callback);
                break;
            case "ADDRESS_CNF":
                this.addressCnfDecide(confirmation, _context, callback);
                break;
            case "BUILDING_NO_CNF":
                this.buildingNoConfirmationDecide(confirmation, _context, callback);
                break;
            case "STREET_NAME_CNF":
                this.streetNameConfirmationDecide(confirmation, _context, callback);
                break;
            case "PINCODE_CNF":
                this.pincodeConfirmationDecide(confirmation, _context, callback);
                break;
            case "ENTITY_NAME":
                this.entityNameConfirmationDecide(confirmation, _context, callback);
                break;
            case "SERIAL_NO_CNF":
                this.serialNoDecide(confirmation, _context, callback);
                break;
            case "MOBILE_NUM_CNF":
                this.mobileNumberConfirmDecide(confirmation, _context, callback);
                break;
            case "CNF_TONERS":
                this.confirmTonerDecide(confirmation, _context, callback);
                break;
            case "CONFIRMATION":
                this.finalConfirmationDecide(confirmation, _context, callback);
                break;
            case "REGISTER_SUMMARY":
                this.L1register(confirmation, _context, callback);
                break;
            default:
                this.handleBasedOnLastState("", currentState, _context, callback);
        }
    }
}

Controller.prototype.handlingUnknownConfirmations = function (_context, callback) {
    let currentState = this.contextManager.getRecentObj(_context).state;
    this.smallTalkEventHandlerForDiffStates('', currentState, _context, callback);
}

Controller.prototype.streetNameConfirmationDecide = function (CNF, _context, callback) {
    var _this = this;
    let prefix = '';
    var context = _context.ticketDetails.context.categoryContext;
    let currentState = this.contextManager.getRecentObj(_context).state;
    var des = this.canonUtility.isConfirmationDecide(CNF);
    if (des.descision.toLowerCase() == "yes") {
        this.validator.setStreetName(context.AddressDetails.streetName, _context, currentState, function () { });
        this.validator.setAddress(this.canonUtility.addressFormation(context.AddressDetails), _context, currentState, function () {
            _this.configController.setCompleted(_context, ["STREET_NAME", "STREET_NAME_CNF"], false, function (res) {
                _this.createDataPacket(prefix, '', res, _context, callback);
            });
        });
        return;
    } else if (des.descision.toLowerCase() == "no") {
        this.configController.resetState(_context, ["STREET_NAME"], true, function (res) {
            _this.updateContext(_context, function () {
                _this.createDataPacket(prefix, '', res, _context, callback);
            });
        });
    } else
        this.handleBasedOnLastState(prefix, currentState, _context, callback);
}

Controller.prototype.pincodeConfirmationDecide = function (CNF, _context, callback) {
    var _this = this;
    let prefix = '';
    var context = _context.ticketDetails.context.categoryContext;
    let currentState = this.contextManager.getRecentObj(_context).state;
    var des = this.canonUtility.isConfirmationDecide(CNF);
    if (des.descision.toLowerCase() == "yes") {
        _this.validator.setValues(context.current_order.localityPincode, currentState, _context, function () {
            _this.configController.setCompleted(_context, ["LOCALITY_PINCODE", "PINCODE_CNF"], false, function (res) {
                _this.createDataPacket(prefix, '', res, _context, callback);
            });
        });
        return;
    } else if (des.descision.toLowerCase() == "no") {
        this.configController.resetState(_context, ["LOCALITY_PINCODE"], true, function (res) {
            _this.updateContext(_context, function () {
                _this.createDataPacket(prefix, '', res, _context, callback);
            });
        });
    } else
        this.handleBasedOnLastState(prefix, currentState, _context, callback);
}


Controller.prototype.finalConfirmationDecide = function (CNF, _context, callback) {
    var _this = this;
    let prefix = '';
    var context = _context.ticketDetails.context.categoryContext;
    let currentState = this.contextManager.getRecentObj(_context).state;
    var des = this.canonUtility.isConfirmationDecide(CNF);
    if (des.descision.toLowerCase() == "yes") {
        _this.configController.setCompleted(_context, ["CONFIRMATION"], false, function (res) {
            _this.createDataPacket(prefix, '', res, _context, callback);
        });
        return;
    } else if (des.descision.toLowerCase() == "no") {
        this.confirmationRejectHandler(_context, callback);
    } else
        this.handleBasedOnLastState(prefix, currentState, _context, callback);
}

// function to handle the diagnostic tree confirmations and to decide the serial number
Controller.prototype.serialNumberDiagnDecide = function (CNF, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    this.modelNoDecideQuestion.getNextDecisionQuestion(context.categoryContext.serialNoDecideQuestionTree, context.categoryContext.Squestion.questionId, CNF, function (question) {
        if (question != null && question.hasOwnProperty("isFound")) {
            _this.configController.setCompleted(_context, ["SERIAL_NO"], true, function (res) {
                _this.validator.setSerialNumber(question.question, _context, "SERIAL_NO", function () {
                    _this.createDataPacket("", '', res, _context, callback);
                });
            });
        } else {
            context.categoryContext.Squestion = question;
            _this.updateContext(_context, function () {
                _this.handleBasedOnLastState('', 'SERIAL_NO', _context, callback);
            });
        }
    });
}

Controller.prototype.serialNoDecide = function (CNF, _context, callback) {
    var _this = this;
    var prefix = "";
    var context = _context.ticketDetails.context;
    let currentState = this.contextManager.getRecentObj(_context).state;
    var des = this.canonUtility.isConfirmationDecide(CNF);
    var flag = _context.email.includes("::guest:TOLL_FREE:") ? true : false;
    if (des.descision.toLowerCase() == "yes") {
        this.validator.setSerialNumber(context.categoryContext.isCNF.value, _context, currentState, function (res) {
            _this.configController.setCompleted(_context, ["SERIAL_NO", "SERIAL_NO_CNF"], false, function (res) {
                _this.createDataPacket(prefix, '', res, _context, callback);
            });
        });
        return;
    } else if (des.descision.toLowerCase() == "no" && context.categoryContext.noMatchFlag) {
        this.configController.resetState(_context, ["SERIAL_NO"], true, function (res) {
            context.categoryContext.current_order.serialNumber = ''
            _this.updateContext(_context, function () {
                _this.createDataPacket(prefix, '', res, _context, callback);
            });
        });
    } else if (des.descision.toLowerCase() == "no" && !context.categoryContext.noMatchFlag) {
        if (context.categoryContext.categoryInitiateBot && flag && context.categoryContext.currentState.count >= 2) {
            context.categoryContext.current_order.serialNumber = '';
            _this.configController.setCompleted(_context, ["SERIAL_NO", "SERIAL_NO_CNF", "ENTITY_NAME", "MODEL_NUMBER", "WARRANTY", "CONTRACT", "METER_READING", "TONER_COLOR", "OPEN_TICKET", "PROBLEM_CATEGORY", "PROBLEM", "SYMPTOM", "LOCALITY_PINCODE", "LOCALITY", "NAME", "NAME_CNF", "ADDRESS", "PINCODE", "PINCODE_CNF", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF", "ADDRESS_CNF", "REGISTER_SUMMARY", "CONFIRMATION", "FEEDBACK"], false, function (res) {
                _this.createDataPacket(prefix, "", res, _context, callback);
            });
        } else if (context.categoryContext.currentState.count >= 2) {
            var msg = _context.email.includes("::guest:WHATSAPP") ? "Could not find the given serial number in our records." : "Could not find the given serial number in our records. We can't help you at this stage."
            context.categoryContext.reasonForL1 = 'GetInputError';
            _this.updateContext(_context, function () {
                _this.L1SupportDecideCoreWhatsapp(msg, "yes", "SERIAL_NO", _context, callback);
                return;
            })
        } else {
            this.configController.resetState(_context, ["SERIAL_NO"], true, function (res) {
                context.categoryContext.current_order.serialNumber = ''
                _this.updateContext(_context, function () {
                    _this.createDataPacket(prefix, '', res, _context, callback);
                });
            })
        }
    } else {
        this.handleBasedOnLastState(prefix, currentState, _context, callback);
    }
}

Controller.prototype.confirmTonerDecide = function (CNF, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    context.categoryContext.reasonForL1 = 'FlowWise';
    this.updateContext(_context, function () {
        if (CNF == "yes") {
            _this.configController.setCompleted(_context, ["OPEN_TICKET"], false, function (res) {
                _this.validator.setTonerColor((context.categoryContext.canBeRequestTonerColor).toString(), "OPEN_TICKET", _context, function () {
                    _this.createDataPacket('', '', res, _context, callback);
                })
            })
        } else {
            _this.L1SupportDecideCoreWhatsapp("For further details. ", "yes", "OPEN_TICKET", _context, callback);
        }
    })
}

//address confirmation for app
Controller.prototype.addressConfirmationDecide = function (CNF, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    var prefix = '';
    var des = this.canonUtility.isConfirmationDecide(CNF);
    var currentState = this.contextManager.getRecentObj(_context).state;
    if (des.descision.toLowerCase() == 'yes') {
        _this.validator.updateAddressCore(currentState, context.categoryContext.isCNF.value, _context, function () {
            _this.configController.setCompleted(_context, ["ADDRESS", "PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF", "ADDRESS_CNF"], false, function (res) {
                _this.createDataPacket(prefix, '', res, _context, callback);
            });
        });
    } else if (_context.email.includes("::guest:WHATSAPP") && des.descision.toLowerCase() == 'no') {
        context.categoryContext.addressFlag = true;
        this.handleBasedOnLastState(prefix, context.categoryContext.currentState.state, _context, callback);
        // _this.configController.setCompleted(_context, ["ADDRESS"], false, function (res) {
        //     _this.createDataPacket(prefix, '', res, _context, callback);
        // });
    } else {
        context.categoryContext.addressFlag = true;
        this.handleBasedOnLastState(prefix, context.categoryContext.currentState.state, _context, callback);
    }
}

Controller.prototype.addressCnfDecide = function (CNF, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    var prefix = '';
    var currentState = this.contextManager.getRecentObj(_context).state;
    var value = this.canonUtility.addressCnf(CNF);
    if (value == 'yes') {
        _this.validator.updateAddressCore(currentState, context.categoryContext.isCNF.value, _context, function () {
            _this.configController.setCompleted(_context, ["ADDRESS", "PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF", "ADDRESS_CNF"], false, function (res) {
                _this.createDataPacket(prefix, '', res, _context, callback);
            });
        });
    } else if (value == 'no') {
        context.categoryContext.addressFlag = true;
        if (_context.email.includes("::guest:WHATSAPP")) {
            _this.configController.resetState(_context, ["ADDRESS"], false, function (res) {
                _this.createDataPacket(prefix, '', res, _context, callback);
            });
        } else {
            _this.addressRejectHandler(_context, callback);
            return;
        }
    } else {
        this.handleBasedOnLastState(prefix, context.categoryContext.currentState.state, _context, callback);
    }
}

//Mobile number confirmation by the use will be handled
Controller.prototype.mobileNumberConfirmationDecide = function (CNF, _context, callback) {
    let _this = this;
    let context = _context.ticketDetails.context;
    let prefix = '';
    let currentState = this.contextManager.getRecentObj(_context).state;
    context.categoryContext.isMobileCNF = {
        status: false,
        value: ''
    }
    var des = this.canonUtility.isConfirmationDecide(CNF);
    this.updateContext(_context, function () {
        if ((des.descision.toLowerCase()).includes("yes")) {
            if ((context.categoryContext.current_order.address == '' || context.categoryContext.current_order.name == '') && context.categoryContext.productType != 'Multi-function Devices') {
                context.categoryContext.current_order.SMS_Flow_State = context.categoryContext.current_order.serialNumber == '' ? 'SERIAL_NO' : (context.categoryContext.current_order.name == '' ? 'NAME' : 'ADDRESS');
                _this.validator.setValues(context.categoryContext.isCNF.value, currentState, _context, function () {
                    _this.updateContext(_context, function () {
                        _this.callSMSService(_context, function () {
                            _this.configController.setCompleted(_context, ["MOBILE_NO", "MOBILE_NUM_CNF"], false, function (res) {
                                _this.createDataPacket(prefix, '', res, _context, callback);
                            });
                        });
                    });
                });
                return;
            }
            _this.validator.setValues(context.categoryContext.isCNF.value, currentState, _context, function () {
                _this.configController.setCompleted(_context, ["MOBILE_NO", "MOBILE_NUM_CNF"], false, function (res) {
                    _this.createDataPacket(prefix, '', res, _context, callback);
                });
            });
        } else {
            _this.handleBasedOnLastState(prefix, currentState, _context, callback);
        }
    });
}

// used to handle the l1 agent confirmation
Controller.prototype.L1confirmation = function (CNF, _context, callback) {
    let _this = this;
    let context = _context.ticketDetails.context;
    let prefix = '';
    var des = this.canonUtility.isConfirmationDecide(CNF);
    this.updateContext(_context, function () {
        if (des.descision.toLowerCase() == "yes") {
            _this.L1SupportDecideCoreWhatsapp("", "yes", "OPEN_TICKET", _context, callback);
            return;
        } else {
            _this.configController.setCompleted(_context, ["OPEN_TICKET", "PROBLEM", "CONTRACT", "PROBLEM_CATEGORY", "SYMPTOM", "METER_READING", "TONER_COLOR", "LOCALITY_PINCODE", "PINCODE_CNF", "LOCALITY", "NAME", "NAME_CNF", "MODEL_NUMBER", "ADDRESS", "PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF", "ADDRESS_CNF", "MOBILE_NO", "MOBILE_NUM_CNF", "REGISTER_SUMMARY", "CONFIRMATION", "FEEDBACK"], false, function (res) {
                _this.createDataPacket(prefix, "", res, _context, callback);
            });
        }
    });
}

Controller.prototype.L1register = function (CNF, _context, callback) {
    let _this = this;
    let context = _context.ticketDetails.context;
    let prefix = '';
    // let currentState = this.contextManager.getRecentObj(_context).state;
    // var des = this.canonUtility.isConfirmationDecide(CNF);
    this.updateContext(_context, function () {
        if (CNF == 'yes') {
            _this.L1SupportDecideCoreWhatsapp("", "yes", "REGISTER_SUMMARY", _context, callback);
            return;
        } else {
            context.categoryContext.current_order.isAlreadyRegistered = true;
            _this.configController.setCompleted(_context, ["REGISTER_SUMMARY"], false, function (res) {
                _this.createDataPacket(prefix, '', res, _context, callback);
            })

        }
    });
}

// Name confirmation will be handled
Controller.prototype.nameConfirmationDecide = function (CNF, _context, callback) {
    let _this = this;
    let context = _context.ticketDetails.context;
    let prefix = '';
    let currentState = this.contextManager.getRecentObj(_context).state;
    var des = this.canonUtility.isConfirmationDecide(CNF);
    this.updateContext(_context, function () {
        if (des.descision.toLowerCase() == "yes") {
            _this.validator.setValues(context.categoryContext.isCNF.value, currentState, _context, function () {
                _this.configController.setCompleted(_context, ["NAME", "NAME_CNF"], false, function (res) {
                    _this.createDataPacket(prefix, '', res, _context, callback);
                });
            });
        } else {
            context.categoryContext.nameFlag = true;
            _this.configController.resetState(_context, ["NAME"], true, function (res) {
                _this.updateContext(_context, function () {
                    _this.createDataPacket(prefix, '', res, _context, callback);
                });
            });
        }
    });
}

Controller.prototype.changeDetailDecide = function (CNF, _context, callback) {
    var _this = this;
    let context = _context.ticketDetails.context;
    let prefix = '';
    var des = this.canonUtility.isConfirmationDecide(CNF);
    if (des.descision.toLowerCase() == "yes") {
        this.configController.resetState(_context, context.categoryContext.isCNF.dependState, true, function (res) {
            _this.resetDependsIntermediator(context.categoryContext.isCNF.dependState, context);
            _this.updateContext(_context, function () {
                _this.createDataPacket(prefix, '', res, _context, callback);
            });
        });
    } else {
        this.handleBasedOnLastState(prefix, context.categoryContext.currentState.state, _context, callback);
    }
}

// handle the building number confirmation form the user.
Controller.prototype.buildingNoConfirmationDecide = function (CNF, _context, callback) {
    var _this = this;
    let prefix = '';
    var completeState = [];
    var des = this.canonUtility.isConfirmationDecide(CNF);
    if (des.descision.toLowerCase() == "no") {
        completeState.push("BUILDING_NO_CNF");
    }
    this.configController.setCompleted(_context, completeState, false, function (res) {
        _this.createDataPacket(prefix, '', res, _context, callback);
    });
}

// handle the mobile number confirmation from the user
Controller.prototype.mobileNumberConfirmDecide = function (CNF, _context, callback) {
    var _this = this;
    let prefix = '';
    var context = _context.ticketDetails.context.categoryContext;
    let currentState = this.contextManager.getRecentObj(_context).state;
    var des = this.canonUtility.isConfirmationDecide(CNF);
    if (des.descision.toLowerCase() == "yes") {
        context.current_order.SMS_Flow_State = context.current_order.serialNumber == '' ? 'SERIAL_NO' : (context.current_order.name == '' ? 'NAME' : 'ADDRESS');
        _this.updateContext(_context, function () {
            _this.callSMSService(_context, function () {
                _this.validator.setMobile(context.current_order.mobileNumber, _context, function () {
                    let completeState = ["MOBILE_NO", "MOBILE_NUM_CNF"];
                    _this.configController.setCompleted(_context, completeState, false, function (res) {
                        _this.updateContext(_context, function () {
                            _this.createDataPacket(prefix, '', res, _context, callback);
                        })
                    });
                });
            })
        })
        return;
    } else if (des.descision.toLowerCase() == "no") {
        this.configController.resetState(_context, ["MOBILE_NO"], true, function (res) {
            _this.updateContext(_context, function () {
                _this.createDataPacket(prefix, '', res, _context, callback);
            });
        });
    } else {
        this.handleBasedOnLastState(prefix, currentState, _context, callback);
    }
}

// handle the entity name confirmation made by the user
Controller.prototype.entityNameConfirmationDecide = function (CNF, _context, callback) {
    var _this = this;
    let prefix = '';
    var context = _context.ticketDetails.context.categoryContext;
    let currentState = this.contextManager.getRecentObj(_context).state;
    var des = this.canonUtility.isConfirmationDecide(CNF);
    if (des.descision.toLowerCase() == "yes") {
        this.validator.setValues(context.isCNF.value, currentState, _context, function () { });
        _this.configController.setCompleted(_context, ["ENTITY_NAME", "MODEL_NUMBER", "WARRANTY", "LOCALITY_PINCODE", "PINCODE_CNF", "LOCALITY", "NAME", "NAME_CNF", "ADDRESS", "PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF", "ADDRESS_CNF", "MOBILE_NO", "MOBILE_NUM_CNF", "REGISTER_SUMMARY"], false, function (res) {
            _this.createDataPacket(prefix, '', res, _context, callback);
        });
        return;
    } else if (des.descision.toLowerCase() == "no") {
        context.reasonForL1 = 'GetInputError';
        _this.updateContext(_context, function () {
            _this.L1SupportDecideCoreWhatsapp('', "yes", "ENTITY_NAME", _context, callback);
            return;
        })
    } else
        this.handleBasedOnLastState(prefix, currentState, _context, callback);
}

//Fulfill confirmation
Controller.prototype.completeTicketConfirmation = function (CNF, _context, callback) {
    var _this = this;
    let prefix = "";
    if (CNF == "yes") {
        this.assistanceService.categoryInitiateFulfillTicket(_context.email, _context.ticketDetails.ticketID, function () {
            _this.createConfirmationHZPacket(_context.ticketDetails.context.categoryContext, _context, false, false, (_context.email.includes("::guest:WHATSAPP") ? "::guest:WHATSAPP" : (_context.email.includes("::guest") ? "::guest" : false)), callback);
        });
    } else {
        this.handleBasedOnLastState(prefix, "COMPLETED", _context, callback);
    }
}

// Reset Dependent values
Controller.prototype.resetDepends = function (result, _context) {
    if (result.hasOwnProperty("metaData") && result.metaData && result.metaData.hasOwnProperty("depends")) {
        this.resetDependsIntermediator(result.metaData.depends, _context.ticketDetails.context);
        return;
    } else {
        return;
    }
}

Controller.prototype.resetDependsIntermediator = function (arr, context) {
    arr.forEach(element => {
        resetContextValues(element, context);
    });
    return;
}

function resetContextValues(state, context) {
    switch (state) {
        case "SERIAL_NO":
            context.categoryContext.current_order.serialNumber = '';
            context.categoryContext.current_order.serialNumberMatches = [];
            break;
        case "WARRANTY":
            context.categoryContext.current_order.warranty = '';
            break;
        case "CONTRACT":
            context.categoryContext.current_order.contract = '';
            break;
        case "ENTITY_NAME":
            context.categoryContext.current_order.entityName = '';
            break;
        case "MODEL_NO":
            context.categoryContext.current_order.modelNumber = '';
            context.categoryContext.current_order.modelName = '';
            context.categoryContext.current_order.modelNumberMatches = [];
            break;
        case "NAME":
            context.categoryContext.current_order.name = '';
            break;
        case "PROBLEM_CATEGORY":
            context.categoryContext.current_order.problemCategory = '';
            break;
        case "MOBILE_NO":
            context.categoryContext.current_order.mobileNumber = 0;
            break;
        case "LOCALITY_PINCODE":
            context.categoryContext.current_order.localityPincode = "";
            break;
        case "LOCALITY":
            context.categoryContext.current_order.localityCode = "";
            break;
        case "PROBLEM":
            context.categoryContext.current_order.problem = "";
            break;
        case "METER_READING":
            context.categoryContext.current_order.meterReading = 0;
            break;
        case "OPEN_TICKET":
            context.categoryContext.current_order.isAlreadyRegistered = false;
            context.categoryContext.current_order.openTicketStatus = '';
            break;
        case "PRODUCT_TYPE":
            context.categoryContext.current_order.productType = '';
            break;
        case "TONER_COLOR":
            context.categoryContext.current_order.tonerColor = '';
            break;
        case "ADDRESS":
            context.categoryContext.current_order.address = '';
            context.categoryContext.current_order.pincode = 0;
            context.categoryContext.current_order.doorNo = '';
            context.categoryContext.current_order.buildingNo = '';
            context.categoryContext.current_order.streetName = '';
            break;
        default:
            break;
    }
}

//Update the CurrentState and the repeat count
Controller.prototype.updateStateAndCount = function (_context, id) {
    var notIncludesStates = ["ASK_CONFIRMATION"];
    var context = _context.ticketDetails.context;
    if (notIncludesStates.includes(id)) {
        context.categoryContext.isAskConfirm = true;
    } else {
        context.categoryContext.isAskConfirm = false;
    }
    let ignoreStates = ["SERIAL_NO_CNF", "STREET_NAME_CNF", "NAME_CNF", "MOBILE_NUM_CNF", "PINCODE_CNF", "ADDRESS_CNF"]
    if (!ignoreStates.includes(id)) {
        if (context.categoryContext.currentState.state == id || notIncludesStates.includes(id)) {
            context.categoryContext.currentState.count = context.categoryContext.currentState.count + 1;
        } else {
            context.categoryContext.currentState.state = id;
            context.categoryContext.currentState.count = 1;
        }
        resetCNFTempState(context.categoryContext.cnfTempState);
    } else if (ignoreStates.includes(id)) {
        context.categoryContext.cnfTempState.state = id;
        context.categoryContext.cnfTempState.count++;
    }
    return;
}

function resetCNFTempState(cnfTempState) {
    cnfTempState.state = "";
    cnfTempState.count = 0;
}

Controller.prototype.updateModified = function (_context, result, callback) {
    this.updatePreviousValues(result, _context, callback);
}

Controller.prototype.updatePreviousValues = function (result, _context, callback) {
    callback(null)
}

function resetCNF(state, status, value, context) {
    context.categoryContext.isCNF = {
        state: state,
        status: status,
        value: value
    }
    return;
}

function resetChangeStates(status, context) {
    context.categoryContext.changeStatesWhatsapp = {
        state: [],
        status: status,
    }
    return;
}

Controller.prototype.createDataPacket = function (prefix, suffix, result, _context, callback) {
    this.createDataPacketCore(prefix, suffix, true, result, _context, callback);
}

// create data packet fucntion will call all the state handler functions and handle the confirmations
Controller.prototype.createDataPacketCore = function (prefix, suffix, updatestateCount, result, _context, callback) {
    var _this = this;
    let context = _context.ticketDetails.context;
    let id = result.ID;
    if (id != "ASK_CONFIRMATION") {
        this.resetDepends(result, _context);
    }
    resetCNF("", false, "", context);
    resetChangeStates(false, context)
    var whatNext = (_context.hasOwnProperty("resolvedQuery")) ? (_context.resolvedQuery.trim() != 'what next') : true;
    if (updatestateCount && id != 'ASK_CONFIRMATION' && (whatNext || id == 'FEEDBACK')) {
        this.updateStateAndCount(_context, id);
    }
    this.updateContext(_context, function () {
        _this.updateModified(_context, result, function () {
            if (id == "PRODUCT_TYPE") {
                _this.productTypeHandler(prefix, suffix, _context, callback);
            } else if (id == "SERIAL_NO") {
                _this.serialNumberHandler(prefix, _context, callback);
            } else if (id == "SERIAL_NO_CNF") {
                _this.serialNumberCNF(prefix, _context.ticketDetails.context.categoryContext.current_order.serialNumber, _context, callback);
            } else if (id == "ENTITY_NAME") {
                _this.entityNameHandler(prefix, _context, callback);
            } else if (id == "CONTRACT") {
                _this.contractHandler(prefix, _context, callback);
            } else if (id == "CATEGORY") {
                _this.categoryHandler(prefix, _context, callback);
            } else if (id == "MODEL_NUMBER") {
                _this.modelNumberHandler(prefix, _context, callback);
            } else if (id == "WARRANTY") {
                _this.warrantyHandler(prefix, _context, callback);
            } else if (id == "PROBLEM_CATEGORY") {
                _this.problemCategoryHandler(prefix, suffix, _context, callback)
            } else if (id == "PROBLEM") {
                _this.problemHandler(prefix, suffix, _context, callback);
            } else if (id == "LOCALITY_PINCODE") {
                _this.pincodeForLocalityHandler(prefix, _context, callback);
            } else if (id == "LOCALITY") {
                _this.localityHandler(prefix, _context, callback);
            } else if (id == "METER_READING") {
                _this.meterReadingHandler(prefix, suffix, _context, callback);
            } else if (id == "TONER_COLOR") {
                _this.tonerColorHandler(prefix, _context, callback);
            } else if (id == "OPEN_TICKET") {
                _this.openTicketHandler(prefix, _context, callback);
            } else if (id == "NAME") {
                _this.userNameHandler(prefix, _context, callback);
            } else if (id == "NAME_CNF") {
                _this.nameCNF(_context.ticketDetails.context.categoryContext.current_order.name, _context, callback);
            } else if (id == "ADDRESS") {
                _this.userAddressHandler(prefix, _context, callback);
            } else if (id == "PINCODE") {
                _this.pincodeHandler(prefix, _context, callback);
            } else if (id == "DOOR_NO") {
                _this.doorNoHandler(prefix, _context, callback);
            } else if (id == "BUILDING_NO_CNF") {
                _this.buildingNoCnfHandler(prefix, _context, callback);
            } else if (id == "STREET_NAME") {
                _this.streetNameHandler(prefix, _context, callback);
            } else if (id == "STREET_NAME_CNF") {
                _this.streetNameCNF(_context.ticketDetails.context.categoryContext.AddressDetails.streetName, _context, callback);
            } else if (id == "PINCODE_CNF") {
                _this.pincodeCNF(prefix, _context, callback);
            } else if (id == "ADDRESS_CNF") {
                _this.addressCnfHandler(prefix, _context, callback);
            } else if (id == "MOBILE_NO") {
                _this.mobileNumberHandler(prefix, _context, callback);
            } else if (id == "MOBILE_NUM_CNF") {
                _this.mobileNumCNF(prefix, _context.ticketDetails.context.categoryContext.current_order.mobileNumber, _context, callback);
            } else if (id == "CONFIRMATION") {
                _this.finalConfirmationHandler(prefix, '', _context, callback)
            } else if (id == "FEEDBACK") {
                _this.feedbackHandler(prefix, '', _context, callback);
            } else if (id == "REGISTER_SUMMARY") {
                _this.summaryHandler(prefix, _context, callback);
            } else if (id == "COMPLETED") {
                _this.completedHandling(prefix, _context, callback);
            } else if (id == "ASK_CONFIRMATION") {
                let state = result.state;
                if (result.hasOwnProperty("metaData") && result.metaData) {
                    state = result.metaData.state;
                }
                let resultText = "";
                if (result.type == "LOOP_CONFIRMATION") {
                    prefix = prefix == '' ? context.categoryContext.prefixFromVaidator : prefix;
                    resultText = (prefix != '' ? prefix : '') + "Do you have any more " + state.toLowerCase();
                }
                callback(dataPacketService.createTextPacket(resultText));
            }
        });
    });
}

function l1Count() {
    return 4;
}

Controller.prototype.finalConfirmationHandler = function (prefix, suffix, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context.categoryContext;
    context.isCNF = {
        state: "CONFIRMATION",
        status: true,
    }
    let tableObj = {};
    let cards = [];
    let sections = [];
    tableObj = this.tableObjCreate('', context);
    if (context.current_order.RequestId != "") {
        tableObj["Request Id"] = context.current_order.RequestId;
    }
    sections.push(this.createTable([], tableObj));
    cards.push(dataPacketService.createCardType1Packet("", sections, []));
    var voice = this.generateConfirmationVoice(context, _context);
    var text = this.randomSentences.randomsenForConfirmPacket();
    if (!_context.email.includes("::guest")) {
        voice = prefix + text
    }
    _this.updateContext(_context, function () {
        callback(dataPacketService.createHorizontalCardsType1Packet(voice, text, "", cards, [], []));
    })
}

// function to ask the serial numnber confirmations w.r.t different scenarios
Controller.prototype.serialNumberCNF = function (prefix, serialNo, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    var flag = _context.email.includes("::guest:TOLL_FREE:") ? true : false;
    var completeStates = ["SERIAL_NO_CNF", "ENTITY_NAME", "MODEL_NUMBER", "WARRANTY", "CONTRACT", "METER_READING", "TONER_COLOR", "OPEN_TICKET", "PROBLEM_CATEGORY", "PROBLEM", "SYMPTOM", "LOCALITY_PINCODE", "PINCODE_CNF", "LOCALITY", "NAME", "NAME_CNF", "ADDRESS", "PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF", "ADDRESS_CNF", "REGISTER_SUMMARY", "CONFIRMATION", "FEEDBACK"];
    context.categoryContext.isCNF = {
        state: "SERIAL_NO_CNF",
        status: true,
        value: serialNo
    }
    var count = context.categoryContext.cnfTempState.count;
    context.categoryContext.reasonForL1 = 'GetInputError';
    this.updateContext(_context, function () {
        if (count == l1Count() && !context.categoryContext.L1Flag) {
            context.categoryContext.L1Flag = false;
            if (context.categoryContext.categoryInitiateBot && flag) {
                context.categoryContext.current_order.serialNumber = ''
                context.categoryContext.current_order.SMS_Flow_State = 'SERIAL_NO';
                _this.configController.setCompleted(_context, completeStates, false, function (res) {
                    _this.createDataPacket(prefix, "", res, _context, callback);
                });
                return;
            } else {
                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "SERIAL_NO", _context, callback);
                // _this.L1SupportConfirmation(_context, callback);
                return;
            }
        } else if (count % (l1Count() * 2) == 0 && count != 0) {
            if (context.categoryContext.categoryInitiateBot && flag) {
                context.categoryContext.current_order.serialNumber = ''
                context.categoryContext.current_order.SMS_Flow_State = 'SERIAL_NO';
                _this.configController.setCompleted(_context, completeStates, false, function (res) {
                    _this.createDataPacket(prefix, "", res, _context, callback);
                });
                return;
            } else {
                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "SERIAL_NO", _context, callback);
                return;
            }
        }
        msg = _this.randomSentences.randomSenForConfirm(_context.email, 'serial number', serialNo)
        callback(dataPacketService.createTextPacket(msg));
    });
}

Controller.prototype.feedbackHandler = function (prefix, suffix, _context, callback) {
    var sym = (_context.email.includes("::guest:WHATSAPP:")) ? '*' : '';
    var _this = this;
    var context = _context.ticketDetails.context.categoryContext;
    var count = context.currentState.count;
    var textPrefix = ((_context.email.includes("::guest:TOLL_FREE")) && count > 1) ? "__NUMBER__1::" : '';
    var message = '',
        text = '';
    var newTicketNo = ''
    var serviceEdgeProducts = ["Printer", "Scanner"];
    var CMPProducts = ["Multi-function Devices"];
    context.reasonForL1 = 'FlowWise';
    this.updateContext(_context, function () {
        _this.validator.setAnalyticData("FULFILL", '', null, count, _context, function () {
            if (count == 1) {
                message = prefix + ' Your ' + sym + 'feedback' + sym + ' will help us get better. Please rate our service from ' + sym + '0 to 5' + sym + '. 0 for not satisfied and 5 for excellent. Please give your rating.';
            } else if (count == 2) {
                message = prefix + 'Will you please ' + sym + 'rate our service from 0 to 5' + sym + '. Press 0 for not satisfied and 5 for excellent. Please type out your rating.';
            } else {
                context.current_order.rating = 'NA';
                _this.configController.setCompleted(_context, ["FEEDBACK"], false, function (res) {
                    _this.createDataPacket(prefix, '', res, _context, callback);
                });
                return;
            }
            if (count == 1 && !context.current_order.isAlreadyRegistered && context.categoryInitiateBot && context.current_order.serialNumber != "" && (((context.current_order.name != '' && (serviceEdgeProducts.includes(context.current_order.productType))) || (context.current_order.name == '' && (CMPProducts.includes(context.current_order.productType)))) && ((context.current_order.address != '' && (serviceEdgeProducts.includes(context.current_order.productType))) || (context.current_order.address == '' && (CMPProducts.includes(context.current_order.productType)))))) {
                _this.completeRegisterDecide(context.current_order, _context, function (res) {
                    if ((context.current_order.productType == 'Multi-function Devices') && !context.summaryFlag) {
                        if (res.status) {
                            if (res.res.status) {
                                _this.validator.setAnalyticData("REFERENCE", '', null, count, _context, function () {
                                });
                                newTicketNo = res.res.hasOwnProperty("newTicketNo") ? res.res.newTicketNo : ''
                                context.current_order.RequestId = newTicketNo;
                            } else {
                                context.summaryFlag = true;
                                context.resultCode = res.res.resultCode;
                                context.current_order.isAlreadyRegistered = true;
                                if (res.res.resultCode == 'alreadyOpenCall') {
                                    context.current_order.openTicketStatus = true;
                                    existingTicketNumber = (res.res.hasOwnProperty("existingTicketNumber") && context.current_order.category == 'Register Complaint') ? res.res.existingTicketNumber : ''
                                    context.current_order.RequestId = existingTicketNumber;
                                    context.current_order.registeredClrs = (res.res.hasOwnProperty("openTonerCallDetails") && context.current_order.category == 'Toner Booking') ? getclr(uniqueObjects(res.res.openTonerCallDetails)).toString().split(',').join(', ') : ''
                                }
                                _this.updateContext(_context, function () {
                                    _this.configController.resetState(_context, ['REGISTER_SUMMARY'], true, function (res) {
                                        _this.createDataPacket("", '', res, _context, callback);
                                    });
                                })
                                return;
                            }
                        } else {
                            _this.L1SupportDecideCoreWhatsapp("Could not register the complaint.", "yes", "FEEDBACK", _context, callback);
                            return;
                        }
                        _this.updateContext(_context, function () {
                            var requstid = _context.email.includes("::guest:WHATSAPP:") ? "*" + context.current_order.RequestId + "*" : (_context.email.includes("::guest:TOLL_FREE") ? _this.canonUtility.mobilevoice(context.current_order.RequestId, _context.email) : context.current_order.RequestId);
                            var prefix1 = _this.messageCreation.voiceCreationForCompletion(context.current_order, context, _context.email, requstid)
                            text = prefix1 + message;
                            callback(dataPacketService.createTextPacket(textPrefix + text));
                        });
                    } else if ((context.current_order.productType == 'Printer' || context.current_order.productType == 'Scanner') && !context.summaryFlag) {
                        if (res.status) {
                            response = _this.canonUtility.validateReferenceNumber(res.message);
                            if (response.status) {
                                _this.validator.setAnalyticData("REFERENCE", '', null, count, _context, function () {
                                    context.current_order.RequestId = response.refNo;
                                    var requstid = _context.email.includes("::guest:WHATSAPP:") ? "*" + context.current_order.RequestId + "*" : (_context.email.includes("::guest:TOLL_FREE") ? _this.canonUtility.mobilevoice(context.current_order.RequestId, _context.email) : context.current_order.RequestId);
                                    _this.updateContext(_context, function () {
                                        var prefix2 = _this.messageCreation.voiceCreationForCompletion(context.current_order, context, _context.email, requstid)
                                        text = prefix2 + message;
                                        callback(dataPacketService.createTextPacket(textPrefix + text));
                                    });
                                });
                                return;
                            } else {
                                _this.L1SupportDecideCoreWhatsapp(res.message + ".", "yes", "FEEDBACK", _context, callback);
                            }
                        } else {
                            _this.L1SupportDecideCoreWhatsapp("Could not register the complaint.", "yes", "FEEDBACK", _context, callback);
                        }
                    }
                });
                return;
            } else if (count == 1) {
                var requstid = _context.email.includes("::guest:WHATSAPP:") ? "*" + context.current_order.RequestId + "*" : (_context.email.includes("::guest:TOLL_FREE") ? _this.canonUtility.mobilevoice(context.current_order.RequestId, _context.email) : context.current_order.RequestId);
                var prefix3 = _this.messageCreation.voiceCreationForCompletion(context.current_order, context, _context.email, requstid)
                text = prefix3 + message;
            }
            if (count >= 2) {
                text = message
            }
            _this.updateContext(_context, function () {
                callback(dataPacketService.createTextPacket(textPrefix + text));
            })
        })
    })
}

// function to ask the street name confirmation
Controller.prototype.streetNameCNF = function (streetName, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    if (_context.email.includes("::guest:WHATSAPP:")) {
        this.configController.setCompleted(_context, ["STREET_NAME_CNF"], false, function (res) {
            _this.createDataPacket('', '', res, _context, callback);
        });
        return;
    }
    context.categoryContext.isCNF = {
        state: "STREET_NAME_CNF",
        status: true,
        value: streetName
    }
    var count = context.categoryContext.cnfTempState.count;
    context.categoryContext.reasonForL1 = 'GetInputError';
    this.updateContext(_context, function () {
        if (count == l1Count()) {
            _this.L1SupportConfirmation(_context, callback);
            return;
        } else if (count % (l1Count() * 2) == 0 && count != 0) {
            _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "STREET_NAME", _context, callback);
            return;
        }
        var msg = _this.randomSentences.randomSenForConfirm(_context.email, 'street name', _this.utility.titleCase(streetName));
        callback(dataPacketService.createTextPacket(msg));
    });
}

// fucntion used to ask the mobile number confirmation
Controller.prototype.mobileNumCNF = function (prefix, mobileNum, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    var prefix_yes_no = "__REFINE_INPUT__GENERIC_YES_NO::";
    prefix_yes_no = _context.email.includes("::guest:TOLL_FREE:") ? prefix_yes_no : '';
    if (!_context.email.includes("::guest:TOLL_FREE:") || ((!context.categoryContext.categoryInitiateBot || context.categoryContext.current_order.serialNumber != '') && (context.categoryContext.current_order.name != '' && context.categoryContext.current_order.address != ''))) {
        this.configController.setCompleted(_context, ["MOBILE_NUM_CNF"], false, function (res) {
            _this.createDataPacket(prefix, '', res, _context, callback);
        });
        return;
    }
    context.categoryContext.isCNF = {
        state: "MOBILE_NUM_CNF",
        status: true,
        value: mobileNum
    }
    var msg = prefix_yes_no + this.randomSentences.randomSenForConfirm(_context.email, 'mobile number', mobileNum);
    this.updateContext(_context, function () {
        callback(dataPacketService.createTextPacket(msg));
    });
}

// fucntion used to ask the name confirmation
Controller.prototype.nameCNF = function (name, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    var prefix_yes_no = "__REFINE_INPUT__GENERIC_YES_NO::";
    prefix_yes_no = _context.email.includes("::guest:TOLL_FREE") ? prefix_yes_no : ''
    context.categoryContext.isCNF = {
        state: "NAME_CNF",
        status: true,
        value: name
    }
    var yesNoMsgPrefix = context.categoryContext.yesnoFlag ? 'I am sorry, I am not able to understand please reply with a yes or no. ' : '';
    var count = context.categoryContext.cnfTempState.count;
    context.categoryContext.reasonForL1 = 'GetInputError'
    this.updateContext(_context, function () {
        if (count == l1Count() && !context.categoryContext.L1Flag) {
            context.categoryContext.L1Flag = false
            if (_context.email.includes("::guest:WHATSAPP")) {
                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "NAME_CNF", _context, callback);
            } else {
                _this.L1SupportConfirmation(_context, callback);
            }
            // _this.L1SupportConfirmation(_context, callback);
            return;
        } else if (count % (l1Count() * 2) == 0 && count != 0) {
            _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "NAME_CNF", _context, callback);
            return;
        }
        var msg = prefix_yes_no + yesNoMsgPrefix + _this.randomSentences.randomSenForConfirm(_context.email, 'name', _this.utility.titleCase(name));
        callback(dataPacketService.createTextPacket(msg));
    });
}

Controller.prototype.pincodeCNF = function (prefix, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    context.categoryContext.isCNF = {
        state: "PINCODE_CNF",
        status: true,
    }
    var count = context.categoryContext.cnfTempState.count;
    context.categoryContext.reasonForL1 = 'GetInputError';

    this.updateContext(_context, function () {
        if (count == l1Count() && !context.categoryContext.L1Flag) {
            context.categoryContext.L1Flag = false;
            _this.L1SupportConfirmation(_context, callback);
            return;
        } else if (count % (l1Count() * 2) == 0 && count != 0) {
            _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "PINCODE_CNF", _context, callback);
            return;
        }
        var sections = [];
        var msg = _this.randomSentences.randomSenForConfirm(_context.email, 'pincode', context.categoryContext.current_order.localityPincode);
        var voice = (/^\d+$/.test(msg.split(".")[0])) ? (msg.split(".")[0].split("").join(" ") + "." + msg.split(".")[1]) : msg;
        if (_context.email.includes("::guest:TOLL_FREE")) {
            let pincode = pincodeSeperator(voice);
            voice = voice.replace(pincode, pincode.split("").join(" "));
        }
        //callback(dataPacketService.createTextPacket(msg));
        sections.push(dataPacketService.createTextPacket(msg))
        callback(dataPacketService.createCardType1Packet(voice, sections, []))
    });
}

function pincodeSeperator(str) {
    return str.match(/\d+/g)[0];
}

// ASk for the product type from the user
Controller.prototype.productTypeHandler = function (prefix, suffix, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context.categoryContext;
    var prefix1 = "__REFINE_INPUT__CANON_DEVICE_TYPE::" + prefix;
    prefix1 = _context.email.includes("::guest:TOLL_FREE") ? prefix1 : prefix;
    var count = context.currentState.count;
    var options = context.isCMPEnabled ? ["Printer", "Scanner", "Multi-function Devices"] : ["Printer", "Scanner"];
    var message = this.randomSentences.randomSenForProduct(_context.email, options);
    var voice = this.messageCreation.voiceCreationForStates(_context.email, message, options, '');
    context.reasonForL1 = 'GetInputError';
    if ((count >= 2 && count != 0) && _context.email.includes("::guest:TOLL_FREE")) {
        prefix1 = ""
        voice = _this.messageCreation.voiceCreationForCategOptionsCall(prefix, message, options, "PRODUCT_TYPE");
    }
    this.updateContext(_context, function () {
        if (count == (l1Count())) {
            if (_context.email.includes("::guest:WHATSAPP")) {
                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "PRODUCT_TYPE", _context, callback);
            } else {
                _this.L1SupportConfirmation(_context, callback);
            }
            return;
        } else if (count % 5 == 0 && count != 0) {
            _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "PRODUCT_TYPE", _context, callback);
            return;
        } else {
            _this.createSimpleCardType1(prefix1 + suffix + voice, prefix1 + suffix + message, 'PRODUCT_TYPE', options, callback);
        }
    })
}

// Serial number gets handled
Controller.prototype.serialNumberHandler = function (prefix, _context, callback) {
    let context = _context.ticketDetails.context;
    var productType = context.categoryContext.current_order.productType;
    var prefix1 = "__REFINE_INPUT__CANON_SERIAL_NUMBER--" + this.canonUtility.productChange(productType) + "::";
    prefix1 = _context.email.includes("::guest:TOLL_FREE:") ? prefix1 + prefix : prefix;
    var _this = this;
    var flag = _context.email.includes("::guest:TOLL_FREE:") ? true : false;
    var completeStates = ["SERIAL_NO", "SERIAL_NO_CNF", "ENTITY_NAME", "MODEL_NUMBER", "WARRANTY", "CONTRACT", "METER_READING", "TONER_COLOR", "OPEN_TICKET", "PROBLEM_CATEGORY", "PROBLEM", "SYMPTOM", "LOCALITY_PINCODE", "PINCODE_CNF", "LOCALITY", "NAME", "NAME_CNF", "ADDRESS", "PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF", "ADDRESS_CNF", "REGISTER_SUMMARY", "CONFIRMATION", "FEEDBACK"];
    var message = _this.randomSentences.randomSenForSerial(_context.email, context.categoryContext.current_order.productType, context.categoryContext.currentState.count);
    context.categoryContext.reasonForL1 = 'GetInputError';
    this.updateContext(_context, function () {
        if (context.categoryContext.current_order.tempSerialnumberFlag) {
            callback(dataPacketService.createTextPacket("Please tell the last digit of your serial number?"));
        }
        else if (context.categoryContext.Squestion != null) {
            context.categoryContext.Squestion.question = _this.canonUtility.spaceBetweenNumberInSerialques(context.categoryContext.Squestion.question);
            _this.updateContext(_context, function () {
                callback(dataPacketService.createTextPacket(context.categoryContext.Squestion.question));
            })
        } else if (context.categoryContext.validateSerial && context.categoryContext.currentState.count > 2) {
            if (context.categoryContext.categoryInitiateBot && flag) {
                context.categoryContext.current_order.SMS_Flow_State = 'SERIAL_NO';
                _this.configController.setCompleted(_context, completeStates, false, function (res) {
                    _this.createDataPacket(prefix, "", res, _context, callback);
                });
            } else {
                var msg = _context.email.includes("::guest:WHATSAPP") ? "Could not find the given serial number in our records." : "Could not find the given serial number in our records. We can't help you at this stage.";
                _this.L1SupportDecideCoreWhatsapp(msg, "yes", "SERIAL_NO", _context, callback);
            }
        } else if (context.categoryContext.serverBusy) {
            _this.sendMail(_context, function (res) {
                var msg = _context.email.includes("::guest:WHATSAPP") ? 'Canon server is busy currently.' : 'Canon server is busy currently. Please hold the line while we transfer you to our customer care team.'
                _this.L1SupportDecideCoreWhatsapp(msg, "yes", "SERIAL_NO", _context, callback);
            });
        } else if (context.categoryContext.currentState.count == l1Count()) {
            if (context.categoryContext.categoryInitiateBot && flag) {
                context.categoryContext.current_order.SMS_Flow_State = 'SERIAL_NO';
                _this.configController.setCompleted(_context, completeStates, false, function (res) {
                    _this.createDataPacket(prefix, "", res, _context, callback);
                });
            } else {
                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "SERIAL_NO", _context, callback);
                // _this.L1SupportConfirmation(_context, callback);
                return;
            }
        } else if (context.categoryContext.currentState.count % (l1Count() * 2) == 0 && context.categoryContext.currentState.count != 0) {
            if (context.categoryContext.categoryInitiateBot && flag) {
                context.categoryContext.current_order.SMS_Flow_State = 'SERIAL_NO';
                _this.configController.setCompleted(_context, completeStates, false, function (res) {
                    _this.createDataPacket(prefix, "", res, _context, callback);
                });
            } else {
                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "SERIAL_NO", _context, callback);
                return;
            }
        } else {
            callback(dataPacketService.createTextPacket(prefix1 + message));
        }
    });
}

Controller.prototype.sendMail = function (_context, callback) {
    this.mailer.sendMailerWithAttachment("jubiyarjoy@gmail.com", "Canon Service Team_" + _context.ticketDetails.ticketID, 'Hello Team, \n\nCanon API is not giving response.\n\nRegards\nCanon Service Team.', '', '', function (res) {
        callback(true);
    });
}



// contorl the flow based on the selected category
Controller.prototype.flowDecisionTaker = function (_context, callback) {
    var context = _context.ticketDetails.context;
    var tonerRequest = ["METER_READING", "TONER_COLOR"];
    var complaintRegister = ["PROBLEM_CATEGORY", "PROBLEM", "SYMPTOM"];
    var needToComplete = [];
    needToComplete = (context.categoryContext.current_order.category == "Register Complaint" ? tonerRequest : complaintRegister);
    this.configController.setCompleted(_context, needToComplete, false, callback);
}

/*welcome Handler*/
Controller.prototype.welcomeMessageHandler = function (_context, callback) {
    let _this = this;
    let context = _context.ticketDetails.context;
    let message = '',
        greetingText = '';
    var prefix1 = "__REFINE_INPUT__CANON_DEVICE_TYPE::";
    prefix1 = _context.email.includes("::guest:TOLL_FREE") ? prefix1 : '';
    var prefixWhat = _context.email.includes("::guest:WHATSAPP") ? '<nextmessage>' : '';
    var options = context.categoryContext.isCMPEnabled ? ["Printer", "Scanner", "Multi-function Devices"] : ["Printer", "Scanner"];
    var msg = prefixWhat + this.randomSentences.randomSenForProduct(_context.email, options);
    var voice = "";
    this.dbManager.getUser(_context.email, function (userInfo) {
        context.categoryContext.userInfo = userInfo;
        context.categoryContext.current_order.ticketId = _context.ticketDetails.ticketID;
        _this.complaintRegister(_context.ticketDetails.ticketID, context.categoryContext.current_order, _context, function (res) {
            _this.complaintService.addAnalyticData(_context, _context.ticketDetails.ticketID, function () {
                _this.validator.setAnalyticData(null, null, userInfo, null, _context, function () {
                    context.categoryContext.current_order.mailId = _context.email.split("@@")[0];
                    _this.updateContext(_context, function () {
                        var sym = (_context.email.includes("::guest:WHATSAPP:")) ? '*' : '';
                        var value = _context.email.includes("::guest:TOLL_FREE_BOT:") && context.categoryContext.categoryInitiateBot;
                        if (value) {
                            _this.getDetails(_context, function (res) {
                                var name = _context.ticketDetails.context.categoryContext.current_order.name;
                                greetingText = _this.randomSentences.randomSenForWelcome() + _this.utility.titleCase(name) + ", ";
                                voice = (greetingText != '' ? greetingText : '') + "Welcome to Canon customer service. I have received your SMS and got the details from that. I would be needing some more details. Requesting your patience to give us the details and speak after the beep sound. "
                                _this.createDataPacket(voice, "", res, _context, callback);
                            });
                        } else {
                            if (userInfo) {
                                greetingText = _this.randomSentences.randomSenForWelcome() + sym + _this.utility.titleCase(userInfo.firstName) + sym + ", "
                            }
                            message = (greetingText != "" ? greetingText : "") + "Welcome to " + sym + "Canon customer service" + sym + ". ";
                            if (_context.email.includes("::guest:TOLL_FREE:")) {
                                voice = message + "I would be needing some details to begin with. Requesting your patience to give us the details and speak after the beep sound. " +
                                    _this.messageCreation.voiceCreationForStates(_context.email, msg, options, '');
                            } else if (_context.email.includes("::guest:WHATSAPP")) {
                                voice = message + "I am your *Mitra*, an AI powered chatbot. I will certainly help you on your query." + "\n\nI’ll ask you some questions & log your service request based on your responses. At any point of time if you wish to make corrections to any of your responses, simply type *Make changes* or *change <field>* for example *change address* or *change pincode*.\n\n❗ This WhatsApp solution is for *registering service request* for your *Canon Multi-function Devices/ Printers & Scanners* only." + _this.messageCreation.voiceCreationForStates(_context.email, msg, options, '');
                            } else {
                                voice = message + _this.messageCreation.voiceCreationForStates(_context.email, msg, options, '');
                            }
                            _this.createSimpleCardType1(prefix1 + voice, prefix1 + message + msg, "PRODUCT_TYPE", options, callback)
                        }
                    })
                });
            });
        });
    });
}

// used to get the detials from the API
Controller.prototype.getDetails = function (_context, callback) {
    var mobNum = _context.email.split('@@')[0].split(":")[(_context.email.split('@@')[0].split(":").length) - 1].split("_")[0];
    var reqid = _context.email.split('@@')[0].split("_")[(_context.email.split('@@')[0].split("_").length) - 1];
    var context = _context.ticketDetails.context.categoryContext;
    var _this = this;
    var completeStates = [];
    this.smsService.getDetailsFromSMS(mobNum, reqid, function (res) {
        if (res && res.status) {
            if (res.data.hasOwnProperty("smsMessageData") && res.data.smsMessageData.ticket_id != '') {
                context.current_order.oldTicketID = res.data.smsMessageData.ticket_id;
            }
            if (res.data.hasOwnProperty("reqId") && res.data.reqId != '') {
                context.current_order.reqIdAnalysis = res.data.reqId;
            }
            let count = 0,
                completed = 0;
            if (res.data.hasOwnProperty("productType") && res.data.productType != '') {
                count++;
                _this.validator.setValues(res.data.productType, "PRODUCT_TYPE", _context, function () {
                    completed++;
                    completeStates.push("PRODUCT_TYPE");
                    checkingForcomplete(count, completed);
                });
            }
            if (res.data.hasOwnProperty("category") && res.data.category != '') {
                count++;
                _this.validator.setValues(res.data.category, "CATEGORY", _context, function () {
                    completed++;
                    completeStates.push("CATEGORY");
                    checkingForcomplete(count, completed);
                })
            }
            if (res.data.hasOwnProperty("phone") && res.data.phone != 0) {
                count++;
                _this.validator.setValues(res.data.phone, "MOBILE_NO", _context, function () {
                    completed++;
                    completeStates.push("MOBILE_NO", "MOBILE_NUM_CNF");
                    checkingForcomplete(count, completed);
                })
            }
            checkingForcomplete(count, completed);

            function checkingForcomplete(count, completed) {
                if (count == completed) {
                    _this.updateDetailsFromSMS(res.data.smsMessageParsed, context.current_order.productType, completeStates, _context, callback);
                }
            }
            return;
        }
    })
}

function getSMSvalues(productType, str) {
    let isNAA = ((productType == "Printer" || productType == "Scanner") ? true : false);
    let outObj = {}
    if (str.includes("#")) {
        let arr = str.split("#");
        outObj["Serial Number"] = arr[0];
        if (isNAA) {
            outObj["Contact Name"] = arr[1];
            outObj["Address"] = arr[2];
        }
    } else if (str.length <= 15 && str.length != 0) {
        outObj["Serial Number"] = str;
    }
    return outObj;
}

// Used to update the detials in the context which we get from the message send by the user
Controller.prototype.updateDetailsFromSMS = function (obj, productType, completeStates, _context, callback) {
    var _this = this;
    let count = 0,
        complete = 0;
    count++;
    //if (obj.hasOwnProperty("SerialNumber")) {
    _this.validator.setSerialNumber(obj['SerialNumber'].toUpperCase(), _context, "SERIAL_NO", function () {
        complete++;
        completeStates.push("SERIAL_NO", "SERIAL_NO_CNF");
        completeSMSDataInit(count, complete);
    });
    //}
    if (productType == 'Printer' || productType == 'Scanner') {
        if (obj.hasOwnProperty("ContactName")) {
            var details = this.canonUtility.findName(obj['ContactName'], _context.email);
            if (details.status) {
                count++;
                _this.validator.setValues(details.value, "NAME", _context, function () {
                    complete++;
                    completeStates.push("NAME", "NAME_CNF");
                    completeSMSDataInit(count, complete);
                })
            }
        }
        count++;
        if (obj.hasOwnProperty("Address")) {
            _this.validator.setAddress(obj['Address'], _context, "ADDRESS", function () {
                complete++;
                completeStates.push("ADDRESS", "PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF", "ADDRESS_CNF");
                completeSMSDataInit(count, complete);
            })
        }
    }
    completeSMSDataInit(count, complete);

    function completeSMSDataInit(count, complete) {
        if (count == complete) {
            _this.completeSMSData(completeStates, _context, callback);
        }
    }
}

Controller.prototype.getInsightEngineUrlCMP = function () {
    var config = this.config.getCategoryConfig("canonCategory");
    var source = "isCMPEnabled"
    if (!config.hasOwnProperty(source)) {
        return "";
    }
    return config[source];
}

Controller.prototype.completeSMSData = function (completeStates, _context, callback) {
    var _this = this;
    _this.updateContext(_context, function () {
        _this.configController.setCompleted(_context, completeStates, false, function (res) {
            callback(res)
        })
    })
}

Controller.prototype.getInsightEngineUrl = function () {
    var config = this.config.getCategoryConfig("canonCategory");
    var source = "botSMSProcess"
    if (!config.hasOwnProperty(source)) {
        return "";
    }
    return config[source];
}

// Ask the user to select the category in case of production printer and copier
Controller.prototype.categoryHandler = function (prefix, _context, callback) {
    var _this = this;
    var message = this.randomSentences.randomSenForCateg(_context.email),
        voice = "";
    var context = _context.ticketDetails.context.categoryContext;
    var count = context.currentState.count;
    var prefix1 = "__REFINE_INPUT__CANON_CATEGORY::";
    prefix1 = _context.email.includes("::guest:TOLL_FREE") ? prefix1 + prefix : prefix;
    var productType = context.current_order.productType;
    context.reasonForL1 = 'GetInputError';
    this.updateContext(_context, function () {
        if (productType == 'Printer' || productType == 'Scanner') {
            _this.configController.setCompleted(_context, ["CATEGORY"], false, function (res) {
                _this.validator.setAnalyticData("CATEGORY", '', null, 1, _context, function () {
                    context.current_order.category = 'Register Complaint'
                    _this.createDataPacket(prefix, '', res, _context, callback);
                })
            })
        } else {
            var options = ["Toner Booking", "Register Complaint"];
            voice = _this.messageCreation.voiceCreationForStates(_context.email, message, options, '');
            if (count == l1Count()) {
                if (_context.email.includes("::guest:WHATSAPP")) {
                    _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "CATEGORY", _context, callback);
                } else {
                    _this.L1SupportConfirmation(_context, callback);
                }
                return;
            } else if (count % (l1Count() * 2) == 0 && count != 0) {
                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "CATEGORY", _context, callback);
                return;
            } else if (count > 2 && _context.email.includes("::guest:TOLL_FREE")) {
                voice = _this.messageCreation.voiceCreationForCategOptionsCall('', message, options, "CATEGORY");
                prefix1 = "";
            }
            _this.createSimpleCardType1(prefix1 + voice, prefix1 + message, "CATEGORY", options, callback);
        }
    })
}

//  function to check whether open tickets are available or not for the given serial number
Controller.prototype.openTicketHandler = function (prefix, _context, callback) {
    var context = _context.ticketDetails.context;
    var _this = this;
    let reqstColors = []
    var tonerColor = [];
    var uniqueClr = '';
    var noTranslateSym1 = _context.email.includes("::guest:TOLL_FREE") ? "<notranslate>" : '';
    var noTranslateSym2 = _context.email.includes("::guest:TOLL_FREE") ? "</notranslate>" : '';
    var noTranslate1 = _context.email.includes("::guest:WHATSAPP") ? "<notranslate>" : '';
    var noTranslate2 = _context.email.includes("::guest:WHATSAPP") ? "</notranslate>" : '';
    let currentState = (this.contextManager.getRecentObj(_context) ? this.contextManager.getRecentObj(_context).state : this.contextManager.getBackupRecentObj(_context).state);
    var sym = _context.email.includes("::guest:WHATSAPP") ? '*' : '';
    var sym1 = _context.email.includes("::guest:TOLL_FREE") ? '.' : '';
    var product = context.categoryContext.current_order.productType;
    var category = context.categoryContext.current_order.category;
    var categoryType = category == 'Toner Booking' ? 'toner' : 'service';
    context.categoryContext.reasonForL1 = 'FlowWise';
    this.updateContext(_context, function () { });
    if (product == 'Multi-function Devices') {
        _this.customerDetails.validateSerialNumberProductionCopier(context.categoryContext.current_order.serialNumber, categoryType, function (result) {
            if (result.status) {
                if (category == 'Toner Booking') {
                    if (result.res.resultCode == 'alreadyOpenCall') {
                        if (result.res.openTonerCallDetails.length == 1) {
                            tonerColor = result.res.openTonerCallDetails[0].tonerColor;
                            reqstColors = differenceFromArray(context.categoryContext.userSpecifiedToners, tonerColor);
                        } else {
                            tonerColor = getclr(uniqueObjects(result.res.openTonerCallDetails));
                            reqstColors = differenceFromArray(context.categoryContext.userSpecifiedToners, tonerColor);
                        }
                        if (reqstColors.length > 0) {
                            let canBeBookColors = reqstColors.toString().split(",").join(', ');
                            let bookedColrs = tonerColor.toString().split(",").join(', ');
                            context.categoryContext.canBeRequestTonerColor = reqstColors;
                            context.categoryContext.isCNF = {
                                state: "CNF_TONERS",
                                status: true,
                                value: ''
                            }
                            if ((checkSameArray(reqstColors, context.categoryContext.userSpecifiedToners))) {
                                context.categoryContext.current_order.openTicketStatus = false;
                                _this.validator.setTonerColor((context.categoryContext.userSpecifiedToners).toString(), currentState, _context, function () {
                                    _this.configController.setCompleted(_context, ["OPEN_TICKET"], false, function (res) {
                                        _this.createDataPacket(prefix, "", res, _context, callback);
                                    });
                                });
                                return
                            }
                            context.categoryContext.current_order.openTicketStatus = false;
                            _this.updateContext(_context, function () {
                                message = prefix + "As per the records, there is an open toner request for the colors : " + noTranslateSym1 + sym + _this.utility.titleCase(bookedColrs) + sym + noTranslateSym2 + '. Not possible to book toner for these colors. We can book toner for the remaining colors : ' + noTranslateSym1 + sym + canBeBookColors + sym + noTranslateSym2 + '. Do you wish to proceed?'
                                callback(dataPacketService.createTextPacket(message));
                            })
                        } else {
                            context.categoryContext.isCNF = {
                                state: "OPEN_TICKET",
                                status: true,
                                value: ''
                            }
                            if (result.res.resultCode == "alreadyOpenCall") {
                                context.categoryContext.current_order.isAlreadyRegistered = true;
                                context.categoryContext.current_order.openTicketStatus = true;
                                uniqueClr = getclr(uniqueObjects(result.res.openTonerCallDetails)).toString().split(',').join(', ');
                                context.categoryContext.current_order.registeredClrs = uniqueClr;
                            }
                            _this.updateContext(_context, function () {
                                message = prefix + "As per the records, there is an open toner request for the colors : " + noTranslateSym1 + sym + uniqueClr + sym + noTranslateSym2 + ". Your request is processing. Would you like to talk with a live agent for more details?"
                                callback(dataPacketService.createTextPacket(message));
                            })
                        }
                    } else if (result.res.resultCode == 'noError') {
                        _this.validator.setTonerColor((context.categoryContext.userSpecifiedToners).toString(), currentState, _context, function () {
                            _this.configController.setCompleted(_context, ["OPEN_TICKET"], false, function (res) {
                                context.categoryContext.current_order.openTicketStatus = false;
                                _this.createDataPacket(prefix, "", res, _context, callback);
                            });
                        });
                    } else {
                        context.categoryContext.isCNF = {
                            state: "OPEN_TICKET",
                            status: true,
                            value: ''
                        }
                        prefix1 = prefix + responseCode(result.res.resultCode);
                        if (result.res.resultCode == "alreadyOpenCall") {
                            context.categoryContext.current_order.isAlreadyRegistered = true;
                            context.categoryContext.current_order.openTicketStatus = true;
                            uniqueClr = getclr(uniqueObjects(result.res.openTonerCallDetails)).toString().split(',').join(', ');
                            context.categoryContext.current_order.registeredClrs = uniqueClr;
                            message = prefix + "As per the records, there is an open toner request for the colors : " + noTranslateSym1 + sym + uniqueClr + sym + noTranslateSym2 + ". Your request is processing. Would you like to talk with a live agent for more details?"
                        } else {
                            _this.L1SupportDecideCoreWhatsapp(prefix1, "yes", "OPEN_TICKET", _context, callback);
                            return
                        }
                        _this.updateContext(_context, function () {
                            callback(dataPacketService.createTextPacket(message));
                        })
                    }
                    return;
                } else if (category == 'Register Complaint') {
                    if (result.res.resultCode == 'noError' || result.res.resultCode == 'solutionMachine') {
                        _this.configController.setCompleted(_context, ["OPEN_TICKET"], false, function (res) {
                            context.categoryContext.current_order.openTicketStatus = false;
                            _this.createDataPacket(prefix, "", res, _context, callback);
                        });
                    } else {
                        prefix1 = prefix + responseCode(result.res.resultCode);
                        context.categoryContext.isCNF = {
                            state: "OPEN_TICKET",
                            status: true,
                            value: ''
                        }
                        if (result.res.resultCode == "alreadyOpenCall") {
                            context.categoryContext.current_order.isAlreadyRegistered = true;
                            context.categoryContext.current_order.openTicketStatus = true;
                            context.categoryContext.current_order.RequestId = result.res.existingTicketNumber;
                            message = prefix1 + 'Would you like to talk with a live agent for more details?'
                        } else {
                            _this.L1SupportDecideCoreWhatsapp(prefix1, "yes", "OPEN_TICKET", _context, callback);
                            return
                        }
                        _this.updateContext(_context, function () {
                            callback(dataPacketService.createTextPacket(message));
                        })
                    }
                }
            }
        });
    } else if (product == 'Printer' || product == 'Scanner') {
        if (context.categoryContext.complaintAPIFail) {
            _this.sendMail(_context, function (res) {
                var msg = _context.email.includes("::guest:WHATSAPP") ? 'Canon Server is busy currently.' : 'Canon Server is busy currently. Please hold the line while we transfer you to our customer care team.'
                _this.L1SupportDecideCoreWhatsapp(msg, "yes", "MODEL_NUMBER", _context, callback);
            });
        } else if (!context.categoryContext.openComplaintDetails.OpenComplaint) {
            _this.configController.setCompleted(_context, ["OPEN_TICKET"], false, function (res) {
                context.categoryContext.current_order.openTicketStatus = false;
                _this.createDataPacket(prefix, "", res, _context, callback);
            });
        } else {
            context.categoryContext.isCNF = {
                state: "OPEN_TICKET",
                status: true,
                value: ''
            }
            context.categoryContext.current_order.isAlreadyRegistered = true;
            context.categoryContext.current_order.openTicketStatus = true;
            context.categoryContext.current_order.RequestId = context.categoryContext.openComplaintDetails.jobsheetNo;
            _this.updateContext(_context, function () {
                var reqid = _context.email.includes("::guest:WHATSAPP") ? context.categoryContext.current_order.RequestId : _this.canonUtility.mobilevoice(context.categoryContext.current_order.RequestId, _context.email);
                var jobsheetStatus = ''
                if (context.categoryContext.openComplaintDetails.jobsheetStatus == 'Pending Eng. Allocation') {
                    jobsheetStatus = 'and ' + sym + 'work is in progress' + sym;
                }
                message = prefix + "As per the records, there is an " + sym + "open complaint request" + sym + " for the given serial number " + jobsheetStatus + ". The reference number is : " + noTranslate1 + sym + reqid + sym + noTranslate2 + ". Would you like to talk with a live agent for more details?";
                callback(dataPacketService.createTextPacket(message));
            })
        }
    }
}

function uniqueObjects(input) {
    const uniqueAddresses = Array.from(new Set(input.map(a => a.tonerColor)))
        .map(tonerColor => {
            return input.find(a => a.tonerColor === tonerColor)
        })
    return uniqueAddresses
}

function checkSameArray(ar1, ar2) {
    let res;
    if (ar1.length == ar2.length) {
        for (let i in ar1) {
            if (ar1.includes(ar2[i])) {
                res = true
            } else {
                res = false
            }
        }
    } else {
        res = false
    }
    return res;
}

function responseCode(code) {
    var resCodeValues = {
        "invalidSerialNo": "As per the records, this serial number doesn’t exist in our data base. ",
        "machineUnderInst": "Your machine is not installed yet. ",
        "machineStopService": "Your machine is in stop service. ",
        "machineInactive": "Your Machine is inactive. ",
        "solutionMachine": "The serial number is of a software, hence normal service call can’t be logged. ",
        "contractExpire": "Machine is out of contract.",
        "alreadyOpenCall": "As per the records, there is an open complaint request for the given serial number and your request is processing. ",
        "readingIssue": "The meter reading you have given is less than last captured reading. ",
        "noTonerMapped": "The toner colors shared by you don’t exist. ",
        "noCallLogTypeDefined": "No service and toner call allowed since machine's contract type does not contain the call log type mentioned by you. ",
        "serviceTypeNotDefined": "Service call is not allowed since service eligibility is not defined on machine's contract type. ",
        "tonerTypeNotDefined": "Toner call is not allowed since toner eligibility is not defined on machine's contract type. "
    }
    return (resCodeValues.hasOwnProperty(code) ? resCodeValues[code] : "Something went wrong while registering your request. ");
}


function getclr(toners) {
    var tonerclrs = [];
    for (let i = 0; i < toners.length; i++) {
        tonerclrs.push(toners[i].tonerColor);
    }
    return tonerclrs;
}

// function used to get the difference of user given tonor color and the tonor colors given form the API
function differenceFromArray(a, b) {
    let unique = []
    for (let i = 0; i < a.length; i++) {
        if (!(b.includes(a[i].toUpperCase()))) {
            unique.push(a[i])
        }
    }
    return unique;
}

/* get the model number from the API and ask the user to choose the required model number if more than one model number is available*/
Controller.prototype.modelNumberHandler = function (prefix, _context, callback) {
    var _this = this;
    let context = _context.ticketDetails.context.categoryContext;
    var sym = _context.email.includes("::guest:WHATSAPP") ? '*' : '';
    context.reasonForL1 = 'GetInputError';
    this.customerDetails.validateSerialNumberServiceEdge(context.current_order.serialNumber, function (result) {
        _this.updateContext(_context, function () {
            if (context.currentState.count == l1Count()) {
                if (_context.email.includes("::guest:WHATSAPP")) {
                    _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "MODEL_NUMBER", _context, callback);
                } else {
                    _this.L1SupportConfirmation(_context, callback);
                }
                return;
            } else if (context.currentState.count % (l1Count() * 2) == 0 && context.currentState.count != 0) {
                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "MODEL_NUMBER", _context, callback);
                return;
            } else if (result.status && result.message != 'No data is avilable for this serial number') {
                if (result.result.length == 1) {
                    _this.configController.setCompleted(_context, ["MODEL_NUMBER"], false, function (res) {
                        context.current_order.selectedCustomer = result.result[0];
                        context.current_order.modelNumber = result.result[0].modelNumber;
                        // context.current_order.modelName = result.result[0].ModelName;
                        context.current_order.deviceType = result.result[0].DeviceType;
                        _this.validator.setModel(result.result[0].ModelName, _context, function () {
                            _this.complaintService.getProblems(context.current_order.productType, context.current_order.deviceType, function (res1) {
                                if (res1.status) {
                                    context.problemOptions = res1.data;
                                } else {
                                    var message1 = _context.email.includes("::guest:WHATSAPP") ? "We are unable to fetch device details for the given serial number." : "We are unable to fetch device details for the given serial number. Please hold the line while we transfer you to our customer care team.";
                                    context.reasonForL1 = 'FlowWise';
                                    _this.updateContext(_context, function () {
                                        _this.L1SupportDecideCoreWhatsapp(message1, "yes", "MODEL_NUMBER", _context, callback);
                                    })
                                    return;
                                }
                                _this.createDataPacket(prefix, '', res, _context, callback);
                            })
                        });
                    });
                } else {
                    deviceResult = isPrinterORscanner(result.result, context.current_order.productType);
                    if (deviceResult.status) {
                        if (deviceResult.data.length == 1) {
                            context.current_order.customerDetails = result.result;
                            context.current_order.selectedCustomer = setCustomerDetailsOnDeviceType(deviceResult.data[0].DeviceType, context.current_order.customerDetails);
                            context.current_order.modelNumber = context.current_order.selectedCustomer.modelNumber;
                            _this.validator.setModel(context.current_order.selectedCustomer.ModelName, _context, function () {
                                _this.configController.setCompleted(_context, ["MODEL_NUMBER"], false, function (res) {
                                    _this.createDataPacket(prefix, '', res, _context, callback);
                                });
                            })
                            return;
                        }
                        else {
                            context.current_order.modelNumbers = modelnumberArray(deviceResult.data);
                            context.current_order.customerDetails = result.result;
                            message = prefix + _this.randomSentences.modelNameOptions(_context.email, context.current_order.modelNumbers);
                            voice = _this.messageCreation.voiceCreationForDynamicStates(_context.email, message, context.current_order.modelNumbers, '', context.currentState);
                            if ((context.currentState.count > 1) && _context.email.includes("::guest:TOLL_FREE")) {
                                voice = _this.messageCreation.voiceCreationForCategOptionsCall('', message, context.current_order.modelNumbers, "MODEL_NUMBER");
                            }
                            _this.updateContext(_context, function () {
                                _this.createSimpleCardType1(voice, message, 'MODEL_NUMBER', context.current_order.modelNumbers, callback);
                            })
                        }
                    } else {
                        if (deviceResult.data.length == 0) {
                            var message1 = _context.email.includes("::guest:WHATSAPP") ? "We are unable to fetch device details for the given serial number." : "We are unable to fetch device details for the given serial number. Please hold the line while we transfer you to our customer care team.";
                            context.reasonForL1 = 'FlowWise';
                            _this.updateContext(_context, function () {
                                _this.L1SupportDecideCoreWhatsapp(message1, "yes", "MODEL_NUMBER", _context, callback);
                            })
                            return
                        }
                        context.current_order.modelNumbers = modelnumberArray(deviceResult.data);
                        context.current_order.customerDetails = result.result;
                        message = prefix + "Select the " + sym + "model name" + sym + " from the following which you want to register."
                        voice = _this.messageCreation.voiceCreationForDynamicStates(_context.email, message, context.current_order.modelNumbers, '', context.currentState);
                        if ((context.currentState.count > 1) && _context.email.includes("::guest:TOLL_FREE")) {
                            voice = _this.messageCreation.voiceCreationForCategOptionsCall('', message, context.current_order.modelNumbers, "MODEL_NUMBER");
                        }
                        _this.updateContext(_context, function () {
                            _this.createSimpleCardType1(voice, message, 'MODEL_NUMBER', context.current_order.modelNumbers, callback);
                        })
                    }
                }
            } else if (!result.status && (result.message == "Sorry! You are not authorized to access this Service" || result.message == 'unable to connect to server ')) {
                _this.sendMail(_context, function (res) {
                    var message = _context.email.includes("::guest:WHATSAPP") ? "Canon server is busy currently." : "Canon server is busy currently. Please hold the line while we transfer you to our customer care team.";
                    context.reasonForL1 = 'FlowWise';
                    _this.updateContext(_context, function () {
                        _this.L1SupportDecideCoreWhatsapp(message, "yes", "MODEL_NUMBER", _context, callback);
                    })
                })
            } else if (!result.status && result.message == 'No data is avilable for this serial number') {
                var message = _context.email.includes("::guest:WHATSAPP") ? "Could not find the given serial number in our records." : "Could not find the given serial number in our records. Please hold the line while we transfer you to our customer care team.";
                context.reasonForL1 = 'FlowWise';
                _this.updateContext(_context, function () {
                    _this.L1SupportDecideCoreWhatsapp(message, "yes", "MODEL_NUMBER", _context, callback);
                })
            } else {
                var message = _context.email.includes("::guest:WHATSAPP") ? "Dear customer, as per the records, your product is *out of warranty*." : "Dear customer, as per the records, your product is out of warranty. Please hold the line while we transfer you to our customer care team.";
                context.reasonForL1 = 'FlowWise';
                _this.updateContext(_context, function () {
                    _this.L1SupportDecideCoreWhatsapp(message, "yes", "MODEL_NUMBER", _context, callback);
                })
            }
        })
    })
}

// Check whether the product is OOW or in warranty
Controller.prototype.warrantyHandler = function (prefix, _context, callback) {
    var _this = this;
    let context = _context.ticketDetails.context.categoryContext;
    var message = '';
    context.isCNF = {
        state: "WARRANTY",
        status: true,
        value: ''
    }
    var sym = _context.email.includes("::guest:WHATSAPP") ? '*' : '';
    if (context.current_order.selectedCustomer.warrantyDetails.code) {
        _this.configController.setCompleted(_context, ["WARRANTY"], false, function (res) {
            var modelName = context.current_order.selectedCustomer.ModelName;
            modelName = _context.email.includes("::guest:TOLL_FREE") ? _this.canonUtility.mobilevoice(modelName, _context.email) : modelName;
            modelName = (_context.email.includes("::guest:TOLL_FREE")) ? (modelName.includes('-') ? replaceAll(modelName, '-', ' hyphen ') : modelName) : modelName;
            message = "Your product is in " + sym + "warranty" + sym + ". ";
            messagePrefix = "From the given serial number, I have noticed that you are using : " + sym + modelName + sym + '. '
            context.current_order.warranty = true;
            _this.createDataPacket(prefix + messagePrefix, "", res, _context, callback);
        })
    } else {
        greetingText = _this.randomSentences.randomSenForWelcome() + _this.utility.titleCase(context.current_order.name) + ", ";
        prefix = _context.email.includes("::guest:TOLL_FREE_BOT:") ? (greetingText ? greetingText : '') + "Welcome to Canon customer service. I have received your SMS and got the details from that. " : '';
        var msgTxt = _context.email.includes("::guest:WHATSAPP") ? "Dear customer, as per the records, your product is " + sym + "out of warranty" + sym + "." : " Dear customer, as per the records, your product is out of warranty. Please hold the line while we transfer you to our customer care team."
        message = prefix + msgTxt
        context.current_order.warranty = false;
        context.reasonForL1 = "FlowWise";
        _this.updateContext(_context, function () {
            _this.L1SupportDecideCoreWhatsapp(message, "yes", "WARRANTY", _context, callback);
        })
    }
}

function replaceAll(target, search, replacement) {
    target = target.toString();
    return target.split(search).join(replacement);
};

// used to get the modelnumbers from the API in an array
function modelnumberArray(devices) {
    var models = [];
    for (var i = 0; i < devices.length; i++) {
        models.push(devices[i].ModelName);
    }
    return models;
}

function isPrinterORscanner(data, product) {
    var devices = [];
    var deviceTypes = []
    var result = {
        status: false,
        data: ''
    }
    var scanners = ['DOCUMENT SCANNER', 'CHECK READER SCANNER'];
    var printers = ['LASER PRINTER', 'INKJET PRINTER', 'LARGE FORMAT PRINTER'];
    for (let i = 0; i < data.length; i++) {
        devices.push(data[i]);
    }
    productDevices = (product == 'Printer') ? printers : scanners
    for (let i = 0; i < devices.length; i++) {
        if (productDevices.includes(devices[i].DeviceType.toUpperCase())) {
            deviceTypes.push(devices[i]);
        }
    }

    if (deviceTypes.length > 0) {
        result = {
            status: true,
            data: deviceTypes
        }
    }
    else if (deviceTypes.length == 0) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].DeviceType != "") {
                deviceTypes.push(data[i]);
            }
        }
        if (deviceTypes.length > 0) {
            result = {
                status: true,
                data: deviceTypes
            }
        }
    }
    return result;
}

// Ask for the entity name confirmation 
Controller.prototype.entityNameHandler = function (prefix, _context, callback) {
    var _this = this;
    var options = ["Yes", "No"];
    var optionId = "CONFIRMATION";
    let context = _context.ticketDetails.context.categoryContext;
    var prefix_yes_no = "__REFINE_INPUT__GENERIC_YES_NO::";
    prefix_yes_no = _context.email.includes("::guest:TOLL_FREE:") ? prefix_yes_no : ''
    productType = context.current_order.productType;
    var entityName = context.current_order.entityName;
    context.reasonForL1 = 'GetInputError';
    this.updateContext(_context, function () {
        if (productType == 'Printer' || productType == 'Scanner') {
            _this.configController.setCompleted(_context, ["ENTITY_NAME"], false, function (res) {
                _this.createDataPacket(prefix, '', res, _context, callback);
            });
        } else if (context.currentState.count == l1Count()) {
            if (_context.email.includes("::guest:WHATSAPP")) {
                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "ENTITY_NAME", _context, callback);
            } else {
                _this.L1SupportConfirmation(_context, callback);
            }
            return;
        } else if (context.currentState.count % (l1Count() * 2) == 0 && context.currentState.count != 0) {
            _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "ENTITY_NAME", _context, callback);
            return;
        } else {
            context.reasonForL1 = 'FlowWise';
            _this.updateContext(_context, function () {
                var sym = _context.email.includes("::guest:WHATSAPP") ? '*' : '';
                if (entityName != '') {
                    context.isCNF = {
                        state: "ENTITY_NAME",
                        status: true,
                        value: entityName
                    }
                    _this.updateContext(_context, function () {
                        var response = prefix + _this.randomSentences.randomSenForConfirm(_context.email, "entity name", entityName);
                        var voice = prefix_yes_no + response;
                        _this.createSimpleCardType1(voice, response, optionId, options, callback);
                    })
                } else if (context.resultCode == 'invalidSerialNo') {
                    message = prefix + "As per the records, this " + sym + "serial number" + sym + " doesn’t exist in our data base. "
                    _this.L1SupportDecideCoreWhatsapp(message, "yes", "ENTITY_NAME", _context, callback);
                } else if (context.serverBusy) {
                    _this.sendMail(_context, function (res) {
                        var msg = _context.email.includes("::guest:WHATSAPP") ? 'Canon server is busy currently.' : 'Canon server is busy currently. Please hold the line while we transfer you to our customer care team.'
                        _this.L1SupportDecideCoreWhatsapp(msg, "yes", "SERIAL_NO", _context, callback);
                    });
                }
                else {
                    message = prefix + "As per the records, there are " + sym + "no entity name available" + sym + "."
                    _this.L1SupportDecideCoreWhatsapp(message, "yes", "ENTITY_NAME", _context, callback);
                }
            })
        }
    })
}

// Check weather the product is under contract period or not
Controller.prototype.contractHandler = function (prefix, _context, callback) {
    var _this = this;
    let context = _context.ticketDetails.context.categoryContext;
    productType = context.current_order.productType;
    if (productType == 'Printer' || productType == 'Scanner') {
        this.configController.setCompleted(_context, ["CONTRACT"], false, function (res) {
            _this.createDataPacket(prefix, '', res, _context, callback);
        });
    } else {
        var sym = _context.email.includes("::guest:WHATSAPP") ? '*' : '';
        if (context.contractStatus) {
            context.current_order.contract = true;
            _this.configController.setCompleted(_context, ["CONTRACT"], false, function (res) {
                _this.createDataPacket(prefix, "", res, _context, callback);
            })
        } else {
            context.current_order.contract = false;
            message = prefix + "As per the records, your product is " + sym + "not under contract period" + sym + "."
            context.reasonForL1 = 'FlowWise';
            _this.updateContext(_context, function () {
                _this.L1SupportDecideCoreWhatsapp(message, "yes", "CONTRACT", _context, callback);
            })
        }
    }
}

// Ask for the category of the problem in case of printer and scanner
Controller.prototype.problemCategoryHandler = function (prefix, suffix, _context, callback) {
    var _this = this;
    let context = _context.ticketDetails.context.categoryContext;
    var options = ["Machine Installation", "Machine Service/Breakdown"];
    options = _context.email.includes("::guest:TOLL_FREE") ? ["Machine Installation", "Machine Service or Breakdown"] : options;
    var voice = '';
    if (context.current_order.productType == 'Multi-function Devices') {
        _this.configController.setCompleted(_context, ["PROBLEM_CATEGORY"], false, function (res) {
            _this.createDataPacket(prefix, '', res, _context, callback);
        });
        return;
    }
    var prefix1 = "__REFINE_INPUT__CANON_PROBLEM_CATEGORY::";
    prefix1 = _context.email.includes("::guest:TOLL_FREE") ? prefix1 : '';
    context.reasonForL1 = 'GetInputError';
    var message = this.randomSentences.randomSenForProblemCategory(_context.email);
    voice = this.messageCreation.voiceCreationForStates(_context.email, message, options, '');
    this.updateContext(_context, function () {
        if (context.currentState.count == l1Count()) {
            if (_context.email.includes("::guest:WHATSAPP")) {
                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "PROBLEM_CATEGORY", _context, callback);
            } else {
                _this.L1SupportConfirmation(_context, callback);
            }
            return;
        } else if (context.currentState.count % (l1Count() * 2) == 0 && context.currentState.count != 0) {
            _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "PROBLEM_CATEGORY", _context, callback);
            return;
        } else if (_context.email.includes("::guest:TOLL_FREE") && context.currentState.count > 2) {
            prefix1 = '';
            voice = _this.messageCreation.voiceCreationForCategOptionsCall('', message, options, "PROBLEM_CATEGORY");
        }
        _this.createSimpleCardType1(prefix1 + prefix + voice, prefix1 + prefix + message, "PROBLEM_CATEGORY", options, callback);
    })
}

// Ask for the problem details
Controller.prototype.problemHandler = function (prefix, suffix, _context, callback) {
    var _this = this;
    let context = _context.ticketDetails.context.categoryContext;
    sym = (_context.email.includes("::guest:WHATSAPP")) ? '*' : '';
    var prefix1 = "__REFINE_INPUT__CANON_PROBLEM::";
    context.reasonForL1 = 'GetInputError';
    prefix1 = _context.email.includes("::guest:TOLL_FREE") ? prefix1 : '';
    deviceType = context.current_order.hasOwnProperty("selectedCustomer") ? context.current_order.selectedCustomer.DeviceType : '';
    _this.complaintService.getProblems(context.current_order.productType, deviceType, function (res1) {
        problemOptions = res1.data
        context.problemOptions = problemOptions;
        var message = _this.randomSentences.randomSenForProblem(_context.email, problemOptions);
        var voice = _this.messageCreation.voiceCreationForDynamicStates(_context.email, message, problemOptions, '', context.currentState);
        _this.updateContext(_context, function () {
            if (context.current_order.problemCategory == 'Machine Installation') {
                _this.configController.setCompleted(_context, ["PROBLEM", "SYMPTOM"], false, function (res) {
                    _this.validator.setValues('Machine Installation', 'PROBLEM', _context, function () {
                        context.current_order.problem = 'Machine Installation'
                        _this.createDataPacket(prefix, '', res, _context, callback);
                    })
                });
                return;
            }
            if (context.currentState.count == l1Count()) {
                if (_context.email.includes("::guest:WHATSAPP")) {
                    _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "PROBLEM", _context, callback);
                } else {
                    _this.L1SupportConfirmation(_context, callback);
                }
                return;
            } else if (context.currentState.count % (l1Count() * 2) == 0 && context.currentState.count != 0) {
                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "PROBLEM", _context, callback);
                return;
            } else if (_context.email.includes("::guest:TOLL_FREE") && context.currentState.count > 2) {
                prefix1 = "";
                voice = _this.messageCreation.voiceCreationForCategOptionsCall('', message, problemOptions, "PROBLEM");
            }
            _this.createSimpleCardType1(prefix1 + prefix + voice, prefix1 + prefix + message, "PROBLEM", problemOptions, callback);
        });
    });
}

Controller.prototype.symptomHandler = function (prefix, suffix, _context, callback) {
    var _this = this;
    let context = _context.ticketDetails.context.categoryContext;
    if (context.current_order.productType == 'Multi-function Devices') {
        _this.configController.setCompleted(_context, ["SYMPTOM"], false, function (res) {
            _this.createDataPacket(prefix, '', res, _context, callback);
        });
        return;
    }
    context.reasonForL1 = 'GetInputError';
    var message = '',
        testPrefix = "";
    var sym = _context.email.includes("::guest:WHATSAPP") ? '*' : '';
    var prefix1 = 'I have considered your problem as ' + sym + context.current_order.problem + sym + '. ';
    if (context.current_order.problem == 'Machine Installation') {
        prefix1 = 'I have noted that you need to install the machine. ';
    } else if (context.current_order.problem == 'Other Problems') {
        prefix1 = 'I understood that you are facing some issues with the Machine. '
    }
    this.complaintService.getSymptomCode(context.current_order.symptomValue, function (res) {
        _this.updateContext(_context, function () {
            if (context.currentState.count == l1Count()) {
                _this.L1SupportConfirmation(_context, callback);
                return;
            } else if (context.currentState.count % (l1Count() * 2) == 0 && context.currentState.count != 0) {
                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "SYMPTOM", _context, callback);
                return;
            } else if (res.status) {
                context.symptomValues = res.SymptomCode;
                if (context.symptomValues.length == 1) {
                    _this.configController.setCompleted(_context, ["SYMPTOM"], false, function (res) {
                        context.current_order.symptomCode = context.symptomValues[0];
                        _this.createDataPacket(prefix1 + prefix, '', res, _context, callback);
                    });
                } else {
                    message = "Select the " + sym + "symptom" + sym + " from the following options."
                    voice = _this.messageCreation.voiceCreationForStates(_context.email, message, context.symptomValues, '');
                    if ((context.currentState.count > 1) && _context.email.includes("::guest:TOLL_FREE")) {
                        testPrefix = "__NUMBER__1::";
                        voice = _this.messageCreation.voiceCreationForCategOptionsCall('', message, context.symptomValues, 'SYMPTOM');
                    }
                    _this.updateContext(_context, function () {
                        _this.createSimpleCardType1(testPrefix + prefix1 + voice, prefix1 + message, 'SYMPTOM', context.symptomValues, callback);
                    })
                }
            }
        })
    })
}

Controller.prototype.symArray = function (syms) {
    var symArray = [];
    syms.forEach(sym => {
        symArray.push(sym.value);
    });
    return symArray;
}

//Pincode for locality
Controller.prototype.pincodeForLocalityHandler = function (prefix, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context.categoryContext;
    if (context.current_order.productType == 'Multi-function Devices') {
        _this.configController.setCompleted(_context, ["LOCALITY_PINCODE", "PINCODE_CNF", "LOCALITY", "ADDRESS", "PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF", "ADDRESS_CNF", "MOBILE_NO"], false, function (res) {
            _this.createDataPacket(prefix, '', res, _context, callback);
        });
        return;
    }
    var prefix1 = _context.email.includes("::guest:TOLL_FREE") && context.currentState.count <= 1 ? "__REFINE_INPUT__GENERIC_PINCODE::" : '';
    prefix = prefix1 + prefix;
    // if (context.current_order.address != "") {
    //     this.validator.getAvailableLocality(_this.canonUtility.pincodeSeperator(context.current_order.address), _context, function (res) {
    //         if (res) {
    //             _this.validator.setValues(_this.canonUtility.pincodeSeperator(context.current_order.address), "LOCALITY_PINCODE", _context, function () {
    //                 _this.validator.resetL1Confirm(_context.ticketDetails.context);
    //                 _this.updateContext(_context, function () {
    //                     _this.configController.setCompleted(_context, ["LOCALITY_PINCODE"], false, function (res) {
    //                         _this.createDataPacket(prefix, '', res, _context, callback);
    //                     });
    //                 });
    //             });
    //         } else {
    //             _this.localityPincode(prefix, context, _context, callback);
    //         }
    //     })
    // } else {
    _this.localityPincode(prefix, context, _context, callback);
    // }
}

Controller.prototype.localityPincode = function (prefix, context, _context, callback) {
    var message = this.randomSentences.randomSenForPincode(_context.email, context.currentState.count);
    var resp = this.messageCreation.voiceCreationForStates(_context.email, message, '', '');
    var _this = this;
    context.reasonForL1 = 'GetInputError';
    this.updateContext(_context, function () {
        if (context.currentState.count == l1Count()) {
            if (_context.email.includes("::guest:WHATSAPP")) {
                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "LOCALITY_PINCODE", _context, callback);
            } else {
                _this.L1SupportConfirmation(_context, callback);
            }
            return;
        } else if (context.currentState.count % (l1Count() * 2) == 0 && context.currentState.count != 0) {
            _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "LOCALITY_PINCODE", _context, callback);
            return;
        }
        callback(dataPacketService.createTextPacket(prefix + resp));
    })
}

//Ask for locality
Controller.prototype.localityHandler = function (prefix, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context.categoryContext;
    var prefix_msg = "__TRANSLITERATE__::";
    prefix_msg = (_context.email.includes("::guest:WHATSAPP")) ? prefix_msg : ''
    var prefix1 = _context.email.includes("::guest:TOLL_FREE") ? "__REFINE_INPUT__CANON_FIND_LOCATION_" + context.current_order.localityPincode + "::" : ''
    context.reasonForL1 = 'GetInputError';
    this.updateContext(_context, function () {
        _this.validator.getAvailableLocality(context.current_order.localityPincode, _context, function (res) {
            if (res) {
                var message = _this.randomSentences.randomSenForLocality(_context.email, context.currentState.count);
                var resp = _this.messageCreation.voiceCreationLocalityName(message, context.availableLocality, _context.email);
                if (context.availableLocality && context.availableLocality.length > 0) {
                    if (context.availableLocality.length == 1) {
                        _this.validator.setLocality(context.availableLocality[0].locality_name, _context, function () {
                            _this.validator.setValues(context.availableLocality[0].locality_code, "LOCALITY", _context, function () {
                                _this.configController.setCompleted(_context, ["LOCALITY"], false, function (res) {
                                    _this.createDataPacket(prefix, '', res, _context, callback);
                                });
                            });
                        });
                    } else {
                        if (context.currentState.count == l1Count()) {
                            if (_context.email.includes("::guest:WHATSAPP")) {
                                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "PINCODE", _context, callback);
                            } else {
                                _this.L1SupportConfirmation(_context, callback);
                            }
                            return;
                        } else if (context.currentState.count % (l1Count() * 2) == 0 && context.currentState.count != 0) {
                            _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "PINCODE", _context, callback);
                            return;
                        }
                        callback(dataPacketService.createTextPacket(prefix1 + prefix_msg + prefix + resp));
                    }
                } else {
                    w
                    _this.configController.setCompleted(_context, ["LOCALITY"], false, function (res) {
                        _this.createDataPacket(prefix, '', res, _context, callback);
                    });
                }
            } else {
                _this.configController.resetState(_context, ['LOCALITY_PINCODE'], true, function (res) {
                    context.current_order.localityPincode = '';
                    _this.createDataPacket("", '', res, _context, callback);
                });
            }
        })
    });
}

// Ask for the meter reading from the user
Controller.prototype.meterReadingHandler = function (prefix, suffix, _context, callback) {
    var _this = this;
    let context = _context.ticketDetails.context.categoryContext;
    context.reasonForL1 = 'GetInputError';
    this.updateContext(_context, function () {
        _this.flowDecisionTaker(_context, function (res) {
            if (context.currentState.count == l1Count()) {
                if (_context.email.includes("::guest:WHATSAPP")) {
                    _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "METER_READING", _context, callback);
                } else {
                    _this.L1SupportConfirmation(_context, callback);
                }
                return;
            } else if (context.currentState.count % (l1Count() * 2) == 0 && context.currentState.count != 0) {
                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "METER_READING", _context, callback);
                return;
            }
            if (context.current_order.category == 'Register Complaint') {
                _this.configController.setCompleted(_context, ["METER_READING"], false, function (res) {
                    _this.createDataPacket(prefix, '', res, _context, callback);
                });
                return;
            } else {
                var message = _this.randomSentences.randomSenForMeter(_context.email, context.currentState.count, context.lastMeterReading);
                callback(dataPacketService.createTextPacket(prefix + message));
            }
        });
    })
}

// Ask for the needed toner color from the user
Controller.prototype.tonerColorHandler = function (prefix, _context, callback) {
    let context = _context.ticketDetails.context.categoryContext;
    var _this = this;
    let changeStates = context.current_order.changeStates;
    var msg = this.randomSentences.randomSenForTonerColor(_context.email, context.currentState.count);
    var message = this.messageCreation.voiceCreationForStates(_context.email, msg, '', '');
    var sym = _context.email.includes("::guest:WHATSAPP") ? '*' : '';
    var prefix_msg = prefix + 'I have noted your meter reading as: <notranslate>' + sym + context.current_order.meterReading + sym + "</notranslate>. ";
    var prefix_voice = prefix + 'I have noted your meter reading as: ' + this.canonUtility.mobilevoice(context.current_order.meterReading, _context.email) + '. ';
    if (changeStates.includes("TONER_COLOR")) {
        prefix_msg = '';
        prefix_voice = '';
    }
    if (context.tonerColorDetails.length == 1) {
        this.validator.setValues(context.tonerColorDetails[0], "TONER_COLOR", _context, function () {
            _this.configController.setCompleted(_context, ["TONER_COLOR"], false, function (res) {
                _this.createDataPacket(prefix, '', res, _context, callback);
            });
        });
        return;
    }
    prefix_msg = (context.currentState.count < 2) ? prefix_msg : ''
    prefix_voice = (context.currentState.count < 2) ? prefix_voice : '';
    context.reasonForL1 = 'GetInputError';
    this.updateContext(_context, function () {
        if (_context.email.includes('::guest:TOLL_FREE')) {
            message = prefix_voice + message;
        } else {
            message = prefix_msg + message;
        }
        if (context.currentState.count == l1Count()) {
            if (_context.email.includes("::guest:WHATSAPP")) {
                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "TONER_COLOR", _context, callback);
            } else {
                _this.L1SupportConfirmation(_context, callback);
            }
            return;
        } else if (context.currentState.count % (l1Count() * 2) == 0 && context.currentState.count != 0) {
            _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "TONER_COLOR", _context, callback);
            return;
        }
        callback(dataPacketService.createTextPacket(message));
    })
}

// Ask for the contact name from the user
Controller.prototype.userNameHandler = function (prefix, _context, callback) {
    let _this = this;
    let context = _context.ticketDetails.context.categoryContext;
    let changeStates = context.current_order.changeStates;
    var options = ["Yes", "No"];
    var optionId = "CONFIRMATION";
    var voice = '',
        response = '';
    var res = context.currentState;
    var sym = _context.email.includes("::guest:WHATSAPP") ? '*' : '';
    var flag = _context.email.includes("::guest:TOLL_FREE:") ? true : false;
    var countPre = context.currentState.count > 1 ? 'I could not understand what you were about to say, so. ' : ''
    var yesNoMsgPrefix = context.yesnoFlag ? 'I am sorry, I am not able to understand please reply with a yes or no. ' : '';
    var prefix1 = countPre + "I will send an SMS to your mobile number and kindly reply to that SMS in the format given in that message. Once we get the reply message we will register your complaint. ";
    category = context.current_order.category;
    productType = context.current_order.productType;
    if (productType == 'Multi-function Devices') {
        this.configController.setCompleted(_context, ["NAME", "NAME_CNF"], false, function (res) {
            _this.createDataPacket(prefix, '', res, _context, callback);
        });
        return;
    }
    var prefix_yes_no = "__REFINE_INPUT__GENERIC_YES_NO::";
    var prefix_Translate = "__TRANSLITERATE__::";
    // prefix_Translate = _context.email.includes("::guest:TOLL_FREE:") ? prefix_Translate : '';
    prefix_yes_no = _context.email.includes("::guest:TOLL_FREE:") ? prefix_yes_no : '';
    var selectedCustomer = context.openComplaintDetails;
    context.reasonForL1 = 'GetInputError';
    this.updateContext(_context, function () {
        if ((selectedCustomer.hasOwnProperty("customerName") && res.count < 4) && !context.nameFlag && !changeStates.includes("NAME")) {
            var value = selectedCustomer.customerName;
            value = value.includes("\r") ? replaceAll(value, '\r', ' ') : value;
            value = value.includes("\n") ? replaceAll(value, '\n', ' ') : value;
            value = value.includes("\t") ? replaceAll(value, '\t', ' ') : value;
            value = value.includes(":") ? replaceAll(value, ':', ' ') : value;
            value = value.includes(".") ? replaceAll(value, '.', ' ') : value;
            value = value.includes("?") ? replaceAll(value, '?', ' ') : value;
            context.isCNF = {
                state: "NAME",
                status: true,
                value: value
            }
            voice = (context.currentState.count < 2) ? prefix_yes_no + prefix + _this.randomSentences.randomSenForConfirm(_context.email, "name", value) : prefix_yes_no + yesNoMsgPrefix + _this.randomSentences.randomSenForConfirm(_context.email, "name", value);
            response = voice;
            _this.updateContext(_context, function () {
                _this.createSimpleCardType1(voice, response, optionId, options, callback);
            });
        } else if (context.currentState.count == (l1Count() + 1) && !context.nameFlag) {
            context.nameFlag = false;
            if (context.categoryInitiateBot && flag) {
                _this.configController.setCompleted(_context, ["NAME", "NAME_CNF", "ADDRESS", "PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF", "ADDRESS_CNF", "REGISTER_SUMMARY", "CONFIRMATION"], false, function (res) {
                    _this.createDataPacket(prefix1, "", res, _context, callback);
                });
            } else {
                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "NAME", _context, callback);
                // _this.L1SupportConfirmation(_context, callback);
            }
        } else if (context.currentState.count % (l1Count() * 2) == 0 && context.currentState.count != 0) {
            if (context.categoryInitiateBot && flag) {
                _this.configController.setCompleted(_context, ["NAME", "NAME_CNF", "ADDRESS", "PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF", "ADDRESS_CNF", "REGISTER_SUMMARY", "CONFIRMATION"], false, function (res) {
                    _this.createDataPacket(prefix1, "", res, _context, callback);
                });
            } else {
                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "NAME", _context, callback);
            }
        } else {
            context.flagCNF = true;
            if (context.categoryInitiateBot && flag) {
                context.current_order.name = ''
                _this.configController.setCompleted(_context, ["NAME", "NAME_CNF", "ADDRESS", "PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF", "ADDRESS_CNF", "REGISTER_SUMMARY", "CONFIRMATION"], false, function (res) {
                    _this.createDataPacket(prefix1, "", res, _context, callback);
                });
            } else {
                _this.updateContext(_context, function () {
                    voice = (context.currentState.count < 1) ? prefix_Translate + _this.randomSentences.randomSenForName(_context.email, context.currentState.count) : prefix_Translate + _this.randomSentences.randomSenForName(_context.email, context.currentState.count);
                    response = _this.messageCreation.voiceCreationForStates(_context.email, voice, '', '');
                    prefix = _context.email.includes("::guest:WHATSAPP") ? prefix : '';
                    callback(dataPacketService.createTextPacket(prefix + response))
                })
            }
        }
    })
}

// Ask for the pincode from the user
Controller.prototype.pincodeHandler = function (prefix, _context, callback) {
    var _this = this;
    let context = _context.ticketDetails.context.categoryContext;
    var message = this.randomSentences.randomSenForPincode(_context.email, context.currentState.count);
    var resp = this.messageCreation.voiceCreationForStates(_context.email, message, '', '');
    var prefix1 = _context.email.includes("::guest:TOLL_FREE") && context.currentState.count <= 1 ? "__REFINE_INPUT__GENERIC_PINCODE::" : '';
    prefix = prefix1 + prefix;
    completeStates = (context.current_order.localityPincode != '' && !_context.email.includes("::guest:WHATSAPP")) ? ["PINCODE"] : ["PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF"]
    context.reasonForL1 = 'GetInputError';
    this.updateContext(_context, function () {
        if (context.current_order.localityPincode != '' || _context.email.includes("::guest:WHATSAPP")) {
            _this.validator.setValues(context.current_order.localityPincode, 'PINCODE', _context, function () {
                _this.configController.setCompleted(_context, completeStates, false, function (res) {
                    _this.createDataPacket('', "", res, _context, callback);
                });
            })
            return;
        }
        if (context.currentState.count == l1Count()) {
            _this.L1SupportConfirmation(_context, callback);
            return;
        } else if (context.currentState.count % (l1Count() * 2) == 0 && context.currentState.count != 0) {
            _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "PINCODE", _context, callback);
            return;
        }
        callback(dataPacketService.createTextPacket(prefix + resp));
    })
}

// Ask for the door number from the user
Controller.prototype.doorNoHandler = function (prefix, _context, callback) {
    var _this = this;
    let context = _context.ticketDetails.context.categoryContext;
    var message = this.randomSentences.randomSenForDoorNo(_context.email, context.currentState.count);
    message = this.messageCreation.voiceCreationForStates(_context.email, message, '', '');
    context.reasonForL1 = 'GetInputError';
    this.updateContext(_context, function () {
        if (context.currentState.count == l1Count()) {
            _this.L1SupportConfirmation(_context, callback);
            return;
        } else if (context.currentState.count % (l1Count() * 2) == 0 && context.currentState.count != 0) {
            _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "DOOR_NO", _context, callback);
            return;
        }
        callback(dataPacketService.createTextPacket(message));
    })
}

/*Ask for the building number available or not*/
Controller.prototype.buildingNoCnfHandler = function (prefix, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    context.categoryContext.isCNF = {
        state: "BUILDING_NO_CNF",
        status: true
    }
    var message = this.randomSentences.randomSenForBuildingNoCNF(_context.email, context.categoryContext.currentState.count);
    message = this.messageCreation.voiceCreationForStates(_context.email, message, '', '');
    context.categoryContext.reasonForL1 = 'GetInputError';
    this.updateContext(_context, function () {
        if (context.categoryContext.currentState.count == l1Count()) {
            _this.L1SupportConfirmation(_context, callback);
            return;
        } else if (context.categoryContext.currentState.count % (l1Count() * 2) == 0 && context.categoryContext.currentState.count != 0) {
            _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "BUILDING_NO_CNF", _context, callback);
            return;
        } else {
            callback(dataPacketService.createTextPacket(message));
            return;
        }
    })
}

/* Street Name will get handled here. 
Ask for street name from the user*/
Controller.prototype.streetNameHandler = function (prefix, _context, callback) {
    var _this = this;
    var prefix_Translate = "__TRANSLITERATE__::";
    prefix_Translate = _context.email.includes("::guest:TOLL_FREE:") ? prefix_Translate : '';
    let context = _context.ticketDetails.context.categoryContext;
    var message = this.randomSentences.randomSenForStreetName(_context.email, context.currentState.count);
    message = this.messageCreation.voiceCreationForStates(_context.email, message, '', '');
    context.reasonForL1 = 'GetInputError';
    this.updateContext(_context, function () {
        if (context.currentState.count == l1Count()) {
            _this.L1SupportConfirmation(_context, callback);
            return;
        } else if (context.currentState.count % (l1Count() * 2) == 0 && context.currentState.count != 0) {
            _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "STREET_NAME", _context, callback);
            return;
        }
        callback(dataPacketService.createTextPacket(prefix_Translate + message));
    })
}

Controller.prototype.handleBasedOnLastState = function (prefix, id, _context, callback) {
    var res = {
        ID: id
    }
    this.createDataPacket(prefix, '', res, _context, callback);
}

Controller.prototype.addressCnfHandler = function (prefix, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    var message = '',
        voice = '';
    var address = _context.email.includes("::guest:TOLL_FREE") ? this.canonUtility.addressFormation(context.categoryContext.AddressDetails) : context.categoryContext.current_order.address;
    var addressString = _context.email.includes("::guest:TOLL_FREE") ? _this.canonUtility.addressVoice(address) : address;

    context.categoryContext.isCNF = {
        state: "ADDRESS_CNF",
        status: true,
        value: address
    }

    address = this.canonUtility.addressChange(address)
    address = _this.canonUtility.paragraphTokenizer(address);
    address = constructAddress(address);

    var yesNoMsgPrefix = context.categoryContext.yesnoFlag ? 'I am sorry, I am not able to understand please reply with a yes or no. ' : '';
    voice = yesNoMsgPrefix + this.randomSentences.randomSenForAddressConfirm(_context.email, 'address', addressString)
    message = yesNoMsgPrefix + this.randomSentences.randomSenForAddressConfirm(_context.email, 'address', address);
    voice = _context.email.includes("::guest:WHATSAPP") ? prefix + yesNoMsgPrefix + this.randomSentences.randomSenForAddressConfirm(_context.email, 'address', address) : voice
    context.categoryContext.reasonForL1 = 'GetInputError'
    _this.updateContext(_context, function () {
        if ((context.categoryContext.currentState.count == l1Count()) && !context.categoryContext.L1Flag) {
            context.categoryContext.L1Flag = true;
            if (_context.email.includes("::guest:WHATSAPP")) {
                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "ADDRESS_CNF", _context, callback);
            } else {
                _this.L1SupportConfirmation(_context, callback);
            }
            return;
        } else if (context.categoryContext.currentState.count % (l1Count() * 2) == 0 && context.categoryContext.currentState.count != 0) {
            _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "ADDRESS_CNF", _context, callback);
            return;
        }
        _this.createSimpleCardType1(voice, message, "CONFIRMATION", ["Yes", "No"], callback);
    });
}

Controller.prototype.userAddressHandler = function (prefix, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    var message = '',
        voice = '';
    var sym = (_context.email.includes("::guest:WHATSAPP:")) ? '*' : '';
    var prefix_yes_no = "__REFINE_INPUT__GENERIC_YES_NO::";
    var res = context.categoryContext.currentState;
    prefix_yes_no = _context.email.includes("::guest:TOLL_FREE:") ? prefix_yes_no : ''
    var flag = _context.email.includes("::guest:TOLL_FREE:") ? true : false;
    var whtsMsg = this.randomSentences.randomSenForAddressWhatsapp(res.count);
    var yesNoMsgPrefix = context.categoryContext.yesnoFlag ? 'I am sorry, I am not able to understand please reply with a yes or no. ' : '';
    var countPre = res.count > 1 ? 'I could not understand what you were about to say, so. ' : ''
    var prefix1 = countPre + "I will send an SMS to your mobile number and kindly reply to that SMS in the format given in that message. Once we get the reply message we will register your complaint. ";
    category = context.categoryContext.current_order.category;
    var selectedCustomer = context.categoryContext.openComplaintDetails;
    if (selectedCustomer.hasOwnProperty("address") && !context.categoryContext.addressFlag) {
        context.categoryContext.yesnoFlag = false;
        var details = {
            value: selectedCustomer.address,
            status: true
        }
        var addressString = "<notranslate>" + _this.canonUtility.numberSpaceInSentence(selectedCustomer.address) + "</notranslate>";
        context.categoryContext.isCNF = {
            state: "ADDRESS",
            status: true,
            value: details.value
        }
        this.updateContext(_context, function () {
            if (res.count == l1Count()) {
                context.categoryContext.L1Flag = false;
                if (context.categoryContext.categoryInitiateBot && flag) {
                    _this.configController.setCompleted(_context, ["ADDRESS", "PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF", "ADDRESS_CNF", "REGISTER_SUMMARY", "CONFIRMATION"], false, function (res) {
                        _this.createDataPacket(prefix1, "", res, _context, callback);
                    });
                } else {
                    context.categoryContext.reasonForL1 = 'GetInputError';
                    _this.updateContext(_context, function () {
                        _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "ADDRESS", _context, callback);
                        // _this.L1SupportConfirmation(_context, callback);
                    })
                }
            } else if (res.count % (l1Count() * 2) == 0 && res.count != 0) {
                if (context.categoryContext.categoryInitiateBot && flag) {
                    _this.configController.setCompleted(_context, ["ADDRESS", "PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF", "ADDRESS_CNF", "REGISTER_SUMMARY", "CONFIRMATION"], false, function (res) {
                        _this.createDataPacket(prefix1, "", res, _context, callback);
                    });
                } else {
                    context.categoryContext.reasonForL1 = 'GetInputError';
                    _this.updateContext(_context, function () {
                        _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "ADDRESS", _context, callback);
                    })
                }
            } else if (details.status) {
                var address = _this.canonUtility.addressChange(details.value);
                address = _this.canonUtility.paragraphTokenizer(address);
                address = constructAddress(address)
                // message = yesNoMsgPrefix + "Can I consider the following as your *address*?\n" + address
                message = yesNoMsgPrefix + _this.randomSentences.randomSenForAddressConfirm(_context.email, "address", address)
                message1 = prefix_yes_no + yesNoMsgPrefix + _this.randomSentences.randomSenForAddressConfirm(_context.email, "address", addressString);
                voice = (_context.email.includes("::guest:WHATSAPP:")) ? message : message1;
                _this.updateContext(_context, function () {
                    _this.createSimpleCardType1(voice, message, "CONFIRMATION", ["Yes", "No"], callback);
                });
            } else if (_context.email.includes("::guest:WHATSAPP:")) {
                _this.configController.setCompleted(_context, ["ADDRESS"], false, function (res) {
                    _this.createDataPacket("", '', res, _context, callback);
                });
            } else if (flag) {
                _this.configController.setCompleted(_context, ["ADDRESS", "PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF", "ADDRESS_CNF", "REGISTER_SUMMARY", "CONFIRMATION"], false, function (res) {
                    _this.createDataPacket(prefix1, "", res, _context, callback);
                });
            } else {
                _this.askAddressDecide('', _context, callback);
            }
        })
    } else if (_context.email.includes("::guest:WHATSAPP:")) {
        if (res.count == l1Count() && !context.categoryContext.L1Flag && !context.categoryContext.addressFlag) {
            context.categoryContext.L1Flag = false;
            context.categoryContext.addressFlag = false;
            context.categoryContext.reasonForL1 = 'GetInputError';
            _this.updateContext(_context, function () {
                _this.L1SupportConfirmation(_context, callback);
            })
        } else if (res.count % (l1Count() * 2) == 0 && res.count != 0) {
            context.categoryContext.reasonForL1 = 'GetInputError';
            _this.updateContext(_context, function () {
                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "ADDRESS", _context, callback);
            })
        } else {
            context.categoryContext.flagCNF = true;
            _this.updateContext(_context, function () {
                callback(dataPacketService.createTextPacket("__TRANSLITERATE__::" + prefix + whtsMsg))
            })
        }
    } else if (flag) {
        _this.configController.setCompleted(_context, ["ADDRESS", "PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF", "ADDRESS_CNF", "REGISTER_SUMMARY", "CONFIRMATION"], false, function (res) {
            _this.createDataPacket(prefix1, "", res, _context, callback);
        });
    } else {
        this.askAddressDecide(prefix, _context, callback);
    }
}

function isSentenceSplitter(str) {
    var sentenceSplitters = [
        " ",
        "\n",
        "\.",
        "\?",
        ";",
        "!",
        ":",
        "<nextmessage>"
    ];
    for (var i = 0; i < sentenceSplitters.length; i++) {
        if (sentenceSplitters[i] == str) {
            return true;
        }
    }
    return false;
}

function constructAddress(str) {
    //   var tokens = paragraphTokenizer(str);
    var out = "";
    for (var i = 0; i < str.length; i++) {
        if (isSentenceSplitter(str[i])) {
            out += str[i];
        }
        else {
            out += "<reverse_transliterate>*" + str[i] + "*</reverse_transliterate>";
        }
    }
    return out;
}

// function addressGenerator(address){
//     var sentenceSplitters = [
//         "\\n",
//         "\\.",
//         "\\?",
//         ";",
//         "!",
//         ":",
//         "<nextmessage>"
//       ]
//     var adrs = ''
//     for (let i = 0; i < address.length; i++){
//         if(!sentenceSplitters.includes(address[i])){
//             adrs += "<reverse_transliterate>" + address[i] + "</reverse_transliterate>"
//         } else {
//             adrs += address[i];
//         }
//     }
//     return adrs
// }

Controller.prototype.askAddressDecide = function (prefix, _context, callback) {
    var _this = this;
    if (_context.email.includes("::guest:TOLL_FREE")) {
        _this.configController.setCompleted(_context, ["ADDRESS"], false, function (res) {
            _this.createDataPacket(prefix, '', res, _context, callback);
        });
    } else {
        this.configController.setCompleted(_context, ["PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF", "ADDRESS_CNF"], false, function (res) {
            _this.showAddressForm(prefix, _context, callback);
        });
    }
}

Controller.prototype.updateAddress = function (_context, callback) {
    let _this = this;
    let prefix = '';
    var currentState = this.contextManager.getRecentObj(_context).state;
    this.validator.updateAddressCore(currentState, _context.fields.ADDRESS.data, _context, function () {
        _this.configController.setCompleted(_context, ["ADDRESS"], false, function (res) {
            _this.createDataPacket(prefix, '', res, _context, callback);
        });
    });
}

Controller.prototype.isDefaultAddress = function (address) {
    let result = {
        status: false,
        value: ''
    }
    for (var i = 0; i < address.length; i++) {
        if (address[i].isDefault) {
            result.status = true;
            result.value = addressString(address[i].postal_address);
            break;
        }
    }
    return result;
}

function addressString(postalAddress) {
    let str = '';
    for (var key in postalAddress) {
        if (str != '') {
            str += ', ';
        }
        str += postalAddress[key];
    }
    return str;
}

// function to show the address form in iframe
Controller.prototype.showAddressForm = function (prefix, _context, callback) {
    let context = _context.ticketDetails.context;
    if (callback) {
        var fields = [];
        fields.push(dataPacketService.createFormPostalAddressField('Provide address', 'ADDRESS', true, context.categoryContext.current_order.address, 'Invalid address'));
        callback(dataPacketService.createFormPacket('ADDRESS', (prefix != '' ? prefix : '') + "Provide address", 'Enter details', fields));
    }
}

// function to show the change details state to user in a proper format
function getStateText(state) {
    switch (state) {
        case "SERIAL_NO":
            return "serial number";
        case "CATEGORY":
            return "category";
        case "PRODUCT_TYPE":
            return "product type";
        case "ADDRESS":
            return "address";
        case "MOBILE_NO":
            return "contact number";
        case "NAME":
            return "customer name";
        case "PROBLEM_CATEGORY":
            return "problem category";
        case "PROBLEM":
            return "problem";
        case "METER_READING":
            return "meter reading";
        case "TONER_COLOR":
            return "toner color";
        case "DOOR_NO":
            return "door number";
        case "STREET_NAME":
            return "street name";
        case "BUILDING_NO_CNF":
            return "building number";
        case "PINCODE":
            return "pincode";
        case "LOCALITY_PINCODE":
            return "pincode";
        case "LOCALITY":
            return "locality";
        default:
            return "";
    }
}

/*MobileNumber Handling
Ask for mobile number or confirm the mobile number form the API
*/
Controller.prototype.mobileNumberHandler = function (prefix, _context, callback) {
    let _this = this;
    let context = _context.ticketDetails.context.categoryContext;
    var options = [],
        optionId = "";
    let voice = '';
    var productTypeFlag = (context.current_order.productType == 'Multi-function Devices') ? false : true;
    var prefix_yes_no = "__REFINE_INPUT__GENERIC_YES_NO::";
    prefix_yes_no = _context.email.includes("::guest:TOLL_FREE:") ? prefix_yes_no : '';
    var flag = ((!context.categoryInitiateBot || context.current_order.serialNumber != '') || !(_context.email.includes("::guest:TOLL_FREE:") ? true : false));
    var flag1 = ((!context.categoryInitiateBot || (context.current_order.name != '' && context.current_order.address != '')) || !(_context.email.includes("::guest:TOLL_FREE:") ? true : false));
    prefix11 = !flag && context.currentState.count <= 1 ? 'I am facing difficulty in understanding the serial number which you were trying to say. I will send an SMS to your mobile number requesting some details. Please send us an SMS providing the required details. We shall call you back once we receive your SMS. ' : '';
    prefix = !flag1 && context.currentState.count <= 1 ? prefix : '';
    var res = context.currentState;
    var selectedCustomer = context.openComplaintDetails;
    context.reasonForL1 = 'GetInputError';
    this.updateContext(_context, function () {
        if (productTypeFlag && context.current_order.serialNumber != '' && selectedCustomer.hasOwnProperty("mobileNo") && res.count < 2 && (!context.current_order.changeStates.includes("MOBILE_NO"))) {
            var value = selectedCustomer.mobileNo;
            context.isCNF = {
                state: "MOBILE_NO",
                status: true,
                value: value
            }
            if (context.current_order.serialNumber == '') {
                prefix = prefix11;
            }
            response = prefix_yes_no + prefix + _this.randomSentences.randomSenForConfirm(_context.email, 'mobile number', value);
            voice = response;
            options = ["Yes", "No"];
            optionId = "CONFIRMATION";
        } else if (flag && flag1 && context.currentState.count == (l1Count() + 1)) {
            if (_context.email.includes("::guest:WHATSAPP")) {
                _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "MOBILE_NO", _context, callback);
            } else {
                _this.L1SupportConfirmation(_context, callback);
            }
            return;
        } else if (flag && flag1 && context.currentState.count % (l1Count() * 2) == 0 && context.currentState.count != 0) {
            _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", "MOBILE_NO", _context, callback);
            return;
        } else {
            if (context.current_order.serialNumber == '') {
                prefix = prefix11;
            }
            var prefixGeneric = (context.currentState.count <= 2) && (_context.email.includes("::guest:TOLL_FREE")) ? "__REFINE_INPUT__GENERIC_PHONE_NUMBER::" : ''
            response = prefixGeneric + prefix + _this.randomSentences.randomSenForMobile(_context.email, context.currentState.count);
            voice = response;
        }
        _this.updateContext(_context, function () {
            _this.createSimpleCardType1(voice, response, optionId, options, callback);
        })
    });
}

// function to handle the summary dtails of complaint register API
Controller.prototype.summaryHandler = function (prefix, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    tonerColor = context.categoryContext.alreadyBookedToners;
    if (!context.categoryContext.summaryFlag) {
        _this.configController.setCompleted(_context, ["REGISTER_SUMMARY"], false, function (res) {
            _this.createDataPacket(prefix, '', res, _context, callback);
        })
        return;
    }
    context.categoryContext.isCNF = {
        state: "REGISTER_SUMMARY",
        status: true,
        value: ''
    }
    message = responseCode(context.categoryContext.resultCode);
    if (context.categoryContext.resultCode == 'alreadyOpenCall') {
        if (context.categoryContext.current_order.category == 'Toner Booking') {
            message = "As per the records, there is an open toner request for the given serial number and your request is processing. Would you like to talk with a live agent for more details?";
        } else {
            message = "As per the records, there is an open complaint request for the given serial number and your request is processing. Would you like to talk with a live agent for more details?";
        }
    } else {
        context.categoryContext.reasonForL1 = 'FlowWise';
        _this.updateContext(_context, function () {
            _this.L1SupportDecideCoreWhatsapp(message, "yes", "REGISTER_SUMMARY", _context, callback);
        })
        return
    }
    _this.updateContext(_context, function () {
        callback(dataPacketService.createTextPacket(message));
    })
}

Controller.prototype.completedHandling = function (prefix, _context, callback) {
    this.fulfillForAlreadyRegistered(_context.email, _context.ticketDetails.ticketID, _context, callback);
}

Controller.prototype.fulfillForAlreadyRegistered = function (email, ticketID, _context, callback) {
    var context = _context.ticketDetails.context.categoryContext;
    var _this = this;
    this.assistanceService.categoryInitiateConfirmTicket(email, ticketID, function (dataPacket) {
        if (dataPacket) {
            if (context.current_order.serialNumber != '') {
                _this.completeRegister(_context, function () {
                    callback(dataPacket);
                })
            } else {
                if (context.isSendSMS) {
                    _this.callSMSService(_context, function () {
                        callback(dataPacket)
                    })
                } else {
                    callback(dataPacket)
                }
            }
        } else {
            prefix = "You can't fulfill the ticket at this stage."
            callback(dataPacketService.createTextPacket(prefix))
        }
    });
}

// Option based answer handling
Controller.prototype.optionBasedSelection = function (_context, callback) {
    changeStates = _context.ticketDetails.context.categoryContext.changeStatesWhatsapp;
    var currentState = this.contextManager.getRecentObj(_context).state;
    if (changeStates.status && changeStates.states.length > 0) {
        this.optionBasedRejectionSelectionIntermediator(currentState, _context, callback);
    } else if (currentState == "CATEGORY") {
        this.optionBasedCategorySelectionIntermediator(currentState, _context, callback);
    } else if (currentState == 'SERIAL_NO') {
        this.isSerialNumberAvailable('', _context.query, currentState, _context, callback);
        return;
    } else if (currentState == 'SERIAL_NO_CNF') {
        this.isSerialNumberAvailable('', _context.query, currentState, _context, callback);
        return;
    } else if (currentState == 'METER_READING') {
        this.isMeterAvailable('', _context.query, currentState, _context, callback);
        return;
    } else if (currentState == 'PROBLEM') {
        this.optionBasedProblemIntermediator(currentState, _context, callback);
    } else if (currentState == 'PROBLEM_CATEGORY') {
        this.optionBasedProblemCategoryIntermediator(currentState, _context, callback);
    } else if (currentState == "PRODUCT_TYPE") {
        this.optionBasedProductSelectionIntermediator(currentState, _context, callback);
    } else if (currentState == "MODEL_NUMBER") {
        this.optionBasedModelNumberSelectionIntermediator(currentState, _context, callback);
    } else if (currentState == "SYMPTOM") {
        this.optionBasedSymptomSelectionIntermediator(currentState, _context, callback);
    } else if (currentState == "CONFIRMATION") {
        this.optionBasedRejectionSelectionIntermediator(currentState, _context, callback);
    } else {
        this.handleBasedOnLastState("", currentState, _context, callback);
    }
}

// Options for Problem details
Controller.prototype.optionBasedProblemSelection = function (_context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    var option = '',
        index = null;
    if (_context.parameters.hasOwnProperty("option") && _context.parameters.option != '') {
        option = _context.parameters.option.split(" ")[1];
    }
    if (option != '') {
        var index = option.toLocaleLowerCase().charCodeAt(0) - 97;
    }
    var options = context.categoryContext.problemOptions;
    if (index != null && index <= (options.length - 1)) {
        this.validator.setValues(options[index], context.categoryContext.currentState.state, _context, function () {
            _this.configController.setCompleted(_context, ["PROBLEM"], true, function (res) {
                _this.createDataPacket("", '', res, _context, callback);
            });
        });
    } else {
        this.handleBasedOnLastState("", context.categoryContext.currentState.state, _context, callback);
    }
}

Controller.prototype.optionBasedProblemIntermediator = function (currentState, _context, callback) {
    if (_context.parameters.hasOwnProperty("option") && _context.parameters.option != '') {
        this.optionBasedProblemSelection(_context, callback);
    } else {
        this.isProblemAvailable("", _context.query, currentState, _context, callback);
    }
}

Controller.prototype.optionBasedCategorySelectionIntermediator = function (currentState, _context, callback) {
    if (_context.parameters.hasOwnProperty("option") && _context.parameters.option != '') {
        this.optionBasedCategorySelection(_context, callback);
    } else {
        this.isCategoryAvailable("", _context.query, currentState, _context, callback);
    }
}

Controller.prototype.optionBasedModelNumberSelectionIntermediator = function (currentState, _context, callback) {
    if (_context.parameters.hasOwnProperty("option") && _context.parameters.option != '') {
        this.optionBasedModelNumberSelection(_context, callback);
    } else {
        this.handleBasedOnLastState("", currentState, _context, callback);
    }
}

Controller.prototype.optionBasedSymptomSelectionIntermediator = function (currentState, _context, callback) {
    if (_context.parameters.hasOwnProperty("option") && _context.parameters.option != '') {
        this.optionBasedSymptomSelection(_context, callback);
    } else {
        this.handleBasedOnLastState("", currentState, _context, callback);
    }
}

Controller.prototype.optionBasedRejectionSelectionIntermediator = function (currentState, _context, callback) {
    if (_context.parameters.hasOwnProperty("option") && _context.parameters.option != '') {
        this.optionBasedRejectSelection(_context, callback);
    } else {
        this.handleBasedOnLastState("", currentState, _context, callback);
    }
}

Controller.prototype.optionBasedProductSelectionIntermediator = function (currentState, _context, callback) {
    if (_context.parameters.hasOwnProperty("option") && _context.parameters.option != '') {
        this.optionBasedProductSelection(_context, callback);
    } else {
        this.isProductTypeAvailable("", _context.query, currentState, _context, callback);
    }
}

Controller.prototype.optionBasedProblemCategoryIntermediator = function (currentState, _context, callback) {
    if (_context.parameters.hasOwnProperty("option") && _context.parameters.option != '') {
        this.optionBasedProblemCategorySelection(_context, callback);
    } else {
        this.isProblemCategoryAvailable("", _context.query, currentState, _context, callback);
    }
}

// Options for Problem Categgory
Controller.prototype.optionBasedProblemCategorySelection = function (_context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    var option = '',
        index = null;
    if (_context.parameters.hasOwnProperty("option") && _context.parameters.option != '') {
        option = _context.parameters.option.split(" ")[1];
    }
    if (option != '') {
        var index = option.toLocaleLowerCase().charCodeAt(0) - 97;
    }
    var options = ["Machine Installation", "Machine Service/Breakdown"];
    if (index != null && index <= (options.length - 1)) {
        this.validator.setValues(options[index], context.categoryContext.currentState.state, _context, function () {
            _this.configController.setCompleted(_context, ["PROBLEM_CATEGORY"], true, function (res) {
                _this.createDataPacket("", '', res, _context, callback);
            });
        });
    } else {
        this.handleBasedOnLastState("", context.categoryContext.currentState.state, _context, callback);
    }
}

// Options for modelNumbers
Controller.prototype.optionBasedModelNumberSelection = function (_context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    var option = '',
        index = null;
    if (_context.parameters.hasOwnProperty("option") && _context.parameters.option != '') {
        option = _context.parameters.option.split(" ")[1];
    }
    if (option != '') {
        var index = option.toLocaleLowerCase().charCodeAt(0) - 97;
    }
    var options = context.categoryContext.current_order.modelNumbers;
    if (index != null && index <= (options.length - 1)) {
        context.categoryContext.current_order.selectedCustomer = setCustomerDetails(options[index], context.categoryContext.current_order.customerDetails);
        context.categoryContext.current_order.modelNumber = context.categoryContext.current_order.selectedCustomer.modelNumber;
        this.validator.setModel(options[index], _context, function () {
            _this.configController.setCompleted(_context, ["MODEL_NUMBER"], true, function (res) {
                _this.createDataPacket("", '', res, _context, callback);
            });
        });
    } else {
        this.handleBasedOnLastState("", context.categoryContext.currentState.state, _context, callback);
    }
}

Controller.prototype.optionBasedSymptomSelection = function (_context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    var option = '',
        index = null;
    if (_context.parameters.hasOwnProperty("option") && _context.parameters.option != '') {
        option = _context.parameters.option.split(" ")[1];
    }
    if (option != '') {
        var index = option.toLocaleLowerCase().charCodeAt(0) - 97;
    }
    var options = context.categoryContext.symptomValues;
    if (index != null && index <= (options.length - 1)) {
        this.validator.setSymptom(options[index], _context, function () {
            _this.configController.setCompleted(_context, ["SYMPTOM"], true, function (res) {
                _this.createDataPacket("", '', res, _context, callback);
            });
        });
    } else {
        this.handleBasedOnLastState("", context.categoryContext.currentState.state, _context, callback);
    }
}

Controller.prototype.optionBasedRejectSelection = function (_context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    var option = '',
        index = null;
    var resetValue = [];
    if (_context.parameters.hasOwnProperty("option") && _context.parameters.option != '') {
        option = _context.parameters.option.split(" ")[1];
    }
    if (option != '') {
        var index = option.toLocaleLowerCase().charCodeAt(0) - 97;
    }
    var options = context.categoryContext.changeStatesWhatsapp.states;
    if (index != null && index <= (options.length - 1)) {
        resetValue.push(options[index]);
        if (options[index] == 'SERIAL_NO' || options[index] == 'MODEL_NO' || options[index] == 'CATEGORY') {
            _context.ticketDetails.context.categoryContext.current_order.isAlreadyRegistered = false;
        }
        if (options[index] == 'TONER_COLOR') {
            resetValue = ['TONER_COLOR', 'OPEN_TICKET'];
        }
        this.configController.resetState(_context, resetValue, true, function (res) {
            _this.createDataPacket("", '', res, _context, callback);
        });
    } else {
        this.handleBasedOnLastState("", context.categoryContext.currentState.state, _context, callback);
    }
}

function setCustomerDetails(model, customerDetails) {
    var customer;
    for (var i = 0; i < customerDetails.length; i++) {
        if (customerDetails[i].ModelName.includes(model)) {
            customer = customerDetails[i];
            break;
        }
    }
    return customer;
}

function setCustomerDetailsOnDeviceType(model, customerDetails) {
    var customer;
    for (var i = 0; i < customerDetails.length; i++) {
        if (customerDetails[i].DeviceType.includes(model)) {
            customer = customerDetails[i];
            break;
        }
    }
    return customer;
}

// Options for Product Type 
Controller.prototype.optionBasedProductSelection = function (_context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    var option = '',
        index = null;
    if (_context.parameters.hasOwnProperty("option") && _context.parameters.option != '') {
        option = _context.parameters.option.split(" ")[1];
    }
    if (option != '') {
        var index = option.toLocaleLowerCase().charCodeAt(0) - 97;
    }

    var options = context.categoryContext.isCMPEnabled ? ["Printer", "Scanner", "Multi-function Devices"] : ["Printer", "Scanner"];
    if (index != null && index <= (options.length - 1)) {
        this.validator.setValues(options[index], context.categoryContext.currentState.state, _context, function () {
            _this.configController.setCompleted(_context, ["PRODUCT_TYPE"], true, function (res) {
                _this.createDataPacket("", '', res, _context, callback);
            });
        });
    } else {
        this.handleBasedOnLastState("", context.categoryContext.currentState.state, _context, callback);
    }
}

// Options for category
Controller.prototype.optionBasedCategorySelection = function (_context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    var option = '',
        index = null;
    if (_context.parameters.hasOwnProperty("option") && _context.parameters.option != '') {
        option = _context.parameters.option.split(" ")[1];
    }
    if (option != '') {
        var index = option.toLocaleLowerCase().charCodeAt(0) - 97;
    }
    var options = ["Toner Booking", "Register Complaint"];
    if (index != null && index <= (options.length - 1)) {
        this.validator.setValues(options[index], context.categoryContext.currentState.state, _context, function () {
            _this.configController.setCompleted(_context, ["CATEGORY"], true, function (res) {
                _this.createDataPacket("", '', res, _context, callback);
            });
        });
    } else {
        this.handleBasedOnLastState("", context.categoryContext.currentState.state, _context, callback);
    }
}

//DataPckets
Controller.prototype.createSimpleCardType1 = function (voice, title, ID, options, callback) {
    let buttons = [];
    let sections = [];
    let index = 0;
    let card = null;
    options.forEach(element => {
        buttons.push(dataPacketService.createChoiceTextOption(element, "", ID, null, {
            index: index,
            value: element
        }));
        index++;
    });
    sections.push(dataPacketService.createTextPacket(title));
    card = dataPacketService.createCardType1Packet(voice, sections, buttons);
    callback(card);
}

Controller.prototype.tableObjCreate = function (contextDataBuilder, obj) {
    var tableObj = this.messageCreation.confirmationMsgTable(obj, obj.current_order);
    return tableObj;
}

Controller.prototype.createConfirmationHZPacket = function (categoryContext, _context, fulfilled, contextDataBuilder, userIs, callback) {
    let voice = '';
    let obj = categoryContext;
    let tableObj = {};
    var requstid = '';
    tableObj = this.tableObjCreate(contextDataBuilder, obj);
    if (fulfilled && obj.current_order.RequestId != "") {
        tableObj["Request Id"] = obj.current_order.RequestId;
    }
    if ((fulfilled && (obj.current_order.isAlreadyRegistered || obj.current_order.serialNumber == '')) || obj.whatsappL1Flag) {
        requstid = _context.email.includes("::guest:WHATSAPP:") ? "*" + obj.current_order.RequestId + "*" : (_context.email.includes("::guest:TOLL_FREE") ? this.canonUtility.mobilevoice(obj.current_order.RequestId, _context.email) : obj.current_order.RequestId);
        voice = this.messageCreation.voiceCreationForCompletion(obj.current_order, obj, _context.email, requstid);
    } else {
        voice = this.messageCreation.voiceCreationForCompletion1(_context.email);
    }
    callback(dataPacketService.createTextPacket(voice));
}

Controller.prototype.generateConfirmationVoice = function (obj, _context) {
    var result = "";
    var current_order = obj.current_order;
    result = this.messageCreation.voiceCreationForConfirmation(current_order, _context.email);
    return result;
}

Controller.prototype.createTable = function (rows, obj) {
    for (let key in obj) {
        rows.push(
            dataPacketService.createMulticellType1Packet("", [
                dataPacketService.createHeader4Packet(key),
                dataPacketService.createPara1Packet(obj[key])
            ], [])
        )
    }
    return dataPacketService.createTablePacket("", rows);
}

Controller.prototype.fulfillTicket = function (_context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context.categoryContext;
    var count = context.currentState.count;
    context.UsageTiming.endTime = this.validator.getTime();
    var serviceEdgeProducts = ["Printer", "Copier"];
    var CMPProducts = ["Multi-function Devices"];
    if (!context.current_order.isAlreadyRegistered && context.categoryInitiateBot && context.current_order.serialNumber != "" && ((context.current_order.name != '' && (serviceEdgeProducts.includes(context.current_order.productType))) || (context.current_order.name == '' && (CMPProducts.includes(context.current_order.productType))) && (context.current_order.address != '' && (serviceEdgeProducts.includes(context.current_order.productType))) || (context.current_order.address == '' && (CMPProducts.includes(context.current_order.productType))))) {
        _this.completeRegister(_context, function (res) {
            _this.validator.setAnalyticData("FULFILL", '', null, count, _context, function () {
                _this.updateContext(_context, function () {
                    if (callback) {
                        _this.createConfirmationHZPacket(context, _context, true, false, (_context.email.includes("::guest:WHATSAPP") ? "::guest:WHATSAPP" : (_context.email.includes("::guest") ? "::guest" : false)), function (response) {
                            if (callback) {
                                callback(response);
                            }
                        });
                    }
                });
            })
        });
    } else {
        _this.createConfirmationHZPacket(context, _context, true, false, (_context.email.includes("::guest:WHATSAPP") ? "::guest:WHATSAPP" : (_context.email.includes("::guest") ? "::guest" : false)), function (response) {
            if (callback) {
                callback(response);
            }
        });
    }
}

// Registering the complaint in mock API
Controller.prototype.completeRegister = function (_context, callback) {
    var context = _context.ticketDetails.context.categoryContext
    var _this = this;
    if (context.isSendSMS) {
        this.callSMSService(_context, function () {
            _this.complaintService.completeRegistration(JSON.stringify(context.current_order), function (res) {
                callback(res);
            });
        })
    } else {
        this.complaintService.completeRegistration(JSON.stringify(context.current_order), function (res) {
            callback(res);
        });
    }
}

Controller.prototype.callSMSService = function (_context, callback) {
    var context = _context.ticketDetails.context.categoryContext
    var _this = this;
    var corporate = _context.email.split("@@")[1];
    this.smsService.getReciverNumber((_context.email.split("@@")[1]), function (res) {
        var corpNumber = res.reciverNumber;
        var message = _this.canonUtility.smsMessageCreation(context.current_order, corpNumber);
        _this.smsService.sendSMS(context.current_order.mobileNumber, _context.ticketDetails.ticketID, corporate, message, context.current_order.reqIdAnalysis, function (res) {
            callback()
        })
    })
}

// Registering the complaint in canon API
Controller.prototype.completeRegisterDecide = function (current_order, _context, callback) {
    var callSource = _context.email.includes("::guest:TOLL_FREE") ? 'IVR' : 'WhatsApp';
    if (current_order.category == "Toner Booking") {
        var res = {
            "serialNumber": current_order.serialNumber.toString(),
            "meterReading": parseInt(current_order.meterReading),
            "colorArray": current_order.tonerColor.toUpperCase().split(','),
            "callSource": callSource,
        }
        this.tonerRequest.tonerRequest(res, function (res) {
            if (res.res["colors_OfTonerCall"])
                current_order.loggedToners = res.res.colors_OfTonerCall.split(',').join(', ');
            callback(res)
        })
    } else if (current_order.category == "Register Complaint" && (current_order.productType == 'Printer' || current_order.productType == 'Scanner')) {
        address = current_order.address.toString();
        pincode = current_order.localityPincode.toString();
        var res = {
            contactName: current_order.name.toString(),
            reqId: current_order.reqIdAnalysis,
            category: current_order.category.toString(),
            phone: parseInt(current_order.mobileNumber),
            address: address,
            complaintDetails: {
                deviceType: current_order.selectedCustomer.DeviceType.toString(),
                ticketId: current_order.ticketId.toString(),
                modelnumber: current_order.modelNumber.toString(),
                complaint: current_order.problem.toString(),
                serialNumber: current_order.serialNumber.toString()
            },
            locality: {
                pincode: pincode,
                location: current_order.locality.toString(),
                locationCode: current_order.localityCode.toString()
            }
        }
        this.complaintService.registerComplaintServiceEdge(res, function (res) {
            callback(res)
        });
    } else if (current_order.category == "Register Complaint" && (current_order.productType == 'Multi-function Devices')) {
        complaintCategory = this.canonUtility.getComplaintCategory(current_order.problem);
        var res = {
            "serialNumber": current_order.serialNumber.toString(),
            "complaintCategory": parseInt(complaintCategory),
            "callSource": callSource
        }
        this.complaintService.registerComplaintCMP(res, function (res) {
            callback(res)
        });
    }
}

// Registering the Complaint in DB 
Controller.prototype.complaintRegister = function (ticketId, current_order, _context, callback) {
    var res = {
        category: current_order.category,
        contactName: current_order.name,
        email: current_order.email,
        phone: current_order.mobileNumber,
        modelName: current_order.modelName,
        productType: current_order.productType,
        userWhatsAppNo: (_context.email.includes("::guest:WHATSAPP:")) ? _context.email.split("@@")[0].replace(/\D/g, '').slice(-10) : null,
        // userTollfreenumber: (_context.email.includes("::guest:TOLL_FREE:")) ? _context.email.split("@@")[0].replace(/\D/g, '').slice(-10) : null,
        complaintDetails: {
            ticketId: ticketId,
            serialNumber: current_order.serialNumber,
            modelnumber: current_order.modelNumber,
            complaint: current_order.problem,
            tonerColor: current_order.tonerColor,
            meterReading: current_order.meterReading,
        }
    }
    if (!_context.email.includes("::guest:TOLL_FREE_BOT:")) {
        this.complaintService.registerComplaint(res, function (res) {
            current_order.reqIdAnalysis = res.reqId;
            callback(res)
        });
    } else {
        callback(null);
    }
}

//DataPckets
Controller.prototype.createSimpleCardTypeForChangeDetails = function (voice, title, ID, options, callback) {
    let buttons = [];
    let sections = [];
    let index = 0;
    let card = null;
    options.forEach(element => {
        buttons.push(dataPacketService.createChoiceTextOption(this.utility.titleCase(getStateText(element)), "", ID, null, {
            index: index,
            value: element
        }));
        index++;
    });
    sections.push(dataPacketService.createTextPacket(title));
    card = dataPacketService.createCardType1Packet(voice, sections, buttons);
    callback(card);
}

// For Confirmation Rejection
Controller.prototype.confirmationRejectHandler = function (_context, callback) {
    var _this = this;
    var options = [];
    var option = []
    var voice = '';
    let currentState = (this.contextManager.getRecentObj(_context) ? this.contextManager.getRecentObj(_context).state : this.contextManager.getBackupRecentObj(_context).state);
    var category = _context.ticketDetails.context.categoryContext.current_order.category;
    var productType = _context.ticketDetails.context.categoryContext.current_order.productType;
    var problemCategory = _context.ticketDetails.context.categoryContext.current_order.problemCategory
    if (_context.query && (_context.query.toLowerCase().trim() == 'make changes' || _context.query.toLowerCase().trim() == 'make change')) {
        options = this.canonUtility.changeStates(currentState, productType, category, problemCategory);
    } else if (category == 'Register Complaint' && (productType == 'Printer' || productType == 'Scanner')) {
        if (problemCategory == 'Machine Installation') {
            options = ["PRODUCT_TYPE", "SERIAL_NO", "PROBLEM_CATEGORY", "LOCALITY_PINCODE", "LOCALITY", "NAME", "ADDRESS", "MOBILE_NO"];
        } else {
            options = ["PRODUCT_TYPE", "SERIAL_NO", "PROBLEM_CATEGORY", "PROBLEM", "LOCALITY_PINCODE", "LOCALITY", "NAME", "ADDRESS", "MOBILE_NO"];
        }
    } else if (category == 'Register Complaint' && (productType == 'Multi-function Devices')) {
        options = ["PRODUCT_TYPE", "SERIAL_NO", "PROBLEM_CATEGORY", "PROBLEM"]
    } else {
        options = ["PRODUCT_TYPE", "SERIAL_NO", "TONER_COLOR", "METER_READING"]
    }
    if (_context.email.includes("::guest:WHATSAPP")) {
        _context.ticketDetails.context.categoryContext.changeStatesWhatsapp.status = true;
        _context.ticketDetails.context.categoryContext.changeStatesWhatsapp.states = options;
    }
    var message = this.randomSentences.randomSenForChange(_context.email, options);
    this.updateContext(_context, function () {
        if (_context.email.includes("::guest:WHATSAPP")) {
            options.forEach(element => {
                option.push(_this.utility.titleCase(getStateText(element)))
            })
            voice = _this.messageCreation.voiceCreationForDynamicStates(_context.email, message, option, '', _context.ticketDetails.context.categoryContext.currentState.state);
            _context.ticketDetails.context.categoryContext.option = options;
        } else {
            voice = message
        }
        _this.createSimpleCardTypeForChangeDetails(voice, message, "CHANGE_DETAIL", options, callback);
    });
}

Controller.prototype.addressRejectHandler = function (_context, callback) {
    var options = ["PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME"]
    var message = this.randomSentences.randomSenForChange(_context.email, options);
    this.createSimpleCardTypeForChangeDetails(message, message, "CHANGE_DETAIL", options, callback);
}

// L1 support call
Controller.prototype.L1SupportConfirmation = function (_context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    var currentState = (this.contextManager.getRecentObj(_context) ? this.contextManager.getRecentObj(_context).state : context.categoryContext.currentState.state);
    _this.updateContext(_context, function () {
        if (context.categoryContext.L1SupportCount >= 2) {
            _this.L1SupportDecideCoreWhatsapp(_this.randomSentences.apologyText(), "yes", currentState, _context, callback);
        } else {
            _this.L1SupportService.processL1Support(_context, _this.randomSentences.textforL1agentConfirmation(_context.email, _context.resolvedQuery), callback);
        }
    });
}

// L1 support decide
Controller.prototype.L1SupportDecide = function (_context, callback) {
    var confirm = null;
    confirm = (_context.hasOwnProperty("confirmation") ? _context.confirmation : (_context.hasOwnProperty("context") ? _context.context.value : null));
    var currentState = (this.contextManager.getRecentObj(_context) ? this.contextManager.getRecentObj(_context).state : context.categoryContext.currentState.state);
    if (confirm) {
        this.L1SupportDecideCoreWhatsapp("", confirm, currentState,
            _context, callback);
    } else {
        this.L1SupportConfirmation(_context, callback);
    }
}

Controller.prototype.L1SupportDecideCoreWhatsapp = function (prefix, confirmation, currentState, _context, callback) {
    var _this = this;
    confirmation != null ? confirmation.toLowerCase : confirmation;
    var count = _context.ticketDetails.context.categoryContext.currentState.count;
    var context = _context.ticketDetails.context.categoryContext;
    context.L1Flag = true;
    var completeStates = ["PRODUCT_TYPE", "CATEGORY", "SERIAL_NO", "SERIAL_NO_CNF", "ENTITY_NAME", "MODEL_NUMBER", "WARRANTY", "CONTRACT", "METER_READING", "TONER_COLOR", "OPEN_TICKET", "PROBLEM_CATEGORY", "PROBLEM", "SYMPTOM", "LOCALITY_PINCODE", "PINCODE_CNF", "LOCALITY", "NAME", "NAME_CNF", "ADDRESS", "PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF", "ADDRESS_CNF", "MOBILE_NO", "MOBILE_NUM_CNF", "CONFIRMATION", "REGISTER_SUMMARY", "FEEDBACK"];
    if (_context.email.includes("::guest:WHATSAPP") && confirmation == 'yes') {
        this.validator.setAnalyticData(_context.ticketDetails.context.categoryContext.currentState.state, "L1AGENT", null, count, _context, function () {
            _this.configController.setCompleted(_context, completeStates, true, function (res) {
                context.whatsappL1Flag = true;
                context.prefixL1Whatsapp = prefix + '';
                _this.smsService.sendDetails(context.current_order, _context, function (response) {
                    _this.createDataPacket(prefix, '', res, _context, callback);
                });
            });
        })
        return;
    } else if (confirmation == 'yes') {
        this.validator.setAnalyticData(_context.ticketDetails.context.categoryContext.currentState.state, "L1AGENT", null, count, _context, function () { })
    }
    _this.L1SupportService.L1SupportDecide(prefix, confirmation, _context, callback, function (res) {
        _this.updateContext(_context, function () {
            _this.handleBasedOnLastState("", currentState, _context, callback);
        });
    });
}

Controller.prototype.isSerialNumberAvailable = function (prefix, value, currentState, _context, callback) {
    var _this = this;
    this.canonUtility.serial(_context.email, _context.ticketDetails.ticketID, value, function (details) {
        if (details.status) {
            _context["resolvedQuery"] = value;
            if (_context.hasOwnProperty("query")) {
                delete _context.query;
            }
            if (_context.hasOwnProperty("confirmation")) {
                delete _context.confirmation;
            }
            _this.process("UNKNOWN_MESSAGE_HANDLER", _context, callback);
        } else {
            _this.handleBasedOnLastState(prefix, currentState, _context, callback);
        }
    });
}

Controller.prototype.isMeterAvailable = function (prefix, value, currentState, _context, callback) {
    var _this = this;
    var details = this.canonUtility.findMeterReading(value);
    if (details.status) {
        this.validator.setValues(details.value, currentState, _context, function () {
            _this.configController.setCompleted(_context, ["METER_READING"], false, function (res) {
                _this.createDataPacket("", '', res, _context, callback);
            });
        });
    } else {
        this.handleBasedOnLastState(prefix, currentState, _context, callback);
    }
}

Controller.prototype.isProductTypeAvailable = function (prefix, value, currentState, _context, callback) {
    var _this = this;
    var details = this.canonUtility.productValidate(value);
    if (details.status) {
        this.validator.setValues(details.value, currentState, _context, function () {
            _this.configController.setCompleted(_context, ["PRODUCT_TYPE"], false, function (res) {
                _this.createDataPacket("", '', res, _context, callback);
            });
        });
    } else {
        this.handleBasedOnLastState(prefix, currentState, _context, callback);
    }
}

Controller.prototype.isCategoryAvailable = function (prefix, value, currentState, _context, callback) {
    var _this = this;
    var details = this.canonUtility.categoryValidate(value, callback);
    if (details.status) {
        this.validator.setValues(details.value, currentState, _context, function () {
            _this.configController.setCompleted(_context, ["CATEGORY"], false, function (res) {
                _this.createDataPacket("", '', res, _context, callback);
            });
        });
    } else {
        this.handleBasedOnLastState(prefix, currentState, _context, callback);
    }
}

Controller.prototype.isProblemCategoryAvailable = function (prefix, value, currentState, _context, callback) {
    var _this = this;
    var details = this.canonUtility.findProblemCategory(value);
    if (details.status) {
        this.validator.setValues(details.value, currentState, _context, function () {
            _this.configController.setCompleted(_context, ["PROBLEM_CATEGORY"], false, function (res) {
                _this.createDataPacket("", '', res, _context, callback);
            });
        });
    } else {
        this.handleBasedOnLastState(prefix, currentState, _context, callback);
    }
}

Controller.prototype.isAddressAvail = function (value, currentState, _context, callback) {
    var _this = this;
    this.utility.findAddress(value, 'address', function (res) {
        if (res && !isEmpty(res) && res.hasOwnProperty("formatted_address") && (value.toLowerCase() != 'no' && value.toLowerCase() != 'yes')) {
            _this.validator.updateAddressCore(currentState, value, _context, function (res) {
                _this.configController.setCompleted(_context, ["ADDRESS", "PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF"], false, function (res) {
                    _this.createDataPacket("", '', res, _context, callback);
                });
            })
        } else {
            _this.handleBasedOnLastState("", currentState, _context, callback);
        }
    });
}

function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

Controller.prototype.isTonerAvailable = function (prefix, value, currentState, _context, callback) {
    var _this = this;
    var details = this.canonUtility.findTonerColor(value);
    if (details.status) {
        this.validator.setValues(details.value, currentState, _context, function () {
            _this.configController.setCompleted(_context, ["TONER_COLOR"], false, function (res) {
                _this.createDataPacket("", '', res, _context, callback);
            });
        });
    } else {
        this.handleBasedOnLastState(prefix, currentState, _context, callback);
    }
}

Controller.prototype.isProblemAvailable = function (prefix, value, currentState, _context, callback) {
    var _this = this;
    var details = this.canonUtility.findProblem(value);
    if (details.status) {
        _context["resolvedQuery"] = value;
        this.process("UNKNOWN_MESSAGE_HANDLER", _context, callback);
    } else {
        this.handleBasedOnLastState(prefix, currentState, _context, callback);
    }
}

Controller.prototype.nameAvail = function (query, currentState, _context, callback) {
    var _this = this;
    this.validator.name(query, _context, currentState, function (res) {
        if (res.status == "ACCEPTED") {
            _this.configController.setCompleted(_context, ["NAME"], false, function (res) {
                _this.createDataPacket("", '', res, _context, callback);
            })
        } else if (res.status == "REJECTED") {
            _this.handleBasedOnLastState('', currentState, _context, callback);
        }
    });
}

Controller.prototype.doorNoAvail = function (query, currentState, _context, callback) {
    var _this = this;
    this.validator.doorNo(query, _context, currentState, function (res) {
        if (res.status == "ACCEPTED") {
            _this.configController.setCompleted(_context, ["DOOR_NO"], false, function (res) {
                _this.createDataPacket("", '', res, _context, callback);
            })
        } else if (res.status == "REJECTED") {
            _this.handleBasedOnLastState('', currentState, _context, callback);
        }
    });
}

Controller.prototype.streetNameAvail = function (query, currentState, _context, callback) {
    var _this = this;
    this.validator.streetName(query, _context, currentState, function (res) {
        if (res.status == "ACCEPTED") {
            _this.configController.setCompleted(_context, ["STREET_NAME"], false, function (res) {
                _this.createDataPacket("", '', res, _context, callback);
            })
        } else if (res.status == "REJECTED") {
            _this.handleBasedOnLastState('', currentState, _context, callback);
        }
    });
}

Controller.prototype.pinCodeAvail = function (query, currentState, _context, callback) {
    var _this = this;
    this.validator.pincode(query, _context, currentState, function (res) {
        if (res.status == "ACCEPTED") {
            _this.configController.setCompleted(_context, ["PINCODE"], false, function (res) {
                _this.createDataPacket("", '', res, _context, callback);
            })
        } else if (res.status == "REJECTED") {
            _this.handleBasedOnLastState('', currentState, _context, callback);
        }
    });
}

Controller.prototype.localityPinCodeAvail = function (query, currentState, _context, callback) {
    var _this = this;
    this.validator.localityPincode(query, currentState, _context, function (res) {
        if (res.status == "ACCEPTED") {
            _this.configController.setCompleted(_context, ["LOCALITY_PINCODE"], false, function (res) {
                _this.createDataPacket("", '', res, _context, callback);
            })
        } else if (res.status == "REJECTED") {
            _this.handleBasedOnLastState('', currentState, _context, callback);
        }
    });
}

Controller.prototype.localityAvail = function (query, currentState, _context, callback) {
    var _this = this;
    this.validator.locality(query, currentState, _context, function (res) {
        if (res.status == "ACCEPTED") {
            _this.configController.setCompleted(_context, ["LOCALITY"], false, function (res) {
                _this.createDataPacket("", '', res, _context, callback);
            })
        } else if (res.status == "REJECTED") {
            _this.handleBasedOnLastState('', currentState, _context, callback);
        }
    });
}

Controller.prototype.isMobileNumberAvailable = function (prefix, value, currentState, _context, callback) {
    var _this = this;
    var details = this.utility.mobileNumberVerify(value);
    if (details.status) {
        this.validator.setValues(details.value, currentState, _context, function () {
            _this.configController.setCompleted(_context, ["MOBILE_NO"], false, function (res) {
                _this.createDataPacket("", '', res, _context, callback);
            });
        });
    } else {
        this.handleBasedOnLastState(prefix, currentState, _context, callback);
    }
}

Controller.prototype.buildingNoAvail = function (query, currentState, _context, callback) {
    var _this = this;
    this.validator.buildingNoCNF(query, _context, currentState, function (res) {
        if (res.status == "ACCEPTED") {
            _this.configController.setCompleted(_context, ["BUILDING_NO_CNF"], false, function (res) {
                _this.createDataPacket("", '', res, _context, callback);
            })
        } else if (res.status == "REJECTED") {
            _this.handleBasedOnLastState('', currentState, _context, callback);
        }
    });
}

Controller.prototype.whatNextAction = function (_context, callback) {
    var currentState = (this.contextManager.getRecentObj(_context) ? this.contextManager.getRecentObj(_context).state : context.categoryContext.currentState.state);
    this.createDataPacketCore("", "", false, {
        ID: currentState
    }, _context, callback);
}
