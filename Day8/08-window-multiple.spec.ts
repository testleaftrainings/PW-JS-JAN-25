
import {expect,test } from "@playwright/test";

test.only(`Handling multiple windows`, async ({context, page}) => {

    await page.goto("https://leafground.com/window.xhtml");
    const [multiplePages] = await Promise.all([
        context.waitForEvent('page'),
        page.getByText("Open Multiple", {exact:true}).click()
    ])

    const pages = multiplePages.context().pages();
    console.log(`No. of pages: ${pages.length}`);

    // pages.forEach(async tabs => {
    //     const url = tabs.url();
    //     console.log(`The url of the page is ${url}`);
    //     const title = await tabs.title();
    //     console.log(`The title of the page is ${title}`);
    // })
    
    //Using index
    let webPage:any;
    for (let index = 0; index < pages.length; index++) {
        const pageTitle = await pages[index].title();
        console.log(`The title of the page is ${pageTitle}`);
        
        if(pageTitle==='Web Table'){
            webPage = pages[index]
        }
    }
        await webPage.bringToFront();
        await webPage.fill("input[placeholder='Search']", "Bernardo Dominic");
        await webPage.waitForTimeout(5000);
})