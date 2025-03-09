import { verifyPage } from "./useCase2";

export class HomePage extends verifyPage{

   async clickLeads(){
        await this.page.locator("//a[text()='Leads']").click()
    }

    async clickAccounts(){
        await this.page.locator("//a[text()='Accounts']").click()
    }
      

}