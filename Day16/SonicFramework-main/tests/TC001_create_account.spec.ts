import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"
import { readDataFromCSV } from '../helpers/csvUtil';
const csvFilePath = './data/accounts.csv';

test('Creating an Account Using CSV Data', async ({ SalesforceLogin, SalesforceHome, SalesforceAccount }) => {
    const data = await readDataFromCSV(csvFilePath);
    test.info().annotations.push(
        { type: 'Author', description: 'Ajay Michael' },
        { type: 'TestCase', description: 'Creating an Account Using CSV Data' },
        { type: 'Test Description', description: "Creating Valid account for budget calculation" }
    );
    for (const row of data) {
        const { Rating, Type, Industry, Ownership, BillingStreet, BillingCity, PostalCode, BillingState, BillingCountry } = row;
        const acctName = FakerData.getRandomTitle();
        await SalesforceLogin.salesforceLogin("ADMINLOGIN");
        await SalesforceLogin.verifyHomeLabel();
        await SalesforceHome.appLauncher();
        await SalesforceHome.viewAll();
        await SalesforceHome.searchApp("Accounts");
        await SalesforceHome.app("Accounts");
        await SalesforceAccount.newButton();
        await SalesforceAccount.accountName(acctName);
        await SalesforceAccount.accountNumber(FakerData.getMobileNumber());
        await SalesforceAccount.ratingDropdown(Rating);
        await SalesforceAccount.accountType(Type);
        await SalesforceAccount.industry(Industry);
        await SalesforceAccount.ownerShip(Ownership);
        await SalesforceAccount.billingStreet(BillingStreet);
        await SalesforceAccount.billingCity(BillingCity);
        await SalesforceAccount.postalCode(PostalCode);
        await SalesforceAccount.billingState(BillingState);
        await SalesforceAccount.billingCountry(BillingCountry);
        await SalesforceAccount.saveButton()
        await SalesforceAccount.verifiAccountName(acctName)
        await SalesforceAccount.closeTAB()
    }
});