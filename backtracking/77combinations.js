var combine = function (n, k) {
    const combinationDict = new Map();
    const numArray = [];
  
    for (let i = 1; i <= n; i++) {
      numArray.push(i);
    }
  
    if (n === k) {
      return [numArray];
    }
  
    if (k === 1) {
      const res = [];
  
      for (const num of numArray) {
        res.push([num]);
      }
      return res;
    }
    for (let i = n; i > 0; i--) {
      combinationDict.set(i, []);
      for (const num of numArray) {
        if (num != i) combinationDict.get(i).push(num);
      }
    }
    //   console.log(combinationDict);
  
    const dfs = (index, k, res, path) => {
      if (path.length === k) {
        console.log(path);
        res.push([...path]);
        return;
      }
  
      let nextNum = numArray[index - 1];
      while (nextNum > 0) {
        path.push(nextNum);
  
        for (const num of combinationDict.get(nextNum)) {
          if (path.indexOf(num) == -1) path.push(num);
          // console.log(num, [path[0]]);
          // path.push(num);
          dfs(index - 1, k, res, path);
          path.pop();
        }
        for (let i = 1; i < combinationDict.size; i++) {
          // console.log(combinationDict);
          combinationDict.get(i).pop();
          // console.log(combinationDict);
        }
        nextNum--;
        path = [];
      }
      // if (path.length === 0) {
      //   path.push(n);
      // } else if (path[0] != n) {
      //   path.push(n);
      // }
      // dfs(n - 1, k, res, path);
      // path.pop();
    };
  
    const res = [];
    dfs(n, k, res, []);
    return res;
  };
  
  console.log(combine(4, 3)); // [] => [[1,2,3],[1,2,4],[1,3,4],[2,3,4]]