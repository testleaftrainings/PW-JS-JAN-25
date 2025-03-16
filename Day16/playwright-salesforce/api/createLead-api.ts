import axios from 'axios';
import { getBearerToken } from './get-bearer-token';

// Function to create a new lead
export async function createLead(): Promise<string | undefined>  {
    const url = 'https://testleaf30-dev-ed.develop.my.salesforce.com/services/data/v58.0/sobjects/Lead';
    
    const bearerToken = await getBearerToken();
    // Request body
    const data = {
        "FirstName": "Ranjini",
        "LastName": "R",
        "Company": "TCS"
    };

    // Set up the request headers
    const config = {
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        }
    };

    try {
        // Perform the POST request
        const response = await axios.post(url, data, config);
        console.log('Customer created:', response.data);

        // Return the display name of the created customer
        return response.data.id;
    } catch (error) {
        console.error('Error creating customer:', error);
        if (axios.isAxiosError(error)) {
            console.error('Axios error message:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            }
        }
    }
}
