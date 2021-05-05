function getOldRomanNumerals(input) {
  let units = [' ', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  let tens = [' ', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  let hundreds = [' ', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  let thousands = [' ', 'M', 'MM', 'MMM', 'MMMM'];
  let resultArray = [];
  if (input / 1000 < 0) {
    resultArray.push('');
  } else {
    resultArray.push(thousands[input / 1000]);
  }

  if (input / 100 < 0) {
    resultArray.push('');
  } else {
    resultArray.push(hundreds[(input % 1000) / 100]);
  }
  if (input < 10) {
    resultArray.push('');
  } else {
    resultArray.push((input % 100) / 10);
  }
  if (units[input % 10] === undefined) {
    resultArray.push('');
  } else {
    resultArray.push(units[input % 10]);
  }
  return resultArray.join('');
}

module.exports = getOldRomanNumerals;
