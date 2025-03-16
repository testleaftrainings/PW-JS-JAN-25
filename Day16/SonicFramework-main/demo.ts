// const count = 2
// for (let index = 0; index < 10; index++) {
//     const randomIndex = Math.floor(Math.random() * (count)) + 1;
//     console.log(randomIndex);
// }
// import { FakerData } from "./utils/fakerUtils";

import { customAdminOuthData, userCreationData } from "./data/apiData/outhData";
import { postRequest } from "./utils/requestUtils";
import { assertResponse } from "./utils/verificationUtils";
import url from "./data/apiData/url.json"
import { generateOauthToken } from "./api/accessToken";


import { read } from "fs";
import { faker } from "@faker-js/faker";
// // }

// function getCurrentDateFormatted(): string {
//     const date = new Date();
//     const month = String(date.getMonth() + 1) 
//     console.log(month);
//     const day = String(date.getDate())
//     console.log(day)
//     const year = date.getFullYear();
//     return `${month}/${day}/${year}`;
// }
// //getCurrentDateFormatted()


// for (let index = 0; index < 10; index++) {
//     console.log(FakerData.getCourseName());
// }

//const arry:any =[ { 'NOW()': 2024-07-11T10:44:06.000Z } ]

/* function generateRandomNumbers(): number[] {
    let count =50
    const numbers: number[] = [];

    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        numbers.push(randomNumber);
    }

    return numbers;
}

// Example usage: Generate 50 random numbers between 50 and 100
const randomNumbers = generateRandomNumbers();
console.log(randomNumbers); */


/* 
function generateRandomNumber(): number {
    return Math.floor(Math.random() * (100 - 50 + 1)) + 50;
}

// Example usage: Generate one random number between 50 and 100
const randomNumber = generateRandomNumber();
console.log(randomNumber); */


/* function generateSpecificRangeNumber(): number {
    const min = 50;
    const max = 100;
    const step = 5;
    const range = Math.floor((max - min) / step) + 1;
    const randomMultiple = Math.floor(Math.random() * range) * step + min;
    return randomMultiple;
}

// Example usage: Generate one number within the range 50 to 100, multiples of 5
const specificRangeNumber = generateSpecificRangeNumber();
console.log(specificRangeNumber);
 */

/* const radioCount = 9

for (let index = 0; index < 10; index++) {
    const randomCount = Math.floor(Math.random() * Math.floor(radioCount / 2))+1 ; 
    if(randomCount !==2){
    console.log(randomCount);
    
    }
    // console.log(randomCount);
} */

// const oddIndices: number[] = [];
// for (let i = 1; oddIndices.length < randomCount; i += 2) {
//     oddIndices.push(i);
// }
// for (const index of oddIndices){
//     console.log(index);

// }



/* let count = 10;
let generatedNumbers: number[] = [];

for (let i = 0; i < 4; i++) {
    let randomIndex: number;
    do {
        randomIndex = Math.floor(Math.random() * count) + 1;
    } while (generatedNumbers.includes(randomIndex));
    
    generatedNumbers.push(randomIndex);
    console.log(randomIndex);
} */
// let count = 5;
// for (let i = 0; i < 4; i++) {
//     const randomIndex = Math.floor(Math.random() * (count - 1)) + 2;
//     console.log(randomIndex);
// }


/* 
    for (let i = 0; i < 15; i += 5) {
        let indexToClick = i + 1;
        if (indexToClick <= 15) {
           console.log(indexToClick -1);
           
        }
    } */

/* 
        let clickIndices: number[] = [];
        for (let i = 0; i < 15; i++) {
            clickIndices.push((i * 5) + 4);
        }

        for (let index of clickIndices) {
            if (index < 15) {
                console.log(index);
                
            }
        }
 */


/* for (let index = 0; index <= 10; index ++) {
    if (index % 2 == 0) {
        console.log(index);
    }
}
 */

/* let printedIndices: number[] = []; 
for (let i = 0; i < 2; i++) {
    console.log(i);
    for (let index = 0; index < 4; index++) {
        if (index % 2 === 0) {
            if (!printedIndices.includes(index)) {
                printedIndices.push(index);
                console.log(index);
                break;
            }

        }
    }
}
 */
/* 
const startDigit = Math.floor(Math.random() * 3) + 7;
const restDigits = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10)).join('');
console.log(`${startDigit}${restDigits}`); */



/* const date = new Date();
    const month = String(date.getMonth() + 1)
    const day = String(date.getDate()+1);
    const year = date.getFullYear();
    console.log( `${month}/${day}/${year}`); */
/* for (let index = 0; index < 10; index++) {
    const min = 50;
    const max = 100;
    const step = 5;
    const range = Math.floor((max - min) / step) + 1;
    const randomMultiple = Math.floor(Math.random() * range) * step + min;
    console.log(randomMultiple);


} */
/* for (let index = 0; index < 30; index++) {
    console.log(Math.floor(Math.random() * (2))+1);

    
} */

/* let option=1
let rNum="anv"
    console.log(`(${option})[${rNum}]`); */
/* 
let a = ["Ajay", "Ajay", "Ajay", "Ajay"];
let count = a.filter(item => item === "Ajay").length;
console.log(count); // Output: 4
 */
// Add a count method to the Array prototype

// Example usage
/* let a = ["Ajay", "Ajay", "Ajay", "Ajay"];
console.log(a.length); // Output: 4
 */
/* for (let index = 0; index < 10; index++) {
    let count = 22;
    let randomNumber = Math.floor(Math.random() * (count / 3))+1;
    console.log(randomNumber);

} */
/* let access_token = "nsjkvnk";

// Format the authorization header as a string with single quotes around the token
let authorization = `Authorization: '${access_token}'`;

console.log(authorization);
 */
/* async function generateOauth() {
    try {
        const [response, status] = await postRequest(customAdminOuthData, url.endPointURL);
        return ["Bearer " + response.access_token, status];

    } catch (error) {
        console.error("Failed to generate OAuth token:", error);
        throw error;
    }
}
generateOauth()
    .then(response => {
        console.log("Received response:", response);
    })
    .catch(error => {
        console.error("Error occurred:", error);
    });
let access_token =generateOauth()[1]
console.log(access_token);
let authorization: any = `Authorization: '${access_token}'`;
async function userCreation() {

    try {
        // let un = userCreationData.username
        let [response, status] = await postRequest(userCreationData, url.endPointURL, authorization);
        console.log(status);
        await assertResponse(status, 200)
        return response.user_id
    } catch (error) {
        console.error("Failed to generate OAuth token:", error);
        throw error;
    }
}
async () => {
    await userCreation()
} */
/* import { chromium, Page } from "playwright";

async function exampleFunction(page: Page) {
    await page.goto("https://automation.expertusoneqa.in/backdoor");
    await page.fill("#username", "admin");
    await page.fill("#password", "Welcome1@");
    await page.click("//button[contains(text(),'SIGN')]");
    await page.waitForLoadState('load');
    await page.click("//div[text()='Menu']");
    await page.click("//span[text()='Learning']");
    await page.click("//a[text()='Location']");
    await page.waitForTimeout(5000);
    let loc = await page.innerHTML("(//h5[contains(@class,'card-title')])[1]");
    console.log(loc);
    await page.click(`//h5[text()='${loc}']`);
    await page.waitForTimeout(5000);
}

async function runTest() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await exampleFunction(page);
    await browser.close();
}

runTest();
 */


/* const currentMilliseconds = Date.now();
const randomNumber = Math.floor(Math.random() * 3);
const lastThreeDigits = (Number((currentMilliseconds.toString()).slice(7)))+randomNumber;
const result = lastThreeDigits + randomNumber;
console.log(lastThreeDigits);
 */
/* 
function login(username:any,lastname:any,address1?:any,adrress2?:any){
   let a = username,b = lastname,c =address1 , d =adrress2
   console.log(a,b,c,d);
   
}

login("","")
 */
/* 
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automation.expertusoneqa.in/learner/e1internal');
  await page.locator('#signin').click();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('managerUser');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Welcome1@');
  await page.locator('#login-form i').click();
  await page.locator('#login-form i').click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('#adminmenu').click();
  await page.getByRole('link', { name: 'Collaboration Hub' }).click();
  await page.locator('li').filter({ hasText: 'Video testingVideo testing' }).locator('i').nth(1).click();
  await page.locator('label').filter({ hasText: 'Select Team members' }).locator('i').first().click();
  await page.getByPlaceholder('Select').click();
  await page.getByRole('region', { name: 'Gallery' }).getByPlaceholder('Search').click();
  await page.getByRole('button', { name: 'Anastacio Kunde' }).click();
  await page.getByPlaceholder('Selected').click();
  await page.locator('div').filter({ hasText: /^Recommend Learning$/ }).click();
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.locator('.modal-header > .fa-duotone').click();
}); */

/* let num = [1, 1, 0, -1, -1];
let n = 5;
for (let i = 0; i < num.length; i++) {
    console.log(num[i] % n);
}

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://chatgpt.com/c/66ecfeca-b72c-8011-a313-1ee27595383c');
    await page.waitForTimeout(10000)
    await page.locator('##prompt-textarea p').focus();
    await page.keyboard.type("WHo is this", { delay: 200 })
    await page.waitForTimeout(3000)
    await page.click('button[aria-label="Send prompt"]')
}) */

/* const assmtTitle = (faker.word.noun() + " " + faker.word.verb() + " " + faker.word.sample());
console.log(assmtTitle); */
/* 
for (let index = 0; index < 4; index++) {
    if (index % 2 == 0) {
        console.log(index);

    }
} */

let starIconCount = 5;
let groupSize = 5;

for (let groupIndex = 0; groupIndex < Math.ceil(starIconCount / groupSize); groupIndex++) {
    let startIndex = groupIndex * groupSize;
    let endIndex = Math.min((groupIndex + 1) * groupSize - 1, starIconCount - 1);

    let randomIndex1 = Math.floor(Math.random() * (endIndex - startIndex + 1)) + startIndex;
    /* let randomIndex2 = Math.floor(Math.random() * (endIndex - startIndex + 1)) + startIndex;

    while (randomIndex1 === randomIndex2) {
        randomIndex2 = Math.floor(Math.random() * (endIndex - startIndex + 1)) + startIndex;
        break;
    } */
    for (let index = 0; index < 1; index++) {
        console.log(randomIndex1);
      
    }
    


}
