const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = "";
let n, x;

rl.on("line", function (line) {
  const input = line.split(" ").map(Number);

  if (input.length === 2) {
    [n, x] = input;
    return;
  }
  solution(input);
}).on("close", function () {
  console.log(answer);
// console.log('1 4 2 3')
  process.exit();
});

const solution = (input) => {
  for (let i = 0; i < n; i++) {
    const ele = input[i];
    if (ele >= x) continue;
    answer += `${ele} `;
  }
};