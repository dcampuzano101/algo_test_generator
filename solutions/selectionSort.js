const selectionSort = (array) => {
  let startIndex = 0;

  while (startIndex < array.length) {
    let smallestIndex = startIndex;

    for (let i = smallestIndex + 1; i < array.length; i++) {
      if (array[i] < array[smallestIndex]) {
        smallestIndex = i;
      }
    }
    let temp = array[smallestIndex];
    array[smallestIndex] = array[startIndex];
    array[startIndex] = temp;
    startIndex++;
  }
  return array;
};
