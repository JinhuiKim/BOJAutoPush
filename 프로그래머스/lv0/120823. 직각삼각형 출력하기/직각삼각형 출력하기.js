const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log(solution(Number(input[0])));
});

const solution = (input) => {
    let answer = '*';
    for (let i = 2; i <= input; i++) {
        answer += `\n${'*'.repeat(i)}`;
    }
    return answer
}