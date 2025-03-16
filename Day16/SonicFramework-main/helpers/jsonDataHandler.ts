import fs from 'fs';
import path from 'path';

interface Data {
  managerName?: string;
  adminName?: string;
  courseAdmin?: string;
  talentAdmin?:string;
  peopleAdmin?: string
  commerceAdmin?: string;
  learnerAdmin?:string;
  customAdmin?: string;
  instructorName?: string;
  commonUser?: string;
  enrollAdmin?: string;
  internalUser?:string;
  externalUser?:string;
  teamUser1?:string;
  teamUser2?:string;

}

const fileName = '../data/adminGroupsData.json';

export function updateFieldsInJSON(newData: Data): void {
  const filepath = path.join(__dirname, fileName);

  let existingData: Data = {
    enrollAdmin: ''
  };


  try {
    const data = fs.readFileSync(filepath, 'utf8');
    existingData = JSON.parse(data);
  } catch (err) {
    console.error('Error reading file:', err);

    return;
  }

  const updatedData: Data = {
    ...existingData,
    ...newData
  };
  const jsonData: string = JSON.stringify(updatedData, null, 2);

  fs.writeFile(filepath, jsonData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing JSON file:', err);
    } else {
      console.log('JSON file has been updated.');
    }
  });

}
export function saveDataToJsonFile(filename: string, data: any): void {
  const jsonContent = JSON.stringify({ title: data }, null, 2);
  const filePath = path.join(__dirname, filename);
  fs.writeFile(filePath, jsonContent, 'utf8', (err) => {
    if (err) {
      console.error('An error occurred while writing JSON to file:', err);
    } else {
      console.log(`JSON file has been saved to ${filePath}`);
    }
  });
}


function getRandomItemFromFile(filePath: string): string {
  const dataFilePath = path.join(__dirname, filePath);
  const data: string[] = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}

export { getRandomItemFromFile };

interface tcData {
  tc071a?: string
  tc071b?: string
  tc073?: string
  tc056?: string
  tc057?: string
  tc058?: string
}
const cronFile = '../data/cronjob.json';

export function updateCronDataJSON(newData: tcData): void {
  const filepath = path.join(__dirname, cronFile);

  let existingData: tcData = {
    tc071a: ''
  };


  try {
    const data = fs.readFileSync(filepath, 'utf8');
    existingData = JSON.parse(data);
  } catch (err) {
    console.error('Error reading file:', err);

    return;
  }

  const updatedData: tcData = {
    ...existingData,
    ...newData
  };
  const jsonData: string = JSON.stringify(updatedData, null, 2);

  fs.writeFile(filepath, jsonData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing JSON file:', err);
    } else {
      console.log('JSON file has been updated.');
    }
  });

}