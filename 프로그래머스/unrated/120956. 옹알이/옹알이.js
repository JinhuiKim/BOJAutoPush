function solution(babbling) {
  let answer = 0;
  for (const input of babbling) {
    if (input.length < 2) continue;
    checkWord(input) && answer++;
  }
  return answer;
}

const arr = ["aya", "ye", "woo", "ma"];

const checkWord = (input, prev) => {
  if (prev && input === prev) return false;

  for (const word of arr) {
    if (word === prev) continue;
    if (word === input) return true;
    if (input.startsWith(word))
      return checkWord(input.slice(word.length), word);
  }
  return false;
};