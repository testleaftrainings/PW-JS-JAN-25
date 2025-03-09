import test from '@playwright/test'
import { CreateLeadPage } from './createLead'
import { CreateAccountPage } from './createAccount'

test(`Leads Module`,async({page})=>{

   const cl=new CreateLeadPage(page)
    await cl.launchApp()
    await cl.enterCredentials()
    await cl.clickLogin()
    await cl.clickCRM()
    await cl.clickLeads()
    await cl.clickCreateLead()

})



test(`Accounts Module`,async({page})=>{

    const ca=new CreateAccountPage(page)
     await ca.launchApp()
     await ca.enterCredentials()
     await ca.clickLogin()
     await ca.clickCRM()
     await ca.clickLeads()
    // await ca.clickCreateLead()
 
 })