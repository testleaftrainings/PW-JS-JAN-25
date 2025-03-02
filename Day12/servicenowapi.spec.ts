import test, { chromium } from '@playwright/test'
import {faker} from '@faker-js/faker'

const username = "admin"
const password = "UY2mOUe^7p@f"
//username:password
const credentials = `${username}:${password}`
const auth = btoa(credentials)
let id:any


const sentence= faker.lorem.sentence(4)

test(`Learning pw integrating with api`, async ({page}) => {

    // const browser = await chromium.launch()
    // const context = await browser.newContext()
    // const request = context.request

    const request= page.request

    const resp = await request.post("https://dev216320.service-now.com/api/now/table/incident", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${auth}`
        },
        data:{
            "description":faker.lorem.sentence(4)
        }

    })

    const respBody= await resp.json()
    console.log(respBody)
    id=respBody.result.sys_id
    console.log(id)
    const number=respBody.result.task_effective_number
    const code= resp.status()
    const text=resp.statusText()
    console.log(`The response created for ${number} and its status ${code} ${text}`)
})


test(`Update Incident`, async ({request}) => {

    // const browser = await chromium.launch()
    // const context = await browser.newContext()
    // const request = context.request

   // const request= page.request

     const resp = await request.patch(`https://dev216320.service-now.com/api/now/table/incident/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${auth}`
        },
        data:{
            "short_description":faker.lorem.sentence(2)
        }
    })

    const respBody= await resp.json()
    const number=respBody.result.task_effective_number
    const code= resp.status()
    const text=resp.statusText()
    console.log(`The response created for ${number} and its status ${code} ${text}`)
})
test(`Fetch the specific Incident`, async ({request}) => {

    // const browser = await chromium.launch()
    // const context = await browser.newContext()
    // const request = context.request
   // const request= page.request
     const resp = await request.get(`https://dev216320.service-now.com/api/now/table/incident/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${auth}`
        }
    })

    const respBody= await resp.json()
    console.log(respBody)
    const number=respBody.result.task_effective_number
    const code= resp.status()
    const text=resp.statusText()
    console.log(`The response created for ${number} and its status ${code} ${text}`)
})

test(`Delete the specific Incident`, async ({request}) => {

    // const browser = await chromium.launch()
    // const context = await browser.newContext()
    // const request = context.request
   // const request= page.request
     const resp = await request.delete(`https://dev216320.service-now.com/api/now/table/incident/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic" +auth
        }
    })
    // const respBody= await resp.json()
    // console.log(respBody)
    // const number=respBody.result.task_effective_number
    const code= resp.status()
    const text=resp.statusText()
    console.log(`The response is ${code} ${text}`)
})