import test from "@playwright/test";
import loginData from "../../DataFiles/loginCredentials.json" 
import fs from 'fs'

//let leadId:string

test(`Read data from Json File ${loginData[0].TestCaseid}`, async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill(loginData[0].username);
    await page.locator("#password").fill(loginData[0].password);
    await page.click(".decorativeSubmit");
  //  leadId=await page.locator("").innerText()

})

const credentials=JSON.parse(fs.readFileSync('DataFiles/loginCredentials.json','utf-8'))
    for(let loginInfo of credentials){
    test(`Read data from by parsing File ${loginInfo.TestCaseid}`, async ({ page }) => {
        await page.goto("http://leaftaps.com/opentaps/control/main");
        await page.locator("#username").fill(loginInfo.username);
        await page.locator("#password").fill(loginInfo.password);
        await page.click(".decorativeSubmit");
    
    })
    }