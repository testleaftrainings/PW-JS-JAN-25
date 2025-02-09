

let productId : number | string = 7654;
productId='R7654'


type productDatatype = number | string | boolean;
let accountNumber: productDatatype = "0023132313"
accountNumber=248916496;
accountNumber=false;

type supportBrowsers = "Chrome"| "Firefox";

function invokeBrowsers(browserName:supportBrowsers){
if (browserName==="Chrome"){
console.log("Launch Chrome browser");
}
else{
    console.log("Launch Firefox browser");
}
}

invokeBrowsers("Firefox")

//Intersection tupe

type Admin ={
adminName : string,
priveleges : string[]
}

type Emp = {
name : string,
empId : number,
date : string

}

type QA = Admin & Emp

const userProfile : QA = {
 
    adminName : "TestLeaf",
    name: "Ravi",
    priveleges : ['server'],
    empId : 1111,
     date : "09-02-2025"
   
}

console.log(userProfile.adminName);
console.log(userProfile.priveleges);
