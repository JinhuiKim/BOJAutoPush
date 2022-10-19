function solution(s1, s2) {
  let answer = 0;
  for (const ele of s1) s2.includes(ele) && answer++;
  return answer;
}