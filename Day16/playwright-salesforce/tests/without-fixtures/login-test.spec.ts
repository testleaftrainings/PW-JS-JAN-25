import { test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import testData from "../../data/loginData.json"


test(`Verify login test functionality`, async({page, context})=>{
    const login = new LoginPage(page, context);
    await login.skipLogin(testData.username, testData.password )      
})