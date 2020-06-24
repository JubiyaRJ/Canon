var TestEngine = require("poca-test");
var dataPacketService = require("poca-common").dataPacketService;
var testEngine = new TestEngine();
var chai = require('chai');
var expect = chai.expect;
chai.use(require('chai-string'));
const TIME_OUT = 120000;
var ComplaintSubCategory = require("../complaintSubCategory");

describe('Complaint Category', function () {
	before(function (done) {
		testEngine.initCategory(ComplaintSubCategory, function (result) {
			if (!result.status) {
				console.log(result.message);
				return;
			}
			done();
		});
	});

	describe('Init Check', function () {
		before(function (done) {
			this.timeout(30000);
			testEngine.startSession('COMPLAINT', function (result) {
				if (!result.status) {
					console.log(result.message);
					return;
				}
				console.log(result);
				// console.log(result.dataPacket.data.SECTIONS)
				// console.log(result.dataPacket.data.BUTTONS[0].optionData)
				done();
			});
		});

		/*********************************** */
		it('It should asking for brand confirmation', function (done) {
			this.timeout(40000);
			testEngine.testTextActionWithMedia("TYPE 1", "", "SELECT_OPTION_BASED", function (result) {
				// 
				if (!result.status) {
					console.log(result.message)
				}
				console.log(result)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
				expect(result.status).to.equal(true);
				done();
			})
		});
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextActionWithMedia("2", "", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		it('It should asking for brand confirmation', function (done) {
			this.timeout(40000);
			testEngine.testTextActionWithMedia("WQE83863", "", "SELECT_OPTION_BASED", function (result) {
				// 
				if (!result.status) {
					console.log(result.message)
				}
				console.log(result)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
				expect(result.status).to.equal(true);
				done();
			})
		});
		it('It should asking for brand confirmation', function (done) {
			this.timeout(40000);
			testEngine.testTextActionWithMedia("yes", "", "CHANGE_DETAIL", function (result) {
				// 
				if (!result.status) {
					console.log(result.message)
				}
				console.log(result)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
				expect(result.status).to.equal(true);
				done();
			})
		});
		it('It should asking for brand confirmation', function (done) {
			this.timeout(40000);
			testEngine.testTextActionWithMedia("1", "", "SELECT_OPTION_BASED", function (result) {
				// 
				if (!result.status) {
					console.log(result.message)
				}
				console.log(result)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
				expect(result.status).to.equal(true);
				done();
			})
		});
		it('It should asking for brand confirmation', function (done) {
			this.timeout(40000);
			testEngine.testUnknownMessageHandler("243123", function (result) {
				// 
				if (!result.status) {
					console.log(result.message)
				}
				console.log(result)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
				expect(result.status).to.equal(true);
				done();
			})
		});
		it('It should asking for brand confirmation', function (done) {
			this.timeout(40000);
			testEngine.testTextActionWithMedia("yes", "", "SELECT_OPTION_BASED", function (result) {
				// 
				if (!result.status) {
					console.log(result.message)
				}
				console.log(result)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
				expect(result.status).to.equal(true);
				done();
			})
		});
		it('It should asking for brand confirmation', function (done) {
			this.timeout(40000);
			testEngine.testTextActionWithMedia("Parsona road, nariyawal, bareilly", "", "CHANGE_DETAIL", function (result) {
				// 
				if (!result.status) {
					console.log(result.message)
				}
				console.log(result)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
				expect(result.status).to.equal(true);
				done();
			})
		});



		// RZD02222

		it('It should asking for brand confirmation', function (done) {
			this.timeout(40000);
			testEngine.testTextActionWithMedia("Farooq khan", "", "SELECT_OPTION_BASED", function (result) {
				// 
				if (!result.status) {
					console.log(result.message)
				}
				console.log(result)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
				expect(result.status).to.equal(true);
				done();
			})
		});
		it('It should asking for brand confirmation', function (done) {
			this.timeout(40000);
			testEngine.testTextActionWithMedia("yes", "", "SELECT_OPTION_BASED", function (result) {
				// 
				if (!result.status) {
					console.log(result.message)
				}
				console.log(result)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
				expect(result.status).to.equal(true);
				done();
			})
		});
		it('It should asking for brand confirmation', function (done) {
			this.timeout(40000);
			testEngine.testTextActionWithMedia("F.K.Enterprises Parsona road, nariyawal, near ply factory, Bareilly, 243123", "", "SELECT_OPTION_BASED", function (result) {
				// 
				if (!result.status) {
					console.log(result.message)
				}
				console.log(result)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
				// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
				expect(result.status).to.equal(true);
				done();
			})
		});
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextActionWithMedia("Plot no. 2, RR Khatod", "", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("Address:mr Devendra Bisht 919760178951 Block Bhagwaan Pur road Haldwani", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("343001", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("jubiya", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("y", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("n", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("5th cross,bangalore , 560033", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("y", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("7349017975", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextActionWithMedia("yes", "", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("5", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("5th cross, bangalore", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("y", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("7349017975", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("y", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("5", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextActionWithMedia("yes", "", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextActionWithMedia("no", "", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextActionWithMedia("jubiya", "", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// }); 
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextActionWithMedia("yes", "", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("*jubia", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextActionWithMedia("yes", "", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextActionWithMedia("yes", "", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("*5th cross, bangalore", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("No", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("5th cross", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("sdfghjkl;ghjkl;", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("sdfghjkl;ghjkl;", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("No", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("No", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("jubiya", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("5th cross", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("agara", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("jubiya", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("1", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("agara, 1st cross", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("black magenta yellow blue green red", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("56", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("560", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("7349017975", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("Cut doing", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("no", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("Budnur", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("Girish", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("Girish", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("Girish", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageWithMediaHandler("Christopher","", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageWithMediaHandler("Christopher","", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageWithMediaHandler("yellow","", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("no", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("Hrhcfhg", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("sorry", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("Goa india", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("2", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("1", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("2000000", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("yellow", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageWithMediaHandler("Dasanahalli","", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageWithMediaHandler("hjkl agara","", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageWithMediaHandler("jubiya.joy","", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageWithMediaHandler("jubiya","", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageWithMediaHandler("k. 358 epmc market","", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageWithMediaHandler("7349017975","", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("make change", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("5", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageWithMediaHandler("560034","", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("no", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageWithMediaHandler("sadan","", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("make changes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("560034", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("agara", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("no", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("make changes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("3", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("2", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("black", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("*magentha", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("5th cross,kormangala", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("7349017975", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("agara", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("jubiya", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("jubi", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("#56, 5th cross, kormangala", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("agara", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("7349017975", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("padmavathi pg, 2nd cross", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("7349017975", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("padmavathi pg 3rd cross", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("1", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("9061407851", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("1", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("make changes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("padma 5th cross, near srinivasa temple", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("make changes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("jubiya", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("No. 4, periyar st, chennai", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });


		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("Yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("7010624428", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("2AM00658", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("3", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("agara", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("jubiya", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("2 road,5th street", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("7349017975", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("upi", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("adress", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("no", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("road no-7 h", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("Change problem category", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("service", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("change install", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("change category", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("change problem category", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("Hi", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("Hi", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("Hi", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("Installation", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("Yup", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("110027", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("J-6", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("hi", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("6366549723", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("760001", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("military", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("ravi", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testTextAction("hello", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("ravi", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yeah", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("Radha krishna billo street", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("918895151003", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(50000);
		// 	testEngine.testTextAction("yes", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("560035", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("jerry", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("560035 ", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		console.log(result.dataPacket.data.SECTIONS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("No", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("no", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		/**************************************/

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("hi", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("1", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("2BZ02460", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("2", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("2", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("mudalipatti, 5600357", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("upasana", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("560035", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("Kapil", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("A64 Greenwood City sector 45", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("change name", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("Upasna Kundra", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("9994895645", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		/*******************************/

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("option 1", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("abcd", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("hi", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("70106 24428", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('it should trigure the complete handler', function (done) {
		// 	this.timeout(100000);
		// 	testEngine.testContextDataBuilder("", function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message);
		// 		}
		// 		// console.log(result);
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[3].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[4].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[5].data.CELLS)
		// 		// // console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[6].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("1", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("toner ", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("dc 44406", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("*klnl21741", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("123,kormangala", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("hero", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("*127,kormangala", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("4", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler(" jubiya", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler(" jubiya", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction(" yes", '', function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("cyan", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("123, jj", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for mobile confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("9061407851", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("92i93", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler(" 6366549723", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler(" jubiya", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler(" 5", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler(" 9711066287", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler(" 5", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for change state confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("make changes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should select the change state', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("option one", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler(" printer", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("Yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should accept a address form submission', function (done) {
		// 	var formObj = {};
		// 	formObj['formID'] = 'ADDRESS';
		// 	formObj['fields'] = {
		// 		'ADDRESS': testEngine.createFilledField('Provide address', dataPacketService.createTextPacket('kerala'))
		// 	};
		// 	testEngine.testFormInput(formObj, function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message);
		// 			return;
		// 		}
		// 		console.log(result)
		// 		expect(result.status).to.equal(true);
		// 		//expect(result.dataPacket.type).to.equal('TEXT');
		// 		//expect(result.dataPacket.data).to.equal('Your delivery address has been updated. Click on fulfill to proceed.')
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("5", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes confirm", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("option 5", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("760001", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("military line", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("jubiya", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("vattamurupel house, kurumpakara PO Pathanapuram", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("7349017975", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(40000);
		// 	testEngine.testUnknownMessageHandler("5", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("kadugodi", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("70106 24410", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("5", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("zero", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("3", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("St. Peters circle", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("7349017975", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("Yes ", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("2", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("9349017975", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("88951 51734", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("kundayam", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('it should trigure the complete handler', function (done) {
		// 	this.timeout(100000);
		// 	testEngine.testCompletionTest(function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message);
		// 		}
		// 		console.log(result);
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[3].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[4].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[5].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[6].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// })
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(50000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("4", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("yes ", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("Royal", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("7010624428", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(50000);
		// 	testEngine.testUnknownMessageHandler("fghjm", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(50000);
		// 	testEngine.testUnknownMessageHandler("5", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(50000);
		// 	testEngine.testTextAction("name", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(50000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(50000);
		// 	testEngine.testTextAction("option 2", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(50000);
		// 	testEngine.testTextAction("option 2", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("560035", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("kundayam", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testTextAction("FRIDAY MARKET", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("7349017975", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("7349017975", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("234 A", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("22", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("lalbagh", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("9677694686", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });



		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("option 2", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("feeder", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("2", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("what next", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("option 1", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("option 2 ", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("7349017975", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("7750022", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes ", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("1", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("jubi", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("123 ", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("123 ", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("560034", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("dfwfs", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("2 a", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("vbnm", "SELECT_OPTION_BASED", function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("kormangala", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("99", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("12", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("no", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("kormangala", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("560034", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("560034", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("234", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("425", "SELECT_OPTION_BASED", function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("134", "SELECT_OPTION_BASED", function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("option 1", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("cyan", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("jubiya jubiya", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("560034", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("number 45", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("number 567 ", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("Bangalore Bangalore", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("zdbsg", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("pincode", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("560035", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("560034", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("door number 24", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("building number 34", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("3rd stage kormangala", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("From 0035", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("560035", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("Twin 307", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("what next", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("No don't", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("do not know", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("what next", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("Punjabi Bagh Punjabi Bagh", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("Fig", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("Yes yes yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("No", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("Three sex sex 5497 23", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("6366549723", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("what next", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("Yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("Yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("24", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("Bangalore", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("no", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });


		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("7349017975", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("23", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("maruthi street", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("change name", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("9061407851", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("change mobi 689695", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("change mobi 28A", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("change mobi 24", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("change mobi bangalore", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("change phone number 9061407851", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("7349017975", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "UPDATE_SAVED_ADDRESS", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("7349017974", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("k l e 1324", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("k l e 1324", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("k l e 13224", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("k l e 13224", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("option 2", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("0000F1", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("cyan", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("and Ivy", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("what next", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("NO", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("Italy", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("NO", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("NO", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("Avi", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("NO", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("KLUY5282", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("krg 3281", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("7349017971", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("1", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("no", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("9061407851", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("what next ", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("9061407851", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("WQP1059", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("WQP1059", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("WQP1059", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("WQP1059", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("WQP1059", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("WQP1059", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("9061407851", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("1", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("wklew", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("wklew", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("wklew", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("2", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("wha", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("1", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("cyan", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("jubi", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("9061407851", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("no", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("RZD02848", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("2", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("541", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("cyan", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("RKST8293742", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yep", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("option 2", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("	machine cha wish", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("machine service", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("Ravi", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testUnknownMessageHandler("	i don't know error code problem", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("error code problem man", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yeah", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("yes", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("22a", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it("Button User type", function (done) {
		// 	this.timeout(120000);
		// 	var optionObj = {};
		// 	optionObj['optionID'] = 'PRODUCT_TYPE';
		// 	optionObj['optionContext'] = {
		// 		index: 1,
		// 		value: "Printer"
		// 	}
		// 	testEngine.testOptionInput(optionObj, function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message);
		// 			return;
		// 		}
		// 		console.log(result);
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("33", "", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.SECTIONS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("2nd cross street", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.SECTIONS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.SECTIONS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.SECTIONS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.SECTIONS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("all", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.SECTIONS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("my serial number is to fb 04065 ", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("ok", 'SELECT_OPTION_BASED', function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("change serial number", "CHANGE_DETAIL", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("	change product type", 'CHANGE_DETAIL', function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("option 4", 'SELECT_OPTION_BASED', function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("	no change park type", 'CHANGE_DETAIL', function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("Printer", 'SELECT_OPTION_BASED', function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("my printer serial number is kmc se 14006", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("Yes", 'SELECT_OPTION_BASED', function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		// expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("1", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("Yes", 'SELECT_OPTION_BASED', function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		// expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("Yes", 'SELECT_OPTION_BASED', function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("Yes", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });




		// it("Button User type", function (done) {
		// 	this.timeout(120000);
		// 	var optionObj = {};
		// 	optionObj['optionID'] = 'PROBLEM';
		// 	optionObj['optionContext'] = {
		// 		index: 1,
		// 		value: "Connectivity Problem"
		// 	}
		// 	testEngine.testOptionInput(optionObj, function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message);
		// 			return;
		// 		}
		// 		console.log(result);
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("Yes", "ELECT_OPTION_BASED", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("Fulfill ticket", "ELECT_OPTION_BASED", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("Confirm ticket", "ELECT_OPTION_BASED", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("paper jam in Problem", function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("good evening yes", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("change serial number", "CHANGE_DETAIL", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("kk 15101", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("naap", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("no", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("change my serial number", 'CHANGE_DETAIL', function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("00154", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("I don't have email ID", '', function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("jubiyarjoy@gmail.com", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("to b", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("no", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes confirm", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("jubiya@gmail.com", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("Bravo", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("exact klll 19434", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("no", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("one", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("2 complete set", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("jubiya at gmail.com", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("zga", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("zga", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("zga", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("WH 12345", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("no", "", function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(30000);
		// 	testEngine.testUnknownMessageHandler("jubiya@gmail.com", function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		console.log(result.dataPacket.data.SECTIONS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		console.log(result.dataPacket.data.SECTIONS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("jubiya@gmail.com", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("689695", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("233 a", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("i don't have", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("Mukunda Street", "CHANGE_DETAIL", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", '', function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("double nine two 3456778", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("Yes my email is ravi 0069 6978 the rate gmail.com", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", '', function (result) {

		// 		if (!result.status) {

		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", '', function (result) {

		// 		if (!result.status) {

		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("kggk", function (result) {

		// 		if (!result.status) {

		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "", function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("I want to change my door number", "CHANGE_DETAIL", function (result) {

		// 		if (!result.status) {

		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("absolutely", '', function (result) {

		// 		if (!result.status) {

		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("what@gmail.com", function (result) {

		// 		if (!result.status) {

		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("no", '', function (result) {

		// 		if (!result.status) {

		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("what", '', function (result) {

		// 		if (!result.status) {

		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("Radha Krishna BILO Street Near Gate Bazar", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("no change my street", 'CHANGE_DETAIL', function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("bangalore", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", '', function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("jubiyarjoygmail.com", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("RK Willow Street Near Gate Market", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("change details", "CHANGE_DETAIL", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("serial number", "CHANGE_DETAIL", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler("fata 0103 96@gmail.com", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("no", "NAME_SPECIFICATION", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("yes", "CHANGE_DETAIL", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		console.log(result.dataPacket.data.SECTIONS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("jubiya", "NAME_SPECIFICATION", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("no", "", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("689685", "STREET_NAME_SPECIFICATION", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for mobile confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("123", "", function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for mobile confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("no", "", function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testUnknownMessageHandler(" ", function (result) {

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });


		// it('It should show the category list', function (done) {
		// 	this.timeout(120000);
		// 	testEngine.testGuideExamplesHandler(function (result) {
		// 		console.log(result);

		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result);
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('it should trigure the complete handler', function (done) {
		// 	this.timeout(100000);
		// 	testEngine.testCompletionTest(function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message);
		// 		}
		// 		console.log(result);
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[3].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[4].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[5].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[6].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });

		// it('it should trigure the complete handler', function (done) {
		// 	this.timeout(100000);
		// 	testEngine.testContextDataBuilder("", function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message);
		// 		}
		// 		// console.log(result);
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[3].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[4].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[5].data.CELLS)
		// 		// // console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[6].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testConfirmationReject(function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		console.log(result.dataPacket.data.SECTIONS)
		// 		console.log(result.dataPacket.data.BUTTONS)
		// 		console.log(result.dataPacket.data.BUTTONS[1].optionData)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[3].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it("Button User type", function (done) {
		// 	this.timeout(120000);
		// 	var optionObj = {};
		// 	optionObj['optionID'] = 'CHANGE_DETAIL';
		// 	optionObj['optionContext'] = {
		// 		index: 1,
		// 		value: "SERIAL_NO"
		// 	}
		// 	testEngine.testOptionInput(optionObj, function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message);
		// 			return;
		// 		}
		// 		console.log(result);
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testTextAction("11", 'CHANGE_DETAIL', function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('it should trigure the complete handler', function (done) {
		// 	this.timeout(100000);
		// 	testEngine.testCompletionTest(function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message);
		// 		}
		// 		console.log(result);
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[3].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[4].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[5].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[6].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// })
		// it('it should be fulfill handler', function (done) {
		// 	this.timeout(20000);
		// 	testEngine.testFulfillment(function (result) {
		// 		if (!result.status) {
		// 			console.log(result.message);
		// 		}
		// 		console.log(result);
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[3].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[4].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[5].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[6].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
		// it('It should asking for brand confirmation', function (done) {
		// 	this.timeout(10000);
		// 	testEngine.testTextAction("no", "SELECT_OPTION_BASED", function (result) {
		// 		// 
		// 		if (!result.status) {
		// 			console.log(result.message)
		// 		}
		// 		console.log(result)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[0].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[1].data.CELLS)
		// 		// console.log(result.dataPacket.data.CARDS[0].data.SECTIONS[0].data.ROWS[2].data.CELLS)
		// 		expect(result.status).to.equal(true);
		// 		done();
		// 	})
		// });
	});
});

// //Confirmation reject (change details)
// it('It should asking for brand confirmation', function (done) {
// 	this.timeout(20000);
// 	testEngine.testConfirmationReject(function (result) {
// 		if (!result.status) {
// 			console.log(result.message)
// 		}
// 		console.log(result)
// 		expect(result.status).to.equal(true);
// 		done();
// 	})
// });