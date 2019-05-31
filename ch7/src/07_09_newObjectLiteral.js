var name = 'Luke';
var age = 20;
var email = "lukelove@gmail.com";

// 기존 객체 리터럴 표기
var obj = { name: name, age: age, email: email };
var newObj = { name, age, email }; 
// 프로퍼티 명이 할당하려는 변수 값과 동일한경우 생략 가능
console.log(obj);
console.log(newObj);