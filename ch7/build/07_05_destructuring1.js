"use strict";

var arr = [10, 20, 30, 40];
var a1 = arr[0],
    a2 = arr[1],
    a3 = arr[2];

console.log(a1, a2, a3); // 10, 20, 30

var p1 = { name: 'Kevin', age: 28, gender: "M" };
var n = p1.name,
    a = p1.age,
    gender = p1.gender; // n이라는 변수에 name 할당, gender처럼 변수명이 동일할 땐 생략 가능

console.log(n, a, gender); //Kevin, 28, M