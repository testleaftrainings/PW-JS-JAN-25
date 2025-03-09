import test, { expect } from "@playwright/test";

test(`visual regression testing`,async({page})=>{
 await page.goto("http://www.leaftaps.com/opentaps/control/main") 
 const ss=await page.screenshot()
 expect(ss).toMatchSnapshot()
})

test.only(`visual regression testing using comparision`,async({page})=>{
    await page.goto("http://www.google.com")
    await page.waitForLoadState('domcontentloaded')
    await expect(page).toHaveScreenshot({maxDiffPixelRatio:0.4})
   })