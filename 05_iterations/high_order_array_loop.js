//Loops for array i.e array specific loops

/*for of - iterator is like the variable that we declared before in all the loops like i=1.  Object is a thing-as we know everything is an object-array, string. Here Object is not the javascript object only like {} 

for (const element of object) {
    
} */

const arr=[1,2,3,4,5];
for (const val of arr) {
    console.log(val);
}

//strings in for of 

const greetings='Hello Gurjot Kaur';
for (const greet of greetings) {
    if(greet==' '){
        continue;
    }
    console.log(`Char is ${greet}`);
}

//Maps-another datatype -like object but has iterations. The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.They are iterable 
//Objects don't remeber the order of insertion.objects can have duplicate values.They are iterable
const mymap= new Map()
mymap.set("IN","India");
mymap.set("USA","United States of America");
mymap.set("FR","France");
mymap.set("IN","India"); //this will not be printed as this is a duplicate value and values will be printed in the order whivh u inserted
console.log(mymap);

for (const i of mymap) {
    console.log(i);
    
} /*it gets printed as array -[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'FR', 'France' ]*/

//to print key 
for (const [key,value] of mymap) {
    console.log(key)  //IN  USA  FR
}
//to print value
for (const [key,value] of mymap) {
    console.log(value)  //India   United States of America    France
}

//to print both key and value
for (const [key,value] of mymap) {
    console.log(key,"-",value)   /*IN - India
USA - United States of America
FR - France */
}

for (const [k,v] of mymap) {
    console.log(k,"-",v)   /*IN - India
USA - United States of America
FR - France */
}

//is object iterable ?
myobj={
    "Game1":"Bluf",  
    "Game2":"Chess"
}

/*for (const [k,v] of myobj) {
    console.log(k,"-",v) 
}  this gives error as the objects are not iteratable */