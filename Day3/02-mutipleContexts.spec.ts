
import { chromium, test } from "@playwright/test";
import { log } from "node:console";

test('Test to launch a browser',async()=>{

    //Browser instance
    const browser= await chromium.launch();

    //create a browser context1
    const context1=await browser.newContext();

    //create a browser context2
    const context2=await browser.newContext();

    //create a new page
    const page1= await context1.newPage();

    //Load the url

    await page1.goto("https://login.salesforce.com/?locale=in");

    //Get the url of the page
    const url1 = page1.url();

    const title1 = await page1.title();

    console.log(url1);
    console.log(title1);
    

    /////////////////////////////

    //create a new page
    const page2= await context2.newPage();

    //Load the url

    await page2.goto("https://www.amazon.in/");

    //Get the url of the page
    const url2 = page2.url();

    const title2 = await page2.title();

    console.log(url2);
    console.log(title2);
})