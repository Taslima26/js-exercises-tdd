const getBracketMatcher = require('./bracket-matcher');
test('check for brackets ', function () {
  let input = '())(';
  let output = getBracketMatcher(input);
  let expected = 2;
  expect(output).toEqual(expected);
});
