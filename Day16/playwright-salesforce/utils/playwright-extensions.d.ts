// Importing the Page interface from the '@playwright/test' module
import { Page } from "@playwright/test";

// Extending the Page interface from '@playwright/test' module
// to include additional methods for custom actions
declare module '@playwright/test' {

    // Augmenting the Page interface with new methods
    interface Page {
        
        // Method definition for delayedFill, which takes a selector and a value
        // and returns a Promise<void> indicating asynchronous completion
        delayedFill: (selector: string, value: string) => Promise<void>;

        // Method definition for clickAndDelay, which takes a selector
        // and returns a Promise<void> indicating asynchronous completion
        clickAndDelay: (selector: string) => Promise<void>;
    }
}
