function getBracketMatcher(input) {
  //convert input in to an array
  //loop through the array
  //initialize the counter
  //if the bracket is '(' this increment the counter
  //if the bracket is ')' this decrement the counter
  //check counter if counter is less than 0 add 1
  //initialize the answer
  //return counter plus answer
  let counter = 0;
  let answer = 0;
  let inputArray = input.split('');
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] == '(') {
      counter = counter + 1;
    } else if (inputArray[i] == ')') {
      counter = counter - 1;
    }
    if (counter < 0) {
      counter = counter + 1;
      answer = answer + 1;
    }
  }

  return answer + counter;
}

module.exports = getBracketMatcher;
