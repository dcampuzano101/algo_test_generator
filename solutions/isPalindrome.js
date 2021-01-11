const isPalindrome = (arr, target) => {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] === arr[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};
