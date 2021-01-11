const isValidSubsequence = (array, sequence) => {
  let i = 0;
  let sequencePointer = 0;

  while (i < array.length) {
    if (array[i] === sequence[sequencePointer]) {
      sequencePointer++;
    }
    i++;
  }

  return sequencePointer === sequence.length;
};
