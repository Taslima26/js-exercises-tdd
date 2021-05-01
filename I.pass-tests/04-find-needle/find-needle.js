// function findNeedle(words) {
//   for (let i = 0; i < words.length; i++) {
//     if (words[i] === 'needle') {
//       return i;
//     }
//   }
// }

function findNeedle(words) {
  return words.indexOf('plant');
}

module.exports = findNeedle;
