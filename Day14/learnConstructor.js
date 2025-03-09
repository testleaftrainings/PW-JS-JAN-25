var Employee = /** @class */ (function () {
    //   constructor(){
    //     this.empName="Ranjith"
    //     this.empId="emp25"
    //   }
    function Employee(ename, id) {
        this.empName = ename;
        this.empId = id;
        this.empDetails();
    }
    Employee.prototype.empDetails = function () {
        console.log("The emp details are ".concat(this.empName, " & ").concat(this.empId));
    };
    return Employee;
}());
// const emp=new Employee("vinoth","emp89")
// emp.empDetails()
new Employee("Sowmya", "emp45");
new Employee("Sateesh", "emp43");
new Employee("Aarthi", "emp34");
