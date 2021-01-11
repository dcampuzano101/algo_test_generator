const caesarCipher = (string, key) => {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let newPosition = (alpha.indexOf(string[i]) + key) % 26;
    let newChar = alpha[newPosition];

    result += newChar;
  }
  return result;
};
