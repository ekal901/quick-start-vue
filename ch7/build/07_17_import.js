'use strict';

var _utility = require('./utils/utility1');

var _utility2 = require('./utils/utility2');

var _utility3 = _interopRequireDefault(_utility2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 단일 export한 파일 불러오기
// export하는 값이 여러 개인 경우 (구조 분해해서 사용함)
console.log((0, _utility.add)(1, 2));
console.log(_utility.var1);

console.log((0, _utility.add2)(3, 4));
console.log(_utility.var2);

console.log(_utility3.default.add(5, 6));
console.log(_utility3.default.multiply(5, 6));