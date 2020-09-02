const removeVowels = require('./remove-vowels');
test('remove vowels from word', function () {
  // Arrange
  let word = "Taslima";
  let expectingWord = "Tslm";

  // Act
  let result = removeVowels(word);
  // Assert
  expect(result).toEqual(expectingWord);
});
test('testing if the word doesnt include constant', function () {
  // Arrange
  let word = "std";
  let expectingWord = "std";

  // Act
  let result = removeVowels(word);
  // Assert
  expect(result).toEqual(expectingWord);
});

test('checks if it works with capital letters', function () {
  // Arrange
  let word = "APPLE";
  let expectingWord = "PPL";

  // Act
  let result = removeVowels(word);
  // Assert
  expect(result).toEqual(expectingWord);
});
