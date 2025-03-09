"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee() {
        this.empName = "kiran";
        this.empSalary = 4000000;
        this.phoneNo = 8978674643;
    }
    Employee.prototype.empInfo = function () {
        console.log("".concat(this.empName, " ,").concat(this.empSalary, ", ").concat(this.phoneNo));
    };
    return Employee;
}());
exports.Employee = Employee;
var emp = new Employee();
emp.empInfo();
console.log(emp.empName);
