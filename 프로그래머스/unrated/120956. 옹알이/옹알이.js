function solution(babbling) {
  let answer = 0;
  const minLength = Math.min(...arr.map((ele) => ele.length));

  for (const input of babbling) {
    if (input.length < minLength) continue;
    checkWord(input) && answer++;
  }
  return answer;
}

const arr = ["aya", "ye", "woo", "ma"];

const checkWord = (input, prev) => {
  if (input === prev) return false;

  for (const word of arr) {
    if (word === prev) continue;
    if (word === input) return true;
    if (input.startsWith(word))
      return checkWord(input.slice(word.length), word);
  }
  return false;
};