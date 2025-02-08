

let batonPass = new Promise((resolve,reject)=>{

let isBatonDelivered=false;

if(isBatonDelivered){

resolve("Baton got passed ");
}else
{
    reject("The baton dropped");  
}

});

//Using the promise

batonPass.then(message=>{
    
    console.log(message)

})
.catch(error=>{
console.log(error)

})


let age=25;
age="Twenty Five"