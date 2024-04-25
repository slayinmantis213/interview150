var combine = function (n, k) {
  const res = [];

  const dfs = (index, combination) => {
    if (combination.length === k) {
      res.push([...combination]);
      return;
    }
    for (let i = index; i <= n; i++) {
      combination.push(i);
      dfs(i + 1, combination);
      combination.pop();
    }
  };

  dfs(1, []);
  return res;
};
  
  console.log(combine(4, 3)); // [] => [[1,2,3],[1,2,4],[1,3,4],[2,3,4]]