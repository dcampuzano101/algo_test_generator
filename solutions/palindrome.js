const palindrome = (string) => {
  // we create an empty string
  // then we iterate through the input string starting from the end
  // we add each char from the input string to the empty string
  // compare the input to the created string
  let result = "";

  for (let i = string.length - 1; i > 0; i++) {
    result += string[i];
  }

  return result === string;
};

const pal2 = (str) => {
  // create two pointers one beginning at 0, and the other at the end of the string
  // we check to see if they're equal, if so increment and decrement
  // if they aren't return false
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};
