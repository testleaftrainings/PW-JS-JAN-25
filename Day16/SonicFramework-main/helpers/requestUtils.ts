import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

export async function httpRequest(
    method: 'get' | 'post' | 'put' | 'delete' | 'patch',
    endPoint: string,
    userData?: Record<string, any>,
    customHeaders?: Record<string, string>,
    additionalConfig?: AxiosRequestConfig
): Promise<any> {
    let requestBody: any;
    let isFormData = false;

    // Check if userData is provided and determine if it's FormData
    if (userData) {
        isFormData = Object.values(userData).some(value => value instanceof Blob || typeof value === 'string');
        
        if (isFormData) {
            // If userData contains Blobs or strings, use FormData
            requestBody = new FormData();
            Object.entries(userData).forEach(([key, value]) => {
                requestBody.append(key, value);
            });
        } else {
            // Otherwise, treat userData as JSON
            requestBody = JSON.stringify(userData);
        }
    }

    try {
        const headers = {
            "Content-Type": isFormData ? "multipart/form-data" : "application/json",
            "Connection": "keep-alive",
            ...customHeaders,
        };

        const config: AxiosRequestConfig = {
            headers,
            ...additionalConfig
        };

        // Use axios method based on the specified HTTP method
        const response: AxiosResponse<any> = await axios({
            method,
            url: endPoint,
            data: method !== 'get' ? requestBody : undefined, // Set request body only for non-GET requests
            ...config
        });

        return {
            data: response.data,
            status: response.status
        };

    } catch (error) {
        console.error(`Error making ${method.toUpperCase()} request:`, error);
        throw error;
    }
}
