import { chromium, Page } from '@playwright/test'

export class LoginPage {

    lppage: Page  

    constructor(page: Page) { 
    }
    async launchApp() {
      await this.lppage.goto("http://leaftaps.com/opentaps/control/main")
    }

    async enterCredentials(){
      await this.lppage.fill("#username", "demoCSR")
      await this.lppage.fill("#password", "crmsfa")
    }

    async clickLogin(){
      await this.lppage.click(".decorativeSubmit")
    }


  async   verifyTitle() {
        console.log(await this.lppage.title())
    }

  

}
