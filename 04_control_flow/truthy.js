//truthy values: it is assumed that this value is true , for example- like anthing written in strings is true and empty string is assumed false-""

/*falsy values
false,0,-0(asked in iv),Bigint(in this 0n is witten which also assumed false value),"",null,undefined,NaN

truthy values:
other values not listed above are true values like:

0 inside string- "0" is truthy value
false inside string- "false" is truthy value  be careful
space inside string- " " is truthy value 
so anything string is truthy value

empty array [] is truthy value
empty object {} is trthy value 
empty function- function(){} is truthy value
*/

//To check if array is empty
const myarr=[];
if (myarr.length == 0){
    console.log("Array is Empty");
}
if (myarr){
    console.log("Array is Empty");  //same logic as above -empty array is true  
}

//To check empty object
const obj={};
if (obj){
    console.log("Object is Empty"); 
}

if(Object.keys(obj).length===0)
{
    console.log("Object is Empty"); 
}

//General(may ask in iv)
console.log(false==0); //true 
console.log(false==''); //true
console.log(0==''); //true

/* Nullish Coalescing Operator (??) :null defined
It is made to handle null and undefined as some program may not work properly when these values are given.For eg if we call database or use  firefox, u directly not get values and u may recieve null response or undefined (no value). so this handles- if it has null value then assign this particular value. Basically handles errors
*/
let val=5 ?? 10;
console.log(val); //5 - prints the first value

let val1=null ?? 100;  //here instead of 100 it can be a complex function which may calls database and from there a value is received
console.log(val1); //100 - if null then it does safety check

let val2=undefined ?? 20; //20
console.log(val2);

val4=null ?? 50 ?? 30; // if you get two values from some function then it assigns the first value
console.log(val4); //50


//Terniary Operator
// condition ? true : false 
const price=80;
price<100 ? console.log("Price less than 100") : console.log("Price greater than 100");