const findThreeLargest = (array) => {
  // we want to find the three largest nums in one pass
  // we have to keep track of the three largest at every element
  // instantiate an array of length 3, and at every el,
  // check to see if the element is greater than any of the three largest in the result array
  // if it is larger appropriately re-assign

  let result = [-Infinity, -Infinity, -Infinity];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > result[2]) {
      let temp = result[2];
      let temp2 = result[1];
      result[2] = array[i];
      result[1] = temp;
      result[0] = temp2;
    } else if (array[i] > result[1]) {
      let temp = result[1];
      result[1] = array[i];
      result[0] = temp;
    } else if (array[i] > result[0]) {
      result[0] = array[i];
    }
  }
  return result;
};
