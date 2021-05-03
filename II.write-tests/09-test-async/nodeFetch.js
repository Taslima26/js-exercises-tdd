const nodeFetcher = require('node-fetch');

const nodeFetch = function (repoName) {
  return fetch(repoName).then((data) => data.json());
};

module.exports = nodeFetch;
