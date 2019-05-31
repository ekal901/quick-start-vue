let arr = [10, 20, 30, 40];
let [a1, a2, a3] = arr;
console.log(a1, a2, a3); // 10, 20, 30

let p1 = {name: 'Kevin', age: 28, gender: "M"};
let {name:n, age:a, gender} = p1; // n이라는 변수에 name 할당, gender처럼 변수명이 동일할 땐 생략 가능
console.log(n, a, gender); //Kevin, 28, M