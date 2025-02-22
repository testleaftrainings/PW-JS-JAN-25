# Playwright JS Data Reading Guide

This guide outlines how to efficiently read data from various sources such as JSON, CSV, and environment variables in your Playwright test scripts. Additionally, it includes instructions for enabling video capture and tracing.

## Table of Contents
- [JSON](#json)
- [CSV](#csv)
- [Environment Variables (ENV)](#environment-variables-env)
- [excel](#excel)

## JSON

You can read data from a JSON file using the Node.js `fs` module or any other preferred library.

### Example

```javascript
import fs from 'fs';

const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// Use jsonData in your tests
```

## CSV

To read data from a CSV file, you can utilize libraries like `csv-parse` combined with `fs`.

### Example

```javascript
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const loginData = parse(fs.readFileSync(path.join(__dirname, "testData.csv")), {
    columns: true,
    skip_empty_lines: true,
    skip_records_with_empty_values: true
});

for (const data of loginData) {
    test(`Learn to read data from CSV file for ${data.testId}`, async ({ page }) => {
        await page.goto("http://www.leaftaps.com/opentaps");
        await page.fill("#username", data.username);
        await page.fill("#password", data.password);
        await page.click(".decorativeSubmit");
    });
}
```

## Environment Variables (ENV)

Accessing environment variables in tests can be done using `process.env`.

### Example

```javascript
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

// Use username and password in your tests
```
## excel
you can read data from a Excel file, you can utilize libraries like `xlsx`.

 -to use the library
 npm install xlsx
function readExcelFile(filePath: string): any[] {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  // Convert the worksheet to JSON
  const data = XLSX.utils.sheet_to_json(worksheet);
  return data;
}
- ** Read the filePath:
const filePath=path.join(__dirname,"../../data/credentials.xlsx")
    // Reading Excel data
  const excelData = readExcelFile(filePath);

- ** Sample code
for(const data of excelData){
test(`Read Excel Data ${data.username}`, async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.fill("#username",data.username)
        await page.fill("#password",data.password)
        await page.click(".decorativeSubmit")    
     
});
}
## Final Notes

- **Ensure Correct Paths**: Always ensure the paths to your storage state files, user data directories, and other resources are correct.
- **Environment Variables**: Use environment variables to manage sensitive data and configuration settings securely.


## File Upload

Automating file uploads through web forms is crucial for testing upload functionalities.

### setInputFiles

```javascript
// Setting files on input elements to simulate file selection
await page.setInputFiles('#upload-selector', 'path/to/file.txt');
```

### setFiles

```javascript
// Interacting with file chooser dialogs
const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.click('#upload-btn')
]);
await fileChooser.setFiles('path/to/file.txt');
```
## File Downloads with Playwright

Automating file downloads ensures the correct handling of files from web applications. This guide covers managing the download process and saving the downloaded files to a specific location using Playwright.

### Download Event and suggestedFilename

To manage the download process and retrieve the suggested filename, use the `download` event in combination with the `suggestedFilename()` method.

### Example

```javascript
const fileDownloadPromise = page.waitForEvent('download');
await page.getByRole('button', {name:'Download'}).click();
const fileDownloader = await fileDownloadPromise;
console.log('Suggested Filename:', download.suggestedFilename());
```

In this example, Playwright waits for the download event to be triggered by clicking on the download link. Once the download starts, it logs the suggested filename.

### Saving the Downloaded File

To save the downloaded file to a specific location, use the `download.path()` method along with the `saveAs()` method.

### Example

```javascript
const path = await download.path();
await download.saveAs('/path/to/save/file');
```

This example demonstrates how to retrieve the path of the downloaded file and save it to a specified location on your filesystem.

### Final Notes

- **Ensure Correct Paths**: Make sure the paths to save the files are correctly specified and that the application has the necessary permissions to write to those paths.
- **Handling Multiple Downloads**: For handling multiple downloads, ensure each download event and file save operation is correctly awaited to avoid conflicts.
