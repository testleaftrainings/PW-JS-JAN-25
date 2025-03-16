import { Page, BrowserContext, test } from "@playwright/test";
import { PlaywrightWrapper } from "../utils/playwright";
import { URLConstants } from "../constants/urlConstants";
import testData from "../data/loginData.json"
import { HomePage } from "./HomePage";

export class LoginPage extends PlaywrightWrapper{

    /**
    * Represents a LoginPage class for handling login operations in a web application.
    */
    static pageUrl = URLConstants.baseURL; 

    /**
    * Constructs a new instance of the LoginPage class.
    * @param page The Page object associated with the login page.
    * @param context The BrowserContext object associated with the login page.
    */
    constructor(page: Page, context: BrowserContext){
        super(page, context);
        //this.common(page, context);
        // this.setupPageListeners();
    }

    /**
    * Executes common setup actions for initializing the page and performing a login operation.
    * @param page The Page object associated with the setup.
    * @param context The BrowserContext object associated with the setup.
    */
    /* 
    private async common(page: Page, context: BrowserContext) {
        try{
        const login = new LoginPage(page, context);
        await login.doLogin(testData.username, testData.password);
        }
        catch(error){
            console.error("Error during the common setup", error);
            throw error;
        }
    }
    */

    /**
    * Sets up event listeners on the page to handle specific events like page load.
    */
    /*
    private setupPageListeners() {
         // Setting up page event listeners
         this.page.on('load', async () => {
            console.log("Salesforce Home Page loaded. Executing after-load actions...");
            try {
                await this.executeAfterLoad();
            } catch (err) {
                console.error("Error during post-load execution:", err);
                throw err;
            }
        });
    }
    */

    /**
    * Executes tasks that need to be performed after the page has fully loaded.
    */
    /*
    private async executeAfterLoad() {
        // Ensuring the page is fully interactive before proceeding
            console.log("Ensuring the home page is fully loaded...");
            await this.page.waitForLoadState('networkidle'); // Waits until no network connections for at least 500 ms
            console.log("Page is fully loaded. Executing tasks...");
            await this.init();
            await this.setup(); // Example: Check if setup home link is visible after page load
    }
    */

    /**
    * Initializes the page by loading the HomePage URL.
    */
    /*
    async init() {
        await this.loadApp(HomePage.homeUrl);
    }
    */

    /**
    * Sets up additional tasks or checks after the page has been initialized and loaded.
    * Example task: Check for a specific element or perform an action.
    */
    /*
    async setup() {
        // Example task: Check for a specific element or perform an action
        const isSetupVisible = await this.page.isVisible("//a[text()='Setup Home']");
        if (isSetupVisible) {
            console.log("Setup Home link is visible.");         
        } else {
            console.error("Setup Home link is not visible, checking might be necessary.");
        }
    }
    */
    
    /**
    * Performs a quick login by filling in the username and password, then clicking the login button.
    * @param username The username to log in with.
    * @param password The password associated with the username.
    */
    async skipLogin(username: string, password: string) {
        await this.loadApp(LoginPage.pageUrl);
        await this.type("#username", "Username", username);
        await this.type("#password", "Password", password);
        await this.click("#Login", "Login", "Button");
        await this.storageState("login/salesforceLogin.json"); 
    }

    /**
    * Performs a detailed login process by clearing input fields, entering username and password,
    * clicking the login button, waiting for page load, and storing the login state.
    * @param username The username to log in with.
    * @param password The password associated with the username.
    */
    async doLogin(username: string, password: string){
        
        await this.loadApp(LoginPage.pageUrl);
        await this.clearAndtype("#username", "Username", username);
        await this.clearAndtype("#password", "Password", password);
        console.log("Logging In...");
        await this.click("#Login", "Login", "Button");
        console.log('Loading the page...');        
        await this.loadState('load');
        console.log('Storing state...');        
        await this.context.storageState({path:"login/salesforceLogin.json"});
        console.log(`Title of the page is: ${await this.getTitle()}`);
         
    }
    
}