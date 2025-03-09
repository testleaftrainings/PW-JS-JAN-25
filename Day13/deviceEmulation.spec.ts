import test, { devices } from "@playwright/test";

test(`deviceEmulation`,async({browser})=>{
   const context= await browser.newContext({
        ...devices['Galaxy Note 3']
    })

const page=await context.newPage()
await page.goto("http://www.leaftaps.com/opentaps/control/main")

})



test.use({...devices['Galaxy Tab S4']})
test(`deviceEmulation using page fixture`,async({page})=>{
  
 await page.goto("http://www.leaftaps.com/opentaps/control/main")
 
 })