import { test } from "@playwright/test";
import { getBearerToken } from "../../api/get-bearer-token";

/**
 * Test case to generate a bearer token asynchronously.
 * This test case verifies the functionality of the getBearerToken function.
 */
test(`Generating bearer token`, async () => {
        const token = await getBearerToken();   // Calls the function getBearerToken to retrieve the bearer token.
        console.log(token);     // Logs the generated bearer token to the console for verification.   
   
})