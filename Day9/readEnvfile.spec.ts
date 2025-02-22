import test from "@playwright/test";

import dotenv from 'dotenv'
dotenv.config()

test(`reading env file`, async ({ page }) => {  

console.log(process.env.username)


})