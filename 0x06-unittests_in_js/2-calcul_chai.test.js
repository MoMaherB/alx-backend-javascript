const expect = require("chai").expect;
const { describe, it } = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", () => {
	describe("SUM", () => {
		it("checking if numbers round", () => {
			expect(calculateNumber("SUM", 100, 2)).to.equal(102);
		});
		it("checking if numbers round", () => {
			expect(calculateNumber("SUM", 1.7, 2.4)).to.equal(4);
		});
	});
	describe("SUBTRACT", () => {
		it("checking if numbers round", () => {
			expect(calculateNumber("SUBTRACT", 2.3, 3.2)).to.equal(-1);
		});
		it("checking if numbers round", () => {
			expect(calculateNumber("SUBTRACT", 4.6, 3.7)).to.equal(1);
		});
		it("checking if numbers round", () => {
			expect(calculateNumber("SUBTRACT", -3.9, -2.6)).to.equal(-1);
		});
	});
	describe("DIVIDE", () => {
		it("checking if numbers round", () => {
			expect(calculateNumber("DIVIDE", 6, 1)).to.equal(6);
		});
		it("checking if numbers round", () => {
			expect(calculateNumber("DIVIDE", 5.6, 1.6)).to.equal(3);
		});
		it("checking if numbers round", () => {
			expect(calculateNumber("DIVIDE", 100, 0)).to.equal("Error");
		});
	});
});
