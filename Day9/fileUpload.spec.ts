import { test } from '@playwright/test';

test(`File upload using setInputFile`, async ({ page }) => {

    await page.goto(`https://leafground.com/file.xhtml`)

    const basicUpload= page.locator(`//span[text()='Choose']/following-sibling::input`).nth(0)
    //upload the file into the application
    await basicUpload.setInputFiles("DataFiles/sampleResume.pdf")
    await page.waitForTimeout(3000)

})


test(`File upload using event listner`, async ({ page }) => {
   await page.goto(`https://the-internet.herokuapp.com/upload`)
   const filePromise=page.waitForEvent('filechooser')  //waiting for evnt -promise will be pending
   await page.locator(`#drag-drop-upload`).click()
   const fileChooser=await filePromise //once the event is triggred ->promise will be resolved
   //to set the file in t filechooser and open to upload
   console.log(fileChooser.isMultiple())    //to check for the particular upload event accepts multiple files
   await fileChooser.setFiles(["DataFiles/sampleResume.pdf"])

   await page.waitForTimeout(2000)  
})


test.only(`File upload multiple files`, async ({ page }) => {

    await page.goto(`https://leafground.com/file.xhtml`)

    const basicUpload= page.locator(`//span[text()='Choose']/following-sibling::input`).nth(1)
    //upload the file into the application
    
    await basicUpload.setInputFiles(["DataFiles/Testleaf Logo.png","DataFiles/Testleaf Logo.png"])

    await page.waitForTimeout(3000)

})