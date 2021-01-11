const findClosestValueBst = (tree, target) => {
  return findClosestValueBstHelper(tree, target, tree.value);
};

const findClosestValueBstHelper = (tree, target, closest) => {
  // base-case
  if (tree === null) return closest;

  // determine whether closest > || < tree.value
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }

  // determine which side we should call the helper function on recursively
  // we determine by by checking if the target is > || <  tree.value
  // since it is a BST, if target > t.value, we search on the tree.right
  // and tree.left if target < t.value

  if (target > tree.value) {
    return findClosestValueBstHelper(tree.right, target, closest);
  } else if (target < tree.value) {
    return findClosestValueBstHelper(tree.left, target, closest);
  } else {
    return closest;
  }
};
