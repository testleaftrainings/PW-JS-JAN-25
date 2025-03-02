import test from "@playwright/test";
import { login } from "./utiltity.spec";

test.use({storageState:"DataFile/SF_Login.json"})
test(`using storage session info`,async({page})=>{
    await page.goto("https://testleaf-da-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")
    await page.getByTitle("App Launcher",{exact:true}).click()
    console.log(await page.title())

})