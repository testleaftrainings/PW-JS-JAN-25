
import test from '@playwright/test'
import { createResource, fetchResource, generateToken } from './apiutility'
import { faker } from '@faker-js/faker'
let lname=faker.person.lastName()
let cname=faker.company.buzzNoun()
let id:any
let searchname:any


  test.beforeEach(`SalesForce lead Generation`,async({request})=>{
    await generateToken(request)
    id= await createResource(request,lname,cname)
    searchname= await fetchResource(request)
})

test(`Salesforce using ui data verification`,async({page})=>{
  await page.goto("https://login.salesforce.com/")
  await page.fill("#username","vidyar@testleaf.com")
  await page.fill("#password","Sales@123")
  await page.click("#Login") 
  await page.waitForLoadState('load')
  await page.locator(".slds-icon-waffle").click();
  await page.locator("//button[text()='View All']") .click()
  await page.getByPlaceholder("Search apps or items...").fill("Leads")
  await page.locator("//mark[text()='Leads']").click()
  await page.waitForLoadState('load')
  await page.getByPlaceholder("Search this list...").fill(searchname,{timeout:20000})
})
