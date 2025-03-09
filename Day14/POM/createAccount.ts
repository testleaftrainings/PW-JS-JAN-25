import { AccountsPage } from "./accounts";

export class CreateAccountPage extends AccountsPage{
  
 async enterMandatory(){
    await this.page.fill("","")
   
    }
   
   async enterCountryCode(){
   
   
   
   }


}