let obj1 = { name: 'Jasmine', age: 18};
let obj2 = { ...obj1 };
let obj3 = { ...obj1, email: "jasmine@test.com" };

console.log(obj2);
console.log(obj3);
console.log(obj1 == obj2); //false ( obj2에 새로운 객체를 만들고 obj1 값을 할당 했을 뿐)

let arr1 = [100, 200, 300];
let arr2 = ['Hello', ...arr1, 'World'];
console.log(arr2);