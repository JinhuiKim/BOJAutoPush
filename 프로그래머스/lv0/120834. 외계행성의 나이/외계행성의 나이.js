function solution(age) {
    let answer = '';
    for (const ele of String(age)) {
        answer += String.fromCharCode(+ele + 97)
    }
    return answer;
}