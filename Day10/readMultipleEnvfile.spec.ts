import test from "@playwright/test";
import dotenv from 'dotenv'

const fileName=process.env.ENVFile || 'qa'
dotenv.config({path:`DataFiles/${fileName}.env`})

const uname= process.env.LT_Username as string
const pwd= process.env.LT_Password as string

test(`Learning to read ENV Files`,async ({page})=>{
     await page.goto("http://leaftaps.com/opentaps/control/main")
     await page.fill("#username",uname)
     await page.fill("#password",pwd)
     await page.click(".decorativeSubmit")
})