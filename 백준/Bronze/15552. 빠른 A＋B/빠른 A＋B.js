// 윤우님 코드 테스트

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let sum = '';

for (let i=1; i<=input[0]; i++){
    let number = input[i].split(' ').map((el)=>+el);
    sum += number[0] + number[1] + '\n';
}

console.log(sum);