import { test } from "@playwright/test";

test (`test to interact wit the frames`, async ({page}) => {

    await page.goto(`https://www.oneindia.com/`);
// To get the frames
    const allFrame = page.frames();

    console.log(allFrame);

    //To get the count of frames

    const frameCount = allFrame.length;
    console.log(`The total frames is ${frameCount}`);

    for(let iframe of allFrame){
    const title = await iframe.title()
    console.log(`The title of the frame is ${title}`);
    
    }

     

    
    
})