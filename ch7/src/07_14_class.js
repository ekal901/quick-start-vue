class Person {
  constructor(name, tel, address) {
    this.name = name;
    this.tel = tel;
    this.address = address;
    if(Person.count) {
      Person.count++;
    } else {
      Person.count = 1;
    }
  }
  static getPersonCount() {
    return Person.count;
  }
  toString() {
    return `name = ${this.name}, tel = ${this.tel}, address = ${this.address}`;
  }
}

class Employee extends Person {
  constructor(name, tel, address, empno, dept){
    super(name, tel, address);
    this.empno = empno;
    this.dept = dept;
  }
  toString() {
    return super.toString() + `empno = ${this.empno}, dept = ${this.dept}`;
  }
  getEmpInfo() {
    return `${this.empno} : ${this.name} works at ${this.dept} department`;
  }
}
var p1 = new Person('Dan', '010-1234-5678', 'LA');
var p2 = new Person('Jeniffer', '010-1234-5679', 'TX');
console.log(p1.toString()); // name = Dan, tel = 010-1234-5678, address = LA
console.log(Person.getPersonCount()); // 2

let e1 = new Employee('Jessie', '010-5678-1234', 'NY', '12345', 'Accounting');
console.log(e1.getEmpInfo()); // 12345 : Jessie works at Accounting department
console.log(e1.toString()); // name = Jessie, tel = 010-5678-1234, address = NYempno = 12345, dept = Accounting
console.log(Person.getPersonCount()); // 3
