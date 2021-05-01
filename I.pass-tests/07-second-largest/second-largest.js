function secondLargest(numbers) {
  //find the largest number from the array
  //filter out that number from the array
  //find the maximum number from the filtered arrlet largest = -2454635434 =- 2454635434;ay
  let largest = -2454635434;
  let secondLargestOutput = -2454635434;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  console.log(largest);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > secondLargestOutput && numbers[i] < largest) {
      secondLargestOutput = numbers[i];
    }
  }
  return secondLargestOutput;
}

module.exports = secondLargest;
