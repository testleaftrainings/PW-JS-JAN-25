import { WelcomePage } from "./welcomePage"

export class HomePage extends WelcomePage{

   async clickLeads(){
        await this.page.locator("//a[text()='Leads']").click()
    }

    async clickAccounts(){
        await this.page.locator("//a[text()='Accounts']").click()
    }

         

}