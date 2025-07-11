// Basically datatypes are of two types i.e Primitive and non primitive. this categorization is based on the basis of how data is stored and how data is accessed (call by value and call by reference)

// Primitive (call by value i.e whenever you copy them from anywhere so their original data i.e reference is not given from memory, its copy is given so whatever chances you do happens to the copy not to original )
// 7 Types : string, number , boolean , null, undefined , symbol, BigInt

// To declare symbol -to uniquely identify the components in react
const id=Symbol('123')
const id2=Symbol('123') //Both have same value but result of these will not be same
console.log()
console.log("id == id2",id == id2) //gives false (but the value is same) as we used symbol which uniquely defines the components even though it seems same.


// BigInt
const BigNumber1=74535698734653563854638756 // backend , JS treats such big numbers as BigInt (datatype)
console.log(typeof BigNumber1) //returns number
//if it is not big enough number then you can use n in the end of number eg- 
BigNumber2=74535698734653563854638756n
console.log(typeof BigNumber2) // returns BigInt

// Non primitive (reference) - in memory , can allocate the reference directly
//types : Array, object ,functions

/*Dynamic or static : JS is dynamically typed language 
In a dynamic language:
You don’t need to declare data types for variables.
The type of a variable can change at runtime.

const x = 10;       // x is a number
let x = "hello";      // now x is a string
x = true;         // now x is a boolean
let useremail or let useremail=undefined --both is same

*/

// Array (why we call them as non primitive)
const heros=['barbie','nianman','Kitty']  //these have reference type

//Objects -  inside {} braces we have objects where we write as key-value pairs
let myobject={
    name:"Gurjot",
    age:21,
    married:'no'
}


// Function definition:
//function(){}

//To declare Function as variable
const myFunction=function(){
    console.log("Hello");
}

//Datatype of non primitive is object but of function is function (objct function )

console.log(typeof heros)  //object
console.log(typeof myobject) //object
console.log(typeof myFunction) //function

console.log(typeof id) //symbol


// ++++++++++++++++++++++++++++++++++++++++
//HOW IS MEMORY LOCATION IN JS
/* Types of memory - 1. Stack memory  2. Heap memory
In primitive datatype, stack memory is used. Whenever stack memory is used, you get copy of variable you declared. 
In non-primitive datatype, heap memory is used. When memory is defined using heap, you get reference of original values so whatever chances is done it is done on original values.
*/

// eg of Stack memory

let name2="Gurjot Kaur";
let anothername=name2;
anothername='Rani';
console.log(anothername)
console.log(name2) // we gave the copy of name2 so when we changed the value of anothername ,it did not change the value of name2.

//eg of Heap memory

let user={
    email_id:"gurj@gmail.com",
    upi_id:'human@yc'
}

let user2=user
user2.email_id="rani@gmail.com"

console.log(user.email_id) //as in above we changed the value of user2.email so it also changes the values of original value as we gave the reference
console.log(user2.email_id)  