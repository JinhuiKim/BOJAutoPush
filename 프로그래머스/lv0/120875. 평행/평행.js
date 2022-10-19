function solution(dots) {
  const gradientArr = [];

  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const [[x1, y1], [x2, y2]] = [dots[i], dots[j]];
      const gradient = (y1 - y2) / (x1 - x2);

      if (gradientArr.includes(gradient)) return 1;
      gradientArr.push(gradient);
    }
  }
  return 0;
}