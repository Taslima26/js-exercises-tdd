module.exports = function(array) {
  return array.map(number => {
    return Number(number) > 10;
  });
};
