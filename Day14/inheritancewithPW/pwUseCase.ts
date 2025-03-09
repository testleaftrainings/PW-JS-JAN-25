import { chromium, Page } from '@playwright/test'

export class LeafTapsLogin {

    lppage: Page  //emptyuserdefined variable which is of type Page (Pw)

    constructor(page: Page) { //local variable to the constructor
        this.lppage = page
    }
    async launchApp() {
      await this.lppage.goto("http://leaftaps.com/opentaps/control/main")
      await this.lppage.fill("#username", "demoCSR")
      await this.lppage.fill("#password", "crmsfa")
      await this.lppage.click(".decorativeSubmit")
    }
  async   verifyTitle() {
        console.log(await this.lppage.title())
    }

  

}

// async function doLogin(){
//     const browser=await chromium.launch({headless:false})
//     const context=await browser.newContext()
//     const page=await context.newPage()

//     //to acces the lauchapp()/verifytitle()-create object

//      const login=new LeafTapsLogin(page)
//      await login.launchApp()
//      await login.verifyTitle()
//    //  await login.tearDown()
// }

//doLogin()