

import test from '@playwright/test'

test('[Learning Xpath', async({page})=>{

//Load the URL in the browser

await page.goto("http://leaftaps.com/opentaps/control/main");

    //locate the element and fill the username 
await page.locator("//input[@id='username']").fill("democsr");

//locate the element and fill the password 
await page.locator("//input[@id='password']").fill("crmsfa");

//locate the button element and click 
await page.locator("//input[@class='decorativeSubmit']").click();



})