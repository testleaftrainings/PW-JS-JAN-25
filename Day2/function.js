// ///Function declaration

// function  functionName() {

//     console.log("Hello")
// }

// functionName()

// //Anonymous declaration/ Function expression

// let funVar = function () {

//     console.log("Hello Goodafternoon")
// }

// funVar()


//Arrow Function 

// let funVarArrow =  ()  => {

//     console.log("Hello Goodafternoon this is Arrow Func.")
// }

// funVarArrow()

//IIFE - ImmediatelyInvoked Function

// (function () {

//         console.log("Hello Goodafternoon I am an IIFE")
//     }
// )

// ()
   
//Call back function

function greetEveryone (name, call) {

    console.log("Hello " + name );

    call(); // Call the function passed as a callback function
}

function displayThanks(){
    console.log("Thanks for learning with us")
}
greetEveryone("PW Jan Learners",displayThanks)