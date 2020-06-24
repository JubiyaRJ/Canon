var request = require('request');

var GoogleService = function (_config, _logger) {
    this.config = _config;
    this.logger = _logger;
}
module.exports = GoogleService;

GoogleService.prototype.getGoogleKey = function (source, property) {
    var config = this.config.getCategoryConfig("canonCategory");

    var sources = config["googleService"];
    if (!config.hasOwnProperty(source)) {
        return "";
    }
    var eachCanonClient = config[source];
    if (!eachCanonClient.hasOwnProperty(property)) {
        return "";
    }

    return eachCanonClient[property];
}

GoogleService.prototype.getAddress = function (address, callback) {
    var urlLink = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + this.getGoogleKey("googleService", "key");
    var _this = this;
    // var options = {
    //     url: urlLink,
    // };
    var reposceAddress = '';
    request.get(urlLink, function (error, response, body) {
        reposceAddress = JSON.parse(body);
        callback(reposceAddress);
    });
}

GoogleService.prototype.getLocationName = function (lat, lng, callback) {
    var apiLink = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + this.getGoogleKey("googleService", "key");
    var _this = this;
    var collectedMappedDistance = '';
    request.get(apiLink, function (error, response, body) {
        collectedMappedDistance = JSON.parse(body);
        for (var i = 0; i < collectedMappedDistance.results[0].address_components.length; i++) {
            if (collectedMappedDistance.results[0].address_components[i].hasOwnProperty('types') && collectedMappedDistance.results[0].address_components[i].types.includes("country")) {
                result = collectedMappedDistance.results[0].address_components[i].long_name
            }
        }
        callback(result);
    })
}
