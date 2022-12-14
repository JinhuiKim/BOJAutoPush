const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = "";

rl.on("line", function (line) {
  const input = line.split(" ").map(Number);
  const [a, b] = input;
  if (a === 0 && b === 0) return;

  solution(a, b);
}).on("close", function () {
  console.log(answer);
  process.exit();
});

const solution = (a, b) => {
  answer += a + b + "\n";
};