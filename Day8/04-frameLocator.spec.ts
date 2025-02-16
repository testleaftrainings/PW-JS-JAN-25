
import { test } from "@playwright/test";

test(`Test to intearct with iframes using frameLocator object`,async ({page}) => {

   await page.goto(`https://leafground.com/frame.xhtml`)

   //Using framelocator

   const frame = page.frameLocator("(//iframe)[1]")
   frame.locator("#Click").click();
   await page.waitForTimeout(3000);

   //interact with nested frames

   const card = page.locator(".card").filter({hasText:"Inside Nested frame"});
const frame_one=card.frameLocator("iframe");
const frame_two = frame_one.frameLocator("iframe");
await frame_two.locator('#Click').click()
await page.waitForTimeout(3000);

    
})