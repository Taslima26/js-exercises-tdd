// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
const getEvenNumbers = require('./get-even-numbers');
test('get even numbers', function () {
  let input = [22, 13, 73, 82, 4];
  let expected = [22, 82, 4];
  let output = getEvenNumbers(input);
  expect(output).toEqual(expected);
});
