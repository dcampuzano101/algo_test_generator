const insertionSort = (array) => {
  // we split the input array into two parts, the first part is always sorted,
  // and begins with one element
  // we instantiate two pointers, i = 1, j = 1
  // while j > 0 && arr[j] < arr[j-1]
  // we swap the elemnts and decrement j
  // continue iterating through the array, if we find an element out of place we run the swap

  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      let swap = array[j];
      array[j] = array[j - 1];
      array[j - 1] = swap;
      j--;
    }
  }
  return array;
};
