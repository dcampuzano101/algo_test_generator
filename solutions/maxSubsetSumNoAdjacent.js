/*
  Write a function that takes in an array of positive integers and returns the
  maximum sum of non-adjacent elements in the array.

If the input array is empty, the function should return 0.
Sample Input array = [75, 105, 120, 75, 90, 135]

Sample Output330 < // 75 + 120 + 135
*/

const maxSubsetSumNoAdjacent = (array) => {
  if (!array.length) return 0;
  const maxSums = array.slice();

  maxSums[1] = Math.max(array[0], array[1]);

  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
  }
  return maxSums[maxSums.length - 1];
};

console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]));
