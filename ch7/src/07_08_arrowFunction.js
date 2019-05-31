// 2. 화살표 함수 방식
function Person(name, yearCount) {
  this.name = name;
  this.age = 0;
  var incrAge = () => this.age++; // incrAge.apply(this)와 동일
  for(var i = 0; i <= yearCount; i++){
    incrAge();
  }
}

var p1 = new Person("Julia", 27);
console.log(p1.name + ' is ' + p1.age + " years old"); // "Julia is 27 years old"