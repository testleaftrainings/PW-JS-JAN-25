import { test } from "@playwright/test";
import { createAndPublishPage } from "../../pages/CreateAndPublishPage";
import { HomePage } from "../../pages/HomePage";

test.use({ storageState: "login/salesforceLogin.json" });

test(`Verify Salesforce Verification`, async ({ page, context }) => {
    const home = new HomePage(page, context);
    console.log(`Calling mobilePublisher to open and get new window.`);
    const newWindow = await home.mobilePublisher();

    const create = new createAndPublishPage(page, context);
    console.log(`Calling clickConfirm on new window.`);
    await create.clickConfirm(newWindow);
    console.log(`Calling createAndPublish on new window.`);
    await create.createAndPublish(newWindow);
});
