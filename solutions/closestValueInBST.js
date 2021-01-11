const findClosestValueInBst = (tree) => {
  return helperFunction(tree, target, tree.value);
};

const helperFunction = (tree, target, closest) => {
  if (tree === null) return closest;

  if (Math.abs(tree.value - target) < Math.abs(tree.value - closest))
    closest = tree.value;

  if (target > tree.value) {
    return helperFunction(tree.right, target, closest);
  } else if (target < tree.value) {
    return helperFunction(tree.left, target, closest);
  } else {
    return closest;
  }
};
