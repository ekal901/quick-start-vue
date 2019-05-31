'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person(name, tel, address) {
    _classCallCheck(this, Person);

    this.name = name;
    this.tel = tel;
    this.address = address;
    if (Person.count) {
      Person.count++;
    } else {
      Person.count = 1;
    }
  }

  _createClass(Person, [{
    key: 'toString',
    value: function toString() {
      return 'name = ' + this.name + ', tel = ' + this.tel + ', address = ' + this.address;
    }
  }], [{
    key: 'getPersonCount',
    value: function getPersonCount() {
      return Person.count;
    }
  }]);

  return Person;
}();

var Employee = function (_Person) {
  _inherits(Employee, _Person);

  function Employee(name, tel, address, empno, dept) {
    _classCallCheck(this, Employee);

    var _this = _possibleConstructorReturn(this, (Employee.__proto__ || Object.getPrototypeOf(Employee)).call(this, name, tel, address));

    _this.empno = empno;
    _this.dept = dept;
    return _this;
  }

  _createClass(Employee, [{
    key: 'toString',
    value: function toString() {
      return _get(Employee.prototype.__proto__ || Object.getPrototypeOf(Employee.prototype), 'toString', this).call(this) + ('empno = ' + this.empno + ', dept = ' + this.dept);
    }
  }, {
    key: 'getEmpInfo',
    value: function getEmpInfo() {
      return this.empno + ' : ' + this.name + ' works at ' + this.dept + ' department';
    }
  }]);

  return Employee;
}(Person);

var p1 = new Person('Dan', '010-1234-5678', 'LA');
var p2 = new Person('Jeniffer', '010-1234-5679', 'TX');
console.log(p1.toString()); // name = Dan, tel = 010-1234-5678, address = LA
console.log(Person.getPersonCount()); // 2

var e1 = new Employee('Jessie', '010-5678-1234', 'NY', '12345', 'Accounting');
console.log(e1.getEmpInfo()); // 12345 : Jessie works at Accounting department
console.log(e1.toString()); // name = Jessie, tel = 010-5678-1234, address = NYempno = 12345, dept = Accounting
console.log(Person.getPersonCount()); // 3