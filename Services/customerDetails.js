var request = require('request');

var CustomerDetails = function (_config, _logger) {
    this.config = _config;
    this.logger = _logger;
    this.baseUrl = this.config.mockServerUrl();
}
module.exports = CustomerDetails;

CustomerDetails.prototype.getInsightEngineUrl = function () {
    var config = this.config.getCategoryConfig("canonCategory");
    var source = "insightEngine"
    if (!config.hasOwnProperty(source)) {
        return "";
    }
    return config[source];
}

CustomerDetails.prototype.getCanonKey = function (source, property) {
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

CustomerDetails.prototype.getUrl = function (source, property) {
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

CustomerDetails.prototype.validateSerialNumberServiceEdge = function (serialNumber, callback) {
    url = this.baseUrl + "/ServiceManagement/Canon/serviceedge/validateserialnumber"
    res = {
        "serialNumber": serialNumber.toString()
    }
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
        //     "status": true,
        //     "message": "success",
        //     "result": [
        //         {
        //             "warrantyDetails": {
        //                 "code": true
        //             },
        //             "OpenComplaintDetails": {
        //                 "code": "false"
        //             },
        //             "modelNumber": "1889C004AA",
        //             "DeviceType": "Check Reader Scanner",
        //             "ModelName": "CR-120UV"
        //         },
        //         {
        //             "warrantyDetails": {
        //                 "code": true
        //             },
        //             "OpenComplaintDetails": {
        //                 "code": "false"
        //             },
        //             "modelNumber": "2313C023AB",
        //             "DeviceType": "Inkjet Printer",
        //             "ModelName": "G2012"
        //         }
        //     ]
        // }
        // names = ['Jubiya', 'Siva', 'Ravi Kumar', 'Siranjeevi', 'Murali', 'Partha'];
        // mobileNumbers = ['9061407851', '7349017975', '8110941243', '9677991332', '7010624482', '8895151003', "9677694682"];
        // address = ["105, 2nd Cross Road, WhiteField, India", "204, 2nd Street, Bangalore, India", "604, 2nd Cross Road, Water Tank Kormangala, Bangalore, India"]
        // body = {
        //     "status": true,
        //     "message": "Working",
        //     "result": [
        //         {
        //             "warrantyDetails": {
        //                 "code": true
        //             },
        //             "OpenComplaintDetails": {
        //                 "code": 'false'
        //             },
        //             // "ClosedComplaintDetails": {
        //             //     "mobileNumber": randomValue(mobileNumbers),
        //             //     "name": randomValue(names),
        //             //     "address": randomValue(address),
        //             //     'pincode': "560034"
        //             // },
        //             "modelNumber": "0727C018AD",
        //             "DeviceType": "Laser Printer",
        //             "ModelName": '1234'
        //         },
        //         {
        //             "warrantyDetails": {
        //                 "code": true
        //             },
        //             "OpenComplaintDetails":
        //                 { "code": 'false' },
        //             // "ClosedComplaintDetails": {
        //             //     // "mobileNumber": randomValue(mobileNumbers),
        //             //     "name": randomValue(names),
        //             //     "address": randomValue(address),
        //             //     'pincode': "560034"
        //             // },
        //             "modelNumber": "2227C018AD",
        //             "DeviceType": "Laser Printer",
        //             "ModelName": '2345'
        //         },
        //         {
        //             "warrantyDetails": {
        //                 "code": true
        //             },
        //             "OpenComplaintDetails":
        //                 { "code": 'false' },
        //             // "ClosedComplaintDetails": {
        //             //     // "mobileNumber": randomValue(mobileNumbers),
        //             //     "name": randomValue(names),
        //             //     "address": randomValue(address),
        //             //     'pincode': "560034"
        //             // },
        //             "modelNumber": "2227C018AD",
        //             "DeviceType": "",
        //             "ModelName": '23451'
        //         }
        //     ]
        // }
        // // body = {
        //     status: false,
        //     message: "No data is avilable for this serial number"
        // }
        callback(body);
    });
}

CustomerDetails.prototype.validateSerialNumberProductionCopier = function (serialNumber, categoryType, callback) {
    res = {
        "serialNumber": serialNumber.toString(),
        "serviceType": categoryType.toString()
    }
    url = this.baseUrl + "/ServiceManagement/Canon/CMP/cmpValidateSerialNumber"
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
        // entityNames = ["Prematix", "AppiVa", "AskSid", "BigTrade", "Pasfar"];
        // mobileNumbers = ['9061407851', '7349017975', '8110941243', '9677991332', '7010624482', '8895151003', "9677694682"];
        // address = ["105, 2nd Cross Road, WhiteField, India, 560034", "204, 2nd Street, Bangalore, India, 560034", "604, 2nd Cross Road, Water Tank Kormangala, Bangalore, India, 560034"]
        // body = {
        //     status: true, // Execution Status of API
        //     message: 'API', // Execution Status Message
        //     resultCode: true, // Current Status of the given Serial Number. OOW/IN-WARRANTY etc	
        //     customerDetails:
        //     {
        //         name: "Headway",
        //         contactNumber: randomValue(mobileNumbers),
        //         address: randomValue(address)
        //     }
        // }
        callback(body);
    });
}

CustomerDetails.prototype.getLocality = function (pincode, callback) {
    var search = {
        pincode: pincode
    }
    let url = this.baseUrl + "/ServiceManagement/Canon/getAddressinfoforPincode";
    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + new Buffer(this.getCanonKey("canonService", "userid") + ':' + this.getCanonKey("canonService", "password")).toString('base64')
        },
        body: search,
        json: true
    }
    request.post(url, options, function (error, response, body) {
        if (body.status) {
            callback(body.response);
        } else {
            callback(null);
        }
    });
}

CustomerDetails.prototype.getComplaintDetails = function (serialNumber, modelNumber, callback) {
    var search = {
        serialNumber: serialNumber,
        modelNumber: modelNumber
    }
    let url = this.baseUrl + "/ServiceManagement/Canon/getcallDetails";
    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + new Buffer(this.getCanonKey("canonService", "userid") + ':' + this.getCanonKey("canonService", "password")).toString('base64')
        },
        body: search,
        json: true
    }
    request.post(url, options, function (error, response, body) {
        // body={
        //     status: true,
        //     OpenComplaint: false
        // }
        callback(body);
    });
}

function randomValue(arr) {
    var randVal = randomizer();
    var count = randVal > arr.length - 1 ? 0 : randVal;
    return arr[count];
}

function randomizer() {
    return Math.floor(Math.random() * 3);
}

// modelNumber = ["G2000", "E470", "2227C018AD", "2227C018AB", "1366C018AB", "9143B005AA"]