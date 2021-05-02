module.exports = function (array) {
  let result = [];
  let numberResult = [];
  result = array.filter((number) => {
    return number > 10;
  });
  numberResult = result.map((element) => parseInt(element));
  return numberResult;
};
