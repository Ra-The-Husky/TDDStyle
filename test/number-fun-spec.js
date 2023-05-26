const assert = require("chai").assert;
const expect = require("chai").expect;

const { returnsThree } = require("../problems/number-fun.js");
const { reciprocal } = require("../problems/number-fun.js");

describe("returnsThree()", function () {
  it("should return the number 3", () => {
    expect(returnsThree()).to.equal(3);
  });
});

describe("reciprocal(n)", function () {
  context("If a number within range(1-1000000) is entered in the input", () => {
    it("should intake a number and then return the reciprocal of that number", () => {
      expect(reciprocal(2)).to.equal(1 / 2);
      expect(reciprocal(4)).to.equal(1 / 4);
      expect(reciprocal(15)).to.equal(1 / 15);
    });
  });
  context("If an invalid number is used as an input", () => {
    it("Should return a RangeError", () => {
      expect(() => reciprocal(0)).to.throw(RangeError);
      expect(() => reciprocal(1000001)).to.throw(RangeError);
    });
  });
});
