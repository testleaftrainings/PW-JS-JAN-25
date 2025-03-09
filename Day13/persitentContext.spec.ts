import test, { chromium, firefox } from "@playwright/test";
import path from "path";

test.only(`Learnto launch using persistent Context`,async()=>{

const userdata=path.resolve(__dirname,"./chromeuserdata") 
const context=await chromium.launchPersistentContext(userdata,{headless:false,
    //args:['--guest'], 
       executablePath:"C:/Program Files/Google/Chrome/Application/chrome.exe"
 })
const page=await context.newPage()
const allpages=context.pages()
await allpages[0].goto("http://www.google.com")
await allpages[0].waitForTimeout(3000)
await allpages[0].bringToFront()

})



test(`Learnto launch using guest  mode`,async()=>{

//const userdata=path.resolve(__dirname,"./chromeuserdata") 
const context=await chromium.launchPersistentContext('./user-data',{headless:false,
    args:['--guest'],
})
const page=await context.newPage()
 await page.goto("http://www.google.com")

})