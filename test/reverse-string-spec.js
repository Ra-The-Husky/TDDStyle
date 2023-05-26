const assert = require('chai').assert
const expect = require('chai').expect

const reverseString = require("../problems/reverse-string.js");

describe("reverseString()", function() {
    it("should reverse the input string", () => {
        expect(reverseString("fun")).to.equal("nuf");
    })

    it("Should throw a TypeError when the input is not a string", () => {
        expect(() => reverseString(1).to.throw(TypeError))
        expect(() => reverseString(null).to.throw(TypeError))
        expect(() => reverseString(undefined).to.throw(TypeError))
        expect(() => reverseString([]).to.throw(TypeError))
        expect(() => reverseString(NaN).to.throw(TypeError))
        expect(() => reverseString({}).to.throw(TypeError))
    })
});
