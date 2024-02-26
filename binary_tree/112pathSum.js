var hasPathSum = function (root, targetSum) {
  if (root === null) {
    return targetSum === 0;
  }
  targetSum -= root.val;
  if (root.left !== null && targetSum - root.left.val > 0) {
    if (hasPathSum(root.left, targetSum)) {
      return true;
    }
  }
  if (root.right !== null && targetSum - root.right.val > 0) {
    if (hasPathSum(root.right, targetSum)) {
      return true;
    }
  }
  return targetSum === 0;
};

//chat gpt

var hasPathSum = function (root, targetSum) {
  if (root === null) {
    return false;
  }

  // Check if it's a leaf node
  if (root.left === null && root.right === null) {
    return targetSum - root.val === 0;
  }

  // Subtract the current node's value from targetSum
  targetSum -= root.val;

  // Recursively check left and right subtrees
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return targetSum - root.val === 0;

  // valid nodes and have children below here
  targetSum -= root.val;

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};
