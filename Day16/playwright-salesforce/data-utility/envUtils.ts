import dotenv from 'dotenv';
import path from 'path';

/**
 * Loads environment variables from a specified .env file.
 * @param envFilePath The relative or absolute path to the .env file.
 */
export const loadEnvFile = (envFilePath: string) => {
  const fullPath = path.resolve(envFilePath); // Resolve the full path of the .env file.
  console.log(`Loading environment variables from: ${fullPath}`);
  dotenv.config({ path: fullPath }); // Load the environment variables from the .env file.
};

/**
 * Retrieves the value of an environment variable.
 * @param key The key of the environment variable to retrieve.
 * @returns The value of the environment variable, or undefined if it is not set.
 */
export const getEnvVariable = (key: string): string | undefined => {
  const value = process.env[key]; // Get the value of the environment variable from the process environment.
  console.log(`Environment variable ${key}:`, value);
  return value; // Return the value of the environment variable.
};
