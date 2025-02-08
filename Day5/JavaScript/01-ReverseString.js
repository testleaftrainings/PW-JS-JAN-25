
//String Reversal

let companyName="Testleaf"

function reverseString(){

    let chars = companyName.split("");

    console.log(chars);

    let reversedValue="";

    for (let index = chars.length-1; index >=0; index--){

        reversedValue=reversedValue+chars[index];

   }
   return reversedValue;
     
    }
    console.log(reverseString());
    