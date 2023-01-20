function solution(array) {
    const obj = array.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});

    const arr = Object.entries(obj).sort(([, a], [, b]) => b - a);
    const arrLength = arr.filter((_, i) => arr[i][1] === arr[0][1]).length;
    
    return arrLength > 1 ? -1 : +arr[0][0]
}