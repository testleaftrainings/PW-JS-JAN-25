import { test } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { MarketingPage } from "../../pages/MarketingPage";
import { FakerData } from "../../utils/faker";

test.use({storageState: "login/salesforceLogin.json"})
test(`Verify Salesforce Verification`, async({page, context}) => {

    let salutation = FakerData.salutationFemale();
    let lastName = FakerData.getLastName();
    let companyName = FakerData.company();

    const home = new HomePage(page, context);
    await home.clickAppLauncher();
    await home.clickViewAll();
    await home.menuSearchBox("Marketing CRM Classic");
    await home.clickMenu("Marketing CRM Classic");
    const marketing = new MarketingPage(page, context);
    await marketing.clickLeads();
    await marketing.clickNew();
    await marketing.enterSalutation(salutation);
    await marketing.enterLastName(lastName);
    await marketing.enterCompany(companyName);
    await marketing.clickSave();
})