function reverseString(string) {
  if (typeof string !== "string") {
    throw new TypeError("Input must be a string");
  } else {
    const revArr = [];
    const strArr = string.split("");
    strArr.forEach((el) => {
      revArr.unshift(el);
    });

    return revArr.join("");
  }
}
//! Reg for loop solution
// function reverseString(string) {
//   const revArr = []
//   const strArr = string.split("")

//   for (let i = strArr.length-1; i >=0; i--) {
//     const el = strArr[i]
//     strArr.pop(el)
//     strArr.push(el)
//   }

//   return revArr.join("")
// };
console.log(reverseString("fun")); //"nuf"
console.log(reverseString("gamecube")); //"ebucemag"
// console.log(reverseString(99)); //"Please input a string"

module.exports = reverseString;
