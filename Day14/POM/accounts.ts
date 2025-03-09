import { HomePage } from "./homePage";


export class AccountsPage extends HomePage{

  async clickCreateAccount(){
    await this.page.click("//a[text()='Create Account']")
  }

  
  async clickFindAccounts(){
    await this.page.click("//a[text()='Find Accounts']")
  }

  async clickmergeAccounts(){
    await this.page.click("//a[text()='Merge Accounts']")
  }



}