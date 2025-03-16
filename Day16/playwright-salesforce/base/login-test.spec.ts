import { test } from "../customFixtures/salesforceFixture";
import { expect } from "@playwright/test";

test(`Verify login test functionality`, async({login})=>{

    // The login fixture automatically performs the login, so we just verify the login was successful.

    // For example, you can check if the title of the page is as expected after login
    const title = await login.page.title();
    console.log(`Page title after login: ${title}`);

    // Verify that the login was successful by checking an element that should be present after login
    // const homePageElement = await login.page.waitForSelector("#someHomePageElement", { state: 'attached' });
    // expect(homePageElement).toBeTruthy();

    // Or you can check the URL to confirm the user is redirected to the home page
    const url = login.page.url();
    console.log(`URL after login: ${url}`);
    expect(url).toContain("expectedURLAfterLogin");
});
    
