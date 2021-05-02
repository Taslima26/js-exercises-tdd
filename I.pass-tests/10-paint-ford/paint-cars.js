function paintShop(cars, color) {
  let result = [];
  result = cars.forEach((car) => {
    console.log(car.colour);
    if (car.colour == 'Red') {
      car['colour'] = color;
    }
  });

  return cars;
}
module.exports = paintShop;
