import { Page } from "@playwright/test";
import { LoginPage } from "./loginPage";

export class WelcomePage extends LoginPage{
   page:Page

    constructor(page:Page){
     super(page)
     this.page=page
    }

  async  verifyUrl(){
     console.log(this.page.url())
    }

  async clickCRM(){
   await this.page.click("text=CRM/SFA")
}

async clickLogout(){
    await this.page.click(".decorativeSubmit")
}

}