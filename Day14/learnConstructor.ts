class Employee{
     empName:string
     empId:string
    //   constructor(){
    //     this.empName="Ranjith"
    //     this.empId="emp25"
    //   }
 constructor(ename:string,id:string){
    this.empName=ename
    this.empId=id
    this.empDetails()
 }
     empDetails(){
        console.log(`The emp details are ${this.empName} & ${this.empId}`)
     }

}
// const emp=new Employee("vinoth","emp89")
// emp.empDetails()

new Employee("Sowmya","emp45")
new Employee("Sateesh","emp43")
new Employee("Aarthi","emp34")