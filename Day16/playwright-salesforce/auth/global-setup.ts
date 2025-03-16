import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import testData from "../data/loginData.json"

/**
 * This function sets up the global context for Playwright tests.
 * It performs a login operation and saves the authentication state.
 */
async function globalSetup() {
  // Launch a new Chromium browser instance
  const browser = await chromium.launch();

  // Create a new browser context
  const context = await browser.newContext();

  // Open a new page in the browser context
  const page = await context.newPage();

  // Navigate to the Salesforce login page
  await page.goto("https://login.salesforce.com");

  // Fill in the username field with data from the loginData.json file
  await page.fill("#username", testData.username);

  // Fill in the password field with data from the loginData.json file
  await page.fill("#password", testData.password);

  // Click the login button to submit the login form
  await page.click("#Login");
  
  // Save the storage state (cookies, local storage, etc.) into a file
  const storageState = await context.storageState({ path: "auth/salesforceLogin.json" });
  writeFileSync("auth/salesforceLogin.json", JSON.stringify(storageState));

  // Close the browser
  await browser.close();
}

// Export the global setup function as the default export
export default globalSetup;
