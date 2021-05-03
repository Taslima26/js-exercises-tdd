function calculator(input) {
  if (input == '') {
    return 0;
  } else if (input.length === 1) {
    return parseInt(input);
  } else if (input.includes('-')) {
    throw new Error('negatives not allowed');
  } else {
    let parsedString = input.replace(/(\r\n|\n|\r)/gm, ',');
    console.log(parsedString);
    let inputArray = parsedString.split(',');
    console.log(inputArray);
    const sum = inputArray
      .map((num) => parseInt(num))
      .reduce((a, b) => a + b, 0);
    console.log(sum);
    return sum;
  }
}

module.exports = calculator;
