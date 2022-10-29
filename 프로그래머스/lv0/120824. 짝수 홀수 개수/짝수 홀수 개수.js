const solution = (num_list) => {
  return num_list.reduce(
    (acc, cur) => {
      cur % 2 ? acc[1]++ : acc[0]++;
      return acc;
    },
    [0, 0]
  );
};

solution([1, 2, 3, 4, 5]);
