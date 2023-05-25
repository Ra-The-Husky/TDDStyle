function reverseString(string) {
  const revArr = [];
  const strArr = string.split("");
  strArr.forEach((el) => {
    revArr.unshift(el);
  });

  return revArr.join("");
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

module.exports = reverseString;
