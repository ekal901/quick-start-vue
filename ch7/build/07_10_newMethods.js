'use strict';

var p1 = {
  name: 'ipad Pro 11',
  price: 1000000,
  quantity: 1,
  order: function order() {
    // 기존 방식 메소드 표기
    console.log('old Methods');
  },
  discount: function discount(rate) {
    // 새로운 방식 메소드 표기
    console.log('new Methods');
  }
};