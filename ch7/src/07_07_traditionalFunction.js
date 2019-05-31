// 1. 전통적인 함수 방식 (기존 방식)
function Person(name, yearCount) {
  // 여기서의 this는 p1 객체를 가리킴
  this.name = name;
  this.age = 0;
  var incrAge = function() {
    this.age++;
  }
  for(var i = 0; i <= yearCount; i++){
    // incrAge();
    incrAge.apply(this); // 함수안의 
  }
}

var p1 = new Person("Julia", 27);
console.log(p1.name + ' is ' + p1.age + " years old"); // "Julia is 0 years old" // apply후 : "Julia is 27 years old"

// 전통적인 함수의 경우엔, this는 호출하는 문맥에 의해 좌우된다. 
// 문맥을 넘어서 this를 연결하려면 bind, apply, call 등의 함수 수준의 메서드를 이용해야함