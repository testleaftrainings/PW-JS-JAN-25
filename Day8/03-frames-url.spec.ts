

import { test } from "@playwright/test";

test (`Test to interact with the frames`, async({page})=>{

    await page.goto(`https://leafground.com/frame.xhtml`);

    //Interact with the iframe using url

    const frame = page.frame({url: `https://leafground.com/default.xhtml`})
frame?.click("#Click")

await page.waitForTimeout(3000);

/* 
Conditional check

if (frame!==null){
select the frame
click the button
}


Non nullish assertion operator
frame!.click('#Click') */

//using index

const Testframes = page.frames()
await Testframes[4].click(`button#Click`);

await page.waitForTimeout(3000);


}





)