const accountid=2348;
//accountid=434 not allowed to change the value while using const
console.log(accountid);
//Mixed Example
const price1=4;
const price2=5;
let total=price1+price2; 
console.log(total);
total=5 // Note-this total value can be changed as we declared it using let
console.log(total)

// Reason why we should not use var 
var x=10;
let a=2;
if(a==2){
    x=7;
    console.log(x)
}
console.log(x) //this also print 7 as it got leaked out of function.

let y=10;
let b=2;
if(b==2){
    let y=7;
    console.log(y)
}
console.log(y) //this also print 10 as we delared with let - let y=7; which is code specific.

var accountEmail="gurjot24@gmail.com"
accountEmail="Rani24@gmail.com"
console.log(accountEmail) // the value can be changed.

// i don't know the default state.
let accountState;
console.log(accountState);

//not want to use console.log again and again

console.table([accountid,accountEmail,accountState])
//this create a table