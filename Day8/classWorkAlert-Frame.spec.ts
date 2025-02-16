import { test, expect } from "@playwright/test";

test(`Automate Alerts and Frames Interaction`, async ({ page }) => {
    // Navigate to the URL and wait until the page fully loads
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm", { waitUntil: "load" });

    // Wait for the iframe to be available
    const frame = page.frameLocator("#iframeResult");
    await frame.locator("button").waitFor({ state: "visible", timeout: 10000 });

    // Set up alert handler
    page.once("dialog", async (dialog) => {
        console.log(`Alert is: ${dialog.message()}`);
        await dialog.accept();
    });

    // Click the 'Try it' button inside the iframe
    await frame.locator("button").click();

    // Wait for the text to appear and verify it
    const resultText = await frame.locator("#demo").innerText();
    expect(resultText).toBe("You pressed OK!");
});
