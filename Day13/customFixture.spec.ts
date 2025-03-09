import {test } from  '@playwright/test'

export const fixturetest=test.extend<{lppage:any}>({  //declaring the fixture 
    lppage : async({page},use)=>{   //logic to add to new fixture
                await page.goto("http://www.leaftaps.com/opentaps/control/main")
                await page.fill("#username","demoSalesManager")
                await page.fill("#password","crmsfa")
                await page.click(".decorativeSubmit")
                await use(page)
    }
})


//lppage as fixture -->should have loadurl,enter credentials and click on login