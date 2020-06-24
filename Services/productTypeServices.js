var request = require('request');

var ProductTypeService = function (_config, _logger) {
    this.config = _config;
    this.logger = _logger;
    this.baseUrl = this.config.mockServerUrl();
}
module.exports = ProductTypeService;

ProductTypeService.prototype.getInsightEngineUrl = function () {
    var config = this.config.getCategoryConfig("canonCategory");
    var source = "insightEngine"
    if (!config.hasOwnProperty(source)) {
        return "";
    }
    return config[source];
}

ProductTypeService.prototype.getUrl = function (source, property) {
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

ProductTypeService.prototype.productApi = function (serialNumber, callback) {
    var search = {
        serialNumber: serialNumber,
    }
    let options = {
        url: this.getInsightEngineUrl() + "/ServiceManagement/canon/getSerialNumberInfo?serialNumber",
        headers: {
            "content-type": "application/json"
        },
        body: search,
        json: true
    }
    request.post(options, function (error, response, body) {
        // body = { "status": true, "data": { "serialNumber": "AEXM00323", "modelNumber": "9596B038AF", "deviceType": "Printer", "isUnderWarranty": false, "isUnderContract": true } }
        callback(body);
    });
}

ProductTypeService.prototype.getProductType = function (serialNumber, callback) {
    // let options = {
    //     url: this.baseUrl + "/ServiceManagement/Canon/getWarrentyStatus?serialNumber=" + serialNumber,
    //     headers: {
    //         "content-type": "application/json"
    //     },
    //     json: true
    // }
    // var body = {
    //     status: false,
    //     product: '',
    //     model: ''
    // }

    // var body = { "status": true, "data": { "serialNumber": "KLSJ02550", "modelNumber": "DR-C230", "deviceType": "PRINTER", "isUnderWarranty": true } }
    // var arr = ['Printer', 'Production Printer', 'Scanner', 'Coppier']
    // var modelArr = ["iR - ADV - C2220", "iR - ADV - 4045", "iR - ADV - C350i", "iR - ADV - C2220L", "iR - ADV - C5235", "iR1435iF", "iR2520", "iR2525W", "iR - ADV - C2220", "IR - ADV C3520", "IR - ADV C3520", "iR - ADV - C3320", "iR - ADV - C3320", "iR - ADV - C3320", "iR - ADV - 4251", "IR - ADV 4535"]
    this.productApi(serialNumber, function (res) {
        if (res.status) {
            var product = res.data.deviceType;
            var model = res.data.modelNumber;
            // var product = randomProduct(arr);
            // var model = randomProduct(modelArr);
        }
        body = {
            status: true,
            product: product,
            model: model
        }
        // request.get(options, function (error, response, body) {
        callback(body);
        // });
    })

}

function randomProduct(arr) {
    var randVal = randomizer();
    var count = randVal > arr.length - 1 ? 0 : randVal;
    return arr[count];
}

function randomizer() {
    return Math.floor(Math.random() * 3);
}