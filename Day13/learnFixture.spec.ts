import {fixturetest} from "./customFixture.spec"


fixturetest(`Launching browser`,async({lppage})=>{
    await lppage.click("text=CRM/SFA")
    console.log(await lppage.title())
})