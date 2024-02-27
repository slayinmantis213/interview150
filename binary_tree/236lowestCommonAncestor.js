// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants
// (where we allow a node to be a descendant of itself).”

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let ans = null;
  var dfs = function (node, p, q) {
    if (!node) return false;
    const left = dfs(node.left, p, q) ? 1 : 0;
    const right = dfs(node.right, p, q) ? 1 : 0;
    const mid = node === p || node === q ? 1 : 0;

    if (mid + left + right >= 2) {
      ans = node;
    }
    return mid + left + right > 0;
  };

  dfs(root, p, q);
  return ans;
};
