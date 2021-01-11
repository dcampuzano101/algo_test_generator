const runEncoding = (string) => {
  let result = "";
  let counter = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1] || counter === 9) {
      result = `${counter}${string[i]}`;
      counter = 1;
    } else {
      counter++;
    }
  }
  return result;
};
