import test from "@playwright/test";
import { HomePage } from "./HomePage";

test(`Leads Module`,async({page})=>{
     const hp=new HomePage(page)
     await hp.launchApp()
     await hp.clickCRM()
     await hp.verifyTitle()
     await hp.clickLeads()
     await hp.verifyUrl()
})