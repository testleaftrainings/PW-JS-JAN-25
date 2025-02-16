
import { expect, test } from "@playwright/test";

test('Test to assert the test box', async({page}) => {
await page.goto("https://leafground.com/input.xhtml");
const typeName = page.getByPlaceholder("Babu Manickam");

//to check the textbox is enabled

await expect(typeName).toBeEnabled();
//Enter the value
await typeName.fill("Ravi")
await page.waitForTimeout(3000);

const disabledTextbox = page.getByPlaceholder("disabled");

//to check the textbox is enabled

await expect(disabledTextbox).toBeEnabled();
//Enter the value
await typeName.fill("Ravi")
await page.waitForTimeout(3000);


})

test('Test to assert the hard assert', async({page}) => {

await page.goto("https://leafground.com/input.xhtml");
const appendTextbox = page.locator("//input[@value='Chennai']");
await expect(appendTextbox).toBeDisabled();
await appendTextbox.fill("India");
await page.waitForTimeout(3000);

})

test.only('Test to assert the soft assert', async({page}) => {

    await page.goto("https://leafground.com/input.xhtml");
    const appendTextbox = page.locator("//input[@value='Chennai']");
    await expect.soft(appendTextbox).toBeDisabled();
    await appendTextbox.fill("India");
    await page.waitForTimeout(3000);
    
    })
    



