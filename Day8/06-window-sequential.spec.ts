
import {expect,test } from "@playwright/test";


test(`Handling windows using sequential approach`, async ({page,context}) => {

await page.goto(`https://leafground.com/window.xhtml`);
const windowPromise = context.waitForEvent('page'); // Promise is pending

await page.getByText("Open", {exact:true}).click();

const newWindow = await windowPromise; // Promise fullfilled

await expect (newWindow).toHaveURL("https://leafground.com/dashboard.xhtml")

//Interact with the newPage

await newWindow.fill('#email',"ravi@testleaf.com")
await newWindow.waitForTimeout(5000)
await page.bringToFront();

})