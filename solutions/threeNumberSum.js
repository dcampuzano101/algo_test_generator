const threeNumberSum = (array, target) => {
  array.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      let currentSum = array[i] + array[left] + array[right];

      if (currentSum === target) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < target) {
        left++;
      } else if (currentSum > target) {
        right--;
      }
    }
  }
  return triplets;
};
