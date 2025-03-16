import { test } from "../../customFixtures/salesforceFixture";
import { logADefectInJira } from "../../jira/log-a-defect";
import { updateJiraIssue } from "../../jira/jira-integration";
import { readCsvFile } from "../../data-utility/csvUtils";
import { loadEnvFile, getEnvVariable } from "../../data-utility/envUtils";
import { readExcelFile } from "../../data-utility/excelUtils";
import { readJsonFile } from "../../data-utility/jsonUtils";

// Declare variables to hold data from different sources
let csvData: any[];
let envData: { [key: string]: string | undefined };
let excelData: any[];
let jsonData: any[];
let jiraIssueKey: string | undefined; // Declare jiraIssueKey at the top level

test.describe('Data driven tests for Salesforce account creation', () => {

    // Hook to run before all tests
    test.beforeAll(async () => {
        // Get the testInfo object
        const testInfo = test.info();

        // Add annotations
        testInfo.annotations.push(
            { type: 'author', description: 'Ranjini' },
            { type: 'test-case', description: 'Data driven tests for Salesforce account creation' }
        );

        // Read the CSV file
        csvData = await readCsvFile('./data/service.csv');

        // Load environment file and read variables
        loadEnvFile('./data/service.env');
        envData = {
            Menu: getEnvVariable('Menu'),
            SubMenu: getEnvVariable('SubMenu'),
            AccountName: getEnvVariable('AccountName'),
            AccountNumber: getEnvVariable('AccountNumber'),
            Type: getEnvVariable('Type'),
            Industry: getEnvVariable('Industry'),
            Rating: getEnvVariable('Rating')
        };

        // Log the loaded environment data for debugging
        console.log('Loaded environment data:', envData);

        // Read the Excel file
        excelData = readExcelFile('./data/service.xlsx');

        // Read the JSON file
        jsonData = await readJsonFile('./data/service.json');
    });

    // Test case to create Salesforce accounts using data from a CSV file
    test(`Test with csv data`, async ({ home, account }, testInfo) => {
        testInfo.annotations.push({
            type: 'test-start',
            description: 'Starting test with CSV data'
        });

        await home.clickAppLauncher();
        await home.clickViewAll();
        for (const row of csvData) {
            await home.menuSearchBox(row.Menu);
            await home.clickMenu(row.SubMenu);
            await account.clickAccounts();
            await account.clickNew();
            await account.enterAccountName(row.AccountName);
            await account.enterAccountNumber(row.AccountNumber);
            await account.chooseType(row.Type);
            await account.chooseIndustry(row.Industry);
            await account.chooseRating(row.Rating);
            await account.clickSave();
        }
    });

    // Test case to create Salesforce accounts using data from environment variables
    test(`Test with env data`, async ({ home, account }, testInfo) => {
        testInfo.annotations.push({
            type: 'test-start',
            description: 'Starting test with environment data'
        });

        await home.clickAppLauncher();
        await home.clickViewAll();
        console.log('Using environment data:', envData);
        await home.menuSearchBox(envData.Menu || '');
        await home.clickMenu(envData.SubMenu || '');
        await account.clickAccounts();
        await account.clickNew();
        await account.enterAccountName(envData.AccountName || '');
        await account.enterAccountNumber(envData.AccountNumber || '');
        await account.chooseType(envData.Type || '');
        await account.chooseIndustry(envData.Industry || '');
        await account.chooseRating(envData.Rating || '');
        await account.clickSave();
    });

    // Test case to create Salesforce accounts using data from an Excel file
    test(`Test with excel data`, async ({ home, account }, testInfo) => {
        testInfo.annotations.push({
            type: 'test-start',
            description: 'Starting test with Excel data'
        });

        await home.clickAppLauncher();
        await home.clickViewAll();
        for (const row of excelData) {
            await home.menuSearchBox(row.Menu);
            await home.clickMenu(row.SubMenu);
            await account.clickAccounts();
            await account.clickNew();
            await account.enterAccountName(row.AccountName);
            await account.enterAccountNumber(row.AccountNumber);
            await account.chooseType(row.Type);
            await account.chooseIndustry(row.Industry);
            await account.chooseRating(row.Rating);
            await account.clickSave();
        }
    });

    // Test case to create Salesforce accounts using data from a JSON file
    test(`Test with JSON data`, async ({ home, account }, testInfo) => {
        testInfo.annotations.push({
            type: 'test-start',
            description: 'Starting test with JSON data'
        });

        await home.clickAppLauncher();
        await home.clickViewAll();
        for (const row of jsonData) {
            await home.menuSearchBox(row.Menu);
            await home.clickMenu(row.SubMenu);
            await account.clickAccounts();
            await account.clickNew();
            await account.enterAccountName(row.AccountName);
            await account.enterAccountNumber(row.AccountNumber);
            await account.chooseType(row.Type);
            await account.chooseIndustry(row.Industry);
            await account.chooseRating(row.Rating);
            await account.clickSave();
        }
    });

    /**
     * Hook to run after each test
     * Logs a defect in Jira if the test fails
     * @param testInfo Information about the current test, including annotations.
     */
    test.afterEach(async ({}, testInfo) => {
        jiraIssueKey = await logADefectInJira(testInfo);
    });

    /**
     * Hook to run after all tests in the suite
     * Updates the Jira issue with test artifacts
     */
    test.afterAll(async () => {
        if (jiraIssueKey) {
            await updateJiraIssue(jiraIssueKey, './test-results'); // Replace with the actual folder path
        }
    });

});
