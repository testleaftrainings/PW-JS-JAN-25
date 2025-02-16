
import {expect,test } from "@playwright/test";


test(`Handling windows using concurrent approach`, async ({page,context}) => {

    await page.goto(`https://leafground.com/window.xhtml`);
    
    const [newWindow] = await Promise.all([context.waitForEvent('page'), page.getByText("Open", {exact:true}).click()])

   await expect (newWindow).toHaveURL("https://leafground.com/dashboard.xhtml");

   await newWindow.fill('#email',"ravi@testleaf.com")
await newWindow.waitForTimeout(5000)
await page.bringToFront();

})