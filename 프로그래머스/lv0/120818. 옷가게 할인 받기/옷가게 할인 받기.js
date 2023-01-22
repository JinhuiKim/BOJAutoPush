function solution(price) {
    let answer = price;
    if (price >= 500_000) answer *= (1 - 0.2);
    else if (price >= 300_000) answer *= (1 - 0.1);
    else if (price >= 100_000) answer *= (1 - 0.05);
    return Math.floor(answer);
}