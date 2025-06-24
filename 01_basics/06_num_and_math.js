// Here JS automaticaaly detect score as number
const score=400;
console.log(score) //400
// To explicity define the datatype
const balance=new Number(100)
console.log(balance)  //[Number:400]- it specially cast as number

//Methods
console.log(balance.toString());  //100
console.log(balance.toString().length);  //3
console.log(typeof balance)  //object (be carefull as it is a string object)
//You can use these methods even without using number object , with primitive number.

//toFixed()
console.log(balance.toFixed(2));  //This is usually used in e-commerce application as many times there are calculations,multiplications so precision value gets so big so here we used toFixed().Usually 2 is used.

//toPrecision() - the number of significant digit must be in the range of 1-21.It returns a string
const num=23.8567
console.log(num.toPrecision(3))  //23.9

const num2=123.8567
console.log(num2.toPrecision(3))  //124 as 3 values is fixed so precision is done on it

const num3=1123.8567
console.log(num3.toPrecision(3))  // now if there value u fixed is 3 but it has 4digits before decimal then it gives 3 precision values and rest exponential values
//Carefully use precision. Before usage,you should know priority is before decimal or after.Like before decimal value will be 3 didgit


//Sometimes we get confuse when many zeros are used in a number like 100000 so for it we use toLocaleString() to add commas which increases the readability
const hundreds=10000000;
console.log(hundreds.toLocaleString());  //This is according to Indian number system
console.log(hundreds.toLocaleString('en-US')); //This is according to US number system

console.log(Number.MAX_SAFE_INTEGER)
console.log(`Number-max value: ${Number.MAX_VALUE}`)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.NaN)   //NaN


//+++++++++++++++++++++++++++ Maths ++++++++++++++++++++
//Maths library comes with JS bydefault
console.log(Math) //it is a object in itself and has many properties.
//Some properties: (explained in console -inspect element)
/*Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
E: 2.718281828459045
LN2: 0.6931471805599453
LN10: 2.302585092994046
LOG2E: 1.4426950408889634
LOG10E: 0.4342944819032518
PI: 3.141592653589793
SQRT1_2: 0.7071067811865476
SQRT2: 1.4142135623730951
abs: ƒ abs()
acos: ƒ acos()
acosh: ƒ acosh()
asin: ƒ asin()
asinh: ƒ asinh()
atan: ƒ atan()
atan2 : ƒ atan2() */

//absolute(makes negative values positive)
console.log(`The absolute value of -7 is ${Math.abs(-7)}`)

//Round - round off values
console.log(`${Math.round(5.7)}`)
//You can also controll that whether values chosen is of upper or lower(priority)
console.log(`${Math.ceil(5.1)}`) //always chooses top values(ceiling) if the decimal value is bigger than 5 like 5.1=6,5.3=6
console.log(Math.floor(4.9))//Always chooses lower value like 4.9=4,4.2=4
//Mostly round is used.

//min-used to find lower value in the array
console.log(Math.min(4,3,2,58,7));

//max-used to find highest value in the array
console.log(Math.max(4,3,2,58,7));

// Random in  Math library is mainly used.
console.log(Math.random()); //always give value between 0 and 1

//in some tasks like in dice throw you need value between 1 and 6. here multiplying by 10 so that it shifts the value by 1 and adding 1 to ensure that we don't get 0 before decimal.
console.log((Math.random()*10)+1); //u get between 0 and 1.
//use floor method to get rid of decimal 
console.log(Math.floor((Math.random()*10)+1));//rounds off to lower value

//trick to define min and max and getting values between them
//suppose i need value between 10 and 20
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min) // max-min so that numbers come under range(10 and 20) and plus 1 so that we can avoid 0 case. but we got same values that between 0 ans 1 so it remains in the range i.e 10 and 20 ,we added min(10)                        

console.log(Math.floor((Math.random()*(max-min))+1)) //this gives values between 1 and 10 but see brackets carefully they are differently placed as were getting 0 case,so we rearranged it 

const min1=1;
const max1=6;
console.log(Math.floor(Math.random()*(max1-min1+1))+min1) //to get values between 1 and 6