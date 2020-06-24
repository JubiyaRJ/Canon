var request = require("request");

var InsightEngineService = function (_config, _logger) {
    this.config = _config;
    this.logger = _logger;
    this.baseUrl = this.config.mockServerUrl();
}

module.exports = InsightEngineService;

InsightEngineService.prototype.getInsightEngineUrl = function () {
    var config = this.config.getCategoryConfig("canonCategory");
    var source = "insightEngine"
    if (!config.hasOwnProperty(source)) {
        return "";
    }
    return config[source];
}

InsightEngineService.prototype.isModelNumberValid = function (model, callback) {
    var _this = this;
    var search = {
        model: model,
    }
    var options = {
        url: this.getInsightEngineUrl() + "/ServiceManagement/Canon/refineModelNumber",
        headers: {
            "content-type": "application/json"
        },
        body: search,
        json: true
    };
    this.logger.debug("Model number util request: " + JSON.stringify(options));
    request.post(options, function (error, response, body) {
        _this.logger.debug("Model number util request: " + JSON.stringify(body));
        // if (body.status) {
        callback(body);
        // } else {
        //     callback(null);
        // }
    });
}

InsightEngineService.prototype.isSerialNumberValid = function (channel, serial, callback) {
    var _this = this;
    var search = {
        serialNumber: serial,
        channel: channel
    }
    var options = {
        url: this.getInsightEngineUrl() + "/ServiceManagement/Canon/refineSerialNumber",
        headers: {
            "content-type": "application/json"
        },
        body: search,
        json: true
    };
    this.logger.debug("Serial number util request: " + JSON.stringify(options));
    request.post(options, function (error, response, body) {
        _this.logger.debug("Serial number util response: " + JSON.stringify(body));
        // if (body.status) {
        callback(body);
        // } else {
        //     callback(null);
        // }
    });
}
InsightEngineService.prototype.getSerialNoFromImage = function (imageUrl, callback) {
    var _this = this;
    var search = {
        imageUrl: imageUrl
    }
    var options = {
        url: this.getInsightEngineUrl() + "/ServiceManagement/Canon/getSerialNoFromImage",
        headers: {
            "content-type": "application/json"
        },
        body: search,
        json: true
    };
    request.post(options, function (error, response, body) {
        //    body= { status: true, message: 'Not Found', serialNo: '12341' }
        callback(body);
    });
}
