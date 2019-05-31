"use strict";

function addContact(_ref) {
  var name = _ref.name,
      phone = _ref.phone,
      _ref$email = _ref.email,
      email = _ref$email === undefined ? "None" : _ref$email,
      _ref$age = _ref.age,
      age = _ref$age === undefined ? 0 : _ref$age;

  console.log("Name: " + name);
  console.log("Phone: " + phone);
  console.log("Email: " + email);
  console.log("Age: " + age);
}

addContact({
  name: "John",
  phone: "010-3434-5656"
});