import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

let firstName = FakerData.getFirstName()
test.use({ storageState: "logins/salesforce.json" })
test(` creating Lead`, async ({ SalesforceHome, SalesforceLead }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'Ajay Michael' },
        { type: 'TestCase', description: 'Creating Lead' },
    );

    await SalesforceHome.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.verifyHomeLabel();
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Leads");
    await SalesforceHome.app("Leads");
    await SalesforceLead.newButton();
    await SalesforceLead.salutation("Mr.");
    await SalesforceLead.firstName(firstName);
    await SalesforceLead.lastName(FakerData.getLastName());
    await SalesforceLead.Company(FakerData.randomCityName());
    await SalesforceLead.saveButton();
    await SalesforceLead.verifiTheLeadAccount(firstName)

})