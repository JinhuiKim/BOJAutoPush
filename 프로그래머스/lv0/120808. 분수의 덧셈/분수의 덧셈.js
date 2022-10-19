function solution(denum1, num1, denum2, num2) {
  const denum = denum1 * num2 + denum2 * num1;
  const num = num1 * num2;
  const gcd = getGcd(denum, num);

  return [denum / gcd, num / gcd];
}

const getGcd = (a, b) => (a % b === 0 ? b : getGcd(b, a % b));