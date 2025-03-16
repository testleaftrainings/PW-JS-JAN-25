import {  SalesforceLoginPage } from "./salesforceLogin";

export class SalesforceHomePage extends SalesforceLoginPage {

    public async appLauncher() {
        await this.validateElementVisibility(this.selectors.applauncherIcon, "App Launcher");
        await this.click(this.selectors.applauncherIcon, "App Launcher", "Button");
    }

    public async viewAll() {
        await this.waitSelector(this.selectors.viewAllBtn);
        await this.click(this.selectors.viewAllBtn, "View All", "Button");
    }

    public async searchApp(value: string) {
        await this.type(this.selectors.appItemSearchField, "Search Field", value)
    }

    public async app(data: string) {
        await this.click(this.selectors.appOrItem(data), data, "Button")
    }
}