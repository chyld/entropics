const { random, draw } = require("radash");

function addSubMulDivMod() {
  const operators = [
    { js: "+", la: "+" },
    { js: "-", la: "-" },
    { js: "*", la: "\\times" },
    { js: "/", la: "\\div" },
    { js: "%", la: "\\: \\% \\:" },
  ];

  const a = random(0, 20);
  const b = random(1, 20); // so we do not divide by zero
  const operator = draw(operators);
  const problemLa = `${a} ${operator.la} ${b}`;
  const problemJs = `${a} ${operator.js} ${b}`;
  const answer = Math.trunc(eval(problemJs));
  return { problem: problemLa, answer };
}

function squareRoot() {
  const n = random(0, 400);
  const answer = Math.trunc(Math.sqrt(n));
  const problem = `\\sqrt{${n}}`;
  return { problem, answer };
}

function choose() {
  const functions = [addSubMulDivMod, squareRoot];
  const fn = draw(functions);
  return fn;
}

module.exports = { choose };
