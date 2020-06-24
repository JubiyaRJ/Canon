var Utility = require("../Utility/utils");
var CanonUtility = require("../Utility/canonUtils")
var ValidatePrevious = function (info, contextManager) {
    this.logger = info.logger;
    this.contextManager = contextManager;
    this.config = info.config;
    this.utility = new Utility(info.config, info.logger);
    this.canonUtility = new CanonUtility(info.config, info.logger);
    this.ticketManagementService = info.ticketManagementService;
}

module.exports = ValidatePrevious;

ValidatePrevious.prototype.validatingPreviousValues = function (_context, callback) {
    context = _context.ticketDetails.context.categoryContext;
    let currentState = this.contextManager.getRecentObj(_context).state;
    var problemCategory = _context.ticketDetails.context.categoryContext.current_order.problemCategory
    states = this.canonUtility.changeStates(currentState, context.current_order.productType, context.current_order.category, problemCategory);
    previousState = states[states.length - 1];
    this.validatingValues(previousState, _context, function (res) {
        if (res.status) {
            res["changeState"] = previousState;
        }
        res["currentState"] = currentState;
        callback(res);
    });
}

ValidatePrevious.prototype.validatingValues = function (previousState, _context, callback) {
    var result = {
        status: false,
        value: '',
        context: null
    }
    _context.resolvedQuery = replaceAll(_context.resolvedQuery, "*", '')
    var value = _context.resolvedQuery;
    result.context = _context;
    switch (previousState) {
        case "PRODUCT_TYPE":
            this.isProductTypeAvailable(value, result, _context, callback);
            break;
        case "SERIAL_NO":
            this.isSerialNumberAvailable(value, result, _context, callback);
            break;
        case "CATEGORY":
            this.isCategoryAvailable(value, result, _context, callback);
            break;
        case "TONER_COLOR":
            this.isTonerAvailable(value, result, _context, callback);
            break;
        case "METER_READING":
            this.isMeterAvailable(value, result, _context, callback);
            break;
        case "PROBLEM":
            this.isProblemAvailable(value, result, _context, callback);
            break;
        case "NAME":
            this.nameAvail(value, result, _context, callback);
            break;
        case "PROBLEM_CATEGORY":
            this.isProblemCategoryAvailable(value, result, _context, callback);
            break;
        case "LOCALITY_PINCODE":
            this.pinCodeAvail(value, result, _context, callback);
            break;
        case "MOBILE_NO":
            this.isMobileNumberAvailable(value, result, _context, callback);
            break;
        case "ADDRESS":
            this.addressAvail(value, result, _context, callback);
            break;
        default:
            callback(result)
    }
}

function replaceAll(target, search, replacement) {
    return target.split(search).join(replacement);
};

ValidatePrevious.prototype.isProductTypeAvailable = function (value, result, _context, callback) {
    var details = this.canonUtility.productValidate(value);
    if (details.status) {
        result.status = true;
        result.value = details.value;
        callback(result)
    } else {
        callback(result)
    }
}

ValidatePrevious.prototype.isSerialNumberAvailable = function (value, result, _context, callback) {
    this.canonUtility.serial(_context.email, _context.ticketDetails.ticketID, value, function (details) {
        if (details.status) {
            result.status = true;
            result.value = details.value;
            callback(result)
        } else {
            callback(result)
        }
    });
}

ValidatePrevious.prototype.isCategoryAvailable = function (value, result, _context, callback) {
    var details = this.canonUtility.categoryValidate(value);
    if (details.status) {
        result.status = true;
        result.value = details.value;
        callback(result)
    } else {
        callback(result)
    }
}

ValidatePrevious.prototype.isProblemCategoryAvailable = function (value, result, _context, callback) {
    var details = this.canonUtility.findProblemCategory(value);
    if (details.status) {
        result.status = true;
        result.value = details.value;
        callback(result)
    } else {
        callback(result)
    }
}

ValidatePrevious.prototype.isTonerAvailable = function (value, result, _context, callback) {
    var details = this.canonUtility.findTonerColor(value);
    if (details.status) {
        result.status = true;
        result.value = details.value;
        callback(result)
    } else {
        callback(result)
    }
}

ValidatePrevious.prototype.updateContext = function (_context, callback) {
    this.ticketManagementService.updateTicketContext(_context.email, _context.ticketDetails.ticketID, _context.ticketDetails.context, callback);
}

ValidatePrevious.prototype.isMeterAvailable = function (value, result, _context, callback) {
    var details = this.canonUtility.findMeterReading(value);
    if (details.status) {
        result.status = true;
        result.value = details.value;
        callback(result)
    } else {
        callback(result)
    }
}

ValidatePrevious.prototype.isProblemAvailable = function (value, result, _context, callback) {
    var details = this.canonUtility.findProblem(value);
    if (details.status) {
        result.status = true;
        result.value = details.value;
        callback(result)
    } else {
        callback(result)
    }
}

ValidatePrevious.prototype.nameAvail = function (value, result, _context, callback) {
    var details = this.canonUtility.findName(value,_context.email);
    if (details.status) {
        result.status = true;
        result.value = details.value;
        callback(result)
    } else {
        callback(result)
    }
}

ValidatePrevious.prototype.isMobileNumberAvailable = function (value, result, _context, callback) {
    var details = this.utility.mobileNumberVerify(value);
    if (details.status) {
        result.status = true;
        result.value = details.value;
        callback(result)
    } else {
        callback(result)
    }
}

ValidatePrevious.prototype.pinCodeAvail = function (query, result, _context, callback) {
    this.utility.findAddress(query,'pincode', function (res) {
        if (res && !isEmpty(res) && res.hasOwnProperty("formatted_address") && res.formatted_address.includes(query)) {
            result.status = true;
            result.value = query;
            callback(result)
        } else {
            callback(result)
        }
    });
}

ValidatePrevious.prototype.addressAvail = function (value, result, _context, callback) {
    var context = _context.ticketDetails.context.categoryContext.current_order;
    var pincode = (context.localityPincode != 0) ? ', ' + context.localityPincode : '';
    if (!value.includes(context.locality))
        value = value + ", " + context.locality;
    if (!value.includes(context.localityPincode))
        value = value + pincode;
    this.utility.findAddress(value,'address', function (res) {
        if (res && !isEmpty(res) && res.hasOwnProperty("formatted_address")) {
            result.status = true;
            result.value = value;
            callback(result)
        } else {
            callback(result)
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