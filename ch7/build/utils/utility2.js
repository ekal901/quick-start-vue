"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 3. export하는 값이 단일 값, 단일 객체, 단일 함수, 단일 클래스인 경우
var calc = {
  add: function add(x, y) {
    return x + y;
  },
  multiply: function multiply(x, y) {
    return x * y;
  }
};

exports.default = calc;