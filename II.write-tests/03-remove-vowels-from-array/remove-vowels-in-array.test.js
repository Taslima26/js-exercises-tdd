const removeVowels = require('./remove-vowels-in-array');

test("remove vowels from all words in array", function () {
  // Arrange
  let input = [" ", " ", " "];
  let expected = [" ", " ", " "];
  // Act
  let output = removeVowels(input);
  // Assert
  expect(output).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
