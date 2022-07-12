const stringLength = (string) => {
  let len = 0;
  for (let i=0; i < string.length; i += 1) {
    len += 1;
  }

  if (len < 1 || len > 10) {
    throw new Error("String Length must be between 1 and 10 (included)");
  }
  return len;
}

module.exports = stringLength;
