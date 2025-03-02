📑 Agenda for Week 06 Day 02: Playwright with REST API Integration  

🎯 [ Focus: Integrating Playwright with REST APIs for End-to-End Automation Testing ]

📆 [5 January, Sunday]  

🕝 Session Highlights  

1️⃣ Recap  
* Quick review of key learnings from previous sessions.  

2️⃣ Implementation in Postman - POST & GET Lead Without Collection and Environment Variable [Salesforce]  
* Demonstration: Creating and retrieving leads.  

3️⃣  APIRequest, APIRequestContext, APIResponse  
* Overview of these key Playwright API concepts.

4️⃣ Status Code, Response Body & Response Time  
* Understanding and validating API response attributes.

5️⃣ Basic API intergation with Playwright (Servicenow)  
* Demonstration of making CRUD operation in Playwright.  

6️⃣ Generating Token and Using it with HTTTP methods
* Demonstration: Generating token and using it with CRUD operation in integration with PW

7️⃣   E2E Scenario (Bearer Token, Create, Update & Delete)  
* Full end-to-end workflow: Authentication, CRUD operations.  



🕡 Practice/Wrap

📝 Keep your physical notebook and pen handy to sketch out ideas!



API testing:
-----------
API documentation
Endpoints
parameters -->path and query
Body (Payload)
Http method
Headers -->contenty-type, connection ,authorization
Response body -->reused for other test
Response code/text -->validate you api call

------------------------------------

Launch a browser 
 ------------
bt=browserType.launch()
context=bt.newContext()
page=context.newPage()

playwright with API
-----------------
request=browserContext.request -->Http methods
APIRequestContext-->APIRequest

 response =request.post(Endpoint, headers, body)
APIResponse


{
    "result": {
        "parent": "",
        "made_sla": "true",
        "caused_by": "",
        "watch_list": "",
        "upon_reject": "cancel",
        "sys_updated_on": "2025-03-02 09:54:37",
        "child_incidents": "0",
        "hold_reason": "",
        "origin_table": "",
        "task_effective_number": "INC0010210",
        "approval_history": "",
        "number": "INC0010210",
        "resolved_by": "",
        "sys_updated_by": "admin",
        "opened_by": {
            "link": "https://dev216320.service-now.com/api/now/table/sys_user/6816f79cc0a8016401c5a33be04be441",
            "value": "6816f79cc0a8016401c5a33be04be441"
        },
        "user_input": "",
        "sys_created_on": "2025-03-02 09:54:37",
        "sys_domain": {
            "link": "https://dev216320.service-now.com/api/now/table/sys_user_group/global",
            "value": "global"
        },
        "state": "1",
        "route_reason": "",
        "sys_created_by": "admin",
        "knowledge": "false",
        "order": "",
        "calendar_stc": "",
        "closed_at": "",
        "cmdb_ci": "",
        "delivery_plan": "",
        "contract": "",
        "impact": "3",
        "active": "true",
        "work_notes_list": "",
        "business_service": "",
        "business_impact": "",
        "priority": "5",
        "sys_domain_path": "/",
        "rfc": "",
        "time_worked": "",
        "expected_start": "",
        "opened_at": "2025-03-02 09:54:37",
        "business_duration": "",
        "group_list": "",
        "work_end": "",
        "caller_id": "",
        "reopened_time": "",
        "resolved_at": "",
        "approval_set": "",
        "subcategory": "",
        "work_notes": "",
        "universal_request": "",
        "short_description": "",
        "close_code": "",
        "correlation_display": "",
        "delivery_task": "",
        "work_start": "",
        "assignment_group": "",
        "additional_assignee_list": "",
        "business_stc": "",
        "cause": "",
        "description": "updated resource",
        "origin_id": "",
        "calendar_duration": "",
        "close_notes": "",
        "notify": "1",
        "service_offering": "",
        "sys_class_name": "incident",
        "closed_by": "",
        "follow_up": "",
        "parent_incident": "",
        "sys_id": "24f9539553cc6210a09cf301a0490e2d",
        "contact_type": "",
        "reopened_by": "",
        "incident_state": "1",
        "urgency": "3",
        "problem_id": "",
        "company": "",
        "reassignment_count": "0",
        "activity_due": "",
        "assigned_to": "",
        "severity": "3",
        "comments": "",
        "approval": "not requested",
        "sla_due": "",
        "comments_and_work_notes": "",
        "due_date": "",
        "sys_mod_count": "0",
        "reopen_count": "0",
        "sys_tags": "",
        "escalation": "0",
        "upon_approval": "proceed",
        "correlation_id": "",
        "location": "",
        "category": "inquiry"
    }
}


resp.result.sys_id
resp.result.sys_domain.link

res.id
-----------------------------------------------------
storage state 
 -->incognito mode -->does not store any data 
