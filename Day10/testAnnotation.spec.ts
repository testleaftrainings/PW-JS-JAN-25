import test from '@playwright/test'
test(`learn to use annotations only`,async ({page})=>{
  test.slow() //triples the default timeout
     await page.goto("http://leaftaps.com/opentaps/control/main")
     await page.fill("#username","demoCSR")
     await page.fill("#password","crmsfa")
     await page.click(".decorativeSubmit")
})


test.skip(`learn to use annotations skip`,async ({page})=>{
  
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username","demoCSR")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")
})


test.fixme(`learn to use annotations fixme`,async ({page})=>{
  
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username","demoCSR")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")
})

test.fail(`learn to use annotations fail`,async ({page})=>{
  
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username","demoCSR")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")
})



test(`Test to handle multiple page`, async ({browserName,page,context}) => {
    test.slow(browserName=== 'webkit',"Running in Safari will be slow")
    await page.goto("https://www.amazon.in/");
    const page_one  = await context.newPage();
    await page_one.goto(`https://www.flipkart.com/`);
    const page_two  = await context.newPage();
    await page_two.goto(`https://www.testleaf.com/course/fresher-software-testing-bootcamp-training-course.html`);


const [amazon,flipkart,testleaf] = context.pages();
console.log(amazon.url());
console.log(`${await flipkart.title()}`);
await page.waitForTimeout(5000)    
})

test.only(`learn to use annotations step`,async ({page})=>{ 
    test.step("Load the url",async()=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    })

    test.step("Enter the username as demoCSR",async()=>{
    await page.fill("#username","demoCSR")
    })

    test.step("Enter the passwrod as crmsfa",async()=>{
    await page.fill("#password","crmsfa")
    })

    test.step("click on login button",async()=>{
    await page.click(".decorativeSubmit")
})
})