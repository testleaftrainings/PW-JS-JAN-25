

import {expect,test } from "@playwright/test";


test(`Test to handle multiple page`, async ({page,context}) => {

    await page.goto("https://www.amazon.in/");
    const page_one  = await context.newPage();
    await page_one.goto(`https://www.flipkart.com/`);
    const page_two  = await context.newPage();
    await page_two.goto(`https://www.testleaf.com/course/fresher-software-testing-bootcamp-training-course.html`);
// To get the count of the page in the context

const AllPage = context.pages();
console.log(AllPage);
console.log(`No of opened pages:${AllPage.length}`);

//To get the title of each page

for ( let newPage of AllPage){

    const title =  await newPage.title();
    console.log(title);
    
}

//Using index
await AllPage[0].bringToFront();
await page.waitForTimeout(5000)


    
})