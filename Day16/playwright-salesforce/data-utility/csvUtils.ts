import fs from 'fs';
import csv from 'csv-parser';

/**
 * Reads a CSV file and returns its content as an array of objects.
 * @param filePath The path to the CSV file.
 * @returns A promise that resolves to an array of objects representing the CSV data.
 */
export const readCsvFile = (filePath: string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const results: any[] = [];
    fs.createReadStream(filePath) // Create a readable stream from the CSV file.
      .pipe(csv()) // Pipe the stream through the CSV parser.
      .on('data', (data) => results.push(data)) // Collect data chunks into the results array.
      .on('end', () => resolve(results)) // Resolve the promise with the results array when the stream ends.
      .on('error', (error) => reject(error)); // Reject the promise if an error occurs.
  });
};

/**
 * Writes an array of objects to a CSV file.
 * @param filePath The path to the CSV file.
 * @param data The array of objects to write to the CSV file.
 */
export const writeCsvFile = (filePath: string, data: any[]): void => {
  const csvWriter = require('csv-writer').createObjectCsvWriter({
    path: filePath, // The path to the CSV file.
    header: Object.keys(data[0]).map((key) => ({ id: key, title: key })), // Create headers from the keys of the first data object.
  });

  csvWriter.writeRecords(data); // Write the data to the CSV file.
};
