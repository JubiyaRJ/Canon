var request = require('request');

var TonerRequest = function (_config, _logger) {
    this.config = _config;
    this.logger = _logger;
    this.baseUrl = this.config.mockServerUrl();
}
module.exports = TonerRequest;

TonerRequest.prototype.getCanonKey = function (source, property) {
    var config = this.config.getCategoryConfig("canonCategory");

    var sources = config["canonService"];
    if (!config.hasOwnProperty(source)) {
        return "";
    }
    var eachCanonClient = config[source];
    if (!eachCanonClient.hasOwnProperty(property)) {
        return "";
    }

    return eachCanonClient[property];
}

TonerRequest.prototype.checkTonerRequestStatusCMP = function (serialNumber, tonerClr, meterReading, callback) {
    res = {
        serialNumber: serialNumber,
        tonerColor: tonerClr,
        meterReading: meterReading
    }
    let options = {
        url: this.baseUrl + "/ServiceManagement/Canon/CMP/getOpenTonerBookings",
        body: res,
        headers: {
            "content-type": "application/json"
        },
        json: true
    }
    request.post(options, function (error, response, body) {
        // body = {
        //     "status": true,
        //     "message": "working",
        //     "result": {
        //         "code": ['Cyan', 'Yellow', "Magenta", "Black"],
        //         "ticketID": "",
        //         "provider": '',
        //     }
        // }
        callback(body);
    });
}

TonerRequest.prototype.updateTonerRequest = function (details, callback) {
    details = JSON.parse(details);
    let search = {
        contactName: details.name,
        email: details.email,
        phone: details.mobileNumber,
        reqId: details.RequestId,
        address: details.address,
        complaintDetails: {
            ticketId: details.ticketId,
            model: details.modelNumber,
            tonerColor: details.tonerColor,
            meterReading: details.meterReading,
            serialNumber: details.serialNumber,
        }
    }
    var url = this.baseUrl + "/ServiceManagement/Canon/updateTonerRegisterByReqId";
    this.postApi(search, url, function (res) {
        callback(res);
    });
}

TonerRequest.prototype.completeTonerRequest = function (details, callback) {
    details = JSON.parse(details);
    let search = {
        contactName: details.name,
        email: details.email,
        phone: details.mobileNumber,
        reqId: details.RequestId,
        address: details.address,
        complaintDetails: {
            ticketId: details.ticketId,
            model: details.modelNumber,
            tonerColor: details.tonerColor,
            meterReading: details.meterReading,
            serialNumber: details.serialNumber,
        }
    }
    var url = this.baseUrl + "/ServiceManagement/Canon/updateTonerExecutionFlow";
    this.postApi(search, url, function (res) {
        callback(res);
    });
}

TonerRequest.prototype.postApi = function (search, url, callback) {
    let options = {
        url: url,
        body: search,
        headers: {
            "content-type": "application/json"
        },
        json: true
    }
    request.post(options, function (error, response, body) {
        if (body.status) {
            callback(body);
        } else {
            callback(null);
        }
    });
}

TonerRequest.prototype.tonerRequest = function (res, callback) {
    url = this.baseUrl + "/ServiceManagement/Canon/CMP/RegisterToner"
    var options = {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Basic ' + new Buffer(this.getCanonKey("canonService","userid") + ':' + this.getCanonKey("canonService","password")).toString('base64')
            },
        body: res,
        json: true
    }
    request.post(url, options, function (error, response, body) {
        callback(body);
    });
}

