function solution(array) {
    const [a] = [...array].sort((a, b) => b-a);
    return [a, array.indexOf(a)];
}