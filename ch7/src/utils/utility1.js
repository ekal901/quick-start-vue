// export 할 유틸리티 함수 작성
// 1. 변수나 함수를 export하기 위해 앞에 export 붙이는 방법
export let var1 = 1000;
export function add(a, b) {
  return a + b;
}

// 2. 함수나 변수, 클래스를 작성한 다음 한번에 export
let var2 = 1000;
function add2(a, b) {
  return a + b;
}
export {var2, add2};