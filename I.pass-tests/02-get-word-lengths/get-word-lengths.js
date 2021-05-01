var getWordLengths = function (someWords) {
    let lengthArray = someWords.map((element) => element.length)
    return lengthArray;
};

module.exports = getWordLengths;
