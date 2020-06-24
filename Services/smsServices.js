var request = require('request');

var SMSService = function (_config, _logger) {
    this.config = _config;
    this.logger = _logger;
    this.baseUrl = this.config.mockServerUrl();
}
module.exports = SMSService;

SMSService.prototype.getInsightEngineUrl = function () {
    var config = this.config.getCategoryConfig("canonCategory");
    var source = "insightEngine"
    if (!config.hasOwnProperty(source)) {
        return "";
    }
    return config[source];
}

SMSService.prototype.getCallcenterUrl = function () {
    var config = this.config.getCategoryConfig("canonCategory");
    var source = "callcenterServer"
    if (!config.hasOwnProperty(source)) {
        return "";
    }
    return config[source];
}

SMSService.prototype.getUrl = function (source, property) {
    var config = this.config.getCategoryConfig("canonCategory");
    if (!config.hasOwnProperty(source)) {
        return "";
    }
    var eachClient = config[source];
    if (!eachClient.hasOwnProperty(property)) {
        return "";
    }
    return eachClient[property];
}

SMSService.prototype.sendSMS = function (to, ticketId, corporate, message, reqid, callback) {
    var search = {
        corporate: corporate,
        categoryId: "CANON_CATEGORY",
        subCategoryId: "COMPLAINT",
        message: message,
        to: to,
        ticketId: ticketId,
        reqId: reqid
    }
    let options = {
        url: this.getCallcenterUrl() + "/sms/sendMessage",
        headers: {
            "content-type": "application/json"
        },
        body: search,
        json: true
    }
    request.post(options, function (error, response, body) {
        callback(body);
    });
}

SMSService.prototype.getDetailsFromSMS = function (callNumber, reqid, callback) {
    var search = {
        mobileNumber: callNumber,
        reqId: reqid
    }
    let options = {
        url: this.baseUrl + "/ServiceManagement/Canon/SMS/getContext",
        headers: {
            "content-type": "application/json"
        },
        body: search,
        json: true
    }
    request.post(options, function (error, response, body) {
        if (body && body.status) {
            callback(body);
        } else {
            callback(null);
        }

    });
}

SMSService.prototype.getReciverNumber = function (corporate, callback) {
    var search = {
        corporate: corporate,
        categoryId: "CANON_CATEGORY",
        subCategoryId: "COMPLAINT"
    }
    let options = {
        url: this.getCallcenterUrl() + "/sms/getReciverNumber",
        headers: {
            "content-type": "application/json"
        },
        body: search,
        json: true
    }
    request.post(options, function (error, response, body) {
        // body = { "status": true, "reciverNumber": "+15132770037" }
        callback(body);
    });
}

SMSService.prototype.sendDetails = function (details,_context, callback) {
    var mobile=_context.email.split(':')[4].split('@@')[0];
    var search = {
        mobileNumber: details.mobileNumber!=0?details.mobileNumber:mobile,
        entityName: details.entityName,
        contactName: details.name,
        category: details.category,
        productType: details.productType,
        warrantyStatus: details.warranty,
        contractStatus: details.contract,
        address: details.address,
        symptomCode: details.symptomCode,
        feedBack: details.rating,
        complaintDetails: {
            deviceType: details.hasOwnProperty("selectedCustomer")?details.selectedCustomer.DeviceType:details.deviceType,
            ticketId: details.ticketId,
            modelnumber: details.modelNumber,
            complaint: details.problem,
            serialNumber: details.serialNumber,
            tonerColor: details.tonerColor,
            meterReading: details.meterReading
        },
        locality: {
            pincode: details.localityPincode,
            location: details.locality,
            locationCode: details.localityCode
        }
    }
    let options = {
        url: this.baseUrl + "/sms/getReciverNumber",
        headers: {
            "content-type": "application/json"
        },
        body: search,
        json: true
    }
    request.post(options, function (error, response, body) {
        // body = { "status": true, "reciverNumber": "+15132770037" }
        callback(body);
    });
}