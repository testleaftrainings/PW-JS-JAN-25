import test from "@playwright/test";


test(`File download`,async({page})=>{
    await page.goto(`https://leafground.com/file.xhtml`)
    const fileDownload=page.waitForEvent('download')
    await page.getByText("Download",{exact:true}).click()
    const downloader=await fileDownload
    await downloader.saveAs("DataFile/"+downloader.suggestedFilename())
    
})



test.only(`File download for heero`,async({page})=>{

    await page.goto(`https://the-internet.herokuapp.com/download`)

    const fileDownload=page.waitForEvent('download')
    await page.getByText("sampleResume.pdf",{exact:true}).click()
    const downloader=await fileDownload
    await downloader.saveAs("DataFile/"+downloader.suggestedFilename())

})