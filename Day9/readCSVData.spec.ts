

import { test } from "@playwright/test"
import  {parse} from 'csv-parse/sync'
import fs from 'fs'

 const leadData=parse(fs.readFileSync(`DataFiles/LeadData.csv`, 'utf-8'),{
    columns:true, //refers to set the first row of data as header
    // skip_empty_lines:true, 
    // skip_records_with_empty_values:true  
 })


test('Test to create a lead', async ({ page }) => {
    const [fname,lname,cnmae]=leadData //destrcuturing the array

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.getByLabel('Username').fill("demosalesmanager");
    await page.getByLabel('Password').fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.locator("text=CRM/SFA").click();
    //create lead -- click leads
    await page.locator("//a[text()='Leads']").click();
    //Create a lead button
  //  for(let lead of leadData){
    await page.locator("//a[text()='Create Lead']").click();
    await page.locator("#createLeadForm_companyName").fill(leadData[1].company);
    await page.locator("#createLeadForm_firstName").fill(leadData[1].firstname);
    await page.locator("#createLeadForm_lastName").fill(leadData[1].lastname);
    //Click Create Lead
    await page.locator("[name='submitButton']").click();
  //  }
})

