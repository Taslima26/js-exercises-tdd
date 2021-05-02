// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed

var getSecondThird = require('./get-second-third');

test('Get second and third number', function () {
  //arrange
  let input = [90, 5, 11, 8, 6];
  let expected = [6, 8];
  //act
  let output = getSecondThird(input);

  //assert
  expect(output).toEqual(expected);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
