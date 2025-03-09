import test from '@playwright/test'
test(`Shadow Dom`,async({page})=>{

 await page.goto("https://www.salesforce.com/")
 await page.getByText("Learning",{exact:true}).nth(0).click()
// await page.hover("//div[text()='Agentforce']")
})