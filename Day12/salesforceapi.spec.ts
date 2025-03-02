import { faker } from '@faker-js/faker'
import test, { expect } from '@playwright/test'

let ac_token:any
let instanceUrl:any
let id:any
//test.describe.serial(`API For Salesforce`,async()=>{
test(`Generate token`,async({request})=>{
    
  const response=await request.post("https://login.salesforce.com/services/oauth2/token",{
    headers:{
        "Content-Type":"application/x-www-form-urlencoded",
          },
    form:{
        "grant_type":"password",
        "client_id":"3MVG95mg0lk4bathv4oYb772GRC3bVxW1Es_Q3iIRRNR8SK5ApA.LJbPT96HpWJInRGniHTbF.cUq2.uJatoV",
        "client_secret":"149569A62384820C94E7FCB265BEFEC659DE02AD4E4D4BAEE95A354329BCD654",
        "username":"vidyar@testleaf.com",
        "password":"Sales@123"
    }
  })
    const respBody=await response.json()
    ac_token=respBody.access_token
    instanceUrl=respBody.instance_url
    console.log(`${ac_token} ${instanceUrl}`)
    expect(response.status()).toBe(200)
})


test(`Create Lead`,async({request})=>{
    
    const response=await request.post(`${instanceUrl}/services/data/v58.0/sobjects/Lead`,{
      headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${ac_token}`
            },
      data:{
          "lastname":faker.person.lastName(),
          "company":faker.company.buzzNoun()
      }
    })
      const respBody=await response.json()
      console.log(respBody)
      id =respBody.id
      expect(response.statusText()).toBe("Created")
  })

  
test(`Update Lead`,async({request})=>{    
    const response=await request.patch(`${instanceUrl}/services/data/v58.0/sobjects/Lead/${id}`,{
      headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${ac_token}`
            },
      data:{
          "firstname":faker.person.firstName(),
               }
    })
    //   const respBody=await response.json()
    //   console.log(respBody)
      expect(response.statusText()).toBe("No Content")
  })

  test(`Fetch the created Lead`,async({request})=>{
    
    const response=await request.get(`${instanceUrl}/services/data/v58.0/sobjects/Lead/${id}`,{
      headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${ac_token}`
            }     
    })
      const respBody=await response.json()
      console.log(respBody)
    //  expect(response.statusText()).toBe("OK")
  })

//})