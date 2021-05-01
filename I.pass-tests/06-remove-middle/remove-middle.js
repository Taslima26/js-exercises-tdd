function removeMiddle(words) {
  const middleWord = Math.ceil(words.length / 2) - 1;
  let requiredWords = [];
  requiredWords = words.filter((word) => word == words[middleWord]);
  return requiredWords;
}

module.exports = removeMiddle;
