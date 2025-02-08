

//Reversal of String

let companyName="Malayalam";

function reverseString(){

    let chars = companyName.split("");
    console.log(chars);

    let reversed = "";

    for (let index = chars.length-1; index >=0; index--) {
        
        reversed=reversed+chars[index];
    }

    if (companyName.toLowerCase() === reversed.toLowerCase()) {
        console.log("The string is a palindrome.");
    } else {
        console.log("The string is not a palindrome.");
    }

    
return reversed;

}

console.log(reverseString());
