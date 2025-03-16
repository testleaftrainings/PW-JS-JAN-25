import test, { expect } from "@playwright/test";
import { createLead } from "../../api/createLead-api";

/**
 * Test case to create a new Lead asynchronously.
 * This test case verifies the functionality of the createLead function.
 */
test(`Create a new Lead`, async () => {
    const leadId = await createLead();   // Calls the function createLead to initiate the creation of a new Lead.
    console.log(leadId);    // Logs the ID of the newly created Lead to the console for verification or further actions.
        
})
