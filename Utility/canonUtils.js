var Utility = require("../Utility/utils");
var InsightEngineService = require("../Services/insightEngineService")
var stringSimilarity = require('string-similarity');

var {
    wordsToNumbers
} = require('words-to-numbers');
var wordlist = require("wordlist-english");

var CanonUtility = function (config, logger) {
    this.logger = logger;
    this.utility = new Utility(config, logger);
    this.insightEngineService = new InsightEngineService(config, logger);
}

module.exports = CanonUtility;

CanonUtility.prototype.isModelNumberValid = function (origModel, callback) {
    var _this = this;
    this.insightEngineService.isModelNumberValid(origModel, function (result) {
        callback(result);
    })
}

CanonUtility.prototype.serial = function (email, ticketID, originalSerialNum, callback) {
    var _this = this;
    var channel = '';
    if (email.includes('::guest:WHATSAPP')) {
        channel = 'whatsapp';
    }
    originalSerialNum = originalSerialNum.trim();
    this.insightEngineService.isSerialNumberValid(channel, originalSerialNum, function (result) {
        _this.logger.debug(ticketID + ": Serial Number: " + originalSerialNum + " => " + (result.status ? result.value : null));
        callback(result);
    })
}

function wordToNumbersHelper(val) {
    val = replaceAll(val, "a", "::");
    val = wordsToNumbers(val);
    return replaceAll(val, "::", "a");
}

function seperateNumberFromString(value) {
    var num = value.match(/\d+/g);
    if (num) {
        num = num.join('');
    }
    return num;
}

function soundAlikeNumbersclr() {
    let obj = {
        "0": ["zero", "hero", "zera", "sirohi"],
        "1": ["one", "on", "own",],
        "2": ["two", "to", "too", "do", "q", "queue", 'tu', 'give'],
        "3": ["three", "tree", "free", "tea", "tee"],
        "4": ["four", "for", "fore", "form", "ford", "phone"],
        "5": ["five", "hive", "wifi", "pie", "fire"],
        "6": ["six", "sick", "stick", "sex", "fix"],
        "7": ["seven", "heaven", "something", "when", "save", "sent", "send"],
        "8": ["eight", "it", "hate", "eat", "ate", "gate", "yeat", 'plate'],
        "9": ["nine", "fine", "nayan", "wine", "night", "line", "man"]
    }
    return obj;
}

function soundAlikeNumbers() {
    let obj = {
        "0": ["hero", "zera", "sirohi"],
        "1": ["on", "own",],
        "2": ["to", "too", "do", "q", "queue", 'tu'],
        "3": ["tree", "free", "tea", "tee", 'sree', 'sri', 'entry'],
        "4": ["for", "fore", "form", "ford", "phone"],
        "5": ["hive", "wifi", "pie", "fire"],
        "6": ["sick", "stick", "sex", "fix"],
        "7": ["heaven", "something", "when", "save", "sent", "send"],
        "8": ["it", "hate", "eat", "ate", "gate", "yeat", 'plate'],
        "9": ["fine", "nayan", "wine", "night", "line", "man"]
    }
    return obj;
}

CanonUtility.prototype.isConfirmationDecide = function (str) {
    str = str.toLowerCase();
    var res = {
        status: false,
        descision: ""
    }
    var descision = {
        "no": ["no", "don't", "not", 'na'],
        "yes": ["yes", "confirm", "yea", "ok", "yeah", 'ya', 's', 'consider', 'proceed', 'i have', "I said the same", , "Yes, i said that", "thats what i said", "exactly"]
    }
    for (var des in descision) {
        for (var i = 0; i < descision[des].length; i++) {
            if (str.includes(descision[des][i])) {
                res.status = true;
                res.descision = des
                break;
            }
        }
        if (res.status) {
            break;
        }
    }
    return res;
}

// category validator
CanonUtility.prototype.categoryValidate = function (str) {
    str = str.toLowerCase();
    var result = {
        status: false,
        value: ""
    }
    var obj = {
        'Register Complaint': ['rajasthan', 'complaint', 'register', 'complain'],
        'Toner Booking': ['hooking', 'booking', 'tone', 'book', 'dholak', 'dotana', 'ola', 'train', 'maternal', 'chunav', "monaco king", 'toner', 'turner', 'honour', 'donna', 'owner', "dollar", "traveller", 'donor', 'sona', 'town hall', 'chunar', 'sonar', 'tune', 'pune', 'booking', 'look taller', 'ink']
    }
    for (let key in obj) {
        for (var i = 0; i < obj[key].length; i++) {
            if (str.includes(obj[key][i])) {
                result.status = true;
                result.value = key;
            }
        }
    }
    return result;
}

CanonUtility.prototype.findProblemCategory = function (str) {
    str = str.toLowerCase();
    var result = {
        status: false,
        value: ""
    }
    var obj = {
        'Machine Installation': ['install', 'installation', 'new printer', 'new product', 'new scanner'],
        'Machine Service/Breakdown': ['service', 'servicing', 'breakdown', 'break', 'broke', 'compalint', 'problem', 'issue', 'background', 'breaking down', "ringtone", "brake dot"]
    }
    for (let key in obj) {
        for (var i = 0; i < obj[key].length; i++) {
            if (str.includes(obj[key][i])) {
                result.status = true;
                result.value = key;
            }
        }
    }
    return result;
}

CanonUtility.prototype.productValidate = function (str) {
    str = str.toLowerCase();
    var result = {
        status: false,
        value: ""
    }
    var obj = {
        'Multi-function Devices': ['function', 'devices'],
        'Scanner': ['scanner', "screener", 'kana', 'scanned', 'kanna', 'scandal', 'scan', 'scaner', 'scanr'],
        'Printer': ['printer', 'princess', 'print', 'printed', 'enter', 'inter', 'xender', 'miranda', 'indus', 'center']
    }
    for (let key in obj) {
        for (var i = 0; i < obj[key].length; i++) {
            if (str.includes(obj[key][i])) {
                result.status = true;
                result.value = key;
                return result;
            }
        }
    }
    return result;
}

//Serial Number
CanonUtility.prototype.isSerialNumberValid = function (origSerialNum) {
    var result = {
        status: false,
        value: ""
    }
    var number = origSerialNum.split(" ").join("");
    if (number.length) {
        result.status = true;
        result.value = number.toUpperCase();
    }
    return result;
}

CanonUtility.prototype.findName = function (origName, userType) {
    var result = {
        status: false,
        value: ""
    }
    origName = this.removeWordsForName(origName);
    origName = origName.trim();
    origName = removeConsecutiveRepeatedWord(origName);
    // var letters = /\A[a-zA-Z\. ]+\z/
    var letters = /^[A-Za-z]+(([\s\.])|([\s|\.])+([A-Za-z]+))*$/;
    if (origName != '' && origName.length < 35) {
        if (origName.match(letters)) {
            if (origName.includes("yes")) {
                origName = replaceAll(origName, 'yes', 's');
            }
            result.status = true;
            result.value = origName;
            return result;
        } else {
            return result;
        }
    } else {
        return result;
    }
}

CanonUtility.prototype.removeWords = function (s) {
    var words = ['yes', 'proceed', 'please', 'confirm', 'wait', 'ahead', 'talking', 'i', 'no', 'yes', 'this', 'is', 'my', 'what', 'next', 'the', 'an', 'is', 'of', 'as', 'nor', 'but', 'or', 'yet', 'so', 'to', 'buy', 'need', 'me', 'look', 'into', 'for', 'looking', 'my', 'coming', 'am', "didn't", 'get', 'it', 'items', "it's", 'help', 'item', 'know', 'ya', 'that', 'model', 'number', 'should', 'be', 'must', 'no', 'may', 'ok', 'this', 'address', 'take', 'would', 'yeah', 'confirm', 'not', 'name', 'my', 'take', 'am', 'sorry', 'i am', 'your', 'for', 'lease', 'can', 'you', 'repeat', 'it', 'pardon', 'kindly'];
    for (var i = 0; i < words.length; i++) {
        if (RegExp('\\b' + words[i] + '\\b', 'i').test(s)) {
            var exp = new RegExp('\\b' + words[i] + '\\b', 'gi')
            s = s.replace(exp, '');
        }
    }
    var expr = new RegExp('[ \\t]{2,}', 'g');
    var removedCommonwords = s.replace(expr, '').trim();
    return removedCommonwords;
};

CanonUtility.prototype.removeWordsForName = function (s) {
    var words = ['hi', 'that', 'yes', 'proceed', 'please', 'confirm', 'wait', 'ahead', 'talking', 'i', 'no', 'yes', 'this', 'is', 'my', 'what', 'next', 'the', 'an', 'is', 'of', 'as', 'nor', 'but', 'or', 'yet', 'so', 'to', 'buy', 'need', 'me', 'look', 'into', 'for', 'looking', 'my', 'coming', 'am', "didn't", 'get', 'it', 'items', "it's", 'help', 'item', 'know', 'ya', 'that', 'model', 'number', 'should', 'be', 'must', 'no', 'may', 'ok', 'this', 'address', 'take', 'would', 'yeah', 'confirm', 'not', 'name', 'my', 'take', 'am', 'sorry', 'i am', 'your', 'for', 'lease', 'theek hai', 'haan', 'achchha', 'badhiya sahee', 'hai', 'bilkul', 'mera naam', 'mera', 'naam', 'main', 'baat kar raha hoon', 'baat', 'kar', 'raha', 'are main', 'are', 'hoon', 'can', 'you', 'repeat', 'it', 'pardon', 'kindly', 'change', 'nose', 'dot']
    for (var i = 0; i < words.length; i++) {
        if (RegExp('\\b' + words[i] + '\\b', 'i').test(s)) {
            var exp = new RegExp('\\b' + words[i] + '\\b', 'gi')
            s = s.replace(exp, '');
        }
    }
    var expr = new RegExp('[ \\t]{2,}', 'g');
    var removedCommonwords = s.replace(expr, '').trim();
    return removedCommonwords;
};

CanonUtility.prototype.removeSymbols = function (s) {
    var sym = ['-', '.', '*', '/'];
    for (var i = 0; i < sym.length; i++) {
        if (s.includes(sym[i])) {
            s = s.replace(sym[i], '');
        }
    }
    return s;
};

CanonUtility.prototype.findMeterReading = function (origMeter, lastMeterReading) {
    var result = {
        status: false,
        value: ""
    }
    var val = this.utility.commonWordChange(origMeter);
    var meter = wordToNumbersHelper(val);
    meter = this.utility.changeConsicutiveSameChar(meter);
    meter = meter.toString();
    var value = seperateNumberFromString(meter);
    if ((value == null || value == 0) || lastMeterReading >= value && value <= 100000000000) {
        return result;
    } else {
        result.status = true;
        result.value = value;
        return result;
    }
}

CanonUtility.prototype.findProblem = function (origProblem) {
    var result = {
        status: false,
        value: ""
    }
    var problem = this.identifyProblem(origProblem);
    if (problem == '') {
        return result;
    } else {
        result.status = true;
        result.value = problem;
        return result;
    }
}

CanonUtility.prototype.finAddress = function (adrs) {
    var result = {
        status: false,
        value: ""
    }
    if (adrs.length == 0) {
        return result;
    } else {
        result.status = true;
        result.value = adrs;
        return result;
    }
}

CanonUtility.prototype.numberSpaceInSentence = function (str) {
    var num = str.match(/\d+/g);
    if (num) {
        for (var i = 0; i < num.length; i++) {
            if (num[i].length > 3) {
                str = str.replace(num[i], num[i].split("").join(" "))
            }
        }
        if (str.includes("/")) {
            str = replaceAll(str, "/", " bar ");
        }
        if (str.includes("-")) {
            str = replaceAll(str, "-", " dash ");
        }
        if (str.includes(".")) {
            str = replaceAll(str, '.', '')
        }
        if (str.includes(":")) {
            str = replaceAll(str, ':', '')
        }
        return str;
    } else {
        return str;
    }
}

function replaceAll(target, search, replacement) {
    target = target.toString();
    return target.split(search).join(replacement);
};

CanonUtility.prototype.identifyProblem = function (problemStatement) {
    var problems = [];
    var problemHash = {
        "Paper Jam": {
            "Paper Jam": ['zameen', 'jaam', "jam", "jamm(|s|ing|ed)", "jump(|s|ing|ed)", "paper(|s| jam)", "stuck(|ed|ing)", 'janu miss you', 'gamming', 'struck(|ed|ing)']
        },
        "Print Quality": {
            "Print Quality": ["blurr(|ed|y|ing)", "spot(|s|ed|ing|ings)", "trend(|s|ing)", "line(|s)", 'paint(|s|ing|ed)', "page(|s)", 'dim', 'low', "print(|s|ing)", "quality"]
        },
        "Connectivity Problem": {
            "Connectivity Problem": ["connect(|ing|ed|ivity)", "select(ivity|ing|ed)", "connectivity problems"]
        },
        "Hardware Related": {
            "Hardware Related": ["hardware"]
        },
        "Error Code": {
            "Error Code": ["error", "code", "record", 'account', 'errorcode', 'errors', 'codes']
        },
        'Other': {
            'Other': ['whether', 'other', 'weather', 'aadhar', 'rather', 'others']
        },
    }

    for (var mainProb in problemHash) {
        for (problem in problemHash[mainProb]) {
            var exprArr = problemHash[mainProb][problem];
            for (var i = 0; i < exprArr.length; i++) {
                var regex = new RegExp("\\b" + exprArr[i] + "\\b", "ig")
                if (regex.test(problemStatement) && !problems.includes(problem)) {
                    problems.push(problem);
                }
            }
        }
    }
    return diagnosticContradictory(problems);
}

CanonUtility.prototype.symptomCodes = function (problem) {
    var symptoms = {
        'Error Code': 'Error Code',
        'Paper Jam': 'Jam',
        'Low Print Quality': 'Print Quality',
        'Connectivity Problem': 'Hardware Related',
        'Other': 'Additional Request from Customer',
        'Machine Installation': 'Machine Installation'
    };
    for (var key in symptoms) {
        if (key == problem) {
            return symptoms[key];
        }
    }
}

CanonUtility.prototype.getComplaintCategory = function (problem) {
    var symptoms = {
        'Paper Jam': 1,
        'Print Quality': 2,
        'Connectivity Problem': 4,
        'Error Code': 3,
        'Other': 5
    };
    for (var key in symptoms) {
        if (key == problem) {
            return symptoms[key];
        }
    }
}

CanonUtility.prototype.symptomIdentify = function (str) {
    str = str.toLowerCase();
    var result = {
        status: false,
        value: ""
    }
    var obj = {
        'Feeder': ['fida', 'feeder', 'feed', 'reader', 'seeder'],
        'Main Body': ['body', "main"],
        'Sorter/Finisher': ['sorter', 'finisher'],
    }
    for (let key in obj) {
        for (var i = 0; i < obj[key].length; i++) {
            if (str.includes(obj[key][i])) {
                result.status = true;
                result.value = key;
                return result;
            }
        }
    }
    return result;
}

CanonUtility.prototype.feedBackValidate = function (ratingOrig) {
    var result = {
        status: false,
        value: ""
    }
    var val = this.utility.commonWordChangeFeedback(ratingOrig);
    var rating = wordToNumbersHelper(val);
    rating = rating.toString();
    var value = seperateNumberFromString(rating);
    if (value == null || value > 5) {
        return result;
    } else {
        result.status = true;
        result.value = value;
        return result;
    }
}

function diagnosticContradictory(problems) {
    var contradictory = [{
        value: "Print Quality",
        contradicts: "Other"
    },
    {
        value: "Error Code",
        contradicts: "Other"
    },
    {
        value: "Hardware Related",
        contradicts: "Other"
    },
    {
        value: "Paper Jam",
        contradicts: "Other"
    },
    {
        value: "Connectivity Problem",
        contradicts: "Other"
    }
    ];
    for (var i = 0; i < contradictory.length; i++) {
        for (var j = 0; j < problems.length; j++) {
            if (problems[j] == contradictory[i].value) {
                problems = problems.filter(function (value, index, arr) {
                    return value != contradictory[i].contradicts;
                });
            }
        }
    }
    return problems;
}

CanonUtility.prototype.findTonerColor = function (color) {
    if (color.includes("complete")) {
        color = replaceAll(color, 'complete ', '');
    }
    var colorNum = soundAlikeNumbersclr();
    for (var key in colorNum) {
        for (var i = 0; i < colorNum[key].length; i++) {
            regex = new RegExp("\\b" + colorNum[key][i] + "\\b", "ig");
            color = color.replace(regex, key);
        }
    }
    var val = colorLoad(color);
    var tonersArray = [];
    var result = {
        status: false,
        value: ''
    }
    var clr = [];
    if (val != '') {
        for (i = 0; i < val.length; i++) {
            clr.push(this.utility.titleCase(val[i].color));
        }
        result = {
            status: true,
            value: clr
        }
        return result;
    } else {
        return result;
    }
}

function colorLoad(color) {
    color = color.toLowerCase();
    color = color.replace(" a ", ' # ');
    color = wordToNumbersHelper(color);
    color = color.replace(" # ", ' a ');
    color = getColorEntities(color);
    var colorArr = [],
        result = [];
    var num = [];
    var obj = {};
    var sString = [],
        sNum = [],
        tColor = ["cyan", "yellow", "magenta", "black"];
    colorArr1 = color.includes(",") ? replaceAll(color, ',', ' ') : color;
    colorArr = colorArr1.split(' ');
    if (colorArr.includes('set') || colorArr.includes('all') || colorArr.includes('complete')) {
        for (let k = 0; k < colorArr.length; k++) {
            if ('set' == colorArr[k] || 'all' == colorArr[k] || 'complete' == colorArr[k]) {
                if (!isNaN(colorArr[k + 1])) {
                    num = colorArr[k + 1];
                } else if (!isNaN(colorArr[k - 1])) {
                    num = colorArr[k - 1];
                } else {
                    num = 1;
                }
            }
        }
    }
    for (let i = 0; i < colorArr.length; i++) {
        if (tColor.includes(colorArr[i].trim())) {
            if (!sString.includes(colorArr[i].trim())) {
                sString.push(colorArr[i].trim());
                if (!isNaN(colorArr[i + 1])) {
                    sNum.push(colorArr[i + 1]);
                } else if (!isNaN(colorArr[i - 1])) {
                    sNum.push(colorArr[i - 1]);
                } else {
                    sNum.push("1");
                }
            }
        }
    }
    if (sNum.length == sString.length) {
        for (let j = 0; j < sNum.length; j++) {
            obj = {
                count: sNum[j],
                color: sString[j]
            }
            result.push(obj);
        }
    }
    if (num != '') {
        for (let l = 0; l < tColor.length; l++) {
            obj = {
                count: num,
                color: tColor[l]
            }
            result.push(obj);
        }
    }
    return result
}

function getColorEntities(str) {
    var obj = {
        "cyan": ['bayan', 'cn', 'c y a n', 'see and', 'sea and', 'z and', 'c and', "cyan", 'zein', "sion", "zion", "blue", "riyan", "saiyaan", "russian", "shine", "sign", "shayaan", "saiyan", "gyan", "shyam", 'cm', "lion", "fan", "asian", "jaan", "zyan", "zayn", "shayan", "glue", "megan", 'jian', 'dayan'],

        "yellow": ["yellow", "l o", "lo", "hello", "love", "low", "yell", "yell low", "yell lone", "elo", "l lo", "el lo", 'ella', 'ela'],

        "magenta": ["zinda", 'zinta', "measure", "magenta", "magentha", "medanta", "manchanda", "marjenda", "rajendra", "agenda", "merchant", "mahendra", " mein jhanda", "pink", "main jinda", "gender", "muchanda"],

        "black": ["black", "lakme", "flack", "block", "blake", "luck", "lack", "lakh"],

        "set": ["set"]
    }
    for (var key in obj) {
        for (var i = 0; i < obj[key].length; i++) {
            regex = new RegExp("\\b" + obj[key][i] + "\\b", "ig");
            str = str.replace(regex, key);
        }
    }
    return str;
}

CanonUtility.prototype.doorNumberDetect = function (userValue) {
    var result = {
        status: false,
        value: ""
    }
    var number = "";
    userValue = replaceSymbols(userValue);
    var num = soundAlikeNumbers();
    for (var key in num) {
        for (var i = 0; i < num[key].length; i++) {
            regex = new RegExp("\\b" + num[key][i] + "\\b", "ig");
            userValue = userValue.replace(regex, key);
        }
    }
    userValue = wordToNumbersHelper(userValue)
    userValue = skipSingleLetterWordToNumbersConvertion(userValue);
    tokens = userValue.split(/[ \r\n\t]+/);
    tokens = combineConsecutiveNumbersPlusSymbols(tokens);
    var numberIndex = getNumberPlusSymbolIndex(tokens, 0);
    if (numberIndex != -1) {
        number = finaldecision(tokens, numberIndex);
    }
    number = finalFilter(number);
    if (number != "") {
        result.status = true;
        result.value = number.toUpperCase();
    }
    return result;
}

function skipSingleLetterWordToNumbersConvertion(str) {
    var arr = str.split(" ");
    var res = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > 1) {
            res += wordsToNumbers(arr[i]) + " ";
        } else {
            res += arr[i] + " ";
        }
    }
    return res.trim();
}

function replaceSymbols(val) {
    val = val.toLowerCase();
    let symbols = {
        "minus": "-",
        "dash": "-",
        "slash": "/",
        "bar": "/",
        "by": "/",
        "divided by": "/",
        "buy": "/",
        "hyphen": "-",
        "point": ".",
        "dot": ".",
        "full stop": "."
    }
    for (let key in symbols) {
        if (val.includes(key)) {
            val = val.replace(key, symbols[key]);
        }
    }
    return val;
}

function combineConsecutiveNumbersPlusSymbols(tokens) {
    var out = [];
    var patt = new RegExp("^[.0-9/-]+$");
    for (var i = 0; i < tokens.length; i++) {
        if (patt.test(tokens[i]) && out.length > 0 && patt.test(out[out.length - 1])) {
            out[out.length - 1] = out[out.length - 1].toString() + tokens[i].toString();
        } else {
            out.push(tokens[i]);
        }
    }
    return out;
}

function getNumberPlusSymbolIndex(tokens, start) {
    var patt = new RegExp("^[A-z]{0,1}[0-9/-]+[A-z]{0,1}$");
    for (var i = start; i < tokens.length; i++) {
        if (patt.test(tokens[i])) {
            return i
        }
    }
    return -1;
}

function finaldecision(token, numberIndex) {
    var res = "";
    token = removeExtras(token, numberIndex);
    numberIndex = getNumberPlusSymbolIndex(token, 0);
    if (numberIndex != 0 && numberIndex != -1) {
        res = lookBackward(token, numberIndex);
    }
    if (numberIndex == 0) {
        res = token[numberIndex]
    }
    if (token.length - 1 > numberIndex) {
        res += lookForward(token, numberIndex + 1);
    }
    return res;
}

function removeExtras(token, numberIndex) {
    token.length = (token.length > (numberIndex + 4) ? numberIndex + 4 : token.length);
    token = (numberIndex > 2 ? token.slice(numberIndex - 2, token.length) : token);
    return token;
}

function lookBackward(arr, index) {
    let res = "";
    for (var i = index; i >= 0; i--) {
        if (arr[i] == "/" || arr[i] == "-" || isWord(arr[i])) {
            res = arr[i] + res;
        }
    }
    return res;
}

function lookForward(arr, index) {
    let res = "";
    for (var i = index; i < arr.length; i++) {
        if (arr[i] == "/" || arr[i] == "-" || isWord(arr[i])) {
            res = res + arr[i];
        }
    }
    return res;
}

function isWord(str) {
    var englishWords = wordlist['english/10'];
    var patt = new RegExp("[0-9/-]+");
    if (patt.test(str)) {
        return true;
    } else {
        if (str.length == 1) {
            return str;
        } else {
            if (englishWords.indexOf(str) == -1) {
                return true;
            } else {
                return false;
            }
        }
    }
}

function finalFilter(num) {
    if (num[0] == "/" || num[0] == "-") {
        return removefrontSym(num);
    } else if (num[num.length - 1] == "/" || num[num.length - 1] == "-") {
        return removeBackSym(num)
    } else {
        return num;
    }
}

function removefrontSym(num) {
    num = num.slice(1, num.length);
    return finalFilter(num);
}

function removeBackSym(num) {
    num = num.slice(0, num.length - 1);
    return finalFilter(num);
}

//Street name Arrange
CanonUtility.prototype.streetNameArange = function (str) {
    var result = {
        status: false,
        value: ''
    }
    str = str.trim();
    if (str.match("[^0-9]")) {
        let val = removeConsecutiveRepeatedWord(str);
        val = this.removeWords(val);
        if (val && val.length < 65 && val != 'street') {
            result.status = true;
            result.value = val;
        }
    }
    return result;
}

function removeConsecutiveRepeatedWord(str) {
    var res = [];
    str = str.split(" ");
    for (var i = 0; i < str.length; i++) {
        if (str[i] != str[i + 1]) {
            res.push(str[i]);
        }
    }
    return res.join(" ");
}

CanonUtility.prototype.mobilevoice = function (mobileNo, email) {
    var translateSym1 = email.includes("::guest:TOLL_FREE") ? "<wordtranslate>" : "";
    var translateSym2 = email.includes("::guest:TOLL_FREE") ? "</wordtranslate>" : "";
    if (mobileNo != null && mobileNo != '' && mobileNo != 0) {
        mobileNo = mobileNo.toString();
        var mobile = mobileNo.split('');
        var mobileString = '';
        for (var i = 0; i < mobile.length; i++) {
            mobileString += mobile[i] + '  ';
        }
        return translateSym1 + mobileString.trim() + translateSym2;
    } else {
        return translateSym1 + mobileNo + translateSym2;
    }
}

CanonUtility.prototype.modelVoice = function (mobileNo) {
    if (mobileNo != null && mobileNo != '' && mobileNo != 0) {
        mobileNo = mobileNo.toString();
        var mobile = mobileNo.split('');
        var mobileString = '';
        for (var i = 0; i < mobile.length; i++) {
            mobileString += mobile[i] + '  ';
        }
        return mobileString.trim();
    } else {
        return mobileNo;
    }
}

CanonUtility.prototype.lastDigit = function (arr) {
    var str = "";
    var arr1 = [];
    var arr2 = [];
    var result = {
        status: true,
        value1: [],
        value2: []
    }
    if (arr.length == 0) {
        result.status = false
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 0) {
            str = arr[i].slice(0, arr[i].length - 1);
            str2 = arr[i].slice(-1, arr[i].length);
            arr2.push(str2);
            arr1.push(str);
        }
    }
    for (let i = 0; i < arr1.length - 1; i++) {
        if (arr1[i] != arr1[i + 1]) {
            result.status = false;
            result.value1 = arr1;
            result.value2 = arr2;
        } else {
            if (isNaN(parseInt(arr2))) {
                result.status = false;
            }
            result.value1 = arr1;
            result.value2 = arr2;
        }
    }
    return result;
}

CanonUtility.prototype.serialDigitValid = function (val) {
    var result = {
        status: false,
        value: ''
    }
    num = wordsToNumbers(val);
    num = soundAlikeNumbers();
    for (var key in num) {
        for (var i = 0; i < num[key].length; i++) {
            regex = new RegExp("\\b" + num[key][i] + "\\b", "ig");
            val = val.replace(regex, key);
        }
    }
    val = seperateNumberFromString(val);
    if (val != null) {
        if (val.length == 1) {
            result = {
                status: true,
                value: val
            }
            return result;
        } else {
            return result;
        }
    } else {
        return result;
    }
}

CanonUtility.prototype.buildingNumberCnf = function (str) {
    str = str.toLowerCase();
    var obj = {
        "yes": ["i have a building number", 'yes i have a building number', "yes", "was", 's', 'BF', 'F', "i don't have a number"],
        "no": ['no i dont have a building number', "no, i don't have a building number", 'no i dont', 'i dont have a building number', 'snow', "Lenovo", "no", "no i don't have", 'lo', 'law', 'i dont have', 'no building number', 'is not']
    }
    for (var key in obj) {
        for (var i = 0; i < obj[key].length; i++) {
            regex = new RegExp("\\b" + obj[key][i] + "\\b", "ig");
            str = str.replace(regex, key);
        }
    }
    return str;
}

CanonUtility.prototype.addressCnf = function (str) {
    str = str.toLowerCase();
    var obj = {
        "yes": ["that is my address", 'this is my address', "was", "PS", 's', 'BF', 'F', "yes that is my address", 'yes this is my address', 'yes'],
        "no": ['that is not my address', "this is not my address", 'know', 'lo', 'snow', "Lenovo", "no that is not my address", "no this is not my address", 'law', 'is not', 'no']
    }
    for (var key in obj) {
        for (var i = 0; i < obj[key].length; i++) {
            regex = new RegExp("\\b" + obj[key][i] + "\\b", "ig");
            str = str.replace(regex, key);
        }
    }
    return str;
}

CanonUtility.prototype.addressVoice = function (adrs, email) {
    var translateSym1 = email.includes("::guest:TOLL_FREE") ? "<wordtranslate>" : "";
    var translateSym2 = email.includes("::guest:TOLL_FREE") ? "</wordtranslate>" : "";
    var noTranslateSym1 = email.includes("::guest:TOLL_FREE") ? "<notranslate>" : "";
    var noTranslateSym2 = email.includes("::guest:TOLL_FREE") ? "</notranslate>" : "";
    if (adrs != '') {
        adrs = adrs.includes('.') ? replaceAll(adrs, '.', ', ') : adrs;
        adrs = adrs.includes('/') ? adrs.replace('/', ' bar ') : adrs;
        adrs = adrs.includes('number') ? replaceAll(adrs, 'number', ' ') : adrs;
        adrs = adrs.includes('NO') ? replaceAll(adrs, 'NO', '') : adrs;
        adrs = adrs.includes('no') ? replaceAll(adrs, 'no', '') : (adrs.includes('#') ? replaceAll(adrs, '#', '') : adrs);
        var pinString = ''
        var pin = this.pincodeSeperator(adrs);
        adrs = adrs.replace(pin, '');
        if (pin != '') {
            var pin = pin.split('');
            for (var i = 0; i < pin.length; i++) {
                pinString += pin[i] + ' ';
            }
        }
        var finalAdres = noTranslateSym1 + adrs + noTranslateSym2 + translateSym1 + pinString + translateSym2;
        return finalAdres;
    }
}

CanonUtility.prototype.numberToString = function (num) {
    var numWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    if (num > 9) {
        return num
    } else {
        return numWords[num];
    }
}

CanonUtility.prototype.spaceBetweenNumberInSerialques = function (input) {
    var refineNum = seperateNumberFromString(input);
    if (refineNum != null) {
        var array1 = [],
            array2 = [];
        array1 = refineNum.split("");
        for (let i = 0; i < array1.length; i++) {
            array2.push(array1[i] + "  ")
        }
        array2 = array2.join("")
        input = input.replace(refineNum, array2);
        return input;
    } else {
        return input;
    }
}

CanonUtility.prototype.productChange = function (product) {
    product = product.toLowerCase();
    product = product == ('multi-function devices') ? 'multi_function_device' : product;
    return product;
}

CanonUtility.prototype.addressFormation = function (adrs) {
    var str = "";
    if (adrs.doorNo != "") {
        str += adrs.doorNo + ", ";
    }
    if (adrs.buildingNo != "") {
        str += adrs.buildingNo + ", ";
    }
    if (adrs.streetName != "") {
        str += adrs.streetName + ", ";
    }
    if (adrs.pincode.hasOwnProperty("city")) {
        if (!str.includes(adrs.pincode.city)) {
            str += adrs.pincode.city + ", ";
        }
    }
    if (adrs.pincode.hasOwnProperty("formatted_address")) {
        var formatedAddress = adrs.pincode.formatted_address.split(" ");
        for (var i = 0; i < formatedAddress.length; i++) {
            if (!str.includes(formatedAddress[i])) {
                str += formatedAddress[i] + (formatedAddress.length - 1 == i ? "" : " ");
            }
        }
    } else {
        str += adrs.pincode;
    }
    return str;
}

CanonUtility.prototype.smsMessageCreation = function (context, number) {
    var message = "Kindly send the below required details in the specified format to " + number + ": \n\n" + context.reqIdAnalysis;

    if (context.serialNumber == '') {
        message = message + '<space><Serial Number>';
        if (context.productType == 'Printer' || context.productType == 'Scanner') {
            message = message + "#<Contact name>#<Complete address with pincode>"
        }
    } else if (context.name == '') {
        message = message + "<space><Contact name>#<Complete address with pincode>"
    } else if (context.address == '') {
        message = message + "<space><Complete address with pincode>"
    }
    return message;
}

CanonUtility.prototype.pincodeSeperator = function (val) {
    let patt = /[0-9]{6}/g
    let output = val.match(patt);
    if (output == null) {
        return '';
    }
    return output[0];
}

CanonUtility.prototype.addressChange = function (val) {
    if (val.includes('.')) {
        val = replaceAll(val, '.', ' ');
    }
    if (val.includes(':')) {
        val = replaceAll(val, ':', ' ');
    }
    return val;
}

CanonUtility.prototype.localityIdentify = function (str, availableLocality, callback) {
    var details = {
        status: false,
        localityName: "",
        localityCode: ""
    }
    var matches = stringSimilarity.findBestMatch(str.toUpperCase(), arrangeLocality(availableLocality));
    if (matches.bestMatch.rating > 0) {
        details.status = true;
        details.localityName = matches.bestMatch.target;
        details.localityCode = getLoctioncode(matches.bestMatch.target, availableLocality);
        callback(details)
    } else {
        callback(details);
    }
}

function arrangeLocality(availLocality) {
    var arr = [];
    for (var i = 0; i < availLocality.length; i++) {
        arr.push(availLocality[i].locality_name);
    }
    return arr;
}

function getLoctioncode(location, availableLocation) {
    for (var i = 0; i < availableLocation.length; i++) {
        if (availableLocation[i].locality_name == location) {
            return availableLocation[i].locality_code;
        }
    }
}

CanonUtility.prototype.addTranslate = function (input) {
    let out = "";
    out = input.split("").join(" ");
    return out;
}

CanonUtility.prototype.validateReferenceNumber = function (input) {
    if (input.includes("reference")) {
        input = input.trim().split(" ")
        return {
            status: true,
            refNo: input[input.length - 1]
        }
    } else {
        return {
            status: false,
            refNo: "Not Found"
        }
    }
}

CanonUtility.prototype.changeStates = function (currentState, product, category, problemCategory) {
    serviceEdgeStates = ['PRODUCT_TYPE', 'SERIAL_NO', "PROBLEM_CATEGORY", "PROBLEM", "LOCALITY_PINCODE", "LOCALITY", "NAME", "ADDRESS", "MOBILE_NO"];
    cmpTonerStates = ["PRODUCT_TYPE", "CATEGORY", "SERIAL_NO", "METER_READING", "TONER_COLOR"];
    cmpComplaintStates = ["PRODUCT_TYPE", "CATEGORY", "SERIAL_NO", "PROBLEM"];
    available = ["PRODUCT_TYPE", "CATEGORY", "SERIAL_NO", "SERIAL_NO_CNF", "ENTITY_NAME", "MODEL_NUMBER", "WARRANTY", "CONTRACT", "METER_READING", "TONER_COLOR", "OPEN_TICKET", "PROBLEM_CATEGORY", "PROBLEM", "SYMPTOM", "LOCALITY_PINCODE", "PINCODE_CNF", "LOCALITY", "NAME", "NAME_CNF", "ADDRESS", "PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF", "ADDRESS_CNF", "MOBILE_NO", "MOBILE_NUM_CNF", "CONFIRMATION", "REGISTER_SUMMARY", "FEEDBACK"]
    available1 = ["PRODUCT_TYPE", "CATEGORY", "SERIAL_NO", "SERIAL_NO_CNF", "ENTITY_NAME", "MODEL_NUMBER", "WARRANTY", "CONTRACT", "METER_READING", "TONER_COLOR", "OPEN_TICKET", "PROBLEM_CATEGORY", "LOCALITY_PINCODE", "PINCODE_CNF", "LOCALITY", "NAME", "NAME_CNF", "ADDRESS", "PINCODE", "DOOR_NO", "BUILDING_NO_CNF", "STREET_NAME", "STREET_NAME_CNF", "ADDRESS_CNF", "MOBILE_NO", "MOBILE_NUM_CNF", "CONFIRMATION", "REGISTER_SUMMARY", "FEEDBACK"]
    let out = []
    let beforeCurrentState = []
    if (problemCategory == 'Machine Installation') {
        beforeCurrentState = available1.slice(0, available1.indexOf(currentState));
    } else {
        beforeCurrentState = available.slice(0, available.indexOf(currentState));
    }
    if ((product == "Printer") || (product == "Scanner")) out = statesReturn(serviceEdgeStates, beforeCurrentState)
    else {
        if (category == "Toner Booking") out = statesReturn(cmpTonerStates, beforeCurrentState)
        else out = statesReturn(cmpComplaintStates, beforeCurrentState)
    }
    return out;
}

function statesReturn(selectArray, beforeCurrentState) {
    let out = selectArray.filter(element => beforeCurrentState.includes(element));
    return out
}

CanonUtility.prototype.paragraphTokenizer = function (str) {
    var remainingToAnalyse = str;
    var sentences = [];

    while (remainingToAnalyse != "") {
        var result = getSentenceUptoNextToken(remainingToAnalyse);
        if (result.sentence != "") {
            splitStartEndSpaces(sentences, result.sentence);
        }
        if (result.token != "") {
            sentences.push(result.token);
        }
        remainingToAnalyse = remainingToAnalyse.substring(result.sentence.length + result.token.length);
    }
    return sentences;
}

function isIgnoreElem(elem) {
    var skipChars = [" ", "\n", "\t"];
    return (skipChars.includes(elem) ? true : false);
}

function splitStartEndSpaces(sentences, str) {
    var boundary = "( |\\t)+";
    var regex = new RegExp("^" + boundary)
    var result = str.match(regex);
    if (result) {
        sentences.push(result[0])
    }
    sentences.push(str.trim())
    var regex = new RegExp(boundary + "$")
    var result = str.match(regex);
    if (result) {
        sentences.push(result[0])
    }
}

function getSentenceUptoNextToken(str) {
    var outStr = "";
    var sentenceSplitters = [
        "\\n",
        "\\.",
        "\\?",
        ";",
        "!",
        ":",
        "\\)",
        "<nextmessage>"
    ]
    var overrideSentenceSplitters = [
        "(f|s|b|d|m|j)r\\.",
        "(m|mr|mis)s\\.",
        "dt\\.",
        "[0-9][.]",
        "*[0-9][.]"
    ]
    var match1 = getFirstMatch(str, sentenceSplitters, false);
    var match2 = getFirstMatch(str, overrideSentenceSplitters, true);
    while ((match1.index != -1) && (match2.index != -1) && (match1.index > match2.index)) {
        outStr += str.substring(0, match2.index + match2.str.length)
        str = str.substring(match2.index + match2.str.length);
        match1 = getFirstMatch(str, sentenceSplitters, false);
        match2 = getFirstMatch(str, overrideSentenceSplitters, true);
    }
    if (match1.index != -1) {
        outStr += str.substring(0, match1.index)
    } else {
        outStr += str;
    }
    return {
        sentence: outStr,
        token: match1.str
    };
}

function getFirstMatch(str, tokens, useBoundary) {
    var match = {
        index: -1,
        str: ""
    };

    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (useBoundary) {
            var boundary = "(^|$| |\\t)";
            token = boundary + token + boundary;
        }
        var regex = new RegExp(token, "ig")
        var index = str.search(regex);
        if (index != -1) {
            if (match.index == -1 || match.index > index) {
                var result = str.match(regex);
                match.str = result[0];
                match.index = index;
            }
        }
    }
    return match;
}
