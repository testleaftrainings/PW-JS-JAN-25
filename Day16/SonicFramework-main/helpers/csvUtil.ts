import * as fs from 'fs';
import csv from 'csv-parser';


export async function readDataFromCSV(filePath: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const data: any[] = [];
    /* 
        `fs.createReadStream(filePath)`: This line uses Node.js's fs module to create a 
        readable stream from the CSV file specified by the filePath.
    
        .`pipe(csv())`: This line pipes the readable stream through a CSV parser, 
        which parses the CSV data into JavaScript objects. */

    fs.createReadStream(filePath)
      .pipe(csv())
      /* .on('data', (row) => { ... }): This event handler is called whenever a new row of data 
      is parsed from the CSV. It pushes each row into the data array. */
      .on('data', (row) => {
        data.push(row);
      })

      /* .on('end', () => { ... }): This event handler is called when the end of 
      the CSV file is reached. It resolves the Promise with the data array,
      indicating that the operation is complete.
     */
      .on('end', () => {
        resolve(data);
      })

      /* .on('error', (error) => { ... }): This event handler is called 
      if an error occurs during reading or
      parsing the CSV file. It rejects the Promise with the error. */
      .on('error', (error) => {
        reject(error);
      });
  });
}