var {
    wordsToNumbers
} = require('words-to-numbers');

var GoogleService = require("../Services/googleService");

var Utility = function (config, logger) {
    this.logger = logger;
    this.googleService = new GoogleService(config, logger);
}

module.exports = Utility;

Utility.prototype.getVoiceForEmail = function (email) {
    return replaceAll(email.replace("gmail", " g mail"), ".", " dot ")
}

function replaceAll(target, search, replacement) {
    return target.split(search).join(replacement);
};

//Creating options array
//option count
//Veriety in state sentence
Utility.prototype.createOptionsArray = function (optionCount, stateSentance) {
    var optionVerityObj = [{
        pre: "",
        suf: ""
    },
    {
        pre: "take option",
        suf: ""
    },
    {
        pre: "select",
        suf: "one"
    },
    {
        pre: "select",
        suf: ""
    },
    {
        pre: "select option",
        suf: ""
    },
    {
        pre: "select",
        suf: "option"
    },
    {
        pre: "option",
        suf: ""
    },
    {
        pre: "akshar",
        suf: ""
    },
    {
        pre: "",
        suf: "akshar"
    },
    {
        pre: "",
        suf: "action"
    },
    {
        pre: "",
        suf: "actions"
    },
    {
        pre: "action",
        suf: ""
    },
    {
        pre: "function",
        suf: ""
    },
    {
        pre: "",
        suf: "function"
    },
    {
        pre: "options",
        suf: ""
    },
    {
        pre: "actions",
        suf: ""
    },
    {
        pre: "",
        suf: "option"
    },
    {
        pre: "",
        suf: "options"
    },
    {
        pre: "choice",
        suf: ""
    },
    {
        pre: "",
        suf: "choice"
    },
    {
        pre: "choose",
        suf: ""
    },
    {
        pre: "choose option",
        suf: ""
    },
    {
        pre: "choose",
        suf: "option"
    },
    {
        pre: "consider",
        suf: ''
    },
    {
        pre: 'number',
        suf: ''
    },
    {
        pre: 'type',
        suf: ''
    },
    {
        pre: 'no',
        suf: ''
    }
    ];
    if (stateSentance.length != 0) {
        optionVerityObj = optionVerityObj.concat(stateSentenceOptions(stateSentance));

    }
    var array = [];
    for (var i = 0; i < optionVerityObj.length; i++) {
        array = array.concat(optionHelper(optionVerityObj[i].pre, optionVerityObj[i].suf, soundalike(optionCount)));
    }
    return array;
}

function stateSentenceOptions(arr) {
    let out = [];
    for (var i = 0; i < arr.length; i++) {
        out.push({
            pre: "select",
            suf: arr[i]
        }, {
            pre: "",
            suf: arr[i]
        }, {
            pre: "choose",
            suf: arr[i]
        }, {
            pre: "consider",
            suf: arr[i]
        }, {
            pre: "take",
            suf: arr[i]
        });
    }
    return out;
}

function optionHelper(prefixstr, sufixStr, arr) {
    var options = [];
    for (var i = 0; i < arr.length; i++) {
        options.push((prefixstr != "" ? prefixstr + " " : "") + arr[i] + (sufixStr != "" ? " " + sufixStr : ""));
    }
    return options;
}

function soundalike(num) {
    var array = number_soundAlike(num);
    array = array.concat(letter_soundalike(num));
    return array;
}

function number_soundAlike(num) {
    let obj = soundAlikeNumbers();

    var resArray = [];
    resArray = [generateWordForNumber(num), ordinal_suffix_of(num), numberToString(num), String.fromCharCode("A".charCodeAt(0) + Number(num - 1)), num];

    resArray = resArray.concat(obj[num]);
    return resArray;
}

function letter_soundalike(num) {
    let obj = soundAlikeWordHash();
    let letter = String.fromCharCode("A".charCodeAt(0) + Number(num - 1));
    return obj[letter.toLowerCase()];
}

function soundAlikeNumbers() {
    let obj = {
        "0": ["hero", "zera"],
        "1": ["on", "own"],
        "2": ["to", "too", "do", "q", "queue"],
        "3": ["tree", "free", "tea", 'thee', "tee", 'entry', 'sree', 'sri'],
        "4": ["for", "fore", "form", "ford", "phone"],
        "5": ["hive", "wifi", "pie", "fire"],
        "6": ["sick", "stick", "sex", "fix"],
        "7": ["heaven", "something", "when", "save", "sent", "send"],
        "8": ["it", "hate", "eat", "ate", "gate", "yeat", "plate"],
        "9": ["fine", "nayan", "wine", "night", "line", "man"]
    }
    return obj;
}

function soundAlikeWordHash() {
    var obj = {
        'a': ['yeah', 'ei', 'ee'],
        'b': ['be', 'bee', 'v', 'p', 'by'],
        'c': ['she', 'sea', 'cee', 'e', 'si', 'g', 'see'],
        'd': ['dee', 'di'],
        'e': ['he', 'ee', 'eid', 'ye', 'b'],
        'f': ['af', 'ef', 'fc', 'hap', 'app'],
        'g': ['gee', 'ghee', 'zee', 'jee', 'ji'],
        'h': ['ache', 'aich', 'eite', 'which'],
        'i': ['ai', 'eye', 'ie', 'why', 'in'],
        'j': ['jay', 'jai', 'je', 'e', 'jeep'],
        'k': ['key', 'kai', 'ok'],
        'l': ['yell', 'el', 'll', 'hell'],
        'm': ['am', 'em', 'ame'],
        'n': ['an', 'end', 'en', 'can', 'un'],
        'o': ['ho', 'ok', 'oo', 'owe'],
        'p': ['pic', 'pi', 'pee', 'pc'],
        'q': ['kyu', 'kyon', 'queue', 'que', 'cute'],
        'r': ['are', 'ar'],
        's': ['es', 'yes', 'see'],
        't': ['tee', 'tree', 'three', 'tea', 'the', 'te', 'tv'],
        'u': ['ufo', 'you'],
        'v': ['week', 'weet', 'we', 'weak', 'will', 'vik'],
        'w': ['double u', 'uu'],
        'x': ['ei', 'x', 'ex', 'axe'],
        'y': ['why', 'ye', 'wife', 'wifi'],
        'z': ['zoo', 'zed', 'jet']
    }
    return obj;
};

function generateWordForNumber(num) {
    var a = ['', 'first ', 'second ', 'third ', 'fourth ', 'fifth ', 'sixth ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
    return str.trim();
}

function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

function numberToString(num) {
    var numWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    if (num > 9) {
        return num
    } else {
        return numWords[num];
    }
}

//mobile number validator
Utility.prototype.mobileNumberVerify = function (value) {
    // var reg = new RegExp("^(0|00[1-9][0-9]{0,4}|\\+[1-9][0-9]{0,4})?([6-9][0-9]{9})$");
    var result = {
        status: true,
        value: ""
    }
    value = this.commonWordChange(value);
    value = wordsToNumbers(value);
    value = this.changeConsicutiveSameChar(value);
    value = removeEmptySpaces(value);
    if (value != '') {
        var num = seperateNumberFromString(value);
        if (num != null) {
            if (num.substring(0, 2) == '00') {
                result.value = num;
            } else if (num.substring(0, 1) == '0' && num.length == 11) {
                result.value = '+91' + num.substring(1, 10);
            } else if (num.length == 10) {
                result.value = '+91' + num;
            } else if (num.length > 10) {
                result.value = '+' + num;
            } else {
                result.status = false;
            }
        } else {
            result.status = false;
        }
        // num = (num.length > 10) ? num.replace(/\D/g, '').slice(-10) : num
        // if (reg.test(num)) {
        //     result = {
        //         status: true,
        //         value: num
        //     }
        // }
    }
    return result;
}

function commonWordChange(str) {
    str = str.toLowerCase();
    var comnWords = {
        0: ["zera", "hero", "veera"],
        1: ["on", "won",],
        2: ["to", "too", "do"],
        3: ["three", "tee", "tea", "tree", 'entry', 'sree', 'sri'],
        4: ["for", "ford", "fore"],
        5: ["pie", "fire", "hive"],
        6: ["sick", "stick", "sex", "fix"],
        7: ["save", "sent", "send", "heaven"],
        8: ["gate", "yeat", "eat", "hate", "ate", "plate"],
        9: ["night", "line", "man", "nayan"],
        10: ["then", "tune", "tonne"]
    }
    for (var key in comnWords) {
        for (var i = 0; i < comnWords[key].length; i++) {
            str = str.replace(comnWords[key][i], key);
        }
    }
    return str;
}

function seperateNumberFromString(value) {
    var num = value.match(/\d+/g);
    if (num) {
        num = num.join('');
    }
    return num;
}

function removeEmptySpaces(value) {
    return value.replace(/ +/g, "");
}

Utility.prototype.pincodeVerify = function (value) {
    var reg = new RegExp("^[0-9]*$");
    var result = {
        status: false,
        value: ""
    }
    value = wordsToNumbers(value);
    value = commonWordChange(value);
    value = removeEmptySpaces(value);
    if (value != '') {
        var num = seperateNumberFromString(value);
        if (reg.test(num) && num.length == 6) {
            result = {
                status: true,
                value: num
            }
        }
    }
    return result;
}

Utility.prototype.commonWordChangeFeedback = function (str) {
    str = str.toLowerCase();
    var comnWords = {
        0: ["zera", "hero", "veera"],
        1: ["on", "won", 'warn'],
        2: ["to", "too", "do", 'tu'],
        3: ["tee", "tea", "tree", "stri"],
        4: ["for", "ford", "fore", 'pour', 'pore'],
        5: ["pie", "fire", "hive", 'bye', 'pipe', 'y', 'why']
    }
    for (var key in comnWords) {
        for (var i = 0; i < comnWords[key].length; i++) {
            if (RegExp("\\b" + comnWords[key][i] + "\\b", "i").test(str)) {
                str = str.replace(comnWords[key][i], key);
            }
        }
    }
    return str;
}

Utility.prototype.commonWordChange = function (str) {
    str = str.toLowerCase();
    var comnWords = {
        0: ["zera", "hero", "veera"],
        1: ["on", "won",],
        2: ["to", "too", "do"],
        3: ["three", "tee", "tea", "tree"],
        4: ["for", "ford", "fore"],
        5: ["pie", "fire", "hive", 'bye', 'pipe', 'y', 'why'],
        6: ["sick", "stick", "sex", "fix"],
        7: ["save", "sent", "send", "heaven"],
        8: ["gate", "yeat", "eat", "hate", "ate", 'at', 'plate'],
        9: ["night", "line", "man", "nayan"],
        10: ["then", "tune", "tonne"]
    }
    for (var key in comnWords) {
        for (var i = 0; i < comnWords[key].length; i++) {
            if (RegExp("\\b" + comnWords[key][i] + "\\b", "i").test(str)) {
                str = str.replace(comnWords[key][i], key);
            }
        }
    }
    return str;
}

Utility.prototype.findAddress = function (address, state, callback) {
    var _this = this;
    this.googleService.getAddress(address, function (res) {
        var formatedAddress = getAddressFormat(_this, res.results);
        if (isEmpty(formatedAddress) || (state == 'address' && address.length <= 15)) {
            callback(null);
        } else {
            callback(formatedAddress);
        }
    });
}

function getAddressFormat(_this, response) {
    var addressFormat = {}
    if (response.length != 0) {
        addressFormat["formatted_address"] = response[0].formatted_address;
        return addressFormat;
    } else {
        return {};
    }
}

function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

Utility.prototype.titleCase = function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

Utility.prototype.changeConsicutiveSameChar = function (num) {
    num = num.toString();
    let isValidValue = isDoubleOrTriple(num);

    let double = num.includes("double");
    let triple = num.includes("triple");
    let doubleArray = num.split(" ");
    if (double && isValidValue) {
        let posi = doubleArray.indexOf("double");
        if (doubleArray.length - 1 > posi) {
            let posi1 = posi + 1;
            cha = doubleArray.slice(posi1, posi1 + 1)
            let charArray = []
            charArray = cha[0].split("");
            charArray = charArray[0];
            num = num.replace("double", charArray);
        }
    }
    if (triple && isValidValue) {
        let posi = doubleArray.indexOf("triple");
        if (doubleArray.length - 1 > posi) {
            let posi1 = posi + 1;
            cha = doubleArray.slice(posi1, posi1 + 1)
            var charArray = [];
            var charArray1 = [];
            charArray = cha[0].split("");
            charArray1.push(charArray[0]);
            charArray1.push(charArray[0]);
            charArray1 = charArray1.join("");
            num = num.replace("triple", charArray1);
        }
    }
    return num;
}

function isDoubleOrTriple(val) {
    val = replaceAll(val, "double", "");
    val = replaceAll(val, "triple", "");
    val = val.trim();

    return (val != "" ? true : false);
}