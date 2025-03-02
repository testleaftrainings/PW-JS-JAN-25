import test from '@playwright/test'
import { login } from './utiltity.spec'
test(`Storage state`,async({page})=>{
    await login(page)
    await page.context().storageState({path:"DataFile/SF_Login.json"})
})