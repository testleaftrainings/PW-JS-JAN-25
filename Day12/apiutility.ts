import { faker } from '@faker-js/faker'
import {APIRequestContext} from '@playwright/test'

let ac_token:any
let instanceUrl:any
let leadId:any
let lastname:any


let endPoint="https://login.salesforce.com/services/oauth2/token"
let grant="password"
let client_id ="3MVG95mg0lk4bathv4oYb772GRC3bVxW1Es_Q3iIRRNR8SK5ApA.LJbPT96HpWJInRGniHTbF.cUq2.uJatoV"
let secret="149569A62384820C94E7FCB265BEFEC659DE02AD4E4D4BAEE95A354329BCD654"
let username ="vidyar@testleaf.com"
let password ="Sales@123"


export async function generateToken(request:APIRequestContext){
    
    const response= await request.post(endPoint,{
        headers:{
            "Content-Type":"application/x-www-form-urlencoded",
              },
        form:{
            "grant_type":grant,
            "client_id":client_id,
            "client_secret":secret,
            "username":username,
            "password":password
        }
})
const respBody=await response.json()
    ac_token=respBody.access_token
    instanceUrl=respBody.instance_url
    return {
        access:ac_token,
        url:instanceUrl
    }
}

export async function createResource(request:APIRequestContext,lname:string,cname:string){

    const response=await request.post(`${(await generateToken(request)).url}/services/data/v62.0/sobjects/Lead`,{
       headers:{
           "Content-Type":"application/json",
           "Authorization":`Bearer ${((await generateToken(request)).access)}`
       },
       data:{
           "lastname":lname,
           "company":cname
       }
    })
  const respBody=await response.json()
  console.log(respBody)
  leadId=respBody.id
  return leadId
}


export async function fetchResource(request:APIRequestContext){

   const response=await request.get(`${(await generateToken(request)).url}//services/data/v62.0/sobjects/Lead/${leadId}`,{
      headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${((await generateToken(request)).access)}`
      }      
   })
 const respBody=await response.json()
 console.log(respBody)
 lastname=respBody.LastName
 console.log(lastname)
 return lastname
}