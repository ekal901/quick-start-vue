function addContact({name, phone, email = "None", age = 0}) {
  console.log("Name: " + name);
  console.log("Phone: " + phone);
  console.log("Email: " + email);
  console.log("Age: " + age);
}

addContact({
  name: "John",
  phone: "010-3434-5656"
});