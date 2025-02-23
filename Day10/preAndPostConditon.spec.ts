import test from '@playwright/test'
import fs from 'fs'
import {faker} from '@faker-js/faker'

let uname:any
let password:any

test.beforeAll(`Read to datafile`,async()=>{
const credentials=JSON.parse(fs.readFileSync('DataFiles/loginCredentials.json','utf-8'))
uname=credentials[0].username
password=credentials[0].password
})

test.beforeEach(`Login SetUp`,async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/login")
        await page.fill("#username",uname)
        await page.fill("#password", password)
        await page.click(".decorativeSubmit")
        await page.locator("text=CRM/SFA").click();
})

test(`Leaftaps Leads testcases`,async({page})=>{
 
    await page.locator("//a[text()='Leads']").click();
    await page.locator("//a[text()='Create Lead']").click();
    await page.locator("#createLeadForm_companyName").fill(faker.company.buzzNoun());
    await page.locator("#createLeadForm_firstName").fill(faker.person.firstName());
    await page.locator("#createLeadForm_lastName").fill(faker.person.lastName());
    await page.waitForTimeout(2000)
   await page.locator("[name='submitButton']").click();
})



test(`Leaftaps Accounts testcases`,async({page})=>{ 
    await page.locator("//a[text()='Accounts']").click();
    await page.locator("//a[text()='Create Account']").click();
})


test.afterEach(`teardown`,async({})=>{
    if(test.info().status =='timedOut'||'failed'){
        console.log("Create jira issue")
    }else{
        console.log(`Testcase is passed`)
    } 
})

test.afterAll(`Upload attachments`,async()=>{
    console.log("upload attachments")
})