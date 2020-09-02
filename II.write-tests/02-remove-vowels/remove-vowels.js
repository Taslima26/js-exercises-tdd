function removeVowels(word) {
  var characters = word.split('');
  const vowels = ['a', 'i', 'o', 'e', 'u'];

  var result = [];

  characters.forEach(function (character) {
    if (!vowels.includes(character.toLowerCase())) {
      result.push(character);
    }
  });

  return result.join('');
}

console.log(removeVowels('Taslima'));
module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/
