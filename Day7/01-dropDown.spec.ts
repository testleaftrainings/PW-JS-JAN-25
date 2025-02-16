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
    await page.locator("input[id='createLeadForm_firstName']").fill("Ravindran");
    
    //Enter last name
    await page.locator("input[id='createLeadForm_lastName']").fill("R");

    //Select the Source dropdown
    //Locate the dropdow by value

    const ByValue = await page.selectOption("#createLeadForm_dataSourceId",{value : "LEAD_DIRECTMAIL"});
    console.log(`Value =${ByValue}`);

    //Get the values from the drop down
    const dropdown = page.locator('#createLeadForm_dataSourceId>option')
    const dropdownCount = await dropdown.count();
console.log(`No of dropdown values : ${dropdownCount}`);

for (let index = 0; index < dropdownCount ; index++) {
    console.log(await dropdown.nth(index).innerText());
    
}

// Select currency dropdown by index

const ByIndex = await page.selectOption("#createLeadForm_currencyUomId",{index : 13});
    console.log(`Currency =${ByIndex}`);

// Select currency dropdown by label

const ByLabel = await page.selectOption("#createLeadForm_generalCountryGeoId",{label : "India"});
    console.log(`Country =${ByLabel}`);



test.only(`Handling dropdown using select tag`, async ({page}) => {
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
    await page.locator("input[id='createLeadForm_firstName']").fill("Ravindran");
    
    //Enter last name
    await page.locator("input[id='createLeadForm_lastName']").fill("R");

    //Select the Source dropdown
    //Locate the dropdow by value

    const ByValue = await page.selectOption("#createLeadForm_dataSourceId",{value : "LEAD_DIRECTMAIL"});
    console.log(`Value =${ByValue}`);

    //Get the values from the drop down
    const dropdown = page.locator('#createLeadForm_dataSourceId>option')
    const dropdownCount = await dropdown.count();
console.log(`No of dropdown values : ${dropdownCount}`);

for (let index = 0; index < dropdownCount ; index++) {
    console.log(await dropdown.nth(index).innerText());
    
}

// Select currency dropdown by index

const ByIndex = await page.selectOption("#createLeadForm_currencyUomId",{index : 13});
    console.log(`Currency =${ByIndex}`);

// Select currency dropdown by label

const ByLabel = await page.selectOption("#createLeadForm_generalCountryGeoId",{label : "India"});
    console.log(`Country =${ByLabel}`);


})
