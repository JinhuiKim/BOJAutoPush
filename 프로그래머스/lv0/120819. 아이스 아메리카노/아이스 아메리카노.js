function solution(money) {
    const price = 5500;
    const count = Math.floor(money / price);
    const change = money % price;
    return [count, change];
}