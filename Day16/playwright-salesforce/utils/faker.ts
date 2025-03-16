import { faker } from "@faker-js/faker";
import path from "path";
import fs from 'fs'

/**
 * Utility class providing methods to generate fake data using Faker library.
 * These methods help in creating realistic test data for various scenarios.
 */
export class FakerData {

    /**
    * Utility class providing methods to generate fake data using Faker library.
    * These methods help in creating realistic test data for various scenarios.
    */
    static getFirstName(): string {
        return faker.person.firstName();
    }

    /**
    * Generates a random last name using Faker.
    */
    static getLastName(): string {
        return faker.person.lastName();
    }

    /**
     * Generates a random mobile number.
     */
    static getMobileNumber(): string {
        return getPhoneNumber();
    }

    /**
     * Generates a random email address using Faker.
     */
    static getEmail(): string {
        return faker.internet.email();
    }

    /**
     * Generates a random street address using Faker.
     */
    static getAddress(): string {
        return faker.location.streetAddress();
    }

    /**
     * Generates a random job role using Faker.
     */
    static jobRole(): string {
        return faker.person.jobTitle();
    }

    /**
     * Generates random tag names.
     */

    static getTagNames() {
        const techTerm = faker.hacker.noun();
        return techTerm;
    }

    /**
     * Generates random location names.
     */
    static getLocationName() {
        const location = faker.location.street();
        return location;
    }

    /**
     * Generates a unique user ID based on current timestamp and a random first name.
     */
    static getUserId(): string {
        const currentDate = new Date();
        const milliseconds = currentDate.getTime().toString();
        const user = faker.person.firstName() + milliseconds
        return user;
    }

    /**
     * Generates a random session descriptor using Faker.
     */
    static getSession(): string {
        const session = faker.person.jobDescriptor()
        return session
    }

    /**
     * Generates a random paragraph of lorem ipsum text using Faker.
     */
    static getDescription(): string {
        const description = faker.lorem.paragraph();
        return description;
    }

    /**
     * Generates a random category string using Faker.
     */
    static getCategory(): string {        
        const category = faker.company.buzzVerb() + " " + faker.company.buzzNoun()
        return capitalizeFirstLetter(category);
    }

    /**
     * Generates a random price string using Faker.
     */
    static getPrice():string{
        return faker.commerce.price()
    }

    /**
     * Generates a random female salutation using Faker.
     */
    static salutationFemale(): string {
        return faker.person.prefix('female');
    }

    /**
     * Generates a random male salutation using Faker.
     */
    static salutationMale(): string {
        return faker.person.prefix('male');
    }

    /**
     * Generates a random company name using Faker.
     */
    static company(): string {
        return faker.company.name();
    }
}

/**
 * Capitalizes the first letter of a string.
 * @param letter The input string.
 * @returns The input string with the first letter capitalized.
 */
function capitalizeFirstLetter(letter: string) {
    return letter.charAt(0).toUpperCase() + letter.slice(1);
}

/**
 * Generates a random 10-digit phone number starting with 7, 8, or 9.
 * @returns A random 10-digit phone number as a string.
 */
function getPhoneNumber(): string {
    const startDigit = Math.floor(Math.random() * 3) + 7;
    const restDigits = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10)).join('');
    return `${startDigit}${restDigits}`;
}

/**
 * Type definition for a data item.
 */
type DataItem = string;

/**
 * Retrieves a random location data item from a JSON file.
 * @returns A random location data item.
 */
export function getRandomLocation(): DataItem | any {
    try {

        const filePath = path.join(__dirname, '../data/location.json');
        const jsonData = fs.readFileSync(filePath, 'utf8');
        const dataArray: DataItem[] = JSON.parse(jsonData);
        if (!Array.isArray(dataArray) || dataArray.length === 0) {

            throw new Error('Data array is empty or not an array');
        }
        const randomIndex = Math.floor(Math.random() * dataArray.length);
        const randomValue = dataArray[randomIndex];
        return randomValue;
    } catch (error) {
        console.error('Error in getRandomDataItem:', error.message);
        return null;
    }
}

/**
 * Retrieves the current date formatted as MM/DD/YYYY.
 * @returns The current date formatted as MM/DD/YYYY.
 */
export function getCurrentDateFormatted(): string {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}





