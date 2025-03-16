import { Page, Locator, BrowserContext, expect } from "@playwright/test";
import { SalesforceHomePage } from "./salesforceHomePage";


export class SalesforceAccountPage extends SalesforceHomePage {

    public async newButton() {
        await this.validateElementVisibility(this.selectors.newBtn, "New Button");
        await this.click(this.selectors.newBtn, "New", "Button");
    }

    public async accountName(value: string) {
        await this.type(this.selectors.accounts.accountNameInput, "Account Name", value)
    }

    public async ratingDropdown(data: string) {
        await this.click(this.selectors.accounts.ratingDDBtn, "Rating", "Button");
        await this.click(this.selectors.accounts.dropdownValueSelector(data), data, "Button");
    }

    public async accountNumber(data: string) {
        await this.type(this.selectors.accounts.accountNumberInput, "Account Number", data);
    }

    public async accountType(data: string) {
        await this.click(this.selectors.accounts.accountTypeDDBtn, "Type", "Button");
        await this.click(this.selectors.accounts.dropdownValueSelector(data), data, "Button");
    }

    public async industry(data: string) {
        await this.click(this.selectors.accounts.industryDDBtn, "Industry", "Button");
        await this.click(this.selectors.accounts.dropdownValueSelector(data), data, "Button");
    }

    public async ownerShip(data: string) {
        await this.click(this.selectors.accounts.ownershipDDBtn, "Ownership", "Button");
        await this.click(this.selectors.accounts.dropdownValueSelector(data), data, "Button");
    }

    public async billingStreet(data: string) {
        await this.type(this.selectors.accounts.billingStreetInput, "Billing Street", data);
    }

    public async billingCity(value: string) {
        await this.type(this.selectors.accounts.billingCityInput, "Billing City", value);
    }

    public async postalCode(value: string) {
        await this.type(this.selectors.accounts.postalCodeInput, "postalCode", value);
    }

    public async billingState(value: string) {
        await this.type(this.selectors.accounts.billingStateInput, "Billing State", value);
    }

    public async billingCountry(value: string) {
        await this.type(this.selectors.accounts.billingCountryInput, "Billing Country", value);
    }

    public async saveButton() {
        await this.click(this.selectors.saveBtn, "Save", "Button")
    }

    public async verifiAccountName(value: string) {
        await this.spinnerDisappear()
        await this.validateElementVisibility(this.selectors.accounts.verificationText, "Account Name")
        const accountName = await this.getInnerText(this.selectors.accounts.verificationText)
        console.log(accountName);
        expect(accountName).toContain(value)

    }

    public async closeTAB() {
        await this.click(this.selectors.accounts.closeTab, "Close TAB", "Button")
    }
}