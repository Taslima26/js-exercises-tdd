// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function average(numbers) {
  //filter out number from the array
  //find average of that array using reduce method
  let numberArray = [];
  numberArray = numbers.filter((number) => typeof number == 'number');
  let answer = numberArray.reduce((a, b) => a + b, 0) / numberArray.length;
  return answer;
}
module.exports = average;
