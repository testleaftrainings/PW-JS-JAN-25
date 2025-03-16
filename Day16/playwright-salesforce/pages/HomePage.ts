import { Page, BrowserContext } from "@playwright/test";
import { URLConstants } from "../constants/urlConstants";
import { PlaywrightWrapper } from "../utils/playwright";

export class HomePage extends PlaywrightWrapper {

    /**
    * Locator string for the "Learn More" button on the page.
    */
    private learnMoreButtonLocator: string = "//span[text()='Learn More']";

    /**
    * Name of the "Learn More" button for identification purposes.
    */
    private learnMoreButtonName: string = "Learn More";

    /**
    * URL of the home page for this specific application.
    */
    static homeUrl = URLConstants.homeURL;

    /**
    * Constructs a new instance of the HomePage class.
    * @param page The Page object associated with the home page.
    * @param context The BrowserContext object associated with the home page.
    */
    constructor(page:Page, context: BrowserContext) {
        super(page, context);
        this.init();     
    }
    
    /**
    * Initializes the home page by loading the HomePage URL.
    */
    async init() {
        await this.loadApp(HomePage.homeUrl);
    }
    
    /**
    * Clicks on the application launcher button to open the app menu.
    */
    async clickAppLauncher() {
        await this.click("//div[@class='slds-icon-waffle']", "App Launcher", "Toggle Button");
    }

    /**
    * Clicks on the "View All" button/link to display all applications.
    */
    async clickViewAll() {
        await this.click("//button[text()='View All']", "View All", "Link");
    }

    /**
    * Enters text into the menu search box and presses Enter to perform a search.
    * @param menuInput The text to be entered into the search box.
    */
    async menuSearchBox(menuInput: string) {
        await this.typeAndEnter("//input[@placeholder='Search apps or items...']", "Search apps or items", menuInput);
    }

    /**
     * Clicks on a specific menu item identified by the provided data.
     * @param data The text of the menu item to be clicked.
     */
    async clickMenu(data: string) {
        await this.click(`(//p/mark[text()= '${data}'])[1]`, "Menu", "Link");
    }

    /**
    * Opens the mobile publisher window by clicking on the "Learn More" button.
    * @returns A promise that resolves to the Page object representing the mobile publisher window.
    */
    async mobilePublisher(): Promise<Page> {
        return await this.windowHandle(this.learnMoreButtonLocator, this.learnMoreButtonName);
    }
}
