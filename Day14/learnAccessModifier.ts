export class Employee{

    public empName:string
    private empSalary:number
    protected phoneNo:number

    constructor()
{
    this.empName="kiran"
    this.empSalary=4000000
    this.phoneNo=8978674643
}

 empInfo(){
     console.log(`${this.empName} ,${this.empSalary}, ${this.phoneNo}`)
 }
}

const emp=new Employee()
emp.empInfo()
console.log(emp.empName)