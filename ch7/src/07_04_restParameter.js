function foodReport(name, age, ...favoriteFoods) {
  console.log(name + ", " + age);
  console.log(favoriteFoods);
}
foodReport("tony", 20, "chicken", "noodles", "pumkin pie");
// tony, 20
// [ 'chicken', 'noodles', 'pumkin pie' ]
foodReport("Rosie",10, "Grill Cheese Toast");
// Rosie, 10
// [ 'Grill Cheese Toast' ]