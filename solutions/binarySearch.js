const binarySearch = (array, target) => {
  if (array.length === 0) return -1;

  let midPoint = Math.floor(array.length / 2);

  if (target > array[midPoint]) {
    let subResult = binarySearch(array.slice(midPoint), target);
    return subResult === -1 ? -1 : midPoint + 1 + subResult;
  } else if (target < array[midPoint]) {
    return binarySearch(array.slice(0, midPoint), target);
  } else {
    return midPoint;
  }
};
