var dataPacketService = require("poca-common").dataPacketService;
var CategoryIntentMapService = require("./Services/CategoryIntentMapService");
var CategoryConfig = require("./categoryConfig");
var ComplaintSubategory = function (info) {
    var categoryConfig = new CategoryConfig();
    var intentMap = new CategoryIntentMapService(info, categoryConfig);
    this.subCategoryMap = intentMap.initMapping();
    return this;
}

module.exports = ComplaintSubategory;

ComplaintSubategory.prototype.getSubCategoryMapUserBased = function (user, callback) {
    callback(this.subCategoryMap);
}

ComplaintSubategory.prototype.getSubCategoryMap = function () {
    return (this.subCategoryMap);
}

ComplaintSubategory.prototype.getTitle = function () {
    return "Canon";
}

ComplaintSubategory.prototype.getDescription = function () {
    return "Canon";
}

ComplaintSubategory.prototype.getVersion = function () {
    return "0.0.1";
}

ComplaintSubategory.prototype.getIcon = function () {
    return "https://poca-store-blob.intelli-assist.com:8080/common/pa/subcategory/RegisterCompliant.png";
}

ComplaintSubategory.prototype.categoryDifferentiatorhandler = function (callback) {
    callback(dataPacketService.createTextPacket("Sorry! I can assist you to register a complaint and check the status of the registered complaint."));
}