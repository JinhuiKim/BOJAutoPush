function solution(hp) {
    let answer = 0;
    let temp;
    
    [5, 3, 1].forEach((v) => {
        if (hp < v) return;
        temp = Math.floor(hp / v);
        hp -= temp * v;
        answer += temp;
    });
    
    return answer;
}