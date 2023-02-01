function solution(my_string) {
    return my_string.split('').filter(Number).reduce((acc, cur) => acc + +cur, 0);
}