var CategoryConfigProcess = require("poca-category-lib").categoryConfigProcess;
var CategoryConfig = function () {
	this.process = new CategoryConfigProcess();
}

module.exports = CategoryConfig;

CategoryConfig.prototype.getConfig = function () {
	let flow = {
		"name": "FLOW",
		"type": "SINGLE",
		"completed": false,
		"sub_flow": [{
			"name": "CANON",
			"type": "SINGLE",
			"completed": false,
			"depend": "NONE",
			"repeatCount": 0,
			"sub_flow": [
				{
				"name": "PRODUCT_TYPE",
				"type": "SINGLE",
				"completed": false,
				"depend": "NONE",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "CATEGORY",
				"type": "SINGLE",
				"completed": false,
				"depend": "PRODUCT_TYPE",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "SERIAL_NO",
				"type": "SINGLE",
				"completed": false,
				"depend": "PRODUCT_TYPE",
				"repeatCount": 0,
				"sub_flow": [] 
			},
			{
				"name": "SERIAL_NO_CNF",
				"type": "SINGLE",
				"completed": false,
				"depend": "SERIAL_NO",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "ENTITY_NAME",
				"type": "SINGLE",
				"completed": false,
				"depend": "SERIAL_NO",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "MODEL_NUMBER",
				"type": "SINGLE",
				"completed": false,
				"depend": "SERIAL_NO",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "WARRANTY",
				"type": "SINGLE",
				"completed": false,
				"depend": "MODEL_NUMBER",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "CONTRACT",
				"type": "SINGLE",
				"completed": false,
				"depend": "SERIAL_NO",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "METER_READING",
				"type": "SINGLE",
				"completed": false,
				"depend": "CATEGORY",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "TONER_COLOR",
				"type": "SINGLE",
				"completed": false,
				"depend": "CATEGORY",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "OPEN_TICKET",
				"type": "SINGLE",
				"completed": false,
				"depend": "SERIAL_NO",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "PROBLEM_CATEGORY",
				"type": "SINGLE",
				"completed": false,
				"depend": "CATEGORY",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "PROBLEM",
				"type": "SINGLE",
				"completed": false,
				"depend": "PROBLEM_CATEGORY",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "LOCALITY_PINCODE",
				"type": "SINGLE",
				"completed": false,
				"depend": "CATEGORY",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "PINCODE_CNF",
				"type": "SINGLE",
				"completed": false,
				"depend": "LOCALITY_PINCODE",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "LOCALITY",
				"type": "SINGLE",
				"completed": false,
				"depend": "PINCODE_CNF",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "NAME",
				"type": "SINGLE",
				"completed": false,
				"depend": "CATEGORY",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "NAME_CNF",
				"type": "SINGLE",
				"completed": false,
				"depend": "NAME",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "ADDRESS",
				"type": "SINGLE",
				"completed": false,
				"depend": "CATEGORY",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "ADDRESS_CNF",
				"type": "SINGLE",
				"completed": false,
				"depend": "ADDRESS",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "PINCODE",
				"type": "SINGLE",
				"completed": false,
				"depend": "NONE",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "DOOR_NO",
				"type": "SINGLE",
				"completed": false,
				"depend": "ADDRESS",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "BUILDING_NO_CNF",
				"type": "SINGLE",
				"completed": false,
				"depend": "DOOR_NO",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "STREET_NAME",
				"type": "SINGLE",
				"completed": false,
				"depend": "BUILDING_NO_CNF",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "STREET_NAME_CNF",
				"type": "SINGLE",
				"completed": false,
				"depend": "STREET_NAME",
				"repeatCount": 0,
				"sub_flow": []
			},
			// {
			// 	"name": "ADDRESS_CNF",
			// 	"type": "SINGLE",
			// 	"completed": false,
			// 	"depend": "ADDRESS",
			// 	"repeatCount": 0,
			// 	"sub_flow": []
			// },
			{
				"name": "MOBILE_NO",
				"type": "SINGLE",
				"completed": false,
				"depend": "CATEGORY",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "MOBILE_NUM_CNF",
				"type": "SINGLE",
				"completed": false,
				"depend": "MOBILE_NO",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "CONFIRMATION",
				"type": "SINGLE",
				"completed": false,
				"depend": "NONE",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "REGISTER_SUMMARY",
				"type": "SINGLE",
				"completed": false,
				"depend": "NONE",
				"repeatCount": 0,
				"sub_flow": []
			},
			{
				"name": "FEEDBACK",
				"type": "SINGLE",
				"completed": false,
				"depend": "NONE",
				"repeatCount": 0,
				"sub_flow": []
			}
			]
		}]
	}
	return flow;
}