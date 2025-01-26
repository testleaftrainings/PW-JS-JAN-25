// Global Scope
var globalVar = "Global var";
let globalLet = "Global let";
const globalConst = "Global const";

function demoScope() { // Function Scope
   
    var functionVar = "Function var";
    let functionLet = "Function let";
    const functionConst = "Function const";

    if (true) { // Block Scope
        var blockVar = "Block var"; // Escapes block scope
        let blockLet = "Block let"; // Block-scoped
        const blockConst = "Block const"; // Block-scoped
        console.log(blockVar);   // ✅ Accessible
        console.log(blockLet);   // ✅ Accessible
        console.log(blockConst); // ✅ Accessible
    }

    console.log(blockVar);   // ✅ Accessible
    // console.log(blockLet); // ❌ Error: blockLet is not defined
    // console.log(blockConst); // ❌ Error: blockConst is not defined
}

demoScope();

console.log(globalVar);   // ✅ Accessible
console.log(globalLet);   // ✅ Accessible
console.log(globalConst); // ✅ Accessible

