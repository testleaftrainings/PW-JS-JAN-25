import { test } from "../../customFixtures/salesforceFixture";
import { FakerData } from "../../utils/faker";
import { logADefectInJira } from "../../jira/log-a-defect";
import { createJiraIssue,updateJiraIssue } from "../../jira/jira-integration";

/**
 * Sets up the test with predefined storage state from "login/salesforceLogin.json".
 */
test.use({ storageState: "login/salesforceLogin.json" });

test.describe('Salesforce Lead Creation Tests', () => {
    // Declare variables to hold the Jira issue key
    let jiraIssueKey: string | undefined;

    // Hook to run before all tests in the describe block
    test.beforeAll(async () => {
        // Get the testInfo object
        const testInfo = test.info();

        // Add annotations for author and test case description
        testInfo.annotations.push(
            { type: 'author', description: 'Ranjini' },
            { type: 'test-case', description: 'Salesforce Lead Creation Tests' }
        );
    });

    /**
     * Test case to verify Salesforce functionality, leveraging the `home` and `marketing` fixtures.
     * @param home The HomePage instance used for navigating and interacting with the Salesforce home page.
     * @param marketing The MarketingPage instance used for performing marketing-related actions.
     */
    test(`Verify a new lead created`, async ({ home, marketing }, testInfo) => {
        // Add annotation for test start
        testInfo.annotations.push({
            type: 'test-start',
            description: 'Starting Salesforce Lead Creation test'
        });

        // Generate fake data for the lead creation
        let salutation = FakerData.salutationFemale();
        let lastname = FakerData.getLastName();
        let company = FakerData.company();

        // Navigate through the Salesforce UI to perform lead creation
        await home.clickAppLauncher();
        await home.clickViewAll();
        await home.menuSearchBox("Marketing CRM Classic");
        await home.clickMenu("Marketing CRM Classic");
        await marketing.clickLeads();
        await marketing.clickNew();
        await marketing.enterSalutation(salutation);
        await marketing.enterLastName(lastname);
        await marketing.enterCompany(company);
        await marketing.clickSave();
    });

    /**
     * Hook to run after each test
     * Logs a defect in Jira if the test fails
     * @param testInfo Information about the current test, including annotations.
     */
    test.afterEach(async ({}, testInfo) => {
        // Log a defect in Jira if the test fails and store the issue key
        jiraIssueKey = await logADefectInJira(testInfo);
    });

    /**
     * Hook to run after all tests in the suite
     * Creates a Jira issue with specified details.
     * @param summary The summary or title of the Jira issue.
     * @param description The description or details of the issue being logged.
     */
    test.afterAll(async () => {
        if (jiraIssueKey) {
            await updateJiraIssue(jiraIssueKey, './test-results'); // Replace with the actual folder path
        } else {
            await createJiraIssue("Salesforce Testcase", "Logging a defect in Marketing test module");
        }
    });
});
