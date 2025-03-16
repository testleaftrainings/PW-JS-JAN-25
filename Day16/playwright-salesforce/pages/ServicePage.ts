import { Page, BrowserContext } from "@playwright/test";
import { PlaywrightWrapper } from "../utils/playwright";


export class ServicePage extends PlaywrightWrapper {

      /**
        * Constructs a new instance of the class with the provided Page and BrowserContext.
        * @param page The Page object associated with the instance.
        * @param context The BrowserContext object associated with the instance.
        */
      constructor(page: Page, context: BrowserContext){
        super(page, context);
    }

    async clickAccounts() {
        await this.click("//span[text()='Accounts']", "Accounts", "Link");
    }

    async clickNew() {
        await this.click("//a/div[text()='New']", "New", "Button");
    }

    async enterAccountName(accountName: string) {
        await this.type("(//label[text()='Account Name']/following::input)[1]", "Account Name", accountName);
    }

    async enterAccountNumber(accountNumber: string) {
        await this.delayedType("(//label[text()='Account Number']/following::input)[1]", accountNumber);
    }

    async chooseType(typeName: string) {
        await this.delayedClick("(//label[text()='Type']/following::span[text()='--None--'])[1]");
        await this.delayedClick(`//span[text()='${typeName}']`);
    }

    async chooseIndustry(industry: string) {
        await this.click("(//label[text()='Industry']/following::span[text()='--None--'])[1]", "None", "Dropdown");
        await this.click(`//span[text()='${industry}']`, "Industry", "Dropdown");
    }

    async chooseRating(rating: string) {
        await this.click("(//label[text()='Rating']/following::span[text()='--None--'])[1]", "None", "Dropdown");
        await this.click(`//span[text()='${rating}']`, "Rating", "Dropdown");
    }

    async clickSave() {
        await this.click("//button[text()='Save']", "Save", "Button");
    }
    
}