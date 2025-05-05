let score=45
console.log("the score is",score)
console.log("the type of score is",typeof score)
console.log("the type of score is(using type as method)",typeof(score)) // another way to use type as method

let score1="45"
let valueInNumber=Number(score1)
console.log("the type of score1('33') after conversion is",typeof score)  //string converted into number


let score2="33abc"
console.log("the type of score2(33abc) is",typeof score1)
let valueinnumber=Number(score2)
console.log("the type of score2('33abc') after conversion is",typeof score)
console.log("the value of valueinnumber(33abc) after conversion to number",valueinnumber) // NaN(not a number)
//check the value very carefully after converting (any not pure number) into number as it can give Nan. JS has some issues don't have strict checking

//String to number gives NaN
let num="Seven"
let valueinnum=Number(num)
console.log(typeof valueinnum)
console.log("The value of num=seven after converting to number is",valueinnum)


//Null to number gives 0
let age=null
console.log("the type of age=null is",typeof age)
let valueinnull=Number(null)
console.log(typeof valueinnull)
console.log("the value of age=null after coverting to number is",valueinnull) // converts null to 0.

let age1=1 
let valueinboolean=Boolean(age1)
console.log(typeof valueinboolean) //converts number to boolean
console.log(valueinboolean) // 1= true, 0=false

//any other number other than 0 and 1 
// Everything else is truthy (including negative numbers and positive numbers other than 0).
let age2=14
let valueinboolean2=Boolean(age2)
console.log(typeof valueinboolean2) //converts number to boolean
console.log(valueinboolean2) //Falsy values in JavaScript include: 0, NaN, "" (empty string), null, undefined, and false.


//eg undefined to boolean is false
let age3= undefined
let valueinboolean3=Boolean(age3)
console.log(typeof valueinboolean3) //converts undefined to boolean as false
console.log(valueinboolean3)

//Number to String
let marks=45
let valueinmarks=String(marks)
console.log("the value of marks=45 after converting to string:",valueinmarks) 
console.log("the type of 45 after converting to string is",typeof valueinmarks)


/* To number:
"33"=33
"Gurjot"=NaN
"33abc"= NaN
true=1
false=0
*/ 

/* To Boolean:
0,null,undefined, NaN, ""(empty string)=false
any number other than 0= true
string=true
*/ 

/* To String:
33=33 // number to string is viewed as number but it is a string
*/ 