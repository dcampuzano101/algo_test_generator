const twoSum = (arr, target) => {
  let nums = {};

  for (let i = 0; i < arr.length; i++) {
    let targetDifference = target - arr[i];

    if (nums[targetDifference]) {
      return [targetDifference, arr[i]];
    }
    nums[arr[i]] = true;
  }
  return [];
};
