function addContact(name, mobile, home="없음", address="없음", email="없음") {
  var str = `name=${name}, mobile=${mobile}, home=${home}, address=${address}, email=${email}`;
  console.log(str);
}

addContact("Danny", "010-2222-3333");
//name=Danny, mobile=010-2222-3333, home=없음, address=없음, email=없음
addContact("Ron", "010-2222-4444", "02-111-222", "LA");
//name=Ron, mobile=010-2222-4444, home=02-111-222, address=LA, email=없음