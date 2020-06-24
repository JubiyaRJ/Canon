var dataPacketService = require("poca-common").dataPacketService;
var Controller = require("../controller");

var CategoryIntentMapService = function (info, categoryConfig) {
    this.controller = new Controller(info, categoryConfig);
    this.config = info.config;
}

module.exports = CategoryIntentMapService;

CategoryIntentMapService.prototype.initMapping = function () {
    let _this = this;
    var mapping = {
        "COMPLAINT": {
            "WELCOME_HANDLER": function (self, context, callback) {
                _this.controller.welcomeMessageHandler(context, callback);
            },
            "API_ENTITY_BUILD_HANDLER": function (self, context, callback) {
                _this.controller.getEntityBuilder(context, callback);
            },
            "APIAI_ACTION_HANDLERS": {
                "UPDATE_SAVED_ADDRESS": function (self, context, callback) {
                    _this.controller.updateSavedAddress(context, callback);
                },
                "CHANGE_DETAIL": function (self, context, callback) {
                    _this.controller.changeDetailSpecification(context, callback);
                },
                "SELECT_OPTION_BASED": function (self, context, callback) {
                    _this.controller.optionBasedSelection(context, callback);
                },
                "WHAT_NEXT_ACtION": function (self, context, callback) {
                    _this.controller.whatNextAction(context, callback);
                }
            },
            "AUTO_HANDLERS": {
                "FULFILL_HANDLER": function (self, context, callback) {
                    _this.controller.fulfillTicket(context, callback);
                }
            },
            "API_AI_AGENT": "canonAssistant",
            "TITLE": "Canon",
            "DESCRIPTION": "Assist for canon",
            "ICON": "https://poca-store-blob.intelli-assist.com:8080/common/pa/subcategory/RegisterCompliant.png",
            "INPUT_CONTEXTS": [
                "COMPLAINT"
            ],
            "OPTION_HANDLER": {
                "EXECUTION_HANDLER": function (self, context, callback) {
                    _this.handleChoice(context, function (response) { //you can add this item selected i context
                        if (callback) {
                            callback(response);
                        }
                    });
                },
                "LABEL_HANDLER": function (self, optionID, data) {
                    switch (optionID) {
                        case "CATEGORY":
                            return dataPacketService.createTextPacket(data.value);
                        case "PRODUCT_TYPE":
                            return dataPacketService.createTextPacket(data.value);
                        case "CONFIRMATION":
                            return dataPacketService.createTextPacket(data.value);
                        case "PROBLEM":
                            return dataPacketService.createTextPacket(data.value);
                        case "CHANGE_DETAIL":
                            return dataPacketService.createTextPacket(data.value);
                        case "PROBLEM_CATEGORY":
                            return dataPacketService.createTextPacket(data.value);
                        case "MODEL_NUMBER":
                            return dataPacketService.createTextPacket(data.value);
                        case "SYMPTOM":
                            return dataPacketService.createTextPacket(data.value);
                    }
                    return null;
                }
            },
            "FORM_HANDLER": {
                "EXECUTION_HANDLER": function (self, context, callback) {
                    _this.handleForm(context, function (response) {
                        if (callback) {
                            callback(response);
                        }
                    });
                },
                "LABEL_HANDLER": function (self, formID, data) {
                    return dataPacketService.createFilledFormPacket(data);
                }
            },
            "SPECIFICATION_HANDLERS": {
                "SMALLTALK_CONFIRMATION_HANDLER": function (self, context, callback) {
                    _this.controller.process("SMALLTALK_CONFIRMATION_HANDLER", context, callback);
                },
                "TEST_COMPLETE_HANDLER": function (self, context, callback) {
                    callback(_this.controller.isTicketCompleted(context));
                },
                "INIT_HANDLER": function (self, context, callback) {
                    _this.controller.initCategoryContext(context, callback);
                },
                "CONFIRMATION_HANDLER": function (self, context, callback) {
                    _this.controller.confirmationHandler(context, callback);
                },
                "UNKNOWN_MESSAGE_HANDLER": function (self, context, callback) {
                    _this.controller.process("UNKNOWN_MESSAGE_HANDLER", context, callback);
                },
                "SMALLTALK_EVENT_HANDLER": function (self, context, callback) {
                    _this.controller.smallTalkEventHandler(context, callback);
                },
                "GUIDE_EXAMPLES_HANDLER": function (self, context, callback) {
                    _this.controller.getGuideExample(context, callback);
                },
                "CONTEXT_DATA_BUILDER": function (self, context, callback) {
                    _this.controller.getCartInfo(context, function (response) {
                        if (callback) {
                            callback(response);
                        }
                    });
                },
                "CONFIRMATION_REJECT_HANDLER": function (self, context, callback) {
                    _this.controller.confirmationRejectHandler(context, callback);
                },
                "L1_AGENT_HANDLER": function (self, context, callback) {
                    _this.controller.L1AgentHandler(context, callback);
                }
            }

        }
    }
    return mapping;
}

CategoryIntentMapService.prototype.handleChoice = function (info, callback) {
    var ticketDetails = info.ticketDetails;
    var choice = info.choice;
    var context = info.context;
    switch (choice) {
        case "CATEGORY":
            this.controller.process("BUTTON", info, callback);
            break;
        case "CONFIRMATION":
            this.controller.process("BUTTON", info, callback);
            break;
        case "CHANGE_DETAIL":
            this.controller.changeDetail(info, info.context.value, callback);
            break;
        case "PROBLEM":
            this.controller.process("BUTTON", info, callback);
            break;
        case "PROBLEM_CATEGORY":
            this.controller.process("BUTTON", info, callback);
            break;
        case "PRODUCT_TYPE":
            this.controller.process("BUTTON", info, callback);
            break;
        case "MODEL_NO":
            this.controller.process("BUTTON", info, callback);
            break;
        case "SYMPTOM":
            this.controller.process("BUTTON", info, callback);
            break;
        default:
            callback(null);
            break;
    }
}

CategoryIntentMapService.prototype.handleForm = function (context, callback) {
    switch (context.formID) {
        case "ADDRESS":
            this.controller.updateAddress(context, callback);
            break;
        default:
            callback(dataPacketService.createTextPacket("Sorry, I didn't understand that!"));
            break;
    }
}