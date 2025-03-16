// Importing the 'test' function from the '@playwright/test' module
import { test as baseTest } from "@playwright/test";
import "./playwright-extensions.d.ts";

// Exporting a customized 'test' function by extending its capabilities
export const test = baseTest.extend({

    // Extension function for the 'page' context, allowing customizations
    page: async ({ page }, use, testInfo) => {
        // Defining a new method 'delayedFill' on the 'page' object
        page.delayedFill = async (selector: string, value: string) => {

            // Adding a delay if the test is retrying due to failure
            if (testInfo.retry) {
                await page.waitForTimeout(3000);
            }
            
            // Filling an input field with a delay
            await page.fill(selector, value);
        };

        // Defining another new method 'clickAndDelay' on the 'page' object
        page.clickAndDelay = async (selector: string) => {
            // Clicking an element on the page
            await page.click(selector);

            // Adding a delay after the click if the test is retrying
            if (testInfo.retry) {
                await page.waitForTimeout(3000);
            }
        };

        // Invoking the 'use' function to provide the modified 'page' object
        await use(page);
    }
});

