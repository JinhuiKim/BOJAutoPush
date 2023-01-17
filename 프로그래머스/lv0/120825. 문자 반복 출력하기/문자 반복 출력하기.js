function solution(my_string, n) {
    let answer = '';
    for (const ele of my_string) {
       answer += ele.repeat(n) 
    }
    
    return answer;
}