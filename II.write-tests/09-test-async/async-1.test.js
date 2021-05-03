const getRepos = require('./async-1');
const fetcher = require('./nodeFetch');
jest.mock('./nodeFetch.js');

test('gets a list of repositories names (with mock)', function () {
  // arrange
  fetcher.mockResolvedValue([{name: 'js-exercises'}]);
  var url = 'https://api.github.com/users/kabaros/repos';

  // act
  return getRepos(url).then(function (result) {
    // assert
    expect(result).toContain('js-exercises');
  });
});

test('a more deterministic test', function () {});
