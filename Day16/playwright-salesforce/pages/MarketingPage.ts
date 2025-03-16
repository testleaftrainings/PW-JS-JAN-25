import { Page, BrowserContext,expect } from "@playwright/test";
import { PlaywrightWrapper } from "../utils/playwright";

export class MarketingPage extends PlaywrightWrapper {

        /**
        * Constructs a new instance of the class with the provided Page and BrowserContext.
        * @param page The Page object associated with the instance.
        * @param context The BrowserContext object associated with the instance.
        */
        constructor(page: Page, context: BrowserContext){
            super(page, context);
        }

        /**
        * Clicks on the "Leads" link on the current page.
        */
        async clickLeads() {
            await this.click("//span[text()='Leads']", "Leads", "Link");
        }

        /**
        * Clicks on the "New" button on the Leads page to create a new lead.
        */
        async clickNew() {
            await this.click("//div[text()='New']", "New", "Button");
        }

        /**
        * Selects a salutation from the dropdown menu.
        * @param salutation The salutation text to be selected.
        */
        async enterSalutation(salutation: string) {
            await this.click("//button[@name='salutation']", "Salutation", "Dropdown");
            await this.click(`//label[text()='Salutation']/following::span[text()='${salutation}']`, "Salutation", salutation);
        }

        /**
        * Enters the last name of the lead into the corresponding input field.
        * @param lastname The last name of the lead.
        */
        async enterLastName(lastname: string) {
            await this.type("//label[text()='Last Name']/following::input[@placeholder='Last Name']", "Last Name", lastname);
        }

        /**
        * Enters the company name into the input field.
        * @param companyName The name of the company associated with the lead.
        */
        async enterCompany(companyName: string) {
            await this.type("//label[text()='Company']/following::input[@name='Company']", "Company", companyName)
        }

        /**
        * Clicks the "Save" button to save the new lead entry.
        */
        async clickSave() {
            await this.click("//button[text()='Save']", "Save", "Button");
        }
}