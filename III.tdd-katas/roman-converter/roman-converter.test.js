const getOldRomanNumerals = require('./roman-converter');
test('check for conversion ', function () {
  let input = 4;
  let output = getOldRomanNumerals(input);
  let expected = 'IV';
  expect(output).toEqual(expected);
});

test('check for conversion ', function () {
  let input = 2289;
  let output = getOldRomanNumerals(input);
  let expected = 'MMCCLXXXIX';
  expect(output).toEqual(expected);
});
