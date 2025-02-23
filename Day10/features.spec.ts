import test from '@playwright/test'


test.only(`PW features `,{tag:'@smoke',
    annotation:[{type:'Author',description:'Vidya'},
        {type:'smokeTest',description:'Launching amazon'}
    ]
},async({page})=>{ 
    await page.goto("http://www.amazon.com")
    console.log(await page.title())
})

test(`PW exection config features`,{tag:'@Regression'},async({page})=>{
    await page.goto("http://www.google.com")
    console.log(await page.title())
})

