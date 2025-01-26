// Declare a global variable as const
const browserName = "Chrome";

function getBrowserVersion() {
    // Check if the global variable matches "Chrome"
    if (browserName === "Chrome") {
        // Shadowing with 'var'
        var browserVersion = "Version 112"; // Local variable
        console.log("Inside if block with var:", browserVersion);
    }

    // Prints the local variable shadowed by 'var'
    console.log("Outside if block with var:", browserVersion);

    if (browserName === "Chrome") {
        // Shadowing with 'let'
        let browserV = "Version 112"; // Block-scoped variable
        console.log("Inside if block with let:", browserVersion);
    }
   // Prints the global variable since 'let' is block-scoped
 console.log("Outside if block with let:", browserV);
}

 
 
// Call the function
getBrowserVersion();
