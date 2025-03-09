import test from '@playwright/test'


test(`geolocation`,async({browser})=>{

     const context=await browser.newContext({
        geolocation:{
            latitude:52.9930909,
            longitude:-133.9289747
        } ,
        permissions:['geolocation']
     })

     const page= await context.newPage()
        await page.goto("http://www.google.com/maps")
        await page.click("#sVuEFc")
        await page.waitForLoadState('domcontentloaded')
        await page.waitForTimeout(2000)

})

test.use({geolocation:{
    latitude:13.20,
    longitude:80.66
},permissions:['geolocation']
})
test.only(`geolocation using fixture`,async({page})=>{

    // const context=await browser.newContext({
    //    geolocation:{
    //        latitude:52.9930909,
    //        longitude:-133.9289747
    //    } ,
    //    permissions:['geolocation']
    // })

   // const page= await context.newPage()
       await page.goto("http://www.google.com/maps")
       await page.click("#sVuEFc")
       await page.waitForLoadState('domcontentloaded')
       await page.waitForTimeout(2000)

})