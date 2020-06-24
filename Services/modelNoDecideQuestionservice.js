//var compare = require("./compareString");
var request = require("request");

var rules = [
	"startsWithString",
	"endsWithString",
	"startsWithNumber",
	"endsWithNumber",
	"uniqueNumber",
	"uniqueCharPreceedingNumber",
	"uniqueCharSucceedingNumber",
	"uniqueCharSeq"
]

var QuestionTree = function (config, logger) {
	this.logger = logger;
	this.config = config;
}

module.exports = QuestionTree;


QuestionTree.prototype.buildQuestionTree = function (modelNumbers, maxDepth) {
	if (modelNumbers.length < 2) {
		return {};
	}
	if (typeof maxDepth == "undefined") {
		maxDepth = 3;
	}
	var qTree = {}
	var questionId = getNextQuestionId(qTree);
	if (!recurseTree(modelNumbers, qTree, questionId, 0, maxDepth)) {
		return qTree;
	}
	return {};
}

QuestionTree.prototype.getFirstDecisionQuestion = function (questionTree) {
	if (JSON.stringify(questionTree) == "{}") {
		return null;
	}
	var questionId = "Q1";
	var answers = [];
	for (var i = 0; i < questionTree[questionId].answers.length; i++) {
		answers.push(questionTree[questionId].answers[i].answer);
	}
	var retObj = {
		questionId: questionId,
		question: questionTree[questionId].question,
		answers: answers
	}
	if (questionTree[questionId].hasOwnProperty("isFound")) {
		retObj["isFound"] = questionTree[questionId]["isFound"]
	}
	return retObj;
}

QuestionTree.prototype.getNextDecisionQuestion = function (questionTree, questionId, answer, callback) {
	var config = this.config.getCategoryConfig("schneiderCategory");
	var source = "nlpEngine"
	var url = "";
	if (config.hasOwnProperty(source)) {
		url = config[source];
	}

	if (JSON.stringify(questionTree) == "{}") {
		callback(null);
		return;
	}
	var answers = [];
	findNextQuestion(questionTree[questionId].answers, answer, url, function (questionId) {
		if (!questionId) {
			callback(null);
			return;
		}
		for (var i = 0; i < questionTree[questionId].answers.length; i++) {
			answers.push(questionTree[questionId].answers[i].answer);
		}
		var retObj = {
			questionId: questionId,
			question: questionTree[questionId].question,
			answers: answers
		}
		if (questionTree[questionId].hasOwnProperty("isFound")) {
			retObj["isFound"] = questionTree[questionId]["isFound"]
		}
		callback(retObj);
	});
}

function getFunction(str) {
	return global[str];
}

function createBuckets(modelNumbers) {
	var bestBucket = null;
	var i = 0;
	while (i < rules.length) {
		var tempBuckets = getFunction(rules[i] + "BucketHandler")(modelNumbers);
		if (tempBuckets) {
			if (bestBucket == null) {
				bestBucket = tempBuckets;
			}
			else {
				bestBucket = getBestBucket(bestBucket, tempBuckets)
			}
		}
		i++;
	}
	return bestBucket;
}

function getBestBucket(bucket1, bucket2) {
	if (getBucketSkew(bucket1) > getBucketSkew(bucket2)) {
		return bucket2;
	}
	return bucket1
}

function getBucketSkew(bucket) {
	return Math.abs(bucket.yesModels.length - bucket.noModels.length);
}
function getDiffBetweenBuckets(buckets) {
	var i = 0;
	var diff = null;
	while (i < rules.length) {
		if (buckets.hasOwnProperty(rules[i])) {
			diff = getFunction(rules[i] + "DiffHandler")(buckets);
			break;
		}
		i++;
	}
	return diff;
}

function recurseTree(modelNumbers, qTree, questionId, depth, maxDepth) {
	if (maxDepth != -1 && depth > maxDepth) {
		return -1
	}
	if (modelNumbers.length == 1) {
		qTree[questionId] = {
			question: modelNumbers[0],
			answers: [],
			isFound: true
		}
		return 0;
	}

	var buckets = createBuckets(modelNumbers);
	if (!buckets) {
		return -1;
	}

	qTree[questionId] = {};
	var yesId = getNextQuestionId(qTree);
	qTree[yesId] = {};
	var noId = getNextQuestionId(qTree);
	qTree[noId] = {};

	var diff = getDiffBetweenBuckets(buckets);
	if (diff) {
		qTree[questionId] = {
			question: constructQuestion(diff),
			answers: [
				{
					answer: "yes",
					expressions: generateExpressions(diff, true),
					nextQuestion: yesId
				},
				{
					answer: "no",
					expressions: generateExpressions(diff, false),
					nextQuestion: noId
				}]
		}
		if (!recurseTree(diff.targets[0], qTree, yesId, depth + 1, maxDepth)) {
			return recurseTree(diff.targets[1], qTree, noId, depth + 1, maxDepth);
		}
	}
	return -1;
}

function constructQuestion(diff) {
	return getFunction(diff.rule + "QuestionHandler")(diff);
}

function generateExpressions(diff, positive) {
	var genericPositive = [
		"yes thats correct",
		"yes thats right",
		"you are correct",
		"you are right",
		"yes",
		"s",
		"chess",
		"guess",
		"frizz",
		"ss",
		"yep",
		"yeah",
		"sure",
		"Correct",
		"thats correct",
		"thats right",
		"yeah it is",
		"yeah it's",
		"yes it is",
		"yes it's",
		"looks like",
		"that's true",
		"that is true",
		"true"
	];
	var genericNegative = [
		"no thats incorrect",
		"no thats wrong",
		"you are incorrect",
		"you are wrong",
		"now",
		"not",
		"o",
		"no it is",
		"no it's",
		"not now",
		"never",
		"don't",
		"do not",
		"nope",
		"not sure",
		"wrong",
		"it is wrong",
		"it's wrong",
		"incorrect",
		"that's wrong",
		"that is wrong",
		"false",
		"no it is",
		"no it's"
	]
	var expressions = generateDiffBasedExpression(diff, positive);
	if (positive) {
		return [
			...expressions, ...genericPositive
		]
	}
	else {
		return [
			...expressions, ...genericNegative
		]
	}
}

function generateDiffBasedExpression(diff, positive) {
	var char = "";
	var num = "";
	var val = diff["key"];
	if (diff["relation"] == "HAS_CHAR_PRECEEDING_NUMBER") {
		num = val.match(new RegExp("[0-9]{1,4}", "ig"))
		char = val.match(new RegExp("[a-z]", "ig"))
	}
	else if (diff["relation"] == "HAS_CHAR_SUCCEEDING_NUMBER") {
		num = val.match(new RegExp("[0-9]{1,4}", "ig"))
		char = val.match(new RegExp("[a-z]", "ig"))
	}
	var positiveExpressions = {
		"HAS_NUMBER": [
			"Yes, it does have the number " + val,
			"The number " + val + " is there",
			"I see the number " + val,
		],
		"STARTS_WTH_STR": [
			"Yes, it does start with the string " + val,
			"Yes, it does begin with the string " + val,
			val + " is at the start"
		],
		"ENDS_WTH_STR": [
			"Yes, it does end with the string " + val,
			"Yes, it does end with " + val,
			"Yes, " + val + " is there at the end"
		],
		"STARTS_WTH_NUM": [
			"Yes, it does start with the number " + val,
			"Yes, the number " + val + " is there at the begining",
			val + " is at the start"
		],
		"ENDS_WTH_NUM": [
			"Yes, it does end with the number " + val,
			"Yes, the number " + val + " is there at the end",
			"Yes, " + val + " is at the end"
		],
		"HAS_CHAR_PRECEEDING_NUMBER": [
			"Yes, it does have a " + char + " before " + num,
			"Yes there is " + char + " before " + num,
			"Yes there is the number " + num + " is preceeded by a  " + char,
			"Yes " + char + " does preceed " + num
		],
		"HAS_CHAR_SUCCEEDING_NUMBER": [
			"Yes, it does have a " + char + " after " + num,
			"Yes there is " + char + " after " + num,
			"Yes there is the number " + num + " is succeeded by a  " + char,
			"YEs " + char + " does succeed " + num
		],
		"HAS_UNIQUE_CHAR_SEQ": [
			"Yes it does contain " + val,
			"Yes there is " + val
		]
	}
	var negativeExpressions = {
		"HAS_NUMBER": [
			"No, it does not have the number " + val,
			"The number " + val + " is not there",
			"I cannot find the number " + val,
		],
		"STARTS_WTH_STR": [
			"No, it does not start with the string " + val,
			"No, it does not begin with the string " + val,
			val + " is not at the start"
		],
		"ENDS_WTH_STR": [
			"No, it does not end with the string " + val,
			"No, it does not end with " + val,
			"No, " + val + " is not there at the end"
		],
		"STARTS_WTH_NUM": [
			"No, it does not start with the number " + val,
			"No, the number " + val + " is not there at the begining",
			val + " is not at the start"
		],
		"ENDS_WTH_NUM": [
			"No, it does not end with the number " + val,
			"No, the number " + val + " is not there at the end",
			"No, " + val + " is not at the end"
		],
		"HAS_CHAR_PRECEEDING_NUMBER": [
			"No, it does not have a " + char + " before " + num,
			"No there is no " + char + " before " + num,
			"No there is no the number " + num + " is not preceeded by a  " + char,
			"No " + char + " does not preceed " + num
		],
		"HAS_CHAR_SUCCEEDING_NUMBER": [
			"No, it does not have a " + char + " after " + num,
			"No there is no " + char + " after " + num,
			"No there is no the number " + num + " is not succeeded by a  " + char,
			"No " + char + " does not succeed " + num
		],
		"HAS_UNIQUE_CHAR_SEQ": [
			"No it does not contain " + val,
			"No there is no " + val
		]
	}
	if (positive) {
		if (positiveExpressions.hasOwnProperty(diff.relation)) {
			return positiveExpressions[diff.relation];
		}
	}
	else {
		if (negativeExpressions.hasOwnProperty(diff.relation)) {
			return negativeExpressions[diff.relation];
		}
	}
	return [];
}

function findNextQuestion(answers, answer, url, callback) {
	var expressionsArr = []
	answer = answer.toLowerCase().trim();

	if (url == "") {
		for (var i = 0; i < answers.length; i++) {
			if (isMatchingAnswer(answers[i], answer)) {
				callback(answers[i].nextQuestion);
				return;
			}
		}
		callback(null);
		return;
	}

	for (let i = 0; i < answers.length; i++) {
		var data = {
			"question": answers[i].answer,
			"key": answers[i].answer
		}
		expressionsArr.push(data);
		if (answers[i].expressions) {
			for (j = 0; j < answers[i].expressions.length; j++) {
				var data = {
					"question": answers[i].expressions[j],
					"key": answers[i].answer
				}
				expressionsArr.push(data);
			}
		}
	}

	findMatch(url, answer, expressionsArr, 0.7, function (result) {
		if (!result) {
			for (var i = 0; i < answers.length; i++) {
				if (isMatchingAnswer(answers[i], answer)) {
					callback(answers[i].nextQuestion);
					return;
				}
			}
			callback(null);
			return;
		}
		if (result.status && result.match) {
			var key = result.match[0].key;
			for (var i = 0; i < answers.length; i++) {
				if (isMatchingAnswer(answers[i], key)) {
					callback(answers[i].nextQuestion);
					return;
				}
			}
		}
		callback(null);
	});
}

function findMatch(baseURL, query, dataSet, threshold, callback) {
	var data = {
		"userQuery": query,
		"dataSet": dataSet,
		"threshold": threshold
	}
	var options = {
		url: baseURL + "/findBestMatch",
		headers: {
			"content-type": "application/json"
		},
		body: data,
		json: true
	};
	request.post(options, function (error, response, body) {
		if (!error && body.status) {
			callback(body);
		} else {
			callback(null);
		}
	});
}

function isMatchingAnswer(answerObj, answer) {
	return answerObj.answer.toLowerCase().trim() == answer;
}

function getNextQuestionId(tree) {
	var id = 0;
	for (var key in tree) {
		if (tree.hasOwnProperty(key)) {
			key = key.substring(1);
			if (Number(key) > id) {
				id = Number(key);
			}
		}
	}
	return "Q" + (id + 1);
}

function randomPrefix(relation) {
	var prefixes = {
		"HAS_NUMBER": [
			"Does it have the number",
			"Did you say it has the number ",
			"Did you say it contains the number",
			"Does the serial number contain the number"
		],
		"STARTS_WTH_STR": [
			"Does it start with",
			"Did you say it begins with",
			"Did you say it starts with",
			"Does it begin with"
		],
		"ENDS_WTH_STR": [
			"Does it end with",
			"Did you say it ends with",
			"At the end does it have"
		],
		"STARTS_WTH_NUM": [
			"Does it start with the number",
			"Did you say it begins with the number",
			"Did you say it starts with the number",
			"Does it begin with the number"
		],
		"ENDS_WTH_NUM": [
			"Does it end with the number",
			"Did you say it ends with the number",
			"At the end does it have the number"
		],
		"HAS_CHAR_PRECEEDING_NUMBER": [
			"Did you say it has a",
			"Does it have a"
		],
		"HAS_CHAR_SUCCEEDING_NUMBER": [
			"Did you say it has a",
			"Does it have a"
		],
		"HAS_UNIQUE_CHAR_SEQ": [
			"Did you say it contains",
			"Does it contain"
		]
	};
	return prefixes[relation][Math.floor(Math.random() * 100) % prefixes[relation].length] + " ";
}

function isUnique(pattern, modelNumbers) {
	for (var i = 0; i < modelNumbers.length; i++) {
		var matches = modelNumbers[i].match(new RegExp(pattern, "ig"));
		if (matches && matches.length > 1) {
			return false
		}
	}
	return true;
}

function handleAlpha(key) {
	key = key.toUpperCase()
	var words = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel",
		"India", "Juliet", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec",
		"Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"
	]
	return "'" + key + "' for " + words[key.charCodeAt(0) - "A".charCodeAt(0)];
}


/******************* uniqueNumber Rule *******************************/
global.uniqueNumberBucketHandler = function (modelNumbers) {
	for (var i = 0; i < modelNumbers.length; i++) {
		var numbers = getNumbers(modelNumbers[i]);
		if (numbers) {
			for (var j = 0; j < numbers.length; j++) {
				if (isUnique(numbers[j], modelNumbers)) {
					var bucket = createUniqueNumberBuckets(numbers[j], modelNumbers)
					if (bucket) {
						return bucket
					}
				}
			}
		}
	}
	return null;
}

function getNumbers(modelNumber) {
	return modelNumber.match(new RegExp("[0-9]{1,4}", "ig"))
}

function createUniqueNumberBuckets(number, modelNumbers) {
	var buckets = {
		"uniqueNumber": number,
		"yesModels": [],
		"noModels": []
	}
	for (var i = 0; i < modelNumbers.length; i++) {
		if (modelNumbers[i].match(new RegExp(number, "ig"))) {
			buckets["yesModels"].push(modelNumbers[i]);
		}
		else {
			buckets["noModels"].push(modelNumbers[i]);
		}
	}
	if (buckets["yesModels"].length == 0 || buckets["noModels"].length == 0) {
		return null;
	}
	return buckets;
}

global.uniqueNumberDiffHandler = function (buckets) {
	return {
		key: buckets.uniqueNumber,
		relation: "HAS_NUMBER",
		targets: [buckets.yesModels, buckets.noModels],
		rule: "uniqueNumber",
		target: 0
	}
}

global.uniqueNumberQuestionHandler = function (diff) {
	return randomPrefix(diff.relation) + diff["key"] + "?"
}

/******************* End of uniqueNumber Rule *******************************/

/******************* startsWithString Rule **********************************/
global.startsWithStringBucketHandler = function (modelNumbers) {
	for (var i = 0; i < modelNumbers.length; i++) {
		var str = getStartsWithString(modelNumbers[i]);
		if (str) {
			var bucket = createStartsWithStringBuckets(str, modelNumbers)
			if (bucket) {
				return bucket
			}
		}
	}
	return null;
}

function getStartsWithString(modelNumber) {
	return modelNumber.match(new RegExp("^[a-z]{1,3}", "ig"))
}

function createStartsWithStringBuckets(str, modelNumbers) {
	var buckets = {
		"startsWithString": str,
		"yesModels": [],
		"noModels": []
	}
	for (var i = 0; i < modelNumbers.length; i++) {
		if (modelNumbers[i].match(new RegExp("^" + str, "ig"))) {
			buckets["yesModels"].push(modelNumbers[i]);
		}
		else {
			buckets["noModels"].push(modelNumbers[i]);
		}
	}
	if (buckets["yesModels"].length == 0 || buckets["noModels"].length == 0) {
		return null;
	}
	return buckets;
}

global.startsWithStringDiffHandler = function (buckets) {
	return {
		key: splitString(buckets.startsWithString[0]),
		relation: "STARTS_WTH_STR",
		targets: [buckets.yesModels, buckets.noModels],
		rule: "startsWithString",
		target: 0
	}
}

function splitString(splitChar) {
	if (splitChar != 0 && splitChar != null && splitChar != '') {
		var splitS = splitChar.split('');
		var splitString = '';
		for (var i = 0; i < splitS.length; i++) {
			splitString += splitS[i] + '   ';
		}
		return splitString;
	} else {
		return splitChar;
	}
}


global.startsWithStringQuestionHandler = function (diff) {
	return randomPrefix(diff.relation) + diff["key"] + "?"
}

/******************* End of startsWithString Rule ***************************/

/******************* endsWithString Rule **********************************/
global.endsWithStringBucketHandler = function (modelNumbers) {
	for (var i = 0; i < modelNumbers.length; i++) {
		var str = getEndsWithString(modelNumbers[i]);
		if (str) {
			var bucket = createEndsWithStringBuckets(str, modelNumbers)
			if (bucket) {
				return bucket
			}
		}
	}
	return null;
}

function getEndsWithString(modelNumber) {
	return modelNumber.match(new RegExp("[a-z]{1,3}$", "ig"))
}

function createEndsWithStringBuckets(str, modelNumbers) {
	var buckets = {
		"endsWithString": str,
		"yesModels": [],
		"noModels": []
	}
	for (var i = 0; i < modelNumbers.length; i++) {
		if (modelNumbers[i].match(new RegExp("^" + str, "ig"))) {
			buckets["yesModels"].push(modelNumbers[i]);
		}
		else {
			buckets["noModels"].push(modelNumbers[i]);
		}
	}
	if (buckets["yesModels"].length == 0 || buckets["noModels"].length == 0) {
		return null;
	}
	return buckets;
}

global.endsWithStringDiffHandler = function (buckets) {
	return {
		key: splitString(buckets.endsWithString),
		relation: "ENDS_WTH_STR",
		targets: [buckets.yesModels, buckets.noModels],
		rule: "endsWithString",
		target: 0
	}
}

global.endsWithStringQuestionHandler = function (diff) {
	return randomPrefix(diff.relation) + diff["key"] + "?"
}

/******************* End of endsWithString Rule ***************************/

/******************* startsWithNumber Rule **********************************/
global.startsWithNumberBucketHandler = function (modelNumbers) {
	for (var i = 0; i < modelNumbers.length; i++) {
		var str = getStartsWithNumber(modelNumbers[i]);
		if (str) {
			var bucket = createStartsWithNumberBuckets(str, modelNumbers)
			if (bucket) {
				return bucket
			}
		}
	}
	return null;
}

function getStartsWithNumber(modelNumber) {
	return modelNumber.match(new RegExp("^[0-9]{1,3}", "ig"))
}

function createStartsWithNumberBuckets(str, modelNumbers) {
	var buckets = {
		"startsWithNumber": str,
		"yesModels": [],
		"noModels": []
	}
	for (var i = 0; i < modelNumbers.length; i++) {
		if (modelNumbers[i].match(new RegExp("^" + str, "ig"))) {
			buckets["yesModels"].push(modelNumbers[i]);
		}
		else {
			buckets["noModels"].push(modelNumbers[i]);
		}
	}
	if (buckets["yesModels"].length == 0 || buckets["noModels"].length == 0) {
		return null;
	}
	return buckets;
}

global.startsWithNumberDiffHandler = function (buckets) {
	return {
		key: buckets.startsWithNumber,
		relation: "STARTS_WTH_NUM",
		targets: [buckets.yesModels, buckets.noModels],
		rule: "startsWithNumber",
		target: 0
	}
}

global.startsWithNumberQuestionHandler = function (diff) {
	return randomPrefix(diff.relation) + diff["key"] + "?"
}

/******************* End of startsWithNumber Rule ***************************/

/******************* endsWithNumber Rule **********************************/
global.endsWithNumberBucketHandler = function (modelNumbers) {
	for (var i = 0; i < modelNumbers.length; i++) {
		var str = getEndsWithNumber(modelNumbers[i]);
		if (str) {
			var bucket = createEndsWithNumberBuckets(str, modelNumbers)
			if (bucket) {
				return bucket
			}
		}
	}
	return null;
}

function getEndsWithNumber(modelNumber) {
	return modelNumber.match(new RegExp("[0-9]{1,3}$", "ig"))
}

function createEndsWithNumberBuckets(str, modelNumbers) {
	var buckets = {
		"endsWithNumber": str,
		"yesModels": [],
		"noModels": []
	}
	for (var i = 0; i < modelNumbers.length; i++) {
		if (modelNumbers[i].match(new RegExp(str + "$", "ig"))) {
			buckets["yesModels"].push(modelNumbers[i]);
		}
		else {
			buckets["noModels"].push(modelNumbers[i]);
		}
	}
	if (buckets["yesModels"].length == 0 || buckets["noModels"].length == 0) {
		return null;
	}
	return buckets;
}

global.endsWithNumberDiffHandler = function (buckets) {
	return {
		key: buckets.endsWithNumber,
		relation: "ENDS_WTH_NUM",
		targets: [buckets.yesModels, buckets.noModels],
		rule: "endsWithNumber",
		target: 0
	}
}

global.endsWithNumberQuestionHandler = function (diff) {
	return randomPrefix(diff.relation) + diff["key"] + "?"
}
/******************* End of endsWithNumber Rule ***************************/

/******************* uniqueCharPreceedingNumber Rule *******************************/
global.uniqueCharPreceedingNumberBucketHandler = function (modelNumbers) {
	for (var i = 0; i < modelNumbers.length; i++) {
		var numbers = getCharPreceedingNumbers(modelNumbers[i]);
		if (numbers) {
			for (var j = 0; j < numbers.length; j++) {
				if (isUnique(numbers[j], modelNumbers)) {
					var bucket = createUniqueCharPreceedingNumberBuckets(numbers[j], modelNumbers)
					if (bucket) {
						return bucket
					}
				}
			}
		}
	}
	return null;
}

function getCharPreceedingNumbers(modelNumber) {
	return modelNumber.match(new RegExp("[a-z][0-9]{1,4}", "ig"))
}

function createUniqueCharPreceedingNumberBuckets(number, modelNumbers) {
	var buckets = {
		"uniqueCharPreceedingNumber": number,
		"yesModels": [],
		"noModels": []
	}
	for (var i = 0; i < modelNumbers.length; i++) {
		if (modelNumbers[i].match(new RegExp(number, "ig"))) {
			buckets["yesModels"].push(modelNumbers[i]);
		}
		else {
			buckets["noModels"].push(modelNumbers[i]);
		}
	}
	if (buckets["yesModels"].length == 0 || buckets["noModels"].length == 0) {
		return null;
	}
	return buckets;
}

global.uniqueCharPreceedingNumberDiffHandler = function (buckets) {
	return {
		key: splitString(buckets.uniqueCharPreceedingNumber),
		relation: "HAS_CHAR_PRECEEDING_NUMBER",
		targets: [buckets.yesModels, buckets.noModels],
		rule: "uniqueCharPreceedingNumber",
		target: 0
	}
}

global.uniqueCharPreceedingNumberQuestionHandler = function (diff) {
	var val = diff["key"];
	var num = val.match(new RegExp("[0-9]{1,4}", "ig"))
	var char = val.match(new RegExp("[a-z]", "ig"))
	return randomPrefix(diff.relation) + handleAlpha(char[0]) + " before the number " + num[0] + "?"
}

/******************* End of uniqueCharPreceedingNumber Rule *******************************/

/******************* uniqueCharSucceedingNumber Rule *******************************/
global.uniqueCharSucceedingNumberBucketHandler = function (modelNumbers) {
	for (var i = 0; i < modelNumbers.length; i++) {
		var numbers = getCharSucceedingNumbers(modelNumbers[i]);
		if (numbers) {
			for (var j = 0; j < numbers.length; j++) {
				if (isUnique(numbers[j], modelNumbers)) {
					var bucket = createUniqueCharSucceedingNumberBuckets(numbers[j], modelNumbers)
					if (bucket) {
						return bucket
					}
				}
			}
		}
	}
	return null;
}

function getCharSucceedingNumbers(modelNumber) {
	return modelNumber.match(new RegExp("[0-9]{1,4}[a-z]", "ig"))
}

function createUniqueCharSucceedingNumberBuckets(number, modelNumbers) {
	var buckets = {
		"uniqueCharSucceedingNumber": number,
		"yesModels": [],
		"noModels": []
	}
	for (var i = 0; i < modelNumbers.length; i++) {
		if (modelNumbers[i].match(new RegExp(number, "ig"))) {
			buckets["yesModels"].push(modelNumbers[i]);
		}
		else {
			buckets["noModels"].push(modelNumbers[i]);
		}
	}
	if (buckets["yesModels"].length == 0 || buckets["noModels"].length == 0) {
		return null;
	}
	return buckets;
}

global.uniqueCharSucceedingNumberDiffHandler = function (buckets) {
	return {
		key: splitString(buckets.uniqueCharSucceedingNumber),
		relation: "HAS_CHAR_SUCCEEDING_NUMBER",
		targets: [buckets.yesModels, buckets.noModels],
		rule: "uniqueCharSucceedingNumber",
		target: 0
	}
}

global.uniqueCharSucceedingNumberQuestionHandler = function (diff) {
	var val = diff["key"];
	var num = val.match(new RegExp("[0-9]{1,4}", "ig"))
	var char = val.match(new RegExp("[a-z]", "ig"))
	return randomPrefix(diff.relation) + handleAlpha(char[0]) + " after the number " + num[0] + "?"
}

/******************* End of uniqueCharSucceedingNumber Rule *******************************/

/******************* uniqueCharSucceedingNumber Rule *******************************/
global.uniqueCharSeqBucketHandler = function (modelNumbers) {
	for (var i = 0; i < modelNumbers.length; i++) {
		var numbers = getUniqueCharSeq(modelNumbers[i]);
		if (numbers) {
			for (var j = 0; j < numbers.length; j++) {
				if (isUnique(numbers[j], modelNumbers)) {
					var bucket = createUniqueCharSeqBuckets(numbers[j], modelNumbers)
					if (bucket) {
						return bucket
					}
				}
			}
		}
	}
	return null;
}

function getUniqueCharSeq(modelNumber) {
	return modelNumber.match(new RegExp("[a-z]{2,4}", "ig"))
}

function createUniqueCharSeqBuckets(number, modelNumbers) {
	var buckets = {
		"uniqueCharSeq": number,
		"yesModels": [],
		"noModels": []
	}
	for (var i = 0; i < modelNumbers.length; i++) {
		if (modelNumbers[i].match(new RegExp(number, "ig"))) {
			buckets["yesModels"].push(modelNumbers[i]);
		}
		else {
			buckets["noModels"].push(modelNumbers[i]);
		}
	}
	if (buckets["yesModels"].length == 0 || buckets["noModels"].length == 0) {
		return null;
	}
	return buckets;
}

global.uniqueCharSeqDiffHandler = function (buckets) {
	return {
		key: splitString(buckets.uniqueCharSeq),
		relation: "HAS_UNIQUE_CHAR_SEQ",
		targets: [buckets.yesModels, buckets.noModels],
		rule: "uniqueCharSeq",
		target: 0
	}
}

global.uniqueCharSeqQuestionHandler = function (diff) {
	return randomPrefix(diff.relation) + diff["key"] + "?"
}

/******************* End of uniqueCharSeq Rule *******************************/

// var options = ["BE800-IND",
// 	"BE700Y-IND",
// 	"BR1000G-IN",
// 	"BR1500G-IN",
// 	"BR1000GUXI",
// 	"BR1500GUXI",
// 	"BR1000-IN",
// 	"BR1500-IN",
// 	"BR1100CI-IN",
// 	"BX600C-IN",
// 	"BX1100C-IN",
// 	"BX600CI-IN"
// ];
// var Config = function () { }
// Config.prototype.getCategoryConfig = function (category) {
// 	return {
// 		"googleService": {
// 			"key": "AIzaSyDgpZC8BTmvw2t4yUgCUoxZHhjy-AxI0vU"
// 		},
// 		"youtubeService": {
// 			"key": "AIzaSyDReghP_ho1l2qN7lz0oRJ79Gj6ojjexhM"
// 		},
// 		"insightEngine": "https://core-insightengine-dev.intelli-assist.com:9093",
// 		"nlpEngine": "http://nlp-insightengine-dev.intelli-assist.com:3033"
// 	}
// }

// var qTree = new QuestionTree(new Config(), null);
// var questionTree = qTree.buildQuestionTree(options, -1);
