// utils/excelReader.ts
import * as XLSX from 'xlsx';

export class ExcelReader {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    // Method to read the entire sheet into an array of objects
    public readExcel(sheetIndexOrName: number | string = 0): any[] | null {
        try {
            const workbook = XLSX.readFile(this.filePath);

            let sheetName: string;
            if (typeof sheetIndexOrName === 'number') {
                if (sheetIndexOrName >= workbook.SheetNames.length) {
                    console.error(`Sheet index ${sheetIndexOrName} out of range. Max index: ${workbook.SheetNames.length - 1}`);
                    return null;
                }
                sheetName = workbook.SheetNames[sheetIndexOrName];
            } else if (typeof sheetIndexOrName === 'string') {
                if (!workbook.SheetNames.includes(sheetIndexOrName)) {
                    console.error(`Sheet name "${sheetIndexOrName}" not found in the workbook.`);
                    return null;
                }
                sheetName = sheetIndexOrName;
            } else {
                console.error('Invalid sheet index or name');
                return null;
            }

            const worksheet = workbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            if (data.length === 0) {
                return []; 
            }

            const headers = (data[0] as string[]).map(header => header.trim().toLowerCase()); // Normalize headers
            const rows = data.slice(1) as any[];

            return rows.map((row: any[]) => {
                const rowObject: any = {};
                headers.forEach((header: string, index: number) => {
                    rowObject[header] = row[index];
                });
                return rowObject;
            });
        } catch (error) {
            console.error('Error reading the Excel file:', error);
            return null;
        }
    }

   
    public getRowByTestcase(sheetIndexOrName: number | string, testcase: string ): any | null {
        const data = this.readExcel(sheetIndexOrName);
        if (data) {
            return data.find(row => row.testcase === testcase) || null;
        }
        return null;
    }
}
/* const reader = new ExcelReader('../data/expertousOneData.xlsx');
const testCaseID = "TC004";
const rowData = reader.getRowByTestcase('admin', testCaseID); 

if (rowData) {
    const login = rowData?.login; 
    console.log('Login:', login); 
} else {
    console.error(`No data found for testcase "${testCaseID}"`);
} */