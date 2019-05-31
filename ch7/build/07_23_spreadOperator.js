'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var obj1 = { name: 'Jasmine', age: 18 };
var obj2 = _extends({}, obj1);
var obj3 = _extends({}, obj1, { email: "jasmine@test.com" });

console.log(obj2);
console.log(obj3);
console.log(obj1 == obj2); //false ( obj2에 새로운 객체를 만들고 obj1 값을 할당 했을 뿐)

var arr1 = [100, 200, 300];
var arr2 = ['Hello'].concat(arr1, ['World']);
console.log(arr2);