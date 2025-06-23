//Strings are for storing text.Strings can be denoted with single as well as double quotes also.It doesn't matter, they work the same.

//concatenation
const name= "Gurjot";
const age=20;
console.log(name+age)
console.log("name:",name,"age:",age)
//these ways are old fashioned and rarely used .

//So instead use string interpolation with the help of back ticks. here we make placeholders in which we can inject any variable.
console.log(`My name is ${name} and age is ${age}`)   // this is more readable and reliable . Adv- we can do many things on the go like changing to uppercase

//another way to define string:
let gamename= new String("Mario")  // here we used objects of JS - new
console.log(gamename)

//To access key value pairs
console.log(name[2])
console.log(gamename[2])

//Length method(function)
console.log(`The length is ${gamename.length}`)

//Upttercase method
console.log(`Changed to uppercase is ${gamename.toUpperCase()}`)

//Finding character at a particular position
console.log(`The character at index 2 is ${gamename.charAt(2)}`)

//Finding index of particular character
console.log(`The index of character r is ${gamename.indexOf('r')}`)

//Sometimes you need to break the strings or sanitize them so for it string slicing is used:
let name2=gamename.substring(0,4)
console.log(name2) // it prints from index 0 to index 3 (it prints till endindex-1)  
//in substring we can not use the negative values so for this we can use slice method
let name3=gamename.slice(-3,4)
console.log(name3)

//Trim method- it is used when srings has unneccesary spaces.These type of strings are commonly used in input form as user knowingly or unknowingly add lots of spaces. so in database we don't want to save the spaces , hence here trim method is used.
const new_string="     Gurjot     "
console.log(new_string);
console.log(new_string.trim());

//Replace 
const url="https:/rani.com/rani%20walia"
console.log(url.replace('%20','-'))  //if suppose we did not encounter the %20 so nothing changes.
// Browser don't understand the spaces. Somebody has named their webpage as "https:/rani.com/rani walia"  (there is apce used after rani). Browser automatically convert space into %20. there we can use replace

// You can verify or ask questions also with the help of includes function
console.log(url.includes('rani'))
console.log(url.includes('gurjot'))

// Split method is used to split the words based on something like it can be space or any character like - or g or anything.  
name4='my-name-is-rani'
console.log(name4.split('-')) //this splits word based on a separtor and converts them into array