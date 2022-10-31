const ratio = require("../ratio/index.js");
const factorial = require("../factorial/index.js");
const ratioAndFactorial = (a, b, c) => {
  let x = ratio(a, b);
  let y = factorial(c);
  return { ratio: x, factorial: y };
};
console.log(ratioAndFactorial(4, 2, 5));
module.exports = ratioAndFactorial;
