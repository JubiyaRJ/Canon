var dataPacketService = require("poca-common").dataPacketService;
var RandomSentence = require("./randomSentenceServices");
var ValidatorService = require("./validatorService");

var L1Agent = function (info, categoryConfig) {
    this.config = info.config;
    this.logger = info.logger;
    this.ticketManagementService = info.ticketManagementService;
    this.randomSentence = new RandomSentence(info);
    this.validator = new ValidatorService(info);
}

module.exports = L1Agent;

L1Agent.prototype.updateContext = function (_context, callback) {
    this.ticketManagementService.updateTicketContext(_context.email, _context.ticketDetails.ticketID, _context.ticketDetails.context, callback);
}
L1Agent.prototype.processL1Support = function (_context, message, callback) {
    var context = _context.ticketDetails.context;
    //var message = this.randomSentence.textforL1agentConfirmation();
    context.categoryContext.isCNF.state = "L1_AGENT";
    context.categoryContext.isCNF.status = true;
    context.categoryContext.L1SupportCount = context.categoryContext.L1SupportCount + 1;
    this.updateContext(_context, function () {
        callback(dataPacketService.createTextPacket(message));
    });
}

L1Agent.prototype.decideL1Support = function (prefix, confirmation, _context, callback) {
    var _this = this;
    var context = _context.ticketDetails.context;
    // context.categoryContext.isCNF.state = "";
    // context.categoryContext.isCNF.status = false;
    // context.categoryContext.L1SupportCount = 0;
    this.validator.resetL1Confirm(context);
    this.updateContext(_context, function () {
        if (confirmation.toLowerCase() == "yes") {
            // _this.validator.setL1AgentRequest(_context, function () {
            callback(dataPacketService.createL1AgentPacket((prefix != "" ? prefix + " " : "") + "Attempting to connect you to a L1 Agent"));
            // })
        } else {
            callback(null);
        }
    });
}

L1Agent.prototype.L1SupportDecide = function (prefix, confirmation, _context, callback, handleBasedOnLastState) {
    var _this = this;
    var context = _context.ticketDetails.context;
    this.decideL1Support(prefix, confirmation, _context, function (res) {
        if (res) {
            callback(res);
        } else {
            handleBasedOnLastState(true);
        }
    });
}