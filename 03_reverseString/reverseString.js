const reverseString = function (text) {
  Ar = text.split("");
  let string = [];
  for (i = 0; i < text.length; i++) {
    string[i] = Ar[text.length - 1 - i];
  }
  return string.join("");
};

// Do not edit below this line
module.exports = reverseString;
