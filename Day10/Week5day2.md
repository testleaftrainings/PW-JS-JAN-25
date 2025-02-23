 **Agenda for Week 05 Day 02: Advanced Playwright Key Features**  

🎯 **[Focus: Exploring Advanced Features for Enhanced Playwright Automation]**  
📆 **[23 Feb, Sunday]**  

🕝 **Session Highlights**  

1️⃣ **Reading Env Files**  
   * Accessing and utilizing environment variables in Playwright.  
   * Managing multiple environment configurations effectively.  

2️⃣ **Test Annotations**  
   * Enhancing test readability and control using annotations.  
   * Practical examples: Skipping, focusing, or tagging specific tests.  

3️⃣ **Storage State (Skip Login)**  
   * Utilizing storage state to bypass login during test execution.  
   * Practical examples: Reducing redundant authentication steps.  

4️⃣ **Persistent Context**  
   * Maintaining user sessions across multiple test executions.  
   * Use cases: Testing applications that require persistent authentication.  

5️⃣ **Codegen**  
   * Generating Playwright scripts using the built-in Codegen tool.  
   * Editing and optimizing auto-generated test scripts.  

6️⃣ **Shadow DOM**  
   * Handling Shadow DOM elements in Playwright automation.  
   * Strategies for interacting with shadow-root elements.  

🕡 **Wrap Up / Q&A**  

📝 Keep your physical notebook and pen handy to sketch out ideas!



const arrayData= [name1,name2,name3]

const data1=arrayData[0]

console.log(arrayData[0])





const [data1,data2,data3]=[name1,name2,name3]

const credentials= [
  admin:{
    username:"admin1"
    pwd:"pwd"
  }
 user:{
    username:"uwer1"
    pwd:"pwd1"
  }

]

const[username,pwd]=credentials


npm install dotenv
file with extention .env


mutilple files to handle
const fileName=process.env.ENVFile
dotenv.config({path:`DataFiles/${fileName}.env`})

to set the value for the filename
$env:ENVFile='prod'

to check the filename what was appended to the path 
$env:ENVFile


npm install run -->to execute the code using scripts from package.json

faker -->random testdata generation
npm install @faker-js/faker

test annotation:
---------------
test.only -->execute the test() which is annotated with only
skip--->skip the test from the exection
fail-- > mention the fail as it has know bug/ error -->failing it
fixme--> to inform team /dev, the test has bug to fix
slow --> if the response / if the app is flaky -->applicable with triple the default timeout 
step -->log the information in report
describe -->to group the testcases --> run the test in parallel, serial, sequential,retries,timeout


describe.parallel -->run the test in parallel
describe.serial -->status of the previous tes have the impact of other test exectuion

For pre and post condition setup (hooks)
test.beforeAll
test.beforeEach
  test
test.afterEach
test.beforeEach
  test
test.afterEach
test.afterAll

grep -->global regular expression

npx playwright test --grep 'smoke'
npx playwright test  filename.spec.ts --ui  -->debugging purpose 

configFile
  grep:/smoke/,
testMatch -->execution purpose

npx playwright codegen -->generate the code based the actions persformed by the user
npx playwright codegen -o leaftaps.spec.ts "http://leaftaps.com/opentaps/control/main"