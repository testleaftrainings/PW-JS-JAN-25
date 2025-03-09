import { Employee } from "./learnAccessModifier"

class HR extends Employee{
// constructor(){
//     super()
// }

getPhno(){
    //calling protected variable
    console.log(this.phoneNo)
}
}
const hr=new HR()
hr.getPhno()