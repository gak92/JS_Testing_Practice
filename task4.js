const capitalize = (str) => {
  let capitalStr = '';
  for (let index = 0; index < str.length; index += 1) {
    if (index === 0) {
      capitalStr += str[index].toUpperCase();
    } else {
      capitalStr += str[index];
    }
  }
  return capitalStr;
}

module.exports = capitalize;
