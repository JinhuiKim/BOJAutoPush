function solution(dot) {
    const [x, y] = dot;
    if(x > 0 && y > 0) return 1;
    if(x > 0 && y < 0) return 4;
    if (y > 0) return 2;
    return 3;
}