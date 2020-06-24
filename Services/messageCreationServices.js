var CanonUtility = require("../Utility/canonUtils");
var Utility = require("../Utility/utils");
var MessageCreation = function (config, logger) {
    this.logger = logger;
    this.canonUtility = new CanonUtility(config, logger);
    this.utility = new Utility(config, logger);
}

module.exports = MessageCreation;

// For creating voice for differernt states
MessageCreation.prototype.voiceCreationForStates = function (context, mainText, option, suffix) {
    var resText = mainText;
    if (option.length != 0) {
        for (var i = 0; i < option.length; i++) {
            if (context.includes("::guest:WHATSAPP")) {
                resText += "\n     *-Type " + (i + 1) + " for " + option[i] + "*.";
            } else {
                resText += ")Option " + this.canonUtility.numberToString(i + 1) + " ) " + option[i] + ". ";
            }
        }
    }
    resText = resText + suffix;
    return resText;
}

MessageCreation.prototype.voiceCreationForDynamicStates = function (context, mainText, option, suffix, currentState) {
    var resText = mainText;
    var notranslate1 = (context.includes("::guest:WHATSAPP") && currentState.state == 'MODEL_NUMBER') ? "<notranslate>" : '';
    var notranslate2 = (context.includes("::guest:WHATSAPP") && currentState.state == 'MODEL_NUMBER') ? "</notranslate>" : "";

    if (option.length != 0) {
        for (var i = 0; i < option.length; i++) {
            if (context.includes("::guest:WHATSAPP")) {
                resText += "\n    *-Type " + (i + 1) + "* : " + notranslate1 + "*" + option[i] + "*" + notranslate2 + ".";
            } else {
                option[i] = currentState.state == 'MODEL_NUMBER' ? this.canonUtility.modelVoice(option[i]) : option[i];
                option[i] = option[i].includes('-') ? replaceAll(option[i], '-', ' hyphen ') : option[i];
                resText += " (Option " + this.canonUtility.numberToString(i + 1) + " (: " + option[i] + ". ";
                option[i] = option[i].includes('hyphen') ? replaceAll(option[i], ' hyphen ', '-') : option[i];
                option[i] = currentState.state == 'MODEL_NUMBER' && option[i].includes(' ') ? replaceAll(option[i], ' ', '') : option[i];
            }
        }
    }
    resText = resText + suffix;
    return resText;
}

//options for guest call
MessageCreation.prototype.voiceCreationForCategOptionsCall = function (prefix, text, arr, currentState) {
    prefix = "I have not heard your voice correctly. Please give your option through mobile keypad. " + prefix;
    var textPrefix = "__NUMBER__1::" + prefix;
    textPrefix = currentState.includes("SYMPTOM") ? '' : textPrefix;
    text = textPrefix + text
    for (var i = 0; i < arr.length; i++) {
        if (currentState == "PROBLEM" || currentState == 'MODEL_NUMBER') {
            arr[i] = currentState == 'MODEL_NUMBER' ? this.canonUtility.modelVoice(arr[i]) : arr[i];
            arr[i] = arr[i].includes('-') ? replaceAll(arr[i], '-', ' hyphen ') : arr[i];
            text += "press " + (i + 1) + " for : " + arr[i] + ". ";
            arr[i] = arr[i].includes('hyphen') ? replaceAll(arr[i], ' hyphen ', '-') : arr[i];
            arr[i] = currentState == 'MODEL_NUMBER' && arr[i].includes(' ') ? replaceAll(arr[i], ' ', '') : arr[i];
        } else {
            text += "press ( " + (i + 1) + " for ( " + arr[i] + " .";
        }
    }
    return text;
}

function replaceAll(target, search, replacement) {
    target = target.toString();
    return target.split(search).join(replacement);
};

//voice for confirmation
MessageCreation.prototype.voiceCreationForConfirmation = function (current_order, email) {
    var result = '';

    var notranslate1 = email.includes("::guest:") ? "<notranslate>" : '';
    var notranslate2 = email.includes("::guest:") ? "</notranslate>" : "";
    var reverse1 = email.includes("::guest:") ? "<reverse_transliterate>" : '';
    var reverse2 = email.includes("::guest:") ? "</reverse_transliterate>" : "";

    var mobilevoice = email.includes("::guest:TOLL_FREE") ? this.canonUtility.mobilevoice(current_order.mobileNumber, email) : current_order.mobileNumber;
    if (current_order.productType == 'Printer' || current_order.productType == 'Scanner') {
        var modelvoice = email.includes("::guest:TOLL_FREE") ? this.canonUtility.mobilevoice(current_order.selectedCustomer.ModelName, email) : current_order.selectedCustomer.ModelName;
    }
    var serialvoice = email.includes("::guest:TOLL_FREE") ? this.canonUtility.mobilevoice(current_order.serialNumber, email) : current_order.serialNumber;

    var address = email.includes("::guest:TOLL_FREE") ? this.canonUtility.addressVoice(current_order.address, email) : (email.includes("::guest:WHATSAPP") ? reverse1 + '*' + this.canonUtility.addressChange(current_order.address) + '*' + reverse2 : current_order.address);
    var metervoice = email.includes("::guest:TOLL_FREE") ? this.canonUtility.mobilevoice(current_order.meterReading, email) : current_order.meterReading;

    if (current_order.category == "Register Complaint" && (current_order.productType == 'Printer' || current_order.productType == 'Scanner') && !current_order.isAlreadyRegistered) {
        var name = this.utility.titleCase(this.canonUtility.addressChange(current_order.name));

        if (email.includes("::guest:WHATSAPP:")) {

            result = 'I have noted the below details.\nCustomer Name : ' + reverse1 + '*' + name + '*' + reverse2 + '.\nSerial Number : ' + notranslate1 + '*' + current_order.serialNumber + '*' + notranslate2 + '.\nModel Name : ' + notranslate1 + '*' + current_order.selectedCustomer.ModelName + '*' + notranslate2 + '.\nComplaint : *' + current_order.problem + '*.\nAddress : ' + address + '.\nContact Number : ' + notranslate1 + '*' + current_order.mobileNumber + '*' + notranslate2 + '.\nCan I confirm these details? (Yes/No)'

        } else {

            result = 'I have noted the below details. The customer name is: ' + notranslate1 + name + notranslate2 + '. Your serial number is: ' + serialvoice + '. The model name you are using is: ' + modelvoice + '. model Canon ' + current_order.productType + '. The complaint is: ' + current_order.problem + '. Your address is: ' + address + '. and the contact number is: ' + mobilevoice + '. Can I confirm these details?'
        }

    } else if (current_order.category == "Register Complaint" && (current_order.productType == 'Multi-function Devices') && !current_order.isAlreadyRegistered) {

        if (email.includes("::guest:WHATSAPP")) {
            result = 'I have noted the below details.\nComplaint : *' + current_order.problem + '*.\nSerial Number : ' + notranslate1 + '*' + current_order.serialNumber + '*' + notranslate2 + '.\nEntity Name : ' + reverse1 + '*' + current_order.entityName + '*' + reverse2 + '.\nCan I confirm these details? (Yes/No)'
        } else {
            result = "I have noted the below details. The complaint is: " + current_order.problem + '. Your serial number is: ' + serialvoice + '. and your entity name is: ' + notranslate1 + current_order.entityName + notranslate2 + ". Can I confirm these details?"
        }

    } else if (current_order.category == "Toner Booking" && !current_order.isAlreadyRegistered) {

        if (current_order.loggedToners.split(',').length > 1) {
            clrtext = " The requested toner colors are: ";
        } else {
            clrtext = " The requested toner color is: ";
        }
        tonerColor = current_order.tonerColor.split(",").join(", ");
        if (email.includes("::guest:WHATSAPP")) {
            result = 'I have noted the below details.\nToner Color : *' + tonerColor + '*.\nMeter Reading : ' + notranslate1 + '*' + current_order.meterReading + '*' + notranslate2 + '.\nSerial Number : ' + notranslate1 + '*' + current_order.serialNumber + '*' + notranslate2 + '.\nEntity Name : ' + reverse1 + '*' + current_order.entityName + '*' + reverse2 + '.\nCan I confirm these details? (Yes/No)'
        } else {
            result = 'I have noted the below details.' + clrtext + notranslate1 + tonerColor + notranslate2 + '. The meter reading is:' + metervoice + '. Your serial number is: ' + serialvoice + '. and your entity name is: ' + notranslate1 + current_order.entityName + notranslate2 + '. Can I confirm these details?'
        }
    }
    return result;
}

MessageCreation.prototype.voiceCreationForCompletion1 = function (userType) {
    var voice = '';
    voice = "Thank you for the feedback.";
    return voice;
}

// message for completion
MessageCreation.prototype.voiceCreationForCompletion = function (current_order, obj, email, requestId) {
    var voice = '';
    var sym1 = email.includes("::guest:TOLL_FREE") ? '.' : '';
    var sym = email.includes("::guest:WHATSAPP") ? '*' : '';
    var noTranslateSym1 = email.includes("::guest:TOLL_FREE") ? "<notranslate>" : '';
    var noTranslateSym2 = email.includes("::guest:TOLL_FREE") ? "</notranslate>" : '';
    var noTranslate1 = email.includes("::guest:WHATSAPP") ? "<notranslate>" : '';
    var noTranslate2 = email.includes("::guest:WHATSAPP") ? "</notranslate>" : '';

    // var serialvoice = email.includes("::guest:TOLL_FREE") ? this.canonUtility.mobilevoice(current_order.serialNumber, email) : current_order.serialNumber;
    var mobileNumber = email.includes("::guest:TOLL_FREE") ? this.canonUtility.mobilevoice(current_order.mobileNumber, email) : current_order.mobileNumber;
    if (obj.whatsappL1Flag) {
        voice = obj.prefixL1Whatsapp + " Sorry! for the inconvenience that we couldn't help you at this stage.\n\nKindly contact our call centre @ *1800-208-3366* (Monday through Saturday) between *9 AM to 6 PM*.\n\n";
    } else if (current_order.category == 'Register Complaint' && current_order.serialNumber != '' && (productTypeOfName(current_order.name)).includes(current_order.productType) && (productTypeOfName(current_order.address)).includes(current_order.productType) && !current_order.isAlreadyRegistered) {
        if (current_order.problem == 'Machine Installation') {
            voice = "Your request for machine installation will be proccessed. The reference number is : " + noTranslate1 + requestId + noTranslate2 + '. The estimated response time is approximately 2 days.';
        } else {
            voice = "Registered your " + sym + "complaint" + sym + ". The reference number is : " + noTranslate1 + requestId + noTranslate2 + '. The estimated response time is approximately 2 days.';
        }
    } else if (current_order.category == 'Toner Booking' && !current_order.isAlreadyRegistered && ((current_order.serialNumber != '') || !obj.categoryInitiateBot)) {
        if (current_order.loggedToners == '')
            voice = "Registered your " + sym + "toner booking" + sym + ". The reference number is : " + noTranslate1 + requestId + noTranslate2 + '. The estimated response time approximately is 2 days.';
        else {
            var clrtext = ''
            if (current_order.loggedToners.split(',').length > 1) {
                clrtext = " for the toner colors";
            } else {
                clrtext = " for the toner color";
            }
            voice = "Registered your " + sym + "toner booking" + sym + clrtext + ' : ' + noTranslateSym1 + sym + current_order.loggedToners.trim() + sym + noTranslateSym2 + ". The reference number is : " + noTranslate1 + requestId + noTranslate2 + '. The estimated response time is approximately 2 days.'
        }
    } else if (current_order.isAlreadyRegistered) {
        if (current_order.category == 'Register Complaint') {
            if (current_order.productType == 'Multi-function Devices') {
                voice = "This Serial number is " + sym + "already registered and your complaint is processing" + sym + ". The reference id for this complaint is : " + noTranslate1 + requestId + noTranslate2 + ". The estimated response time is approximately 2 days.";
            } else {
                var jobsheetStatus = ''
                if (obj.openComplaintDetails.jobsheetStatus == 'Pending Eng. Allocation') {
                    jobsheetStatus = ' and ' + sym + 'work is in progress' + sym
                }
                voice = "This serial number is " + sym + "already registered" + sym + jobsheetStatus + ". The reference id for this complaint is : " + noTranslate1 + requestId + noTranslate2 + ". The estimated response time is approximately 2 days.";
            }
        } else {

            var clrtext = ''
            if (current_order.registeredClrs && current_order.registeredClrs.split(',').length > 1) {
                clrtext = " for the toner colors";
            } else {
                clrtext = " for the toner color";
            }

            voice = "This serial number is " + sym + "already registered" + sym + clrtext + ' : ' + noTranslateSym1 + sym + current_order.registeredClrs + sym + noTranslateSym2 + ". Your " + sym + 'toner booking is processing' + sym + ".";
        }
    } else if (current_order.serialNumber == '' && obj.categoryInitiateBot) {
        voice = mobileNumber + sym1 + ' You will receive an SMS on the above given mobile number shortly. For compliance purpose, we require you to send us an SMS providing the required details. We will call you back soon. ';
    } else if (current_order.name == '' && obj.categoryInitiateBot) {
        voice = mobileNumber + sym1 + ' You will receive an SMS on the above given mobile number shortly. For compliance purpose, we require you to send us an SMS providing the required details to complete the process of registering your complaint. ';
    } else if (current_order.address == '' && obj.categoryInitiateBot) {
        voice = mobileNumber + sym1 + ' You will receive an SMS on the above given mobile number shortly. For compliance purpose, we require you to send us an SMS providing the required details to complete the process of registering your complaint. ';
    }
    return voice;
}

function productTypeOfName(value) {
    return (value == '' ? ['Multi-function Devices'] : ['Printer', 'Scanner'])
}

MessageCreation.prototype.confirmationMsgTable = function (obj1, obj) {

    if (obj1.categoryInitiateBot && obj.serialNumber == '') {
        var tableObj = {};
    } else if (obj.isAlreadyRegistered) {
        var tableObj = {
            "Product Type": obj.productType != "" ? obj.productType : "N/S",
            "Serial Number": obj.serialNumber != "" ? obj.serialNumber : "N/S",
            "Status": "Your Request is processing"
        }
    } else if (obj.category == "Register Complaint" && !obj.isAlreadyRegistered && (obj.productType == '    Multi-function Devices')) {
        var tableObj = {
            "Product Type": obj.productType != "" ? obj.productType : "N/S",
            "Serial Number": obj.serialNumber != "" ? obj.serialNumber : "N/S",
            "Entity Name": obj.entityName != "" ? obj.entityName : "N/S",
            "Complaint": obj.problem != "" ? obj.problem : "N/S",
        }
    } else if (obj.category == "Register Complaint" && !obj.isAlreadyRegistered) {
        var tableObj = {
            "Product Type": obj.productType != "" ? obj.productType : "N/S",
            "Serial Number": obj.serialNumber != "" ? obj.serialNumber : "N/S",
            "Complaint": obj.problem != "" ? obj.problem : "N/S",
            "Customer Name": obj.name != "" ? this.utility.titleCase(obj.name) : "N/S",
            "Mobile Number": obj.mobileNumber != "" ? obj.mobileNumber : "N/S",
            "Address": obj.address != '' ? obj.address : "N/S"
        }
    } else if (obj.category == "Toner Booking" && !obj.isAlreadyRegistered) {
        var tableObj = {
            "Product Type": obj.productType != "" ? obj.productType : "N/S",
            "Serial Number": obj.serialNumber != "" ? obj.serialNumber : "N/S",
            "Entity Name": obj.entityName != "" ? obj.entityName : "N/S",
            "Meter reading": obj.meterReading != "" ? obj.meterReading : "N/S",
            "Toner color": obj.tonerColor != "" ? obj.tonerColor : "N/S",
        }
    } else if (obj1.categoryInitiateBot && (obj.name == '' && obj.productType != 'Multi-function Devices')) {
        var tableObj = {}

    }
    return tableObj;
}

MessageCreation.prototype.fulfillCreation = function (category, email) {
    if (category == "Register Complaint" && (email.includes("::guest"))) {
        message = "Should I fulfill ticket to raise a complaint."
    } else if (category == "Toner Booking" && (email.includes("::guest"))) {
        message = "Should I fulfill ticket to raise a toner booking.";
    } else if (category == "Register Complaint") {
        message = "Click on fulfill ticket to raise a complaint.";
    } else if (category == "Toner Booking") {
        message = "Click on fulfill ticket to raise a toner booking."
    }
    return message;
}

MessageCreation.prototype.voiceCreationLocalityName = function (msg, localityArr, user) {
    var translateSym1 = "",
        translateSym2 = "";
    if (user.includes("::guest:")) {
        translateSym1 = "<reverse_transliterate>";
        translateSym2 = "</reverse_transliterate>";
    }
    var message = msg + " ";
    let tempStr = "";
    if (localityArr.length != 0) {
        tempStr = "";
        for (var i = 0; i < (localityArr.length > 2 ? 2 : localityArr.length); i++) {
            if (tempStr != "") {
                tempStr += ", "
            }
            localityName = (localityArr[i].locality_name).replace(/\./g, '');
            tempStr += this.utility.titleCase(localityName);
        }
        tempStr = "For example: " + translateSym1 + '*' + tempStr + '*' + translateSym2;
        tempStr += ".";
        return message + tempStr;
    }
    return msg;
}

MessageCreation.prototype.prefixMakerForChangeStates = function (changeState, value) {
    switch (changeState) {
        case 'PRODUCT_TYPE':
            return 'I have changed your *product type* to: *' + value + "*. ";
        // case 'SERIAL_NO':
        //     return 'I have changed your *serial number* to: *' + value + "*. ";
        case 'CATEGORY':
            return 'I have changed your *category* to: *' + value + "*. ";
        case 'TONER_COLOR':
            return 'I have changed your *toner color* to: *' + value + "*. ";
        case 'METER_READING':
            return 'I have changed your *meter reading* to: *' + value + "*. ";
        case 'PROBLEM':
            return 'I have changed your *problem* to: *' + value + "*. ";
        case 'PROBLEM_CATEGORY':
            return 'I have changed your *problem category* to: *' + value + "*. ";
        // case 'LOCALITY_PINCODE':
        //     return 'I have changed your *pincode* to: *' + value + "*. ";
        case 'MOBILE_NO':
            return 'I have changed your *mobile number* to: *' + value + "*. ";
        default:
            return '';
    }
}
