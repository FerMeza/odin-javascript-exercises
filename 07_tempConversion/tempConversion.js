const convertToCelsius = function (farenheitDegrees) {
  const decimalPlaces = 1;
  let celciusDegrees = (farenheitDegrees - 32) * (5 / 9);
  return Number.isInteger(celciusDegrees) ?
  celciusDegrees :
  +celciusDegrees.toFixed(decimalPlaces);
};

const convertToFahrenheit = function (celciusDegrees) {
  const decimalPlaces = 1;
  let farenheitDegrees = (9 / 5) * celciusDegrees + 32;
  return Number.isInteger(farenheitDegrees) ?
  farenheitDegrees :
  +farenheitDegrees.toFixed(decimalPlaces);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};