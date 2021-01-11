const validSequence = (array, sequence) => {
  let sequencePointer = 0;
  let i = 0;

  while (i < array.length) {
    if (array[i] === sequence[sequencePointer]) {
      sequencePointer++;
    }

    i++;
  }
  return sequencePointer === sequence.length;
};
