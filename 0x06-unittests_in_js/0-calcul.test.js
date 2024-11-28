const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", () => {

	it(`checking if numbers round`, () => {
		const res = calculateNumber(2, 2);
		assert.strictEqual(res, 4);
	});
	it(`checking if numbers round`, () => {
		const res = calculateNumber(1.3, 2.1);
		assert.strictEqual(res, 3);
	});
	it(`checking if numbers round`, () => {
		const res = calculateNumber(1.7, 2.8);
		assert.strictEqual(res, 5);
	});
	it(`checking if numbers round`, () => {
		const res = calculateNumber(0, 0);
		assert.strictEqual(res, 0);
	});
	it(`checking if numbers round`, () => {
		const res = calculateNumber(-1.7, -1.8);
		assert.strictEqual(res, -4);
	});
	it(`checking if numbers round`, () => {
		const res = calculateNumber(-1.3, -1.2);
		assert.strictEqual(res, -2);
	});
});

