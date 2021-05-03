const getCalculator = require('./calculator');

test('check for empty string ', function () {
  let input = '';
  let output = getCalculator(input);
  let expected = 0;
  expect(output).toEqual(expected);
});

test('check for only one number', function () {
  let input = '1';
  let output = getCalculator(input);
  let expected = 1;
  expect(output).toEqual(expected);
});
test('check for two  non empty  input string', function () {
  let input = '1,2';

  let expected = 3;
  let output = getCalculator(input);
  expect(output).toEqual(expected);
});

test('check for unlimited amount of number', function () {
  let input = '1,2,3,4,5,6,7,8,9,10';
  let expected = 55;
  let output = getCalculator(input);
  expect(output).toEqual(expected);
});

test('method to handle new lines between numbers', function () {
  let input = '1\n2,3';
  let expected = 6;
  let output = getCalculator(input);
  expect(output).toEqual(expected);
});

test('method to handle any types of delimiters', function () {
  let input = '//;\n1;2';
  // let input = '1;2';
  let expected = 3;
  let output = getCalculator(input);
  expect(output).toEqual(expected);
});

test('should not allow negative numbers', function () {
  expect(function () {
    getCalculator('-1,2,3');
  }).toThrow(new Error('negatives not allowed'));
});
