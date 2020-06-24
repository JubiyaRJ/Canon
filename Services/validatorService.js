var {
    wordsToNumbers
} = require('words-to-numbers');
var dataPacketService = require("poca-common").dataPacketService;
var ComplaintRegisterService = require("./complaintRegisterService");
var TonerRequestService = require("./tonerRequestService");
var CanonUtility = require("../Utility/canonUtils");
var Utility = require("../Utility/utils");
var ModelNoDecideQuestion = require("./modelNoDecideQuestionservice")
var ComplaintRegisterService = require("./complaintRegisterService");
var TonerRequestService = require("./tonerRequestService");
var customerDetails = require("../Services/customerDetails");
var InsightEngineService = require("./insightEngineService")

var ValidatorService = function (info) {
    this.logger = info.logger;
    this.ticketManagementService = info.ticketManagementService;
    this.complaintRegisterService = new ComplaintRegisterService(info.config, info.logger);
    this.tonerRequestService = new TonerRequestService(info.config, info.logger);
    this.canonUtility = new CanonUtility(info.config, info.logger);
    this.utility = new Utility(info.config, info.logger);
    this.modelNoDecideQuestion = new ModelNoDecideQuestion(info.config, info.logger);
    this.complaintService = new ComplaintRegisterService(info.config, info.logger);
    this.tonerRequest = new TonerRequestService(info.config, info.logger);
    this.customerDetails = new customerDetails(info.config, info.logger);
    this.insightEngineService = new InsightEngineService(info.config, info.logger);

}
module.exports = ValidatorService;

ValidatorService.prototype.validate = function (res, currentState, _context, callback) {
    let id = res.ID;
    let value = res.value;
    switch (id) {
        case "PRODUCT_TYPE":
            this.productType(value, _context, currentState, callback);
            break;
        case "MODEL_NUMBER":
            this.modelNumber(value, _context, currentState, callback);
            break;
        case "CATEGORY":
            this.category(value, _context, currentState, callback);
            break;
        case "SERIAL_NO":
            this.serialNumber(value, _context, currentState, callback);
            break;
        case "ENTITY_NAME":
            this.entityName(value, _context, currentState, callback);
            break;
        case "SERIAL_NO_CNF":
            this.serialNumbercnf(value, _context, currentState, callback);
            break;
        case "OPEN_TICKET":
            this.openTicket(value, _context, currentState, callback);
            break;
        case "PROBLEM_CATEGORY":
            this.problemCategory(value, _context, currentState, callback);
            break;
        case "SYMPTOM":
            this.symptom(value, _context, currentState, callback);
            break;
        case "PROBLEM":
            this.problem(value, _context, currentState, callback);
            break;
        case "WARRANTY":
            this.warranty(value, _context, currentState, callback);
            break;
        case "METER_READING":
            this.meterReading(value, _context, currentState, callback);
            break;
        case "TONER_COLOR":
            this.tonerColor(value, _context, currentState, callback);
            break;
        case "LOCALITY_PINCODE":
            this.localityPincode(value, currentState, _context, callback);
            break;
        case "LOCALITY":
            this.locality(value, currentState, _context, callback);
            break;
        case "NAME":
            this.name(value, _context, currentState, callback);
            break;
        case "ADDRESS":
            this.address(value, _context, currentState, callback);
            break;
        case "PINCODE":
            this.pincode(value, _context, currentState, callback);
            break;
        case "DOOR_NO":
            this.doorNo(value, _context, currentState, callback);
            break;
        case "BUILDING_NO_CNF":
            this.buildingNoCNF(value, _context, currentState, callback);
            break;
        case "STREET_NAME":
            this.streetName(value, _context, currentState, callback);
            break;
        case "STREET_NAME_CNF":
            this.streetNameCnf(value, _context, currentState, callback);
            break;
        case "PINCODE_CNF":
            this.pincodeCnf(value, _context, currentState, callback);
            break;
        case "ADDRESS_CNF":
            this.addressCnf(value, _context, currentState, callback);
            break;
        case "NAME_CNF":
            this.nameCnf(value, _context, currentState, callback);
            break;
        case "MOBILE_NO":
            this.mobileNumber(value, _context, currentState, callback);
            break;
        case "MOBILE_NUM_CNF":
            this.mobileNumberCnf(value, _context, currentState, callback);
            break;
        case "FEEDBACK":
            this.feedBack(value, _context, currentState, callback);
            break;
        case "CONFIRMATION":
            this.finalConfirmation(value, _context, currentState, callback);
            break;
        case "REGISTER_SUMMARY":
            this.registerSummary(value, _context, currentState, callback);
            break;
        case "COMPLETED":
            this.completed(_context, callback);
            break;
        case "CONFIRMATION_HANDLER":
            this.confirmation(value, callback);
            break;
    }
}

ValidatorService.prototype.reject = function (callback) {
    callback({
        status: "REJECTED"
    });
}

ValidatorService.prototype.accept = function (callback) {
    callback({
        status: "ACCEPTED"
    });
}

ValidatorService.prototype.acceptValue = function (value, callback) {
    callback({
        status: "ACCEPTED",
        value: value
    });
}

ValidatorService.prototype.category = function (value, _context, currentState, callback) {
    var _this = this;
    if (value != "") {
        var details = this.canonUtility.categoryValidate(value);
        if (details.status) {
            this.setValues(details.value, currentState, _context, function () {
                _this.resetL1Confirm(_context.ticketDetails.context)
                _this.accept(callback);
            });
        } else {
            this.reject(callback);
        }
    } else {
        this.reject(callback);
    }
}

ValidatorService.prototype.productType = function (value, _context, currentState, callback) {
    var _this = this;
    if (value != "") {
        var details = this.canonUtility.productValidate(value);
        if (details.status) {
            this.setValues(details.value, currentState, _context, function () {
                _this.resetL1Confirm(_context.ticketDetails.context)
                _this.accept(callback);
            });
        } else {
            this.reject(callback);
        }
    } else {
        this.reject(callback);
    }
}

function getMatches(values) {
    var res = [];
    for (var i = 0; i < values.length; i++) {
        if (!res.includes(values[i].target)) {
            res.push(values[i].target);
        }
    }
    return res;
}

ValidatorService.prototype.buildSerialNum_Qtree = function (serial, options, _context, callback) {
    var context = _context.ticketDetails.context;
    var QTree = this.modelNoDecideQuestion.buildQuestionTree(options, 3);
    context.categoryContext.serialNoDecideQuestionTree = QTree;
    this.updateContext(_context, callback);
}

ValidatorService.prototype.serialNumber = function (value, _context, currentState, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    if (context.categoryContext.current_order.tempSerialnumberfst != '' && context.categoryContext.current_order.tempSerialnumberFlag) {
        var res = _this.canonUtility.serialDigitValid(value);
        if (res.status) {
            _this.serialConcat(res.value, _context, callback);
        } else {
            resetTempValues(context.categoryContext);
            _this.reject(callback);
        }
    } else if (_context.media != '') {
        this.insightEngineService.getSerialNoFromImage(_context.media[0].data, function (res) {
            if (res.status && res.serialNo != '') {
                _this.serialCheck(res.serialNo, _context, currentState, callback)
            } else if (value != "") {
                _this.serialCheck(value, _context, currentState, callback)
            } else {
                _this.reject(callback);
            }
        });
    } else if (value != '') {
        _this.serialCheck(value, _context, currentState, callback);
    } else {
        _this.reject(callback)
    }
}

ValidatorService.prototype.modelNumber = function (value, _context, currentState, callback) {
    this.reject(callback)
}

ValidatorService.prototype.serialCheck = function (value, _context, currentState, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    this.canonUtility.serial(_context.email, _context.ticketDetails.ticketID, value, function (details) {
        if (details.status) {
            if (_context.email.includes('::guest:WHATSAPP')) {
                context.categoryContext.noMatchFlag = true;
                _this.setSerialNumber(details.value, _context, currentState, function () {
                    _this.resetL1Confirm(context);
                    _this.accept(callback);
                })
            } else {
                _this.complaintRegisterService.checkSerialNumberStatus(details.value, _this.canonUtility.productChange(context.categoryContext.current_order.productType), function (res) {
                    context.categoryContext.noMatchFlag = res.status;
                    if (res.status) {
                        if (res.data.matchType == 'EXACT_MATCH') {
                            _this.setSerialNumber(res.data.data[0].target, _context, currentState, function () {
                                _this.resetL1Confirm(context);
                                _this.accept(callback);
                            })
                        } else if (res.data.matchType == 'NEAR_MATCH') {
                            resMatches = getMatches(res.data.data);
                            _this.resetL1Confirm(context)
                            if (resMatches.length == 1) {
                                _this.setSerialNumber(resMatches[0], _context, currentState, function () {
                                    _this.acceptValue(resMatches[0], callback);
                                })
                            } else if (_context.email.includes("::guest:WHATSAPP:")) {
                                _this.validateSerialNumber(details.value, currentState, _context, callback);
                            } else if (_this.canonUtility.lastDigit(resMatches).status) {
                                context.categoryContext.current_order.tempSerialnumberfst = _this.canonUtility.lastDigit(resMatches).value1[0];
                                context.categoryContext.current_order.tempSerialnumberArray = _this.canonUtility.lastDigit(resMatches).value2;
                                context.categoryContext.current_order.tempSerialnumberFlag = true;
                                _this.updateContext(_context, function () {
                                    _this.reject(callback);
                                });
                            } else if (resMatches.length <= 5) {
                                _this.setSerialMatches(resMatches, _context, function () {
                                    _this.buildSerialNum_Qtree(details.value, resMatches, _context, function () {
                                        var question = _this.modelNoDecideQuestion.getFirstDecisionQuestion(context.categoryContext.serialNoDecideQuestionTree);
                                        context.categoryContext.Squestion = question;
                                        _this.updateContext(_context, function () {
                                            _this.reject(callback);
                                        });
                                    });
                                });
                            } else {
                                _this.reject(callback);
                            }
                        } else {
                            _this.reject(callback);
                        }
                    } else {
                        _this.validateSerialNumber(details.value, currentState, _context, callback)
                    }
                });
            }
        } else {
            _this.reject(callback);
        }
    })
}

ValidatorService.prototype.validateSerialNumber = function (value, currentState, _context, callback) {
    var _this = this;
    var productType = _context.ticketDetails.context.categoryContext.current_order.productType;
    var category = _context.ticketDetails.context.categoryContext.current_order.category;
    var categoryType = category == 'Toner Booking' ? 'toner' : 'service'
    var productFlag = (productType == 'Multi-function Devices') ? true : false;
    if (productFlag) {
        this.customerDetails.validateSerialNumberProductionCopier(value, categoryType, function (result) {
            if (result.status && !result.res.resultCode == 'invalidSerialNo') {
                _this.setSerialNumber(value, _context, currentState, function () {
                    _this.accept(callback);
                });
            } else if (!result.status && result.res == 'unable to connect ') {
                _context.ticketDetails.context.categoryContext.serverBusy = true;
                _this.updateContext(_context, function () {
                    _this.reject(callback);
                })
            }
            else {
                _context.ticketDetails.context.categoryContext.validateSerial = true;
                _this.updateContext(_context, function () {
                    _this.reject(callback);
                })
            }
        });
        return;
    } else {
        this.customerDetails.validateSerialNumberServiceEdge(value, function (result) {
            if (!result.status && (result.message == 'invalid serial number' || result.message == 'No data is avilable for this serial number')) {
                _context.ticketDetails.context.categoryContext.validateSerial = true;
                _this.updateContext(_context, function () {
                    _this.reject(callback);
                })
            } else if (!result.status && (result.message == "Sorry! You are not authorized to access this Service" || result.message == 'unable to connect to server ')) {
                _context.ticketDetails.context.categoryContext.serverBusy = true;
                _this.updateContext(_context, function () {
                    _this.reject(callback);
                })
            } else {
                _this.setSerialNumber(value, _context, currentState, function () {
                    _this.acceptValue(value, callback);
                });
            }
        });
    }
}

ValidatorService.prototype.validateSerialNumberCnf = function (value, currentState, _context, callback) {
    var _this = this;
    var productType = _context.ticketDetails.context.categoryContext.current_order.productType;
    var category = _context.ticketDetails.context.categoryContext.current_order.category;
    var categoryType = category == 'Toner Booking' ? 'toner' : 'service'
    var productFlag = (productType == 'Multi-function Devices') ? true : false;
    if (productFlag) {
        this.customerDetails.validateSerialNumberProductionCopier(value, categoryType, function (result) {
            if (result.status && !result.res.resultCode == 'invalidSerialNo') {
                _this.setSerialNumber(value, _context, currentState, function () {
                    _this.reject(callback);
                });
            } else if (!result.status && result.res == 'unable to connect ') {
                _context.ticketDetails.context.categoryContext.serverBusy = true;
                _this.updateContext(_context, function () {
                    _this.reject(callback);
                })
            }
            else {
                _context.ticketDetails.context.categoryContext.validateSerial = true;
                _this.updateContext(_context, function () {
                    _this.reject(callback);
                })
            }
        });
        return;
    } else {
        this.customerDetails.validateSerialNumberServiceEdge(value, function (result) {
            if (!result.status && (result.message == 'invalid serial number' || result.message == 'No data is avilable for this serial number')) {
                _context.ticketDetails.context.categoryContext.validateSerial = true;
                _this.updateContext(_context, function () {
                    _this.reject(callback);
                })
            } else if (!result.status && (result.message == "Sorry! You are not authorized to access this Service" || result.message == 'unable to connect to server ')) {
                _context.ticketDetails.context.categoryContext.serverBusy = true;
                _this.updateContext(_context, function () {
                    _this.reject(callback);
                })
            } else {
                _this.setSerialNumber(value, _context, currentState, function () {
                    _this.reject(callback);
                });
            }
        });
    }
}

ValidatorService.prototype.serialConcat = function (serValue, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context.categoryContext;
    if (context.current_order.tempSerialnumberArray.includes(serValue)) {
        serValue = context.current_order.tempSerialnumberfst + '' + serValue;
        this.setSerialNumber(serValue, _context, 'SERIAL_NO', function () {
            _this.acceptValue(serValue, callback);
        });
    } else {
        resetTempValues(context);
        _this.reject(callback);
    }
}

ValidatorService.prototype.setSerialMatches = function (value, _context, callback) {
    _context.ticketDetails.context.categoryContext.current_order.serialNumberMatches = value;
    this.updateContext(_context, callback);
}

ValidatorService.prototype.setSerialNumber = function (value, _context, currentState, callback) {
    var _this = this;
    count = _context.ticketDetails.context.categoryContext.currentState.count;
    context = _context.ticketDetails.context.categoryContext.current_order;
    context.serialNumber = value;
    resetTempValues(_context.ticketDetails.context.categoryContext);
    resetSerialValues(_context.ticketDetails.context);
    this.setAnalyticData(currentState, '', null, count, _context, function () {
        if (context.productType == 'Multi-function Devices') {
            _this.updateContext(_context, function () {
                _this.setApIValues(context.serialNumber, _context, callback);
            });
        } else {
            _this.updateContext(_context, callback);
        }
    })
}

ValidatorService.prototype.setApIValues = function (serialNo, _context, callback) {
    var _this = this;
    context = _context.ticketDetails.context.categoryContext;
    var categoryType = context.current_order.category == 'Toner Booking' ? 'toner' : 'service'
    this.customerDetails.validateSerialNumberProductionCopier(serialNo, categoryType, function (result) {
        if (result.status) {
            context.resultCode = result.res.resultCode;
            if (result.hasOwnProperty("res") && result.res.hasOwnProperty("customerName")) {
                customerName = (result.res.customerName).replace(/\./g, '');
                context.current_order.entityName = customerName;
            }
            if (result.hasOwnProperty("res") && result.res.hasOwnProperty("resultCode") && result.res.resultCode == 'contractExpire') {
                context.contractStatus = false;
            }
            if (result.hasOwnProperty("res") && result.res.hasOwnProperty("lastMeterReading")) {
                context.lastMeterReading = result.res.lastMeterReading;
            }
            if (result.hasOwnProperty("res") && result.res.hasOwnProperty("tonerColorsDetail")) {
                context.tonerColorDetails = result.res.tonerColorsDetail;
            }
        } else {
            _context.ticketDetails.context.categoryContext.serverBusy = true;
        }
        _this.updateContext(_context, callback);
    })
}

ValidatorService.prototype.setModel = function (value, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context.categoryContext.current_order;
    context.modelName = value;
    var currentState = _context.ticketDetails.context.categoryContext.currentState
    this.setAnalyticData(currentState.state, '', null, currentState.count, _context, function () {
        _this.updateContext(_context, function () {
            _this.setComplaintDetails(context.serialNumber, context.modelNumber, _context, callback)
        });
    });
}

ValidatorService.prototype.setComplaintDetails = function (serialNumber, modelNumber, _context, callback) {
    var _this = this;
    this.customerDetails.getComplaintDetails(serialNumber, modelNumber, function (res) {
        if (res.status) {
            _context.ticketDetails.context.categoryContext.openComplaintDetails = res;
        } else {
            if (res.message == 'unable to connect to server ') {
                _context.ticketDetails.context.categoryContext.complaintAPIFail = true;
            } else if (res.message == 'no call details found for this serial number ') {
                _context.ticketDetails.context.categoryContext.openComplaintDetails.OpenComplaint = false;
            }
        }
        _this.updateContext(_context, callback);
    });
}

ValidatorService.prototype.setSymptom = function (symptom, _context, callback) {
    var _this = this;
    _context.ticketDetails.context.categoryContext.current_order.symptomCode = symptom;
    _this.updateContext(_context, callback);
}

function resetSerialValues(context) {
    context.categoryContext.serialNoDecideQuestionTree = null;
    context.categoryContext.Squestion = null;
    return;
}

function resetTempValues(context) {
    context.current_order.tempSerialnumberArray = [];
    context.current_order.tempSerialnumberFlag = false;
    context.validateSerial = false;
    context.serverBusy = false;
    context.current_order.tempSerialnumberfst = '';
    return;
}

ValidatorService.prototype.openTicket = function (value, _context, currentState, callback) {
    this.reject(callback);
}

ValidatorService.prototype.setTicketStatus = function (res, _context, callback) {
    _context.ticketDetails.context.categoryContext.current_order.requestStatus = res;
    this.updateContext(_context, callback);
}

ValidatorService.prototype.name = function (value, _context, currentState, callback) {
    var _this = this;
    if (currentState == 'NAME') {
        if (!_context.ticketDetails.context.categoryContext.yesnoFlag) {
            _context.ticketDetails.context.categoryContext.yesnoFlag = true;
        }
        if (value != "" && _context.ticketDetails.context.categoryContext.flagCNF) {
            var details = this.canonUtility.findName(value, _context.email);
            if (details.status) {
                this.setValues(details.value, currentState, _context, function () {
                    _this.resetL1Confirm(_context.ticketDetails.context);
                    _this.acceptValue(details.value, callback);
                })
            } else {
                this.reject(callback);
            }
        } else {
            this.reject(callback);
        }
    } else {
        this.reject(callback);
    }
}

ValidatorService.prototype.symptom = function (value, _context, currentState, callback) {
    var _this = this;
    if (value != '') {
        var details = this.canonUtility.symptomIdentify(value);
        if (details.status) {
            this.setSymptom(details.value, _context, function () {
                _this.resetL1Confirm(_context.ticketDetails.context);
                _this.acceptValue(details.value, callback);
            })
        } else {
            this.reject(callback);
        }
    } else {
        this.reject(callback);
    }
}

ValidatorService.prototype.feedBack = function (value, _context, currentState, callback) {
    var _this = this;
    if (value != '') {
        var details = this.canonUtility.feedBackValidate(value);
        if (details.status) {
            this.setValues(details.value, currentState, _context, function () {
                _this.acceptValue(details.value, callback);
            })
        } else {
            this.updateContext(_context, function () {
                _this.reject(callback);
            })
        }
    } else {
        this.updateContext(_context, function () {
            _this.reject(callback);
        })
    }
}

ValidatorService.prototype.entityName = function (value, _context, currentState, callback) {
    this.reject(callback);
}

ValidatorService.prototype.address = function (value, _context, currentState, callback) {
    var _this = this
    var context = _context.ticketDetails.context.categoryContext.current_order;
    var pincode = (_context.ticketDetails.context.categoryContext.current_order.localityPincode != 0) ? ', ' + _context.ticketDetails.context.categoryContext.current_order.localityPincode : '';
    if (!_context.ticketDetails.context.categoryContext.yesnoFlag) {
        _context.ticketDetails.context.categoryContext.yesnoFlag = true;
    }
    if (_context.email.includes("::guest:WHATSAPP") && _context.ticketDetails.context.categoryContext.flagCNF) {
        value = value.trim();
        if (value.includes("#")) {
            value = value.replace("#", '')
        }
        if (/^\d+$/.test(value))
            value = this.utility.titleCase(context.locality) + ", " + value;
        if (!checkPincode(value))
            value = value + pincode;
        this.utility.findAddress(value, 'address', function (res) {
            console.log("cominggg", res)
            if (res && !isEmpty(res) && res.hasOwnProperty("formatted_address")) {
                _this.updateAddressCore(currentState, value, _context, function () {
                    _this.accept(callback);
                })
            } else {
                _this.reject(callback)
            }
        });
    } else
        this.reject(callback);
}

function checkPincode(value) {
    value = value.includes('-') ? replaceAll(value, '-', ',') : value;
    value = value.includes(',') ? replaceAll(value, ',', ' ') : value;
    value = value.split(' ');
    var out = false;
    value.forEach(ele => {
        ele = ele.trim()
        if (((/\d/).test(ele)) && (ele.length == 6)) {
            out = true;
        }
    })
    return out;
}

ValidatorService.prototype.finalConfirmation = function (value, _context, currentState, callback) {
    this.reject(callback);
}

ValidatorService.prototype.setAddress = function (value, _context, currentState, callback) {
    var _this = this;
    count = _context.ticketDetails.context.categoryContext.currentState.count;
    _this.updateAddressCore(currentState, value, _context, function () {
        _this.accept(callback);
    });
}

ValidatorService.prototype.problem = function (value, _context, currentState, callback) {
    context = _context.ticketDetails.context.categoryContext;
    var _this = this;
    if (value != "") {
        var details = this.canonUtility.findProblem(value);
        if (details.status) {
            if (details.value.length == 1) {
                this.setValues(details.value[0], currentState, _context, function () {
                    _this.resetL1Confirm(_context.ticketDetails.context);
                    _this.acceptValue(details.value[0], callback);
                })
            } else {
                this.setProblemMatches(details.value, _context, function () {
                    _this.reject(callback);
                })
            }
        } else {
            this.reject(callback);
        }
    } else {
        this.reject(callback);
    }
}

ValidatorService.prototype.problemCategory = function (value, _context, currentState, callback) {
    var _this = this;
    if (value != "") {
        var details = this.canonUtility.findProblemCategory(value);
        if (details.status) {
            this.setValues(details.value, currentState, _context, function () {
                _this.resetL1Confirm(_context.ticketDetails.context);
                _this.acceptValue(details.value, callback);
            })
        } else {
            this.reject(callback);
        }
    } else {
        this.reject(callback);
    }
}

ValidatorService.prototype.warranty = function (value, _context, currentState, callback) {
    var _this = this;
    var count = _context.ticketDetails.context.categoryContext.currentState.count;
    this.setAnalyticData(currentState, '', null, count, _context, function () {
        _this.updateContext(_context, function () {
            _this.reject(callback);
        });
    })
}

ValidatorService.prototype.setProblemMatches = function (value, _context, callback) {
    _context.ticketDetails.context.categoryContext.current_order.problems = value;
    this.updateContext(_context, callback);
}

function resetProblemArray(_context) {
    _context.ticketDetails.context.categoryContext.current_order.problems = [];
};

ValidatorService.prototype.meterReading = function (value, _context, currentState, callback) {
    var _this = this;
    var lastMeterReading = _context.ticketDetails.context.categoryContext.lastMeterReading;
    if (value != '') {
        var details = this.canonUtility.findMeterReading(value, lastMeterReading);
        if (details.status) {
            this.setValues(details.value, currentState, _context, function () {
                _this.resetL1Confirm(_context.ticketDetails.context);
                _this.accept(callback);
            });
        } else {
            this.reject(callback);
        }
    } else {
        this.reject(callback);
    }
}

ValidatorService.prototype.pincode = function (value, _context, currentState, callback) {
    var _this = this;
    if (value != '') {
        var details = this.utility.pincodeVerify(value);
        if (details.status) {
            this.pincodeValidation(details.value, _context, function (res) {
                if (res.status) {
                    _this.setValues(res.data, currentState, _context, function () {
                        _this.resetL1Confirm(_context.ticketDetails.context);
                        _this.accept(callback);
                    });
                } else {
                    _this.reject(callback);
                }
            });
        } else {
            this.reject(callback);
        }
    } else {
        this.reject(callback);
    }
}

ValidatorService.prototype.updateAddressCore = function (currentState, address, _context, callback) {
    var _this = this
    var finAddress = '';
    if (address instanceof Object) {
        if (address.hasOwnProperty("name")) {
            finAddress = address.name;
        } else {
            for (var key in address) {
                if (finAddress != '') {
                    finAddress += ', ';
                }
                finAddress += address[key];
            }
        }
    } else {
        finAddress = address;
    }
    var count = _context.ticketDetails.context.categoryContext.currentState.count;
    this.setAnalyticData(currentState, '', null, count, _context, function () {
        _context.ticketDetails.context.categoryContext.flagCNF = false;
        _context.ticketDetails.context.categoryContext.yesnoFlag = false;
        _context.ticketDetails.context.categoryContext.current_order.address = finAddress;
        _this.updateContext(_context, callback);
    })
}

ValidatorService.prototype.doorNo = function (value, _context, currentState, callback) {
    var _this = this;
    if (value != '') {
        var details = this.canonUtility.doorNumberDetect(value);
        if (details.status) {
            this.setValues(details.value, currentState, _context, function () {
                _this.resetL1Confirm(_context.ticketDetails.context);
                _this.accept(callback);
            });
        } else {
            this.reject(callback);
        }
    } else {
        this.reject(callback);
    }
}

ValidatorService.prototype.streetName = function (value, _context, currentState, callback) {
    var _this = this;
    if (_context.hasOwnProperty("parameters") && _context.parameters.STREET_NAME == '') {
        value = _context.query;
    }
    if (value != '') {
        var details = this.canonUtility.streetNameArange(value);
        if (details.status) {
            this.setStreetName(details.value, _context, currentState, function () {
                _this.resetL1Confirm(_context.ticketDetails.context);
                _this.acceptValue(details.value, callback);
            });
        } else {
            this.reject(callback);
        }
    } else {
        this.reject(callback);
    }
}

ValidatorService.prototype.setStreetName = function (value, _context, currentState, callback) {
    var _this = this;
    var context = _context.ticketDetails.context.categoryContext;
    count = _context.ticketDetails.context.categoryContext.currentState.count;
    _context.ticketDetails.context.categoryContext.AddressDetails.streetName = value;
    if (_context.email.includes("::guest:WHATSAPP:")) {
        this.setAnalyticData("STREET_NAME", '', null, count, _context, function () {
            _this.updateAddressCore(currentState, _this.canonUtility.addressFormation(context.AddressDetails), _context, callback);
        });
    } else {
        this.setAnalyticData("STREET_NAME", '', null, count, _context, function () {
            _this.updateContext(_context, callback);
        });
    }
}

ValidatorService.prototype.tonerColor = function (value, _context, currentState, callback) {
    var _this = this;
    if (value != '') {
        var details = this.canonUtility.findTonerColor(value);
        if (details.status) {
            this.setValues(details.value, currentState, _context, function () {
                _this.resetL1Confirm(_context.ticketDetails.context);
                _this.accept(callback);
            });
        } else {
            this.reject(callback);
        }
    } else {
        this.reject(callback);
    }
}

ValidatorService.prototype.setTonerColor = function (value, currentState, _context, callback) {
    var _this = this;
    count = _context.ticketDetails.context.categoryContext.currentState.count;
    _context.ticketDetails.context.categoryContext.current_order.tonerColor = value;
    this.setAnalyticData(currentState, '', null, count, _context, function () {
        _this.updateContext(_context, callback);
    })
}

ValidatorService.prototype.localityPincode = function (value, currentState, _context, callback) {
    var _this = this;
    if (value != '') {
        var details = this.utility.pincodeVerify(value);
        if (details.status) {
            this.getAvailableLocality(details.value, _context, function (res) {
                if (res) {
                    _this.pincodeValidation(details.value, _context, function (res) {
                        if (res.status) {
                            _this.setValues(_this.canonUtility.pincodeSeperator(res.data.formatted_address), currentState, _context, function () {
                                _this.resetL1Confirm(_context.ticketDetails.context);
                                _this.accept(callback);
                            });
                        } else {
                            _this.reject(callback);
                        }
                    });
                } else {
                    _this.reject(callback);
                }
            });
        } else {
            this.reject(callback);
        }
    } else {
        this.reject(callback);
    }
}

ValidatorService.prototype.locality = function (value, currentState, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context.categoryContext;
    this.canonUtility.localityIdentify(value, arrangeLocalityAndCode(context.availableLocality), function (res) {
        if (res.status) {
            _this.setLocality(res.localityName, _context, function () {
                _this.setValues(res.localityCode, currentState, _context, function () {
                    _this.accept(callback);
                });
            });
        } else {
            _this.reject(callback);
        }
    });
}

ValidatorService.prototype.setLocality = function (value, _context, callback) {
    var context = _context.ticketDetails.context.categoryContext;
    context.current_order.locality = value;
    this.updateContext(_context, callback);
}

function arrangeLocalityAndCode(availLocality) {
    var arr = [];
    for (var i = 0; i < availLocality.length; i++) {
        arr.push({
            "locality_name": availLocality[i].locality_name,
            "locality_code": availLocality[i].locality_code
        });
    }
    return arr;
}

ValidatorService.prototype.getAvailableLocality = function (pincode, _context, callback) {
    var _this = this;
    this.customerDetails.getLocality(pincode, function (res) {
        if (res) {
            _this.setAvailableLocality(res, _context, function () {
                callback(true);
            });
        } else {
            callback(false);
        }
    })
}

ValidatorService.prototype.setAvailableLocality = function (val, _context, callback) {
    var context = _context.ticketDetails.context.categoryContext;
    context.availableLocality = val;
    this.updateContext(_context, callback);
}

ValidatorService.prototype.pincodeValidation = function (pincode, _context, callback) {
    var result = {
        status: false,
        data: {}
    }
    this.utility.findAddress(pincode, 'pincode', function (res) {
        if (res && !isEmpty(res) && res.hasOwnProperty("formatted_address") && res.formatted_address.includes(pincode)) {
            result.status = true;
            result.data = res
            callback(result)
        } else {
            callback(result);
        }
    });
}

ValidatorService.prototype.completed = function (_context, callback) {
    this.accept(callback);
}

ValidatorService.prototype.confirmation = function (value, callback) {
    callback(true);
}

ValidatorService.prototype.updateContext = function (_context, callback) {
    this.ticketManagementService.updateTicketContext(_context.email, _context.ticketDetails.ticketID, _context.ticketDetails.context, callback);
}

function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

ValidatorService.prototype.mobileNumber = function (value, _context, currentState, callback) {
    var _this = this;
    if (value != '') {
        var details = this.utility.mobileNumberVerify(value);
        if (details.status) {
            this.setValues(details.value, currentState, _context, function () {
                _this.resetL1Confirm(_context.ticketDetails.context);
                _this.accept(callback);
            });
        } else {
            this.reject(callback);
        }
    } else {
        this.reject(callback);
    }
}

ValidatorService.prototype.buildingNoCNF = function (value, _context, currentState, callback) {
    var _this = this;
    if (value != "") {
        var cnf = this.canonUtility.buildingNumberCnf(value);
        var details = this.canonUtility.doorNumberDetect(value);
        if (cnf == "no") {
            _this.accept(callback);
        } else if (details.status) {
            this.setValues(details.value, currentState, _context, function () {
                _this.resetL1Confirm(_context.ticketDetails.context);
                _this.accept(callback);
            });
        } else {
            this.reject(callback);
        }
    } else {
        this.reject(callback);
    }
}

function replaceAll(target, search, replacement) {
    target = target.toString();
    return target.split(search).join(replacement);
};

ValidatorService.prototype.serialNumbercnf = function (value, _context, currentState, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    if (value != "") {
        this.canonUtility.serial(_context.email, _context.ticketDetails.ticketID, value, function (details) {
            _this.complaintRegisterService.checkSerialNumberStatus(details.value, _this.canonUtility.productChange(context.categoryContext.current_order.productType), function (res) {
                if (details.status) {
                    if (res.status) {
                        if (res.data.matchType == 'EXACT_MATCH') {
                            _this.setSerialNumber(res.data.data[0].target, _context, 'SERIAL_NO_CNF', function () {
                                _this.resetL1Confirm(context)
                                _this.reject(callback);
                            })
                        } else if (res.data.matchType == 'NEAR_MATCH') {
                            resMatches = getMatches(res.data.data);
                            _this.resetL1Confirm(context)
                            if (resMatches.length == 1) {
                                _this.setSerialNumber(resMatches[0], _context, currentState, function () {
                                    _this.reject(callback);
                                })
                            } else if (_context.email.includes("::guest:WHATSAPP:")) {
                                _this.validateSerialNumberCnf(details.value, currentState, _context, callback);
                            }
                        } else {
                            _this.reject(callback);
                        }
                    } else {
                        _this.validateSerialNumberCnf(details.value, currentState, _context, callback);
                    }
                } else {
                    _this.reject(callback);
                }
            })
        })
    } else {
        this.reject(callback);
    }
}

ValidatorService.prototype.streetNameCnf = function (value, _context, currentState, callback) {
    var _this = this;
    if (value != '') {
        var details = this.canonUtility.streetNameArange(value);
        if (details.status) {
            this.setStreetName(details.value, _context, currentState, function () {
                _this.resetL1Confirm(_context.ticketDetails.context);
                _this.reject(callback);
            });
        } else {
            this.reject(callback);
        }
    } else {
        this.reject(callback);
    }
}

ValidatorService.prototype.addressCnf = function (value, _context, currentState, callback) {
    // var _this = this
    // var context = _context.ticketDetails.context.categoryContext.current_order;
    // var pincode = (_context.ticketDetails.context.categoryContext.current_order.localityPincode != 0) ? ', ' + _context.ticketDetails.context.categoryContext.current_order.localityPincode : ''
    // if (_context.email.includes("::guest:WHATSAPP")) {
    //     value = value.trim();
    //     if (/^\d+$/.test(value))
    //         value = this.utility.titleCase(context.locality) + ", " + value;
    //     if (!checkPincode(value))
    //         value = value + pincode;
    //     this.utility.findAddress(value,'address', function (res) {
    //         if (res && !isEmpty(res) && res.hasOwnProperty("formatted_address")) {
    //             _this.updateAddressCore(currentState, value, _context, function () {
    //                 _this.reject(callback);
    //             })
    //         } else {
    //             _this.reject(callback)
    //         }
    //     });
    // } else
    _context.ticketDetails.context.categoryContext.yesnoFlag = true;
    this.reject(callback);
}

ValidatorService.prototype.pincodeCnf = function (value, _context, currentState, callback) {
    var _this = this;
    if (value != '') {
        var details = this.utility.pincodeVerify(value);
        if (details.status) {
            this.getAvailableLocality(details.value, _context, function (res) {
                if (res) {
                    _this.pincodeValidation(details.value, _context, function (res) {
                        if (res.status) {
                            _this.setValues(_this.canonUtility.pincodeSeperator(res.data.formatted_address), currentState, _context, function () {
                                _this.resetL1Confirm(_context.ticketDetails.context);
                                _this.reject(callback);
                            });
                        } else {
                            _this.reject(callback);
                        }
                    });
                } else {
                    _this.reject(callback);
                }
            });
        } else {
            this.reject(callback);
        }
    } else {
        this.reject(callback);
    }
}

ValidatorService.prototype.registerSummary = function (value, _context, currentState, callback) {
    this.reject(callback);
}

ValidatorService.prototype.mobileNumberCnf = function (value, _context, currentState, callback) {
    var _this = this;
    if (value != "") {
        var details = this.utility.mobileNumberVerify(value);
        if (details.status) {
            this.setValues(details.value, currentState, _context, function () {
                _this.resetL1Confirm(_context.ticketDetails.context);
                _this.reject(callback);
            });
        } else {
            this.reject(callback);
        }
    } else {
        this.reject(callback);
    }
}

ValidatorService.prototype.nameCnf = function (value, _context, currentState, callback) {
    var _this = this;
    // if (value != "") {
    //     var details = this.canonUtility.findName(value,_context.email);
    //     if (details.status) {
    //         this.setValues(details.value, currentState, _context, function () {
    //             _this.resetL1Confirm(_context.ticketDetails.context);
    //             _this.reject(callback);
    //         });
    //     } else {
    //         this.reject(callback);
    //     }
    // } else {
    _context.ticketDetails.context.categoryContext.yesnoFlag = true;
    this.reject(callback);
    // }
}

ValidatorService.prototype.setMobile = function (value, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context.categoryContext;
    count = _context.ticketDetails.context.categoryContext.currentState.count;
    context.current_order.mobileNumber = value;
    context.current_order.tempMobileNumber = value;
    if (context.categoryInitiateBot && context.current_order.serialNumber == '') {
        context.current_order.SMS_Flow_State = 'SERIAL_NO';
    } else if (context.categoryInitiateBot && context.current_order.name == '') {
        context.current_order.SMS_Flow_State = 'NAME';
    } else if (context.categoryInitiateBot && context.current_order.address == '') {
        context.current_order.SMS_Flow_State = 'ADDRESS';
    }
    this.setAnalyticData("MOBILE_NUM_CNF", '', null, count, _context, function () {
        _this.updateContext(_context, callback);
    });
}

ValidatorService.prototype.setPrefixFromVaidator = function (value, _context, callback) {
    _context.ticketDetails.context.categoryContext.prefixFromVaidator = value;
    this.updateContext(_context, callback);
}

ValidatorService.prototype.resetPrefixForValidator = function (_context, callback) {
    _context.ticketDetails.context.categoryContext.prefixFromVaidator = "";
    this.updateContext(_context, callback);
}

ValidatorService.prototype.setComplaintOptions = function (options, _context, callback) {
    _context.ticketDetails.context.categoryContext.complaintOptions = options;
    this.updateContext(_context, callback);
}

ValidatorService.prototype.userSuggestionHandling = function (value, _context, callback) {
    this.reject(value, _context, callback);
}

//Reset l1Suport confirmation
ValidatorService.prototype.resetL1Confirm = function (context) {
    context.categoryContext.isCNF.state = "";
    context.categoryContext.isCNF.status = false;
    context.categoryContext.L1SupportCount = 0;
    return;
}

ValidatorService.prototype.setAnalyticData = function (currentstate, state, userInfo, count, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context.categoryContext;
    if (userInfo) {
        if (_context.email.includes("::guest:TOLL_FREE:")) {
            context.AnalyticData.TollFreeOrWebOrAppBased = "TollFree";
        } else if (_context.email.includes("::guest:WHATSAPP")) {
            context.AnalyticData.TollFreeOrWebOrAppBased = "Whatsapp";
        } else if (_context.email.includes("::guest:TOLL_FREE_BOT:")) {
            context.AnalyticData.TollFreeOrWebOrAppBased = "TollFree_Bot";
        } else {
            context.AnalyticData.TollFreeOrWebOrAppBased = "App";
        }
        if (context.hasOwnProperty("UsageTiming")) {
            context.UsageTiming.startTime = this.getTime();
        }
    }
    if (!currentstate) {
        if (!userInfo) {
            if (_context.email.includes("::guest:TOLL_FREE:")) {
                context.AnalyticData.TollFreeOrWebOrAppBased = "TollFree";
            } else if (_context.email.includes("::guest:WHATSAPP")) {
                context.AnalyticData.TollFreeOrWebOrAppBased = "Whatsapp";
            } else if (_context.email.includes("::guest:TOLL_FREE_BOT:")) {
                context.AnalyticData.TollFreeOrWebOrAppBased = "TollFree_Bot";
            } else {
                context.AnalyticData.TollFreeOrWebOrAppBased = "App";
            }
            if (context.hasOwnProperty("UsageTiming")) {
                context.UsageTiming.startTime = this.getTime();
            }
        }
    }
    if (currentstate == 'CATEGORY') {
        context.AnalyticData.category.status = true;
        context.AnalyticData.category.count = count;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    if (currentstate == 'PROBLEM_CATEGORY') {
        context.AnalyticData.problemCategory.status = true;
        context.AnalyticData.problemCategory.count = count;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    if (currentstate == 'ENTITY_NAME') {
        context.AnalyticData.entityName.status = true;
        context.AnalyticData.entityName.count = count;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    if (state == 'L1AGENT') {
        context.AnalyticData.L1SupportRequested.status = true;
        context.AnalyticData.L1SupportRequested.reason = context.reasonForL1
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    if (currentstate == 'PRODUCT_TYPE') {
        context.AnalyticData.productType.status = true;
        context.AnalyticData.productType.count = count;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    if (currentstate == 'SERIAL_NO') {
        context.AnalyticData.serialNo.status = true;
        context.AnalyticData.serialNo.count = count;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    if (currentstate == 'PROBLEM') {
        context.AnalyticData.problem.status = true;
        context.AnalyticData.problem.count = count;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    if (currentstate == 'METER_READING') {
        context.AnalyticData.meterReading.status = true;
        context.AnalyticData.meterReading.count = count;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    if (currentstate == 'TONER_COLOR') {
        context.AnalyticData.tonerColor.status = true;
        context.AnalyticData.tonerColor.count = count;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    if (currentstate == 'NAME') {
        context.AnalyticData.name.status = true;
        context.AnalyticData.name.count = count;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    if (currentstate == 'ADDRESS') {
        context.AnalyticData.completeAddress.status = true;
        context.AnalyticData.completeAddress.count = count;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    if (currentstate == 'ADDRESS_CNF') {
        context.AnalyticData.completeAddress.status = true;
        context.AnalyticData.completeAddress.count = count;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    // if (currentstate == 'PINCODE') {
    //     context.AnalyticData.pincode.status = true;
    //     context.AnalyticData.pincode.count = count;
    //     context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    // }
    if (currentstate == 'LOCALITY_PINCODE') {
        context.AnalyticData.pincode.status = true;
        context.AnalyticData.pincode.count = count;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    if (currentstate == 'LOCALITY') {
        context.AnalyticData.locality.status = true;
        context.AnalyticData.locality.count = count;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    if (currentstate == 'WARRANTY') {
        context.AnalyticData.serviceChargeConfirm.status = true;
        context.AnalyticData.serviceChargeConfirm.count = count;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    if (currentstate == 'DOOR_NO') {
        context.AnalyticData.doorNo.status = true;
        context.AnalyticData.doorNo.count = count;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    if (currentstate == 'BUILDING_NO_CNF') {
        context.AnalyticData.buildingNo.status = true;
        context.AnalyticData.buildingNo.count = count;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    if (currentstate == 'STREET_NAME') {
        context.AnalyticData.streetName.status = true;
        context.AnalyticData.streetName.count = count;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    if (currentstate == 'MOBILE_NO') {
        context.AnalyticData.mobileNo.status = true;
        context.AnalyticData.mobileNo.count = count;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    if (currentstate == 'MODEL_NUMBER') {
        context.AnalyticData.modelNumber.status = true;
        context.AnalyticData.modelNumber.count = count;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    if (currentstate == 'FEEDBACK') {
        context.AnalyticData.feedBack.status = true;
        context.AnalyticData.feedBack.count = count;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
    }
    if (currentstate == 'REFERENCE') {
        context.AnalyticData.ReferenceNumberprovided = true;
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
        context.AnalyticData.CallHandlingTime = calculateCallHandlingTime(context.UsageTiming);
    }
    if (currentstate == 'FULFILL') {
        context.AnalyticData.CallHandlingTime = setTimes(_this, context);
        context.AnalyticData.CallHandlingTime = calculateCallHandlingTime(context.UsageTiming);
    }
    this.complaintRegisterService.updateComplaint(JSON.stringify(context.current_order), function (res) {
        _this.complaintRegisterService.updateAnalyticData(_context, _context.ticketDetails.ticketID, function () {
            _this.updateContext(_context, callback);
        })
    })
}

ValidatorService.prototype.getTime = function () {
    var d = new Date();
    return d.getTime();
}

function setTimes(_this, context) {
    context.UsageTiming.endTime = _this.getTime();
    return calculateCallHandlingTime(context.UsageTiming);
}

function calculateCallHandlingTime(UsageTiming) {
    let ms, min, sec;
    ms = UsageTiming.endTime - UsageTiming.startTime;
    min = Math.floor((ms / 1000 / 60)),
        sec = Math.floor((ms / 1000) % 60);
    return (min * 60 + sec);
}

ValidatorService.prototype.setValues = function (value, currentState, _context, callback) {
    var _this = this;
    count = _context.ticketDetails.context.categoryContext.currentState.count;
    switch (currentState) {
        case 'PRODUCT_TYPE':
            _context.ticketDetails.context.categoryContext.current_order.productType = value;
            count = count + 1;
            break;
        case 'CATEGORY':
            _context.ticketDetails.context.categoryContext.current_order.category = value;
            break;
        case 'PROBLEM_CATEGORY':
            _context.ticketDetails.context.categoryContext.current_order.problemCategory = value;
            break;
        case 'PROBLEM':
            _context.ticketDetails.context.categoryContext.current_order.problem = value;
            resetProblemArray(_context);
            break;
        case 'METER_READING':
            _context.ticketDetails.context.categoryContext.current_order.meterReading = value;
            break;
        case 'TONER_COLOR':
            _context.ticketDetails.context.categoryContext.userSpecifiedToners = value;
            break;
        case 'LOCALITY_PINCODE':
            _context.ticketDetails.context.categoryContext.current_order.localityPincode = value;
            break;
        case 'PINCODE_CNF':
            _context.ticketDetails.context.categoryContext.current_order.localityPincode = value;
            break;
        case 'LOCALITY':
            _context.ticketDetails.context.categoryContext.current_order.localityCode = value;
            break;
        case 'NAME':
            _context.ticketDetails.context.categoryContext.flagCNF = false;
            _context.ticketDetails.context.categoryContext.yesnoFlag = false;
            _context.ticketDetails.context.categoryContext.current_order.name = value;
            _context.ticketDetails.context.categoryContext.current_order.tempName = value;
            break;
        case 'NAME_CNF':
            _context.ticketDetails.context.categoryContext.flagCNF = false;
            _context.ticketDetails.context.categoryContext.yesnoFlag = false;
            _context.ticketDetails.context.categoryContext.current_order.name = value;
            _context.ticketDetails.context.categoryContext.current_order.tempName = value;
            break;
        case 'PINCODE':
            _context.ticketDetails.context.categoryContext.AddressDetails.pincode = value;
            break;
        case 'DOOR_NO':
            _context.ticketDetails.context.categoryContext.AddressDetails.doorNo = value;
            break;
        case 'BUILDING_NO_CNF':
            _context.ticketDetails.context.categoryContext.AddressDetails.buildingNo = value;
            break;
        case 'MOBILE_NO':
            _context.ticketDetails.context.categoryContext.current_order.mobileNumber = value;
            _context.ticketDetails.context.categoryContext.current_order.tempMobileNumber = value;
            break;
        case 'MOBILE_NUM_CNF':
            _context.ticketDetails.context.categoryContext.current_order.mobileNumber = value;
            _context.ticketDetails.context.categoryContext.current_order.tempMobileNumber = value;
            break;
        case 'FEEDBACK':
            _context.ticketDetails.context.categoryContext.current_order.rating = value;
    }
    this.setAnalyticData(currentState, '', null, count, _context, function () {
        _this.updateContext(_context, callback);
    })
}