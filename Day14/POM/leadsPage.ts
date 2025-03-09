import { HomePage } from "./homePage";


export class LeadsPage extends HomePage{

  async clickCreateLead(){
    await this.page.click("//a[text()='Create Lead']")
  }

  
  async clickFindLeads(){
    await this.page.click("//a[text()='Find Leads']")
  }

  async clickmergeLead(){
    await this.page.click("//a[text()='Merge Leads']")
  }



}