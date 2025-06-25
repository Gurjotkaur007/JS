const fruits=['mango','kiwi','orange'];
const vegetables=['potato','ladyfinger','capsicum'];
fruits.push(vegetables);
console.log(fruits);  //[ 'mango', 'kiwi', 'orange', [ 'potato', 'ladyfinger', 'capsicum' ] ]    -it takes whole array vegetables as a single element (array as a single data ) this is the 4th element-[ 'potato', 'ladyfinger', 'capsicum' ]
console.log(fruits[3][2]); //capsicum  - not a good syntax to access the value
//concat 
const fruits2=['mango','kiwi','orange'];
fruits.concat(vegetables);
console.log(fruits2);  //[ 'mango', 'kiwi', 'orange' ] - remians same as concat returns a new array 
//hence do like this:
const fruits3=['mango','kiwi','orange'];
const arr=fruits3.concat(vegetables);
console.log(arr);   //concat helps to merge thye arrays properly without changing the original array -  [ 'mango', 'kiwi', 'orange', 'potato', 'ladyfinger', 'capsicum' ]
const arr22=fruits3.concat('peas');  // u can concatenate a single value also
console.log(arr22); 
// More easy opearator-spread (to understand-take a glass and drop it , it spreads)
const new2= [...fruits3,...vegetables]; //this is preferred more than concat as we can concatenate only one value(array),but using spread method we can add more values using [...fruits3,...vegetables,...salad]
console.log(new2);

//not often used but u should know about this method- flat . suppose you in a situation where you have arrays in array
const real_arr=[1,2,3,[34,57,22],4,[32,89,6,[2,11]]]
const real_arr2=real_arr.flat(Infinity);  //infinity defines the depth. it can automaticaaly check the depth and flatens it.we should not use infinity-not a good practice -we must specify the depth.(like here 3)
console.log(real_arr2);  /*[
   1,  2,  3, 34, 57,
  22,  4, 32, 89,  6,
   2, 11
]*/

//when the data is scraped,it comes in different formats
console.log(Array.isArray("Gurjot")) //tells whether it is array or not -false
console.log(Array.isArray(real_arr2))//true
//in order to convert to array - u can give any data to make the array
console.log(Array.from("Gurjot")); //from-Creates an array from an array-like object.

//object to array
console.log(Array.from({name:"Gurjot"})) //[]  this gives empty array as it was not able to convert to the array. u need to specify whether u want keys or values to convert to array  - important in iv


//of - Returns a new array from a set of elements.
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));