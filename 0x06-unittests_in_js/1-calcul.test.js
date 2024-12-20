const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", () => {

	it(`checking if numbers round`, () => {
		const res = calculateNumber("SUM", 3, 4);
		assert.strictEqual(res, 7);
	});
	it(`checking if numbers round`, () => {
		const res = calculateNumber("SUBTRACT", 1.3, 2.3);
		assert.strictEqual(res, -1);
	});
	it(`checking if numbers round`, () => {
		const res = calculateNumber("SUBTRACT", 4.9, 2.7);
		assert.strictEqual(res, 2);
	});
	it(`checking if numbers round`, () => {
		const res = calculateNumber("DIVIDE", 4, 2);
		assert.strictEqual(res, 2);
	});
	it(`checking if numbers round`, () => {
		const res = calculateNumber("DIVIDE", 1.7, 0);
		assert.strictEqual(res, "Error");
	});
	it(`checking if numbers round`, () => {
		const res = calculateNumber("DIVIDE", 1.4, 4.6);
		assert.strictEqual(res, 0.2);
	});
});
