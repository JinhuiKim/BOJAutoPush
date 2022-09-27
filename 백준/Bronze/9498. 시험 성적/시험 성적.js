const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const score = Number(input);

//시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
let result = ''
const decimal = score % 10;
switch ((score - decimal) / 10) {
    case 10:
    case 9: result = 'A'; break;
    case 8: result = 'B'; break;
    case 7: result = 'C'; break;
    case 6: result = 'D'; break;
    default: result = 'F'; break;
}

console.log(result);