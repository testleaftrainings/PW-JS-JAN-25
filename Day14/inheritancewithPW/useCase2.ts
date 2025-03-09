import { Page } from "@playwright/test";
import { LeafTapsLogin } from "./pwUseCase";

export class verifyPage extends LeafTapsLogin{
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

}