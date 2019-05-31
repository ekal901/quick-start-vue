import { add, var1 } from './utils/utility1'; // export하는 값이 여러 개인 경우 (구조 분해해서 사용함)
import { add2, var2 as v2 } from './utils/utility1';
import calc from './utils/utility2'; // 단일 export한 파일 불러오기
console.log(add(1,2));
console.log(var1);

console.log(add2(3,4));
console.log(v2);

console.log(calc.add(5,6));
console.log(calc.multiply(5,6));