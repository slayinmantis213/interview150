var kthSmallest = function (root, k) {
  var dfs = function (node) {
    if (!node) return;
    nums.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };
  const nums = [];

  if (!root) return 0;

  dfs(root);
  nums.sort((a, b) => a - b);

  return nums[k - 1];
};
