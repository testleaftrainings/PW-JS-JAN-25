import { Page, Locator, BrowserContext } from "@playwright/test";
import { SalesforceHomePage } from "./salesforceHomePage";


export class SalesforceLeadPage extends SalesforceHomePage {

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }
    public async newButton() {
        await this.validateElementVisibility(this.selectors.newBtn, "New Button")
        await this.click(this.selectors.newBtn, "New", "Button")
    }
    public async salutation(value: string) {
        await this.click(this.selectors.lead.salutation, "Salutation", "Button")
        await this.click(this.selectors.lead.saluationValue(value), "Salutation Value", "Button")
    }

    public async firstName(value: string) {
        await this.type(this.selectors.lead.firstName, "First Name", value)
    }

    public async lastName(value: string) {
        await this.type(this.selectors.lead.lastName, "Last Name", value)
    }


    public async Company(value: string) {
        await this.type(this.selectors.lead.company, "Last Name", value)
    }

    public async saveButton() {
        await this.click(this.selectors.saveBtn, "Save", "Button")
    }

    public async verifiTheLeadAccount(expectedValue: string) {
        await this.validateElementVisibility(this.selectors.lead.verificationText, "Lead Name")
        const leadName = await this.getInnerText(this.selectors.lead.verificationText)
        console.log(leadName);
        await this.verification(this.selectors.lead.verificationText, expectedValue)
    }

    public async searchLead(value: string) {
        await this.validateElementVisibility(this.selectors.lead.searchLeadInput, "Search Field");
        await this.typeAndEnter(this.selectors.lead.searchLeadInput, "Search Field", value);
    }

    public async leadID(userName: string) {
        await this.spinnerDisappear()
        await this.click(this.selectors.lead.userId(userName), userName, "User Name")
    }

    public async expandButton() {
        await this.click(this.selectors.lead.expandBtn, "Expand Button", "Button")
    }

    public async deleteLead() {
        await this.validateElementVisibility(this.selectors.deleteBtn, "Delete");
        await this.click(this.selectors.deleteBtn, "Delete", "Button");
    }

    public async deletePopUP() {
        await this.click(this.selectors.deletePopUp, "Delete", "Button")
    }

    public async verifiTheDeletedData() {
        await this.page.waitForLoadState('load')
        await this.verification(this.selectors.noItemToDisplay, "No items to display")
    }
}