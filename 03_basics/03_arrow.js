/* const user={
    username:"Rani",
    price: 1000,
    welcomeMessage: function(){
        console.log(`${user.username},welcome!`); //normally used dot method but here we use this
    }

}*/
const user={
    username:"Rani",
    price: 1000,
    welcomeMessage: function(){
        console.log(`${this.username},  welcome!`); //this refers current context
        console.log(this);  /*Rani,  welcome!
{
  username: 'Rani',
  price: 1000,
  welcomeMessage: [Function: welcomeMessage]
}    - this - provides current context */
    }

}

user.welcomeMessage(); 
user.username="Gurjot";
user.welcomeMessage();  //Gurjot,  welcome! - the usernamed changed as we did not hardcore the value, current context(currrent value) gets printed
console.log(this);  //{}  - in code environment this refers to an empty object but if you run this in brower, you see window(is global object-asked in iv),etc


//This in function
function one(){
    console.log(this);  //we get lots of values-explains this has some things which you can access
}
one();

/*this in function- <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}*/

function two(){
    let username='yo';
    console.log(username);  //yo
    console.log(this.username); //undefined- like this-the context only works in case of objects not in function
}
two();

// this concept is same for functions even if you declare it in other way using variable
const three = function(){
    let username='yo';
    console.log(username);  
    console.log(this.username);
}
three();


//Arrow Function
const fun1 = () => {
    console.log("Arrow function");
}
fun1();

//this in arrow function
const fun2 = () => {
    let username='ayo'; 
    console.log(this.username); //undefined- same concept as function
    console.log(this); //{} this in arrow func gives empty object
}
fun2();

//More about arrow function
//with parameters
const addno= (num1,num2)=> {
    console.log(num1+num2);
}
addno(5,7);

// Implicit return - no need to use the keyword return because of just one line statement -very useful in react (mostly used)

const add2=(num1,num2)=> num1+num2;
console.log(add2(4,4));

//for easy understanding-  if wrapped in curly braces {} -then need to write the keyword return(that is explicit return), if wrapped in parenthesis ()-then no need to write the keyword return

const add3=(num1,num2)=> (num1+num2);
console.log(add3(5,5));

//returning object in arrow function with implicit return
const myobj=()=>({username:"Jaggu",age:16})  //to return object, wrap in parenthesis

console.log(myobj()); //{ username: 'Jaggu', age: 16 }
