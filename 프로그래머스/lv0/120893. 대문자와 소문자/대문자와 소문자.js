function solution(my_string) {
    let answer = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string.charCodeAt(i) <= 90) {
            answer += my_string[i].toLowerCase();
            continue;
        }
            answer += my_string[i].toUpperCase();        
    }
    return answer;
}