const formatCities = (capitals) => {
  let results = [];
  results = capitals.map((element) => {
    console.log(element);
    return `${element.city} is the capital of ${element.country}`;
  });
  return results;
};
module.exports = formatCities;
