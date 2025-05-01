"use strict"; //treats entire JS code as the new version(new standards)
//alert is not defined here in node but we use it with different syntax. it is basically used to display a dialog with a message and ok button.

//string 
let name="Gurjot" // string is series of characters. prefer to write it in double qoutes.

//number
let age=18

//bigint is used when the number is too big. for eg used in trading , stock market or websites like flipkart.

//boolean 
let c=3
let b=3
let d=8
console.log((c==b)) // returns true
console.log((b==d))//returns false

//null is a standalone value it is an assignment not declaration.

//undefined
let state // this has no value but later it can have a value. this is a declaration not an assignment.

//symbol is basically used in react to define the uniqueness of the component.

//object



//the javaScript reads the expression diffrently 
let x= 7+'you'   
console.log(x) 

let j= 7+5+'you' //first number is encountered so it takes the sum untill it reaches you which is a string o/p=12you
console.log(j) 

let k= 'you'+7+5 // this encounters the string first so it treats other numbers as string o/p=you75   
console.log(k) 

//typeof operator is used to return the type of the variable 
console.log(typeof c) //returns number
console.log(typeof "Gurjot") // returns string
console.log(typeof state) //returns undefined
console.log(typeof null) //returns object which can be seen as an error of JS.