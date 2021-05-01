function addNumbers(numbers) {
  const sum = numbers.reduce((a, b) => a + b);
  return sum;
}
module.exports = addNumbers;
