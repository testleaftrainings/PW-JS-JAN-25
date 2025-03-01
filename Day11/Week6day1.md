📑 Agenda for Week 06 Day 01: REST API Fundamentals  

🎯 [ Focus: Understanding the core concepts and hands-on implementation of REST APIs ]  

📆 Date: 1 March [Saturday]  

🕝 Session Highlights  

1️⃣ Recap  
* Quick review of key learnings from previous sessions.  

2️⃣ Introduction to REST API  
* Overview of REST architecture and principles.  

3️⃣ Headers  
* Understanding HTTP headers and their significance in API requests.  

4️⃣ Verbs (POST, PUT, GET, DELETE, PATCH)  
* Explanation of HTTP methods and their use cases.  

5️⃣ Request Body & Response Body  
* Understanding the structure and purpose of request and response payloads.  

6️⃣ Authorization Types  
* Overview of different authorization methods (e.g., Basic Auth, OAuth2).  

7️⃣ Implementation in Postman - POST & GET Lead Without Global Variable [Salesforce]  
* Demonstration: Creating and retrieving leads.  

8️⃣ Create Opportunity & Get Opportunity  
* Practical exercise: Working with opportunities using POST and GET requests.  

9️⃣ Implementation in Postman - POST & GET Lead With Global Variable  
* Demonstration: Using global variables for better test management.  

🔟 [Practice] Create Opportunity & Get Opportunity  
* Practical exercise: Implementing global variables for API testing.  

🕡 Wrap Up / Q&A  

📝 Keep your physical notebook and pen handy to sketch out ideas!



API -->Application Programming interface

Endpoint  -->request url
Parameter -->path paramter 
         -->queryparamter
Headers -->content type, authorization
Body (Payload) -->send data
response status -->text /code
script -->to write js 

Servicenow
https://dev216320.service-now.com/api/now/table/incident  -->endpoint
Basic authentication -->username and password
dev216320.service-now.com -->domain name 
Body -->short description
headers -->content-type- application/json

Request /HTTP methods 
---------------------
Classroom  --> change_request
https://dev216320.service-now.com/

admin
  UY2mOUe^7p@f

  click -->ALL
  Search --> REST API Explorer

POST -->create a new resource
EndPoint -->https://dev216320.service-now.com/api/now/table/incident
authentication -->username and password
  admin
  UY2mOUe^7p@f
headers -->content-type - application/json
Body --> raw --> json
 {
    "" : "",
    "":""
 }

response code - 200 ok
---------------------------------------------------------------------------
PATCH -->to update the existing resource
Endpoint with unique id --> https://dev216320.service-now.com/api/now/table/incident/4291a28953c42210a09cf301a0490ec0

authentication --> Basic auth
header --> content-type - application/json
Body --> raw -->Json
{
    "":""
}

Response ->200 ok

--------------------------------------------------------------------
GET -->to fetch all the  resources
Endpoint --> https://dev216320.service-now.com/api/now/table/incident

authentication --> Basic auth
header --> content-type - application/json
Body --> NO Body content

Response ->200 ok
-----------------------------------------------------------

GET -->to fetch the specific resource
Endpoint with unique id --> https://dev216320.service-now.com/api/now/table/incident/4291a28953c42210a09cf301a0490ec0

authentication --> Basic auth
header --> content-type - application/json
Body --> NO Body content

Response ->200 ok

-------------------------------------------------------

DELETE -->to delete the specific resource
Endpoint with unique id --> https://dev216320.service-now.com/api/now/table/incident/4291a28953c42210a09cf301a0490ec0
authentication --> Basic auth
header --> content-type - application/json
Body --> NO Body content
Response ->204 No Content


Salesforce
 step: 1 Generate access-token
 POST
 Endpoint : https://login.salesforce.com/services/oauth2/token
 Body --> x.www.form-urlencoded
 grant_type: password
 client_id:  3MVG95mg0lk4bathv4oYb772GRC3bVxW1Es_Q3iIRRNR8SK5ApA.LJbPT96HpWJInRGniHTbF.cUq2.uJatoV
client_secret:149569A62384820C94E7FCB265BEFEC659DE02AD4E4D4BAEE95A354329BCD654
username : vidyar@testleaf.com
password : Sales@123

Repsonse: 200 ok
resp body
{
    "access_token": "00D5h0000098pgR!AQwAQFYmtjpEmDXOOsEJ51e4YsHJOIC6UwfkM0d7jRln8ZFLWbyWxUhhl1dXrxcmg7j5Lq9CMMGLkeiZP3xITb5XkWko2PUG",
    "instance_url": "https://testleaf-da-dev-ed.develop.my.salesforce.com",
    "id": "https://login.salesforce.com/id/00D5h0000098pgREAQ/0055h00000AnfC0AAJ",
    "token_type": "Bearer",
    "issued_at": "1740833808599",
    "signature": "olb7DPb6t1yMeMF8HajVeOpaAiG3m+nXLUlrz3SWZGs="
}


to set up the global variable
var resp=pm.response.json()
var acToken=resp.access_token
var domainUrl = resp.instance_url
pm.globals.set("SF_DomainUrl", domainUrl);
pm.globals.set("SF_BToken", acToken);
--------------------------------------------------

step:2  Using Token as Bearer 
Create a resource -->POST
Endpoint -->https://MyDomainName.my.salesforce.com/services/data/vXX.X/resource/

https://testleaf-da-dev-ed.develop.lightning.force.com/services/data/v62.0/Lead

Authentication -->Bearer Token
Body - json ->
{
 "":""
}
response code- 201
 
 to setup the unique data for CRUD operation
Script:
----------
var resp=pm.response.json()
var L_ID = resp.id
pm.globals.set("Lead_Data", L_ID);

{
    "id": "00QJ2000004B18eMAC",
    "success": true,
    "errors": []
}



global variable

resp={"access_token":"00D5h0000098pgR!AQwAQFYmtjpEmDXOOsEJ51e4YsHJOIC6UwfkM0d7jRln8ZFLWbyWxUhhl1dXrxcmg7j5Lq9CMMGLkeiZP3xITb5XkWko2PUG",
"instance_url":"https://testleaf-da-dev-ed.develop.my.salesforce.com",
"id":"https://login.salesforce.com/id/00D5h0000098pgREAQ/0055h00000AnfC0AAJ",
"token_type":"Bearer","issued_at":"1740833173557",
"signature":"qb9ex2Np9Q4hKZLlurrd+ioQ/h2h+ayjdFhv59w1blA="}



