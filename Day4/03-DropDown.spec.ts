import { test } from "@playwright/test";

test(`Handling dropdown using select tag`, async ({page}) => {
    test.setTimeout(20000);
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Enter username
    await page.getByLabel("Username").fill("demosalesmanager");

    //Enter password
    await page.locator("#password").fill("crmsfa", {timeout:20000});

    //Click Login
    await page.locator(".decorativeSubmit").click({timeout: 20000});

    //Click CRM/SFA (legacy text)
    await page.locator("text=CRM/SFA").click();

    //Click Leads
    await page.locator("//a[text()='Leads']").click();

    //Click Create Lead
    await page.locator("//a[text()='Create Lead']").click();

    //Enter company name
    const companyName = page.locator("#createLeadForm_companyName");
    await companyName.fill("Testleaf");
    
    //Enter first name
    await page.locator("input[id='createLeadForm_firstName']").fill("Ranjini");
    
    //Enter last name
    await page.locator("input[id='createLeadForm_lastName']").fill("R");
    
    //Select the Source dropdown
    //Locate the dropdown by value
    await page.selectOption("#createLeadForm_dataSourceId", {value: "LEAD_DIRECTMAIL"});
    await page.waitForTimeout(2000);

    //Get the values in the dropdown
    const dropdown = page.locator("#createLeadForm_dataSourceId>option");
    const dropdownCount = await dropdown.count();
    console.log(`No. of values present ${dropdownCount}`);

    for (let index = 0; index < dropdownCount; index++) {
        console.log(await dropdown.nth(index).innerText());   
    }
    
    //Select Currency dropdown by index
    await page.selectOption("#createLeadForm_currencyUomId", {index:13});
    await page.waitForTimeout(2000);

    //Select Country dropdown by label
    await page.selectOption("#createLeadForm_generalCountryGeoId", {label:"India"});
    await page.waitForTimeout(2000);

    //Click Create Lead
    await page.locator("[name='submitButton']").click();

    //Get the status
    console.log(`The status is ${await page.locator("#viewLead_statusId_sp").innerText()}`);
    await page.waitForTimeout(2000);
})

test.only(`Handling dropdown`, async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Enter username
    await page.getByLabel("Username").fill("demosalesmanager");

    //Enter password
    // await page.locator("#password").fill("crmsfa");
    await page.fill("#password", "crmsfa");

    //Click Login
    // await page.locator(".decorativeSubmit").click();
    await page.click(".decorativeSubmit");

    //Click CRM/SFA (legacy text)
    await page.locator("text=CRM/SFA").click();

    //Click Leads
    await page.locator("//a[text()='Leads']").click();

    //Click Create Lead
    await page.locator("//a[text()='Create Lead']").click();

    //Enter company name
    const companyName = page.locator("#createLeadForm_companyName");
    await companyName.fill("Testleaf");
    
    //Enter first name
    await page.locator("input[id='createLeadForm_firstName']").fill("Ranjini");
    
    //Enter last name
    await page.locator("input[id='createLeadForm_lastName']").fill("R");
    
    //Select the Source dropdown
    //Locate the dropdown by value
    await page.selectOption("#createLeadForm_dataSourceId", {value: "LEAD_DIRECTMAIL"});
    await page.waitForTimeout(2000);

    //Get the values in the dropdown
    const dropdown = page.locator("#createLeadForm_dataSourceId>option");
    const dropdownCount = await dropdown.count();
    console.log(`No. of values present ${dropdownCount}`);

    for (let index = 0; index < dropdownCount; index++) {
        console.log(await dropdown.nth(index).innerText());   
    }
    
    //Select Currency dropdown by index
    await page.selectOption("#createLeadForm_currencyUomId", {index:13});
    await page.waitForTimeout(2000);

    //Select Country dropdown by label
    await page.selectOption("#createLeadForm_generalCountryGeoId", {label:"India"});
    await page.waitForTimeout(2000);
    
    //Click Create Lead
    await page.locator("[name='submitButton']").click();

    //Get the status
    console.log(`The status is ${await page.locator("#viewLead_statusId_sp").innerText()}`);
    await page.waitForTimeout(2000);
})