var CanonUtility = require("../Utility/canonUtils");
var RandomSentences = function (info) {
    this.logger = info.logger;
    this.canonUtility = new CanonUtility(info.config, info.logger);
}

module.exports = RandomSentences;

RandomSentences.prototype.randomSenForSerial = function (userType, product, count) {
    var sym = (userType.includes("::guest:WHATSAPP") ? "*" : "");
    product = (product == 'Multi-function Devices') ? 'Multi-function Device' : product
    var whtssentc = (userType.includes("::guest:WHATSAPP") ? ' without spaces in between' : '');
    var flag = userType.includes("::guest") ? false : true;
    var sen = [
        "Please provide the " + sym + "serial number" + sym + " of your " + sym + product + sym + whtssentc + ". It is written on the back side of your " + sym + product + sym + " below " + sym + "bar code" + sym + ".",
        "Requesting you to provide the " + sym + "serial number" + sym + " of your " + sym + product + sym + whtssentc + ". The serial number is printed on the " + sym + "bar code sticker" + sym + " attached on the back of the " + sym + product + sym + ".",
        "Kindly provide the " + sym + "serial number" + sym + " of your " + sym + product + sym + whtssentc + ". Which can be found in the " + sym + "bar code sticker" + sym + " behind your " + sym + product + sym + ".",
        "Kindly give the " + sym + "serial number" + sym + " of the " + sym + product + sym + whtssentc + ". It is written on the back side of your " + sym + product + sym + " below " + sym + "bar code" + sym + ".",
        "Please give the " + sym + "serial number" + sym + " of your " + sym + product + sym + whtssentc + ". The serial number is printed on the " + sym + "bar code sticker" + sym + " attached on the back of the " + sym + product + sym + ".",
        "Please mention the " + sym + "serial number" + sym + " of your " + sym + product + sym + whtssentc + ". Which can be found in the " + sym + "bar code sticker" + sym + " behind your " + sym + product + sym + ".",
        "Kindly mention the " + sym + "serial number" + sym + " of the " + sym + product + sym + whtssentc + ". It is written on the back side of your " + sym + product + sym + " below " + sym + "bar code" + sym + "."
    ];

    var sen1 = [
        "Please type out the valid serial number of your " + product + ". It is written on the back side of your " + sym + product + sym + " below " + sym + "bar code" + sym + ".",
        "Requesting you to type out the serial number of your " + product + ". Which can be found in the " + sym + "bar code sticker" + sym + " behind your " + sym + product + sym + ".",
        "Kindly help me by typing out the serial number of your " + product + ". The serial number is printed on the " + sym + "bar code sticker" + sym + " attached on the back of the " + sym + product + sym + ".",
        "Kindly assist me by typing out the serial number of your " + product + ". It is written on the back side of your " + sym + product + sym + " below " + sym + "bar code" + sym + "."
    ];

    var sen2 = [
        "Please provide a valid " + sym + "serial number" + sym + " for the " + sym + product + sym + whtssentc + ". It is written on the back side of your " + sym + product + sym + " below " + sym + "bar code" + sym + ".",
        "I can't proceed without a valid " + sym + "serial number" + sym + ". Please provide a valid " + sym + "serial number" + sym + " for the " + sym + product + sym + whtssentc + ". Which can be found in the " + sym + "bar code sticker" + sym + " behind your " + sym + product + sym + ".",
        "I need a correct " + sym + "serial number" + sym + " to proceed. Please help me with the correct " + sym + "serial number" + sym + " for the " + sym + product + sym + whtssentc + ". The serial number is printed on the " + sym + "bar code sticker" + sym + " attached on the back of the " + sym + product + sym + ".",
        "Kindly provide a valid " + sym + "serial number" + sym + " for the " + sym + product + sym + whtssentc + ". It is written on the back side of your " + sym + product + sym + " below " + sym + "bar code" + sym + ".",
        "Please help me with a valid " + sym + "serial number" + sym + " for the " + sym + product + sym + whtssentc + ". Which can be found in the " + sym + "bar code sticker" + sym + " behind your " + sym + product + sym + "."
    ];

    if (count < 2) {
        return sentanceSelector("", sen);
    } else if (flag && count >= 2) {
        return sentanceSelector("", sen1);
    } else {
        return sentanceSelector("", sen2);
    }
}

RandomSentences.prototype.randomSenForProblemCategory = function (userType) {
    var flag = userType.includes("::guest:WHATSAPP") ? true : false;
    var arr = [
        "Please choose one of the options given below.",
        "Kindly choose one of the problem category from the following options.",
        "Kindly choose the problem category from the following options.",
        "Please select the category of your problem from the following options."
    ];
    var arr2 = [
        "Please indicate your *problem category* by typing 1 or 2"
    ]
    if (flag) {
        return sentanceSelector("", arr2);
    } else {
        return sentanceSelector("", arr);
    }
}

RandomSentences.prototype.randomSenForProblem = function (userType, problemOptions) {
    var flag = userType.includes("::guest:WHATSAPP") ? true : false;
    var sen = [
        "Can you please choose the problem from the following.",
        "Kindly choose the problem you are facing from the following options.",
        "Please select the problem you are facing from the options below.",
        "Will you please choose the complaint of your machine from the following options.",
        "Please choose the problem you are facing from the below options."
    ];
    var str = options(problemOptions);
    var sen2 = [
        "Please indicate your *problem* by typing " + str + '.'
    ]
    if (flag) {
        return sentanceSelector("", sen2);
    } else {
        return sentanceSelector("", sen);
    }
}

RandomSentences.prototype.randomSenForMeter = function (userType, count, meter) {
    var sym = (userType.includes("::guest:WHATSAPP") ? "*" : "");
    var flag = userType.includes("::guest") ? false : true;
    meter = userType.includes("::guest:TOLL_FREE") ? this.canonUtility.mobilevoice(meter, userType) : meter
    var sen = [
        "Please tell me the " + sym + "meter reading" + sym + ".",
        "Help me by telling the " + sym + "meter reading" + sym + ".",
        "Please provide the " + sym + "meter reading" + sym + ".",
        "Please tell your " + sym + "meter reading" + sym + ".",
        "Requesting you to tell your " + sym + "meter reading" + sym + ".",
        "Kindly provide the " + sym + "meter reading" + sym + "."
    ];

    var sen1 = [
        "Please type out the meter reading on the device. Which should be greater than the last captured meter reading: " + sym + meter + sym + ".",
        "Kindly type out the meter reading on the device. Which should be greater than the last captured meter reading: " + sym + meter + sym + ".",
        "Requesting you to type out the meter reading on the device. Which should be greater than the last captured meter reading: " + sym + meter + sym + ".",
        "Kindly assist me by typing out the meter reading on the device. Which should be greater than the last captured meter reading: " + sym + meter + sym + "."
    ];

    var sen2 = [
        "Please provide a valid " + sym + "meter reading" + sym + ". Which should be greater than the last captured meter reading: " + sym + meter + sym + ".",
        "Kindly tell a valid " + sym + "meter reading" + sym + ". Which should be greater than the last captured meter reading: " + sym + meter + sym + ".",
        "Kindly provide a valid " + sym + "meter reading" + sym + ". Which should be greater than the last captured meter reading: " + sym + meter + sym + ".",
        "Please give a valid " + sym + "meter reading" + sym + ". Which should be greater than the last captured meter reading: " + sym + meter + sym + ".",
        "Requesting you to provide a valid " + sym + "meter reading" + sym + ". Which should be greater than the last captured meter reading: " + sym + meter + sym + "."
    ];

    if (count < 2) {
        return sentanceSelector("", sen);
    } else if (flag && count >= 2) {
        return sentanceSelector("", sen1);
    } else {
        return sentanceSelector("", sen2);
    }
}

RandomSentences.prototype.randomSenForTonerColor = function (userType, count) {
    var sym = (userType.includes("::guest:WHATSAPP") ? "*" : "");
    var flag = userType.includes("::guest") ? false : true;
    var sen = [
        "Kindly tell me the " + sym + "toner color" + sym + ".",
        "Please provide the required " + sym + "toner color" + sym + ".",
        "Kindly tell the " + sym + "toner color" + sym + " you need.",
        "Please give me the " + sym + "toner color" + sym + ".",
        "Requesting you to provide the " + sym + "toner color" + sym + ".",
        "Requesting you to tell me the required " + sym + "toner color" + sym + "."
    ];

    var sen1 = [
        "Please type out the required toner color.",
        "Kindly type out the required toner color.",
        "Please help me by typing out the required toner color on the device.",
        "Kindly assist me by typing out the required toner color on the device."
    ];

    var sen2 = [
        "I am sorry, please provide a valid " + sym + "toner color" + sym + " once again.",
        "Pardon, Kindly tell a valid " + sym + "toner color" + sym + " once more.",
    ];

    if (count < 2) {
        return sentanceSelector("", sen);
    } else if (flag && count >= 2) {
        return sentanceSelector("", sen1);
    } else {
        return sentanceSelector("", sen2);
    }
}

RandomSentences.prototype.randomSenForCateg = function (userType) {
    var flag = (userType.includes("::guest:WHATSAPP") ? true : false);
    var sen = [
        "Which of the following services do you wish to avail?",
        "Which service from the following options would you like to avail?",
        "Which service do you like to avail from the below options?",
    ];
    var sen2 = [
        "Please indicate the *service* you need by typing 1 or 2.",
    ];
    if (flag) {
        return sentanceSelector("", sen2);
    } else {
        return sentanceSelector("", sen);
    }
}

RandomSentences.prototype.randomSenForProduct = function (userType, arr) {
    var flag = (userType.includes("::guest:WHATSAPP") ? true : false);
    var sen = [
        "Please select the product type from the following options.",
        "Please select the type of your product from the below options.",
        "Kindly select the product type from the following options.",
    ];
    var str = options(arr)
    var sen2 = [
        "Please indicate your *product* by typing " + str + '.',
    ];
    if (flag) {
        return sentanceSelector("", sen2);
    } else {
        return sentanceSelector("", sen);
    }
}

RandomSentences.prototype.randomSenForName = function (userType, count) {
    var sym = (userType.includes("::guest:WHATSAPP") ? "*" : "");
    var flag = userType.includes("::guest") ? false : true;
    var sen = [
        "Please tell me your " + sym + "name" + sym + ".",
        "Kindly provide your " + sym + "name" + sym + ".",
        "Requesting you to tell your " + sym + "name" + sym + ".",
        "Kindly give your " + sym + "name" + sym + ".",
        "Please provide your " + sym + "name" + sym + ".",
        "Kindly help me with your " + sym + "name" + sym + "."
    ];

    var sen1 = [
        "Please type out your name on the device.",
        "Kindly type out your name.",
        "Please help me by typing out your name.",
        "Kindly assist me by typing out your name."
    ];

    var sen2 = [
        "I am sorry, please tell your " + sym + "name" + sym + " again.",
        "I am sorry, kindly say your " + sym + "name" + sym + " again.",
        "Please say your " + sym + "name" + sym + " again.",
        "I am sorry, please provide your " + sym + "name" + sym + " again.",
        "Kindly provide your " + sym + "name" + sym + " once more."
    ];

    if (count < 3) {
        return sentanceSelector("", sen);
    } else if (flag && count >= 3) {
        return sentanceSelector("", sen1);
    } else {
        return sentanceSelector("", sen2);
    }
}

RandomSentences.prototype.randomSenForMobile = function (userType, count) {
    var sym = (userType.includes("::guest:WHATSAPP") ? "*" : "");
    var flag = userType.includes("::guest") ? false : true;
    var sen = [
        "Please provide your " + sym + "mobile number" + sym + ".",
        "Kindly provide your " + sym + "mobile number" + sym + ".",
        "Please help me with the " + sym + "mobile number" + sym + ".",
        "Requesting you to tell your " + sym + "mobile number" + sym + ".",
        "Kindly give your " + sym + "mobile number" + sym + ".",
        "Please give your " + sym + "mobile number" + sym + "."
    ];

    var sen1 = [
        "Please provide a valid " + sym + "mobile number" + sym + ".",
        "Kindly provide valid " + sym + "mobile number" + sym + ".",
        "Requesting you to provide a valid " + sym + "mobile number" + sym + " to proceed.",
        "Kindly provide a valid " + sym + "mobile number" + sym + " to proceed."
    ];

    var sen2 = [
        "Please type out the mobile number on your device.",
        "Requesting you to type out the mobile number on your device.",
        "Kindly type out your mobile number on the device.",
    ];

    var sen3 = [
        "__NUMBER__10::Please type out the mobile number on your device.",
        "__NUMBER__10::Requesting you to type out the mobile number on your device.",
        "__NUMBER__10::Kindly type out your mobile number on the device.",
    ];

    if (count <= 2) {
        return sentanceSelector("", sen);
    } else if (count >= 3 && userType.includes("::guest:TOLL_FREE:")) {
        return sentanceSelector("", sen3);
    } else if (count >= 3 && flag) {
        return sentanceSelector("", sen2);
    } else {
        return sentanceSelector("", sen1);
    }
}

RandomSentences.prototype.randomSenForPincode = function (userType, count) {
    var sym = (userType.includes("::guest:WHATSAPP") ? "*" : "");
    var flag = userType.includes("::guest") ? false : true;
    var sen = [
        "Kindly give me the " + sym + "pincode" + sym + " where you want the " + sym + "engineer visit" + sym + " for the product.",
        "Please tell me the " + sym + "pincode" + sym + " where you want the " + sym + "engineer visit" + sym + " for the product.",
        "Kindly provide the " + sym + "pincode" + sym + " where you want the " + sym + "engineer visit" + sym + " for the product.",
        "Please provide the " + sym + "pincode" + sym + " where you want the " + sym + "engineer visit" + sym + " for the product.",
        "Requesting you to provide the " + sym + "pincode" + sym + " where you want the " + sym + "engineer visit" + sym + " for the product.",
        "Kindly tell me the " + sym + "pincode" + sym + " where you want the " + sym + "engineer visit" + sym + " for the product."
    ];

    var sen1 = [
        "Kindly give a valid " + sym + "pincode" + sym + ".",
        "Help me by saying the valid " + sym + "pincode" + sym + " please.",
        "Kindly provide a valid " + sym + "pincode" + sym + "."
    ];

    var sen2 = [
        "Please type out the pincode.",
        "Requesting you to type out the pincode.",
        "Kindly type out your pincode."
    ];

    var sen3 = [
        "__NUMBER__6::Please type out the Pincode.",
        "__NUMBER__6::Requesting you to type out the pincode.",
        "__NUMBER__6::Kindly type out your pincode."
    ];

    if (count < 2) {
        return sentanceSelector("", sen);
    } else if (count >= 2 && userType.includes("::guest:TOLL_FREE:")) {
        return sentanceSelector("", sen3);
    } else if (count >= 2 && flag) {
        return sentanceSelector("", sen2);
    } else {
        return sentanceSelector("", sen1);
    }
}

RandomSentences.prototype.randomSenForLocality = function (userType, count) {
    var sym = (userType.includes("::guest:WHATSAPP") ? "*" : "");
    var flag = userType.includes("::guest") ? false : true;
    var sen = [
        "Please tell me the " + sym + "locality name" + sym + " where you want the " + sym + "engineer visit" + sym + " for the product.",
        "Kindly provide your " + sym + "locality name" + sym + " where you want the " + sym + "engineer visit" + sym + " for the product.",
        "Requesting you to tell your " + sym + "locality name" + sym + " where you want the " + sym + "engineer visit" + sym + " for the product.",
        "Kindly give your " + sym + "locality name" + sym + " where you want the " + sym + "engineer visit" + sym + " for the product.",
        "Please provide your " + sym + "locality name" + sym + " where you want the " + sym + "engineer visit" + sym + " for the product.",
        "Kindly help me with your " + sym + "locality name" + sym + " where you want the " + sym + "engineer visit" + sym + " for the product.",
    ];

    var sen1 = [
        "Please type out your locality name on the device.",
        "Kindly type out your locality name.",
        "Please help me by typing out your locality name.",
        "Kindly assist me by typing out your locality name."
    ];

    var sen2 = [
        "I am sorry,  please tell your " + sym + "locality name" + sym + " again.",
        "I am sorry, kindly say your " + sym + "locality name" + sym + " again.",
        "Please say your " + sym + "locality name" + sym + " again.",
        "I am sorry, please provide your " + sym + "locality name" + sym + " again.",
        "Kindly provide your " + sym + "locality name" + sym + " once more."
    ];

    if (count < 3) {
        return sentanceSelector("", sen);
    } else if (flag && count >= 3) {
        return sentanceSelector("", sen1);
    } else {
        return sentanceSelector("", sen2);
    }
}

RandomSentences.prototype.randomSenForDoorNo = function (userType, count) {
    var sym = (userType.includes("::guest:WHATSAPP") ? "*" : "");
    var flag = userType.includes("::guest") ? false : true;
    var sen = [
        "Kindly help me by giving your " + sym + "door number" + sym + ".",
        "Please tell your " + sym + "door number" + sym + ".",
        "Kindly tell me your " + sym + "door number" + sym + ".",
        "Please provide your " + sym + "door number" + sym + ".",
        "Requesting you to tell your " + sym + "door number" + sym + ".",
        "Kindly tell your " + sym + "door number" + sym + ".",
    ];

    var sen1 = [
        "Please type out the door number.",
        "Requesting you to type out the door number.",
        "Kindly type out your door number.",
    ];

    var sen2 = [
        "I am sorry, Please say the " + sym + "door number" + sym + " again.",
        "Sorry, Kindly say your " + sym + "door number" + sym + " again."
    ];

    if (count < 2) {
        return sentanceSelector("", sen);
    } else if (count >= 2 && flag) {
        return sentanceSelector("", sen1);
    } else {
        return sentanceSelector("", sen2);
    }
}

RandomSentences.prototype.randomSenForBuildingNoCNF = function (userType, count) {
    var sym = (userType.includes("::guest:WHATSAPP") ? "*" : "");
    var flag = userType.includes("::guest") ? false : true;
    var prefix = "__REFINE_INPUT__GENERIC_YES_NO::";
    prefix = userType.includes("::guest:TOLL_FREE:") ? prefix : '';
    var sen = [
        "Please tell me your " + sym + "building number" + sym + ". If you have.",
        "Kindly help me by giving your " + sym + "building number" + sym + ". If you have.",
        "Please provide your " + sym + "building number" + sym + ". If you have.",
        "Kindly tell me your " + sym + "building number" + sym + ". If you have.",
        "Kindly give your " + sym + "building number" + sym + ". If you have.",
        "Requesting you to provide your " + sym + "building number" + sym + ". If you have."
    ];

    var sen1 = [
        "Please type out your building number. If you have.",
        "Requesting to type out the building number. If you have.",
        "Kindly type out your building number. If you have."
    ];

    var sen2 = [
        "I am sorry, please say the " + sym + "building number" + sym + " again. If you have.",
        "Sorry, kindly say your " + sym + "building number" + sym + " again. If you have."
    ];

    if (count < 2) {
        arr = sentanceSelector("", sen);
        return prefix + arr
    } else if (count >= 2 && flag) {
        return prefix + sentanceSelector("", sen1);
    } else {
        return prefix + sentanceSelector("", sen2);
    }
}

RandomSentences.prototype.randomSenForStreetName = function (userType, count) {
    var sym = (userType.includes("::guest:WHATSAPP") ? "*" : "");
    var flag = userType.includes("::guest") ? false : true;
    var sen = [
        "Kindly give me your " + sym + "street name or locality name" + sym + ".",
        "Please help me by giving your " + sym + "street name or locality name" + sym + ".",
        "Please provide your " + sym + "street name or locality name" + sym + ".",
        "Kindly tell me your " + sym + "lane name or locality name" + sym + ".",
        "Please provide your " + sym + "lane name or locality name" + sym + ".",
        "Kindly mention your " + sym + "lane name or locality name" + sym + "."
    ];

    var sen1 = [
        "Please type out the street name or locality name.",
        "Requesting you to type out the street name or locality name.",
        "Kindly type out your street name or locality name.",
    ];

    var sen2 = [
        "Please say the " + sym + "street name or locality name" + sym + " again.",
        "Kindly say your " + sym + "street name or locality name" + sym + " again."
    ];

    if (count < 2) {
        return sentanceSelector("", sen);
    } else if (count >= 2 && flag) {
        return sentanceSelector("", sen1);
    } else {
        return sentanceSelector("", sen2);
    }
}

RandomSentences.prototype.randomSenForAddressWhatsapp = function (count) {
    var sen = [
        "Kindly give me your *complete address* where you want the *engineer visit*.",
        "Kindly provide me your *complete address* where you want the *engineer visit*.",
        "Please provide your *complete address* where you want the *engineer visit*.",
        "Please mention your *complete address* where you want the *engineer visit*."
    ];

    var sen1 = [
        "Please type out the *valid address* where you want the *engineer visit*.",
        "Requesting you to type out a *valid address* where you want the *engineer visit*.",
        "Kindly help with a *valid address* where you want the *engineer visit*.",
    ];

    if (count < 2) {
        return sentanceSelector("", sen);
    } else {
        return sentanceSelector("", sen1);
    }
}

RandomSentences.prototype.randomSenForWelcome = function () {
    var sen = ["Hello ", "Hi ", "Greetings"];
    return sentanceSelector("", sen);
}

RandomSentences.prototype.randomsenForConfirmPacket = function () {
    var sen = [
        "Thanks for providing all the information. Do you want to confirm these details?",
        "Thank you for giving all the required information. Do you wish to confirm these details?",
        "Thanks for providing all the necessary information. Do you like to confirm these details?",
        "Thankful for giving the necessary information. Do you want to confirm these details?"
    ];
    return sentanceSelector("", sen);
}

RandomSentences.prototype.randomSenForConfirm = function (userType, state, value) {
    var translateSymEnd = "",
        translateSymStart = "",
        sym = "*";
    value = this.canonUtility.addressChange(value);
    value = (userType.includes("::guest:TOLL_FREE") && (state == 'mobile number' || state == 'serial number' || state == 'pincode')) ? this.canonUtility.mobilevoice(value, userType) : value;
    if (userType.includes("::guest") && (state == 'name' || state == 'street name' || state == 'entity name' || state == 'address')) {
        translateSymStart = "<notranslate>";
        translateSymEnd = "</notranslate>"
    }
    if (userType.includes("::guest:WHATSAPP")) {
        if (state == 'name' || state == 'address' || state == 'entity name') {
            translateSymStart = "<reverse_transliterate>";
            translateSymEnd = "</reverse_transliterate>"

        } else {
            translateSymStart = "<notranslate>";
            translateSymEnd = "</notranslate>"
        }
    }
    var prefix = "__REFINE_INPUT__GENERIC_YES_NO::";
    prefix = (state == 'name' || state == 'entity name' || state == 'mobile number') ? '' : prefix;
    prefix = userType.includes("::guest:TOLL_FREE:") ? prefix : '';
    var suffix = " (Yes/No)";
    var sen = [
        translateSymStart + value + translateSymEnd + ". can I confirm this as your " + state + "?",
        translateSymStart + value + translateSymEnd + ". should I consider this as your " + state + "?",
        translateSymStart + value + translateSymEnd + ". can I consider this as your " + state + "?",
        translateSymStart + value + translateSymEnd + ". should I confirm this as your " + state + "?",
    ];
    var sen1 = [
        "Can I confirm the following as your " + sym + state + sym + "?" + suffix + "\n" + translateSymStart + sym + value + sym + translateSymEnd,
        "Should I consider the following as your " + sym + state + sym + "?" + suffix + "\n" + translateSymStart + sym + value + sym + translateSymEnd,
        "Can I consider the following as your " + sym + state + sym + "?" + suffix + "\n" + translateSymStart + sym + value + sym + translateSymEnd,
        "Should I confirm the following as your " + sym + state + sym + "?" + suffix + "\n" + translateSymStart + sym + value + sym + translateSymEnd,
    ];
    var arr = userType.includes("::guest:WHATSAPP:") ? sentanceSelector("", sen1) : sentanceSelector("", sen);
    return prefix + arr;
}

RandomSentences.prototype.randomSenForAddressConfirm = function (userType, state, value) {
    var prefix = "__REFINE_INPUT__GENERIC_YES_NO::";
    prefix = userType.includes("::guest:TOLL_FREE:") ? prefix : '';
    var suffix = " (Yes/No)";
    var sen = [
        value + ". can I confirm this as your " + state + "?",
        value + ". should I consider this as your " + state + "?",
        value + ". can I consider this as your " + state + "?",
        value + ". should I confirm this as your " + state + "?",
    ];
    var sen1 = [
        "Can I confirm the following as your " + sym + state + sym + "?" + suffix + "\n" + value,
        "Should I consider the following as your " + sym + state + sym + "?" + suffix + "\n" + value,
        "Can I consider the following as your " + sym + state + sym + "?" + suffix + "\n" + value,
        "Should I confirm the following as your " + sym + state + sym + "?" + suffix + "\n" + value,
    ];
    var arr = userType.includes("::guest:WHATSAPP:") ? sentanceSelector("", sen1) : sentanceSelector("", sen);
    return prefix + arr;
}

RandomSentences.prototype.randomSenForSavedAddress = function () {
    var sen = [
        "The address you have mentioned is not in our list.",
        "The specified address is not there in the saved address list.",
        "The address mentioned by you is not there in the saved address list."
    ];
    return sentanceSelector("", sen);
}

RandomSentences.prototype.randomSenForChange = function (userType, arr) {
    var flag = userType.includes("::guest:WHATSAPP") ? true : false;
    var sen = [
        "Which information do you want to change?",
        "What you would like to change?",
        "Which information you would like to change?",
        "What do you want to change?"
    ];
    var str = options(arr)
    var sen2 = [
        "Please indicate the *information* you want to change by typing :" + str + '.'
    ];
    if (flag)
        return sentanceSelector("", sen2);
    else
        return sentanceSelector("", sen);
}

function sentanceSelector(prefix, arr) {
    var randVal = randomizer();
    var senCount = randVal > arr.length - 1 ? 0 : randVal;
    return (prefix != "" ? prefix : "") + arr[senCount];
}

function randomizer() {
    return Math.floor(Math.random() * 6);
}

RandomSentences.prototype.textforL1agentConfirmation = function (userType, query) {
    apologyText = query == 'what next' ? '' : this.apologyText();
    var prefix = "__REFINE_INPUT__GENERIC_YES_NO::";
    prefix = userType.includes("::guest:TOLL_FREE:") ? prefix : '';
    var arr = [
        apologyText + " " + "Do you like to talk with L1 agent?",
        apologyText + " " + "Do you need to talk with L1 agent?",
        apologyText + " " + "Do you prefer to talk with L1 agent?",

    ];
    arr = sentanceSelector("", arr);
    return prefix + arr;
}

RandomSentences.prototype.apologyText = function () {

    var arr = [
        "I am sorry, I am unable to understand what you have said.",
        "Sorry, I'm having difficulty in understanding.",
        "I am sorry, I can't understand what you said.",
        "I'm sorry, I am having difficulty in understanding you."
    ];
    return sentanceSelector("", arr);
}

RandomSentences.prototype.modelNameOptions = function (userType, arr1) {
    var flag = userType.includes("::guest:WHATSAPP") ? true : false
    var arr = [
        "Select the model name from the following which you want to register."
    ];
    var str = options(arr1)
    var arr2 = [
        "Kindly indicate the *model name* you want to register by typing " + str + '.'
    ]
    if (flag)
        return sentanceSelector("", arr2);
    else
        return sentanceSelector("", arr);
}

function options(arr) {
    var str = '';
    for (var i = 0; i < (arr.length); i++) {
        var str1 = (i == 0 ? '' : i == (arr.length - 1) ? ' or ' : ', ')
        str = str + str1 + (i + 1);
    }
    return str;
}