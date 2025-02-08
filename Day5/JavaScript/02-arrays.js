

//push - add one or more elements to end of an array

const { log } = require("console");

/* let browserActions = ['Login','SignUp', 'UserProfile'];
/* browserActions.push('Notifications');
console.log(browserActions); */

//pop - remove the last element from an array and return it

/* browserActions.pop();
console.log(browserActions); */

//shift() -remove the first element from the array
let browserNames=["Chrome", "Edge","Safari","Firefox"]
/* browserNames.shift()
console.log(browserNames); */


//unshift()- add one or more elements to the beginning of an array

/* browserNames.unshift("Opera","Brave")
console.log(browserNames);
 */
//slice() - extract a section of an array without modifying the original array

let cart = ['bluetooth', 'phone', 'powerbank','airpods', 'speakers']
/* let result = cart.slice(1,3);// 2-->Start index, 3 -->End Index
console.log(result); */

//splice() - add or remove elements from original  array

/* cart.splice(1,3,"laptop","pendrive","charger");
console.log(cart); */

//spread syntax[...array] -copy or merge an array

/* let numbers =[1,2,3,4];
let copiedNumbers=[...numbers]
console.log(copiedNumbers); */

/* let array1 = [1,2];
let array2 = [3,4];
let mergeArray=[...array1,...array2]
console.log(mergeArray); // Spread Multiple functionality- slower cause destructuring of array

//concat - merge an array
let concatArray = array1.concat(array2);
console.log(concatArray);//directly constructs a new array hence it is faster */


//sort -- sort() method happens it takes value in lexicographical order

/* numberArray.sort();
console.log(numberArray); */

//numbers - compare function
/* numberArray.sort((a,b)=>a-b);
//6,1=>6-1=5>0
console.log(numberArray); */

//forEach

/* numberArray.forEach((num)=> {
console.log(num);
}) */

/* let sum=0;
numberArray.forEach((num)=> {
    sum+=num;
    })
    console.log(sum); */

//map -Transform the data without modifying the existng array
let numberArray = [6,1,2,4,10,9]
/* let squared=numberArray.map((num)=>num*num);
console.log(squared); */

//filter- new array contains the elements of the original array but will apply a specific condition
/* let even = numberArray.filter((num)=>num%2===0);
console.log(even); */


//length - get the length of the array



//join
console.log(numberArray.join('#'));

let heterogenousArray = [2,3,"Chrome",true,undefined,["Firefox","Safari"]]
console.log(heterogenousArray);

