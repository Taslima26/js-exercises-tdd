const greetPeople = require('./greet-people')
test("print list of names prefixed with Hello", function () {
  // Arrange
  const names = ['Laetitia', 'Tas', 'Ross', 'Orhan']
  const greetingNames = ['Hello Laetitia', 'Hello Tas', 'Hello Ross', 'Hello Orhan']
  // Act
  const result = greetPeople(names)
  // Assert
  expect(result).toEqual(greetingNames)
});
