import { Page, BrowserContext,expect } from "@playwright/test";
import { PlaywrightWrapper } from "../utils/playwright";

export class createAndPublishPage extends PlaywrightWrapper{

    /**
    * Constructs a new instance of the class with the provided Page and BrowserContext.
    * @param page The Page object associated with the instance.
    * @param context The BrowserContext object associated with the instance.
    */
    constructor(page: Page, context: BrowserContext){
        super(page, context);
    }

    /**
    * Clicks the "Confirm" button on the provided window if it exists.
    * @param window The Page object representing the window where the "Confirm" button is located.
    */
    async clickConfirm(window: Page) {
        if (window) {
            console.log(`Attempting to click Confirm on window with URL: ${window.url()}`);
            await window.click("//button[text()='Confirm']");
            await window.waitForLoadState('load');
            console.log(`Clicked Confirm button on new window.`);
        } else {
            console.log('New window is not available');
        }
    }

    /**
    * Performs the action of creating and publishing content on the provided window if it exists.
    * @param window The Page object representing the window where the action will be performed.
    */
    async createAndPublish(window: Page) {
        if (window) {
            const url = window.url();
            console.log(`URL of the current page: ${url}`);
            expect(url).toContain("products/mysalesforce");

            await window.waitForSelector('text=Learning');
            await window.click('text=Learning');
           
            console.log(`Clicked on 'Learning' on the new window.`);
        } else {
            console.log('New window is not available');
        }
    }

    async clickTrailhead(window: Page) {
        await window.hover('text = Learning on Trailhead');
    }

    async clickCertification(window: Page): Promise<Page> {
        await window.click('text = Salesforce Certification');
        return window;
    } 
}