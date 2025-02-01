
import { chromium, test } from "@playwright/test";
import { log } from "node:console";

test('Test to launch a browser',async({page})=>{

/*   //Browser instance
    const browser= await chromium.launch();

    //create a browser context
    const context=await browser.newContext();

    //create a new page
    const page= await context.newPa */ge(); 

    //Load the url

    await page.goto("https://login.salesforce.com/?locale=in");

    //Get the url of the page
    const url = page.url();

    const title = await page.title();

    console.log(url);
    console.log(title);
    
})