var removeMiddle = require('./remove-middle');

test('Remove middle', function () {
  var words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];

  var expectedOutput = ['queen'];

  var output = removeMiddle(words);

  expect(output).toEqual(expectedOutput);
  //['queen']

  //['mouse', 'giraffe', 'queen', 'window', 'bottle']
});
