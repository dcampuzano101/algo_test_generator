const findClosestValueInBst = (tree, target) => {
  return findClosestValueInBstHelper(tree, tree.value, target);
};

const findClosestValueInBstHelper = (node, closest, target) => {
  if (!node) return closest;

  if (Math.abs(target - node.value) < Math.abs(target - closest)) {
    closest = node.value;
  }

  if (node.value > target) {
    return findClosestValueInBstHelper(node.left, closest, target);
  } else if (node.value < target) {
    return findClosestValueInBstHelper(node.right, closest, target);
  } else {
    return closest;
  }
};
