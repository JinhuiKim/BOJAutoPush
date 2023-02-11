function solution(order) {
    return [...String(order)].filter(v => v%3===0&&v!=='0').length;
}