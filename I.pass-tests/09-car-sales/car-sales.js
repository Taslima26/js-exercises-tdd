function sales(items) {
  var map = {};
  var new_items = [];
  var length = items.length;
  for (var i = 0; i < length; i++) {
    if (items[i]['make'] in map) {
      map[items[i]['make']] += items[i]['price'];
    } else {
      map[items[i]['make']] = items[i]['price'];
    }
  }
  return map;
}
module.exports = sales;
