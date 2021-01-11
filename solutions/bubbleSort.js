const bubbleSort = (array) => {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let swap = array[i];
        array[i] = array[i + 1];
        array[i + 1] = swap;
        sorted = false;
      }
    }
  }
  return array;
};
