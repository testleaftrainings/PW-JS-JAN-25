import { BrowserContext, Page } from "playwright";
import { PlaywrightWrapper } from "../helpers/playwright";
import { credentials } from "../constants/credentialData";
import { expect } from "playwright/test";
import { URLConstants } from "../constants/urlConstants";

export class SalesforceLoginPage extends PlaywrightWrapper {

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    public selectors = {
        username: "#username",
        password: "#password",
        loginBtn: "#Login",
        applauncherIcon: ".slds-icon-waffle",
        homeLabel: "//h1//span[text()='Home']",
        viewAllBtn: `//button[text()="View All"]`,
        appItemSearchField: "one-app-launcher-modal input.slds-input",
        appOrItem: (appName: string) => `//mark[text()='${appName}']`,
        saveBtn: `//button[text()='Save']`,
        newBtn: `div:text-is('New')`,
        deleteBtn: "span:text-is('Delete')",
        deletePopUp: `//button/span[text()='Delete']`,
        noItemToDisplay: "//span[text()='No items to display.']",
        accounts: {
            accountNameInput: `//label[text()='Account Name']//following::input[1]`,
            ratingDDBtn: "//label[text()='Rating']//following::button[1]",
            dropdownValueSelector: (data: string) => `//span[text()='${data}']`,
            accountNumberInput: `//label[text()='Account Number']//following::input[1]`,
            accountTypeDDBtn: "//label[text()='Type']//following::button[1]",
            industryDDBtn: `//label[text()='Industry']//following::button[1]`,
            ownershipDDBtn: `//label[text()='Ownership']//following::button[1]`,
            billingStreetInput: `//label[text()='Billing Street']//following::textarea[1]`,
            billingCityInput: "//label[text()='Billing City']//following::input[1]",
            postalCodeInput: `//label[text()='Billing Zip/Postal Code']//following::input[1]`,
            billingStateInput: `//label[text()='Billing State/Province']//following::input[1]`,
            billingCountryInput: "//label[text()='Billing Country']//following::input[1]",
            verificationText: `//slot//lightning-formatted-text[@slot='primaryField']`,
            closeTab: `a[title$='Account'] + * + button`
        },
        lead: {
            salutation: "button[name='salutation']",
            saluationValue: (value: string) => "span:text-is('" + value + "')",
            firstName: "//label[text()='First Name']//following::input[1]",
            lastName: "//label[text()='Last Name']//following::input[1]",
            company: "//label[text()='Company']//following::input[1]",
            verificationText: "slot[name='primaryField'] lightning-formatted-name",
            searchLeadInput: "div[class^='slds-form-element__control'] input",
            userId: (userName: string) => "//a[@title='" + userName + "']",
            expandBtn: "[class^='menu-button-item'] button",
        },
        contacts: {
            phoneInput: `input[name='Phone']`,
            homePhoneInput: `input[name='HomePhone']`,
            firstNameInput: `input[name='firstName']`,
            lastNameInput: `input[name='lastName']`,
            accountNameField: `label:text-is('Account Name') + * input`,
            newAccountTag: `span[title='New Account']`,
            newAccountHeader: `h1:text-is('New Account')`,
        }
    }
    public async salesforceLogin(role: string) {
        const { username, password } = credentials[role];
        await this.loadApp(URLConstants.adminURL)
        await this.type(this.selectors.username, "Username", username);
        await this.type(this.selectors.password, "password", password);
        await this.click(this.selectors.loginBtn, "Sign In", "Button");
        await this.validateElementVisibility(this.selectors.applauncherIcon, "App Launcher");
        await this.verifyHomeLabel();
        // await this.storeState("./logins/salesforce.json")
    }


    public async verifyHomeLabel() {
        await this.validateElementVisibility(this.selectors.homeLabel, "Home");
        let home = await this.getInnerText(this.selectors.homeLabel);
        expect(home).toEqual("Home");
    }



















}