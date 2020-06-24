var request = require('request');

var ComplaintRegisterService = function (_config, _logger) {
    this.config = _config;
    this.logger = _logger;
    this.baseUrl = this.config.mockServerUrl();
}
module.exports = ComplaintRegisterService;

ComplaintRegisterService.prototype.getInsightEngineUrl = function () {
    var config = this.config.getCategoryConfig("canonCategory");

    var source = "insightEngine"
    if (!config.hasOwnProperty(source)) {
        return "";
    }
    return config[source];
}

ComplaintRegisterService.prototype.getCanonKey = function (source, property) {
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

ComplaintRegisterService.prototype.getUrl = function (source, property) {
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

// ComplaintRegisterService.prototype.checkComplaintRegisterStatusCMP = function (serialNumber, callback) {
//     res = {
//         serialNumber: serialNumber
//     }
//     let options = {
//         url: this.baseUrl + "/ServiceManagement/Canon/CMP/getOpenComplaints",
//         body: res,
//         headers: {
//             "content-type": "application/json"
//         },
//         json: true
//     }
//     request.post(options, function (error, response, body) {
//         // body = {
//         // "status": true, // Execution Status of API
//         // "message": "Processing", // Execution Status Message
//         // "resultCode": true, // Current Complaint Status of the given Serial Number.
//         // "ticketID": "",
//         // "provider": ""
//         // }
//         // body = {
//         //     status: 'true',
//         //     message: 'success',
//         //     result:
//         //         [{
//         //             code: 'false',
//         //             ticketID: 'TICKET_157372194932920',
//         //             provider: 'Prematix'
//         //         }]
//         // }
//         callback(body);
//     });
// }

ComplaintRegisterService.prototype.registerComplaintCMP = function (res, callback) {
    let url = this.baseUrl + "/ServiceManagement/Canon/CMP/RegisterComplaint"
    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + new Buffer(this.getCanonKey("canonService", "userid") + ':' + this.getCanonKey("canonService", "password")).toString('base64')
        },
        body: res,
        json: true
    }
    request.post(url, options, function (error, response, body) {
        // body = {
        //     status: false,
        //     resultCode: "alreadyOpenCall",
        //     newTicketNo: "3452",
        //     existingTicketNumber: "4576",
        //     ticketStatus: "Ticket is processing"
        // }
        callback(body);
    });
}

ComplaintRegisterService.prototype.registerComplaintServiceEdge = function (res, callback) {
    let url = this.baseUrl + "/ServiceManagement/Canon/serviceedge/registercomplaint";
    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + new Buffer(this.getCanonKey("canonService", "userid") + ':' + this.getCanonKey("canonService", "password")).toString('base64'),
        },
        body: res,
        json: true
    }
    request.post(url, options, function (error, response, body) {
        callback(body);
    });
}

ComplaintRegisterService.prototype.registerComplaint = function (res, callback) {
    let url = this.baseUrl + "/ServiceManagement/Canon/addComplaint";
    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + new Buffer(this.getCanonKey("canonService", "userid") + ':' + this.getCanonKey("canonService", "password")).toString('base64'),
        },
        body: res,
        json: true
    }
    request.post(url, options, function (error, response, body) {
        // body = {
        //     status: true,
        //     reqId: 12345
        // }
        if (body.status) {
            callback(body);
        } else {
            callback(null);
        }
    });
}

ComplaintRegisterService.prototype.updateComplaint = function (details, callback) {
    details = JSON.parse(details);
    let search = {
        contactName: details.name,
        entityName: details.entityName,
        phone: details.mobileNumber,
        reqId: details.reqIdAnalysis,
        category: details.category,
        modelName: details.modelName,
        productType: details.productType,
        address: details.address,
        warrantyStatus: details.warranty,
        contractStatus: details.contract,
        isAlreadyRegistered: details.openTicketStatus,
        feedBack: details.rating,
        SMS_Flow_State: details.SMS_Flow_State,
        complaintDetails: {
            deviceType: details.hasOwnProperty("selectedCustomer") ? details.selectedCustomer.DeviceType : details.deviceType,
            ticketId: details.ticketId,
            oldTicketId: details.oldTicketID,
            modelnumber: details.modelNumber,
            complaint: details.problem,
            tonerColor: details.tonerColor,
            meterReading: details.meterReading,
            serialNumber: details.serialNumber,
        },
        locality: {
            pincode: details.localityPincode,
            location: details.locality,
            locationCode: details.localityCode
        }
    }
    var url = this.baseUrl + "/ServiceManagement/Canon/updateComplaintsByReqId";
    this.postApi(search, url, function (res) {
        // res = {
        //     status: true
        // }
        if (res && res.status) {
            callback(res);
        } else {
            callback(null);
        }
        // callback(res);
    });
}

ComplaintRegisterService.prototype.postApi = function (search, url, callback) {
    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + new Buffer(this.getCanonKey("canonService", "userid") + ':' + this.getCanonKey("canonService", "password")).toString('base64'),
        },
        body: search,
        json: true
    }
    request.post(url, options, function (error, response, body) {
        if (body.status) {
            callback(body);
        } else {
            callback(null);
        }
    });
}

ComplaintRegisterService.prototype.completeRegistration = function (details, callback) {
    details = JSON.parse(details);
    let search = {
        entityName: details.entityName,
        contactName: details.name,
        category: details.category,
        productType: details.productType,
        phone: details.mobileNumber,
        reqId: details.reqIdAnalysis,
        warrantyStatus: details.warranty,
        contractStatus: details.contract,
        isAlreadyRegistered: details.openTicketStatus,
        address: details.address,
        SMS_Flow_State: details.SMS_Flow_State,
        symptomCode: details.symptomCode,
        feedBack: details.rating,
        complaintDetails: {
            deviceType: details.hasOwnProperty("selectedCustomer") ? details.selectedCustomer.DeviceType : details.deviceType,
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
    var url = this.baseUrl + "/ServiceManagement/Canon/updateExecutionFlow";
    this.postApi(search, url, function (res) {
        // res = {
        //     status: true
        // }
        if (res && res.status) {
            callback(res);
        } else {
            callback(null);
        }
    });
}

ComplaintRegisterService.prototype.checkSerialNumberStatus = function (serialNumber, productType, callback) {
    var res = {
        serialNumber: serialNumber,
        deviceType: productType
    }
    let options = {
        url: this.getInsightEngineUrl() + "/ServiceManagement/canon/identifySerialNumber",
        body: res,
        headers: {
            "content-type": "application/json"
        },
        json: true
    }
    request.post(options, function (error, response, body) {
        callback(body);
    });
}

ComplaintRegisterService.prototype.addAnalyticData = function (_context, ticketid, callback) {
    var res = setAnalyticData(_context.ticketDetails.context.categoryContext.AnalyticData, ticketid);
    var url = this.baseUrl + "/ServiceManagement/Canon/addAnalyticData"
    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + new Buffer(this.getCanonKey("canonService", "userid") + ':' + this.getCanonKey("canonService", "password")).toString('base64'),
        },
        body: res,
        json: true
    }
    request.post(url, options, function (error, response, body) {
        // body = {
        //     status: true
        // }
        if (body.status) {
            callback(body);
        } else {
            callback(null);
        }
    });
}

ComplaintRegisterService.prototype.updateAnalyticData = function (_context, ticketid, callback) {
    var res = setAnalyticData(_context.ticketDetails.context.categoryContext.AnalyticData, ticketid);
    var url = this.baseUrl + "/ServiceManagement/Canon/updatetAnalysisData";
    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + new Buffer(this.getCanonKey("canonService", "userid") + ':' + this.getCanonKey("canonService", "password")).toString('base64'),
        },
        body: res,
        json: true
    }
    request.post(url, options, function (error, response, body) {
        // body = {
        //     status: true
        // }
        if (body.status) {
            callback(body);
        } else {
            callback(null);
        }
    });
}

function setAnalyticData(data, ticketId) {
    var obj = {
        "TicketsID": ticketId,
        "CHT": data.CallHandlingTime,
        "Channel": data.TollFreeOrWebOrAppBased,
        "ReferenceNumber": data.ReferenceNumberprovided,
        "L1Support": data.L1SupportRequested,
        "category": data.category,
        "entityName": data.entityName,
        "ServiceCharge": data.serviceChargeConfirm,
        "serialNumber": data.serialNo,
        "productType": data.productType,
        "problemCategory": data.problemCategory,
        "modelNumber": data.modelNumber,
        "complaint": data.problem,
        "meterReading": data.meterReading,
        "tonerColor": data.tonerColor,
        "name": data.name,
        "feedBack": data.feedBack,
        "address": {
            completeAddress: data.completeAddress,
            pincode: data.pincode,
            locality: data.locality,
            doorNumber: data.doorNo,
            buildingNumber: data.buildingNo,
            streetName: data.streetName
        },
        "mobileNumber": data.mobileNo
    }
    return obj;
}

ComplaintRegisterService.prototype.getSymptomCode = function (error, callback) {
    res = {
        "code": error
    }
    var url = this.baseUrl + "/ServiceManagement/Canon/getLocationCodeandSymptomcode";
    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + new Buffer(this.getCanonKey("canonService", "userid") + ':' + this.getCanonKey("canonService", "password")).toString('base64'),
        },
        body: res,
        json: true
    }
    request.post(url, options, function (error, response, body) {
        if (body.status) {
            callback(body);
        } else {
            callback(null);
        }
    });
}

ComplaintRegisterService.prototype.getProblems = function (product, deviceType, callback) {
    var problem = ['Paper Jam', 'Print Quality', 'Connectivity Problem', 'Error Code', 'Other']
    if (product == 'Multi-function Devices') {
        body = {
            status: true,
            data: problem
        }
        callback(body);
    } else {
        res = {
            "DeviceType": deviceType
        }
        var url = this.baseUrl + "/ServiceManagement/Canon/getcomplaintFORdevicetype";
        let options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                'Authorization': 'Basic ' + new Buffer(this.getCanonKey("canonService", "userid") + ':' + this.getCanonKey("canonService", "password")).toString('base64'),
            },
            body: res,
            json: true
        }
        request.post(url, options, function (error, response, body) {
            // if (body.status) {
            callback(body);
            // } else {
            // callback(null);
            // }
        });
    }
}

ComplaintRegisterService.prototype.getProblemsForCMP = function (callback) {
    var problem = ['Paper Jam', 'Print Quality', 'Connectivity Problem', 'Error Code', 'Other']
    callback(problem);
}