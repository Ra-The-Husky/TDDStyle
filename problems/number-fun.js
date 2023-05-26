function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n >= 1 && n <= 1000000) {
    return 1 / n;
  } else {
    throw new RangeError("Input num must b between 1-1,000,000")
  }
}

console.log(reciprocal(6));

module.exports = {
  returnsThree,
  reciprocal,
};
