import jsonfile from 'jsonfile';

/**
 * Reads a JSON file and returns its content.
 * @param filePath The path to the JSON file.
 * @returns A promise that resolves to the content of the JSON file.
 */
export const readJsonFile = (filePath: string): Promise<any> => {
  return jsonfile.readFile(filePath); // Reads the JSON file and returns a promise with the content.
};

/**
 * Writes data to a JSON file.
 * @param filePath The path to the JSON file.
 * @param data The data to write to the JSON file.
 */
export const writeJsonFile = (filePath: string, data: any): void => {
  jsonfile.writeFile(filePath, data, { spaces: 2 }); // Writes the data to the JSON file with 2-space indentation.
};
