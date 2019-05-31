"use strict";

function foodReport(name, age) {
  console.log(name + ", " + age);

  for (var _len = arguments.length, favoriteFoods = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    favoriteFoods[_key - 2] = arguments[_key];
  }

  console.log(favoriteFoods);
}
foodReport("tony", 20, "chicken", "noodles", "pumkin pie");
// tony, 20
// [ 'chicken', 'noodles', 'pumkin pie' ]
foodReport("Rosie", 10, "Grill Cheese Toast");
// Rosie, 10
// [ 'Grill Cheese Toast' ]