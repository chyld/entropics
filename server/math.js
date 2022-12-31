const { random, draw } = require("radash");

const operators = [
  { js: "+", la: "+" },
  { js: "-", la: "-" },
  { js: "*", la: "\\times" },
  { js: "/", la: "\\div" },
  { js: "%", la: "\\: \\% \\:" },
];

function basics() {
  const a = random(0, 20);
  const b = random(1, 20); // so we do not divide by zero
  const operator = draw(operators);
  const problemLa = `${a} ${operator.la} ${b}`;
  const problemJs = `${a} ${operator.js} ${b}`;
  const answer = Math.trunc(eval(problemJs));
  return { problem: problemLa, answer };
}

module.exports = { basics };
