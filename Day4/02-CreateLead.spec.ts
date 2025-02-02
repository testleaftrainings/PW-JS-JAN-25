

import {test} from "@playwright/test"

test('Test to create a lead', async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main");

    //await page.locator("#username").fill("demosalesmanager");
    await page.getByLabel('Username').fill("demosalesmanager");

    //await page.locator("#password").fill("crmsfa");
    await page.getByLabel('Password').fill("crmsfa");

    await page.locator(".decorativeSubmit").click();

    await page.locator("text=CRM/SFA").click();
   // await page.locator("//a[contains(text(),'CRM')]").click();


   //create lead -- click leads
await page.locator("//a[text()='Leads']").click();

//Create a lead button

await page.locator("//a[text()='Create Lead']").click();

await page.locator("#createLeadForm_companyName").fill("TestLeaf");

await page.locator("#createLeadForm_firstName").fill("Ravi");

await page.locator("#createLeadForm_lastName").fill("R");

//Click Create Lead

await page.locator("[name='submitButton']").click();




})