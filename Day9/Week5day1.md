📑 Agenda for Week 5 Day 1: Test Data Parameterization  

🎯 [Focus: Mastering Test Data Handling, File Operations, and Shadow DOM Interactions]   

🕝 Session Highlights  

 📌 Recap  
* Quick review of key learnings from previous sessions.

1️⃣ File Upload  
* Techniques for automating file upload functionality.  
* Examples: Handling file input fields across different scenarios.  

2️⃣ File Download  
* Automating and verifying file downloads in tests.  

3️⃣ Reading Data from (.env, .json, .csv Files)  
* Utilizing .env files for environment-specific data.  
* Reading and processing JSON files for dynamic test data.  
* Handling .csv files for bulk data-driven tests.  

4️⃣ Shadow DOM  
* Understanding Shadow DOM and its significance in web automation.  

5️⃣ Storage State (Skip Login)  
* Utilizing storage state to bypass login during test execution.  
* Practical examples: Reducing redundant authentication steps.  

🕡 Wrap Up / Q&A

📝 Keep your physical notebook and pen handy to sketch out ideas!




File -Upload
 ----------
     - Chk for the dom attribute -->//input ->with the attribute type = 'file'
      locator().setInputFiles("path to file")
     -if type =file  is not  in the dom 
   filechooser -> event listner
   waitForevent('filechooser)
   click ele
   resolve the promise
   filePromise.setFiles("path to the file to upload)

   File-Download
   ------------- 
   download -> event listner
   waitForevent('download)
   click ele
   resolve the promise
   filePromise.saveAs(filePromise.suggestedname())

   ------------------------------------

   data -->from response 
   json -->.json
   csv -->comma separated data -->row and column combination
   env files--> prod, qa,staging
   faker (Dynamic data generation -random data)   
   excel files -->read data


test(`Read data from Json File TC001`, async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill(data[0].username);
    await page.locator("#password").fill(data[0].password);
    await page.click(".decorativeSubmit");

})


test(`Read data from Json File TC002`, async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill(data[1].username);
    await page.locator("#password").fill(data[1].password);
    await page.click(".decorativeSubmit");

})

fs -->file system
  ->npm install fs 

  csv -->comma separated data
.csv file
  firstname,lastname,company
  Vinod, B, TCS
  Priya,s,Wipro

step:1
  npm install csv-parse

step:2 
  parse(fs.readFilesync())

step:3 import parse from 'csv-parse/sync'
  
for(let data of leadData){
test(`reading CSV ${data.firstname} ${data.lastname}`, async () => {

   console.log(data.firstname)


})
}


env files:
 user secured storage 
 differnet env data->dev, prod, stating,qa
 db credentials
 api token

 npm install dotenv