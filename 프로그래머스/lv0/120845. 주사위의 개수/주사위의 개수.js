function solution(box, n) {
    return box.map(v => ~~(v / n)).reduce((acc, cur) => acc * cur, 1);
}