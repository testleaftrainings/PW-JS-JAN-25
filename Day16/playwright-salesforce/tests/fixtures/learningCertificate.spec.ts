import { test } from "../../customFixtures/salesforceFixture";
import { logADefectInJira } from "../../jira/log-a-defect";
import { updateJiraIssue } from "../../jira/jira-integration";

// Declare variables to hold the Jira issue key
let jiraIssueKey: string | undefined;

test.describe('Salesforce Verification Tests', () => {
    
    // Hook to run before all tests in the describe block
    test.beforeAll(async () => {
        // Get the testInfo object
        const testInfo = test.info();
        
        // Add annotations for author and test case description
        testInfo.annotations.push(
            { type: 'author', description: 'Ranjini' },
            { type: 'test-case', description: 'Salesforce Verification Tests' }
        );
    });

    // Test case to verify Salesforce functionality
    test(`Verify Salesforce Certification`, async ({ home, learning, administrator }, testInfo) => {
        // Add annotation for test start
        testInfo.annotations.push({
            type: 'test-start',
            description: 'Starting Salesforce Verification test'
        });

        // Perform login
        console.log("Logging in...");
        
        // Assume login.autoLogin is already performed in the fixture, so you are already logged in
        
        // Navigate to mobilePublisher and get the new window
        console.log(`Navigating to mobilePublisher...`);
        const newWindow = await home.mobilePublisher();

        // Click Confirm button on the new window
        console.log(`Clicking Confirm button...`);
        await learning.clickConfirm(newWindow);

        // Interact with the shadow DOM element 'Learning' on the new window
        console.log(`Interacting with 'Learning'...`);
        await learning.createAndPublish(newWindow);

        // Navigate through various sections in the new window
        await learning.clickTrailhead(newWindow);
        await learning.clickCertification(newWindow);
        await administrator.clickAdminOverview(newWindow);
        await administrator.getCertificates(newWindow);
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
    * Updates the Jira issue with test artifacts
    */
    test.afterAll(async () => {
        // Update the Jira issue with test artifacts if an issue key exists
        if (jiraIssueKey) {
            await updateJiraIssue(jiraIssueKey, './test-results'); // Replace with the actual folder path
        }
    });
});
