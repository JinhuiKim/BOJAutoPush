function solution(i, j, k) {
    return Array.from({ length: j - i + 1 }, (_, index) => i + index).join('').split('').filter(v => +v===k).length;
}