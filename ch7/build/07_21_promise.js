'use strict';

var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var num = Math.round(Math.random() * 20);
    var isValid = num % 2;
    console.log(num % 2);
    if (isValid) {
      resolve(num);
    } else {
      reject(num);
    }
  }, 2000);
});

p.then(function (num) {
  console.log('odd: ' + num);
}).catch(function (num) {
  console.log('even: ' + num);
});

console.log("odd or even?");
console.log("The result will be out in 2 sec");