const spiralTraverse = (array) => {
  // take in N x M 2-D array, can be square shaped when (n === m)
  // returns a 1-D array all elements in spiral order
  // input = [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
  // output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

  let startingRow = 0;
  let startingCol = 0;
  let endingRow = array.length - 1;
  let endingCol = array[0].length - 1;

  const result = [];

  while (startingRow <= endingRow && startingCol <= endingCol) {
    for (let col = startingRow; col <= endingCol; col++) {
      console.log(array[startingRow][col]);
      result.push(array[startingRow][col]);
    }

    for (let row = startingRow + 1; row <= endingRow; row++) {
      result.push(array[row][endingCol]);
    }

    for (let col = endingCol - 1; col >= startingCol; col--) {
      if (startingRow === endingRow) break;
      result.push(array[endingRow][col]);
    }

    for (let row = endingRow - 1; row > startingRow; row--) {
      if (startingCol === endingCol) break;
      result.push(array[row][startingCol]);
    }

    startingRow++;
    endingRow--;
    startingCol++;
    endingCol--;
  }
  return result;
};
