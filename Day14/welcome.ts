import { LoginPage } from "./inheritancewithPW/Login"

export class WelcomePage extends LoginPage{
    
   constructor(){
     super()  //to call the parent class constructor
   }


   clickCRM(){
        console.log("Clecked CRMSFA")
   }

   clickLogout(){
    console.log("Clicked Logout")
   }


}