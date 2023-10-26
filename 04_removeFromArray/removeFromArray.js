const removeFromArray = function (array, index) {
  for (i = 0; i < array.length - 1; i++) {
    if (array[i] == index) {
      for (j = i; j < array.length - 1; j++) {
        array[j] = array[j + 1];
      }
    }
  }
  array.pop();
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
