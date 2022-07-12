const reverseString = (string) => {
  let reverseStr = '';
  for (let index = string.length - 1; index >= 0; index -= 1) {
    reverseStr += string[index];
  }

  return reverseStr;
}

module.exports = reverseString;
