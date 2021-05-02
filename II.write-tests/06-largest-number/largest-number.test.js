// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
const getLargestNumber = require('./largest-number');
test('get largest number', function () {
  let input = [3, 21, 88, 4, 36];
  let expected = 88;
  let output = getLargestNumber(input);
  expect(output).toEqual(expected);
});
