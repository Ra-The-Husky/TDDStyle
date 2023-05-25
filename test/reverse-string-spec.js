// Your code here
// const chai = require('chai');
const { expect } = chai.expect;

const reverseString = require("../problems/reverse-string.js");

describe("reverseString()", function() {
    it("should reverse the input string"), () => {
        const reversedString = reverseString("fun");
        expect(reversedString).to.equal("nuf");
    }
});
