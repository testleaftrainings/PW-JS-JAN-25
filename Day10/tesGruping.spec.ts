import test from '@playwright/test'
test.describe.only(`Grouping the leaftaps testcases`, () => {
test.describe.configure({mode:'serial',retries:2})
    test(`Login with Lead credentials`, async ({ page }) => {
        await page.goto("http://leaftaps.com/opentaps/control/login")
        await page.fill("#usernae", "demoSalesManager")
        await page.fill("#password", "crmsfa")
        await page.click(".decorativeSubmit")
    })


    test(`Login with Account credentials`, async ({ page }) => {
        await page.goto("http://leaftaps.com/opentaps/control/login")
        await page.fill("#username", "demoSalesManager")
        await page.fill("#password", "crmsfa")
        await page.click(".decorativeSubmit")

    })
    test(`Login with Contact credentials`, async ({ page }) => {

        await page.goto("http://leaftaps.com/opentaps/control/login")
        await page.fill("#username", "demoSalesManager")
        await page.fill("#password", "crmsfa")
        await page.click(".decorativeSubmit")

    })
})




test.describe.parallel(`Group-2`, async () => {
    test(`Exectuin smoke test`, async ({ page }) => {
        console.log("Execution login functionality")
    })

    test(`Exectuin smoke test 2`, async ({ page }) => {
        console.log("Execution Critical function")
    })

})