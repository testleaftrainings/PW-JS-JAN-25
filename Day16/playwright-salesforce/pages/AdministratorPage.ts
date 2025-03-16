import { Page, BrowserContext } from "@playwright/test";
import { PlaywrightWrapper } from "../utils/playwright";

export class AdministratorPage extends PlaywrightWrapper {

    /**
    * Constructs a new instance of the class with the provided Page and BrowserContext.
    * @param page The Page object associated with the instance.
    * @param context The BrowserContext object associated with the instance.
    */
    constructor(page: Page, context: BrowserContext){
        super(page, context);
    }

    async clickAdminOverview(window: Page) {
        await window.click("(//div[@class='roleMenu-item_text'])[1]");
    }

    async getCertificates(window: Page) {
        try {
            // Get all the certificate elements
            const certificateElements = window.locator("//div[@class='credentials-card_title']/a");
            const count = await certificateElements.count();
    
            for (let index = 0; index < count; index++) {
                // Get the text content of each certificate element
                const text = await certificateElements.nth(index).innerText();
                console.log(text);
    
                // Optionally wait for a short period if needed
                await window.waitForTimeout(3000); // This might be unnecessary; adjust as needed
            }
        } catch (error) {
            console.error('Error fetching certificates:', error);
        }
    }
}