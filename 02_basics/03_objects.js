//Two ways to declare objects 1. literal 2. constructor Both ways are same in terms of otimization  but difference comes in terms of singleton
//singleton- when an object is declared using constructor, singleton is created as an object that there is only one object of this type. but when you declare from another way(from literal), there multiple instances are created

//To declare object
const User_js={
    name:"Gurjot",  //lets u define keys -values
    "full name":"Gurjot kaur",
    "fullname":"Harpreet kaur",
    // full name:"Rani kaur",  this gives error 
    age: 20,
    location:"Punjab",
    email:"rani@gmail.com",
    isLoggedin: false,   //value as boolean
    lastLoggedIn:['Monday','Wednesday'] //value as array

}
//by default system processes name as string-"name". in value - input can a string,boolean,function ,array,another object,anything
//You can start object with {0:'rose'}


//other way (constructor method)
Object.create

//Ways to access elements of the array= take notes of when to use . or [] as mostly dot method is used but there are some cases where we can only use [] method , here we can't use dot method to access.
console.log(User_js.email) ; //one way to access
console.log(User_js["email"]);  //be careful to add quotes as in backend it is viewed as a string.  another way to access  but when we accessed through dot , we need not to specify as string
console.log(User_js['full name']);
// console.log(User_js.full name); can't access the dot method if it has space

console.log(User_js['fullname']);
console.log(User_js.fullname); //can access the dot method even even defined in quotes but should not have space otherwise can't use dot method.

// How to declare symbol
const mysym=Symbol('key1');

//take symbol as a key and print it - so very important that you declare the symbol
const User={
    name:"Gurjot", 
    mysym: "mykey1", //this is not how you use the symbol as a key , but now it will not give the error

}
console.log(User.mysym)  //you can print it but if you check the datatype,you will know that it is not symbol(object)
console.log(typeof User.mysym) //string not object 

//To use it as a symbol use syntax- [mysum]='mykey1'

const User1={
    name:"Gurjot", 
    [mysym]: "mykey1",  // now this is the symbol, this is refering to const mysym=Symbol('key1');

} 
//To access the symbol from object , use square instead of dot method
console.log(User1[mysym]);  //mykey1
console.log(User1.mysym);   //undefined  this gives undefined value
console.log(typeof User1[mysym]); 
console.log(User1)  //{ name: 'Gurjot', [Symbol(key1)]: 'mykey1' }  see carefully

//summary- first define the symbol and then act it as keys in the object definition and then print it

//how to change the values of object
User_js.email='gurjot@gmail.com';  //using equal to ,we can overwrite the values 
console.log(User_js.email);

// To freeze the value- no one can change the values
Object.freeze(User_js);
//even if u try to change the value , it will not propagate as we freeze the object
User_js.email='jaggu@gmail.com';
console.log(User_js);   //email: 'gurjot@gmail.com'  - value did not change

//functions 
User1.greet=function(){
    console.log("Hello Everyone");
}
console.log(User1.greet);  //[Function (anonymous)] - it means funtion is not executed, just the reference is returned  (useful-will explain further)
console.log(User1.greet());  //Hello Everyone   undefined

//refering an element in the object
User1.greet2=function(){
    console.log(`Hello ${User1.name}`);
    console.log(`Hello ${this.name}`);  ///this is used when you want to refer the same object (here User1). after dot you would see all the properties in the object that u defined while decalaration of the object
}
console.log(User1.greet2()); //Hello Gurjot   undefined

//undefined -u will see in browser also  where u use these type of methods as one execution is automatically done