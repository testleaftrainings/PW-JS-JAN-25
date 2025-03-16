import xlsx from 'xlsx';

/**
 * Reads an Excel file and returns its content as an array of objects.
 * @param filePath The path to the Excel file.
 * @returns An array of objects representing the data in the first sheet of the Excel file.
 */
export const readExcelFile = (filePath: string): any[] => {
  const workbook = xlsx.readFile(filePath); // Read the Excel file into a workbook object.
  const sheetName = workbook.SheetNames[0]; // Get the name of the first sheet in the workbook.
  const worksheet = workbook.Sheets[sheetName]; // Get the worksheet object for the first sheet.
  return xlsx.utils.sheet_to_json(worksheet); // Convert the worksheet data to JSON format and return it.
};

/**
 * Writes an array of objects to an Excel file.
 * @param filePath The path to the Excel file.
 * @param data The array of objects to write to the Excel file.
 */
export const writeExcelFile = (filePath: string, data: any[]): void => {
  const worksheet = xlsx.utils.json_to_sheet(data); // Convert the data array to a worksheet object.
  const workbook = xlsx.utils.book_new(); // Create a new workbook object.
  xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1'); // Append the worksheet to the workbook.
  xlsx.writeFile(workbook, filePath); // Write the workbook to the specified file path.
};
