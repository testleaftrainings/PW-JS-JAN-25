import axios from 'axios';

// Function to get bearer token
export async function getBearerToken(): Promise<string> {
    const tokenEndpoint = 'https://login.salesforce.com/services/oauth2/token';
    const payload = new URLSearchParams({
        grant_type: 'password',
        client_id: '3MVG9pRzvMkjMb6lZlt3YjDQwe_zvxjF7EIekX3_KiigblZ8GqqbsiNUddz45YkXX8NGFE3ytGp8nvz0Q6y_T',
        client_secret: '7E7764FDE290E5EBB98ECC8504E1DB53E6E09AD358B0693E4DE3119EE51635B5',
        username: "ranjini.r@testleaf.com",
        password: "Testleaf@543"
    });

    try {
        const response = await axios.post(tokenEndpoint, payload.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        // Extract the bearer token from the response
        const bearerToken = response.data.access_token;
        //console.log('Bearer Token:', bearerToken);

        return bearerToken;
    } catch (error) {
        console.error('Error fetching bearer token:', error);
        throw error;
    }
    
}

