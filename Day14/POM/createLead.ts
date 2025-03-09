import { LeadsPage } from "./leadsPage";

export class CreateLeadPage extends LeadsPage{

 async enterMandatory(){
 await this.page.fill("","")

 }

async enterCountryCode(){

}

}