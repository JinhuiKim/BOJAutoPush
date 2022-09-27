const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = "";

rl.on("line", function (line) {
  const input = Number(line);
  solution(input, 1);
}).on("close", function () {
  console.log(answer);
  process.exit();
});

const solution = (input, memo) => {
  for (let i = 0; i < memo; i++) answer += "*";
  answer += "\n";

  if (input === memo) return;

  solution(input, memo + 1);
};