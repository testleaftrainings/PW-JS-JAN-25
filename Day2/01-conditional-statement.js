
// let browserName="chrome"
// getBrowser()

// function getBrowser() {
// if (browserName==="chrome"){

//     console.log("Supported browser")
// }else{

//     console.log("UnSupported browser")
// }

// }


// Multiple conditions to check


// function getBrowserVersion() {
// if (browser==="chrome"){
//     return 131

// }else if(browser==="edge"){

//     return 132
// }
// else if(browser==="safari"){

//     return 17
// }
// else if(browser==="firefox"){

//     return 130
// }else {
//     return "UnSupported browser"
// }
// }
// let browser="Opera";

// // Function Expression
// let browserFunction = getBrowserVersion();
// console.log(browserFunction)


//Switch statement

function getVersion(){
switch(browser){

    case 'chrome':
        console.log("131")
        break;

    case 'edge':
            console.log("131")
            break;

    case 'safari':
                console.log("131")
                break;
            
    case 'firefox':
                console.log("131")
                    break;
    default :
                console.log("unsupported browser")
                        break;
    
}
}

browser = "firefox";
getVersion();

