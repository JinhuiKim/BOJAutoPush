function solution(s){
  s = s.toLowerCase();

  if (!s.includes("p") && !s.includes("y")) return true;

  let pCount = 0,
    yCount = 0;
  for (const c of s) {
    if (c !== "p" && c !== "y") continue;
    c === "p" ? pCount++ : yCount++;
  }

  return pCount === yCount;
}