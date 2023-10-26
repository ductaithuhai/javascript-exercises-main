const convertToCelsius = function (Fdegree) {
  return Number(((5 / 9) * (Fdegree - 32)).toFixed(1));
};

const convertToFahrenheit = function (Cdegree) {
  return Number(((9 / 5) * Cdegree + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
