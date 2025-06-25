const tinderUser1= new Object();   //singleton object
console.log(tinderUser1); //{}

const tinderUser2={};   //non-singlrton object
console.log(tinderUser2);  //{}

//These two ways have same value i.e {}.There is no internal difference


const tinderUser={};   

tinderUser.id=201;
tinderUser.name="Rani";
tinderUser.isLoggedin=false;

console.log(tinderUser);   //{ id: 201, name: 'Rani', isLoggedin: false }

//Objects in objects
const regularUser={
    email:'gurjot@gmail.com',
    fullname:{    //object inside object
        userfullname:{     //another object inside objct -u can as much nesting u want
            firstname:"Rani",
            lastname:'Walia'
        }
    }
}
console.log(regularUser.fullname);  //{ userfullname: { firstname: 'Rani', lastname: 'Walia' } }

//to go more deep inside keep using dot operator
console.log(regularUser.fullname.userfullname);  //{ firstname: 'Rani', lastname: 'Walia' }
console.log(regularUser.fullname.userfullname.firstname);  //Rani

//Auctional Chaining - suppose fullname doesn't exist. we use fullname?-this does protection suppose we getting response from API , this syntax is used, otherwise if else need to use

//To combine objects

const obj1={1:'a', 2:'b'};
const obj2={3:'a', 4:'b'};
const obj3={5:'a', 6:'b'};

const obj4={obj1,obj2,obj3}; 
console.log(obj4); /*{
  obj1: { '1': 'a', '2': 'b' },
  obj2: { '3': 'a', '4': 'b' },
  obj3: { '5': 'a', '6': 'b' }
} */   // there are 3 elements obj1,obj2,obj3 with corresponding values. same problem like array as we don't get the key-values as a element 

//Use aobject.assign-The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

const obj5= Object.assign({},obj1,obj2,obj3);
console.log(obj5);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
console.log(obj1); //as we used{} empty parenthesis . the obj1 doesn't get changed { '1': 'a', '2': 'b' }

//spread method
const obj7={...obj1,...obj2,...obj3}; // spread method is easy and most commonly used, see carefully {} braces are used
console.log(obj7);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
console.log(returnedTarget);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true -hence if u not use {},the first object(obj1) becomes the target and rest objects get resided in the first object \

//How values from database comes
//suppose u receives users - they will come as array. u get objects as elements in the array as comma separated values
const users=[
    {
        id:1,
        email:'g@gmail.com'
    },
    {
        id:2,
        email:'r@gmail.com'
    },
    {
        id:3,
        email:'r@gmail.com'
    },
    {
        id:4,
        email:'r@gmail.com'
    }
]

//To loop through or print the value
console.log(users[1]); //{ id: 2, email: 'r@gmail.com' }
console.log(users[1].email);  //r@gmail.com

//To print the keys of the object
console.log(Object.keys(tinderUser));  //[ 'id', 'name', 'isLoggedin' ]  - note the datatype is array which is very useful in future(in database) as u can apply loop on it

//To print the values of the object
console.log(Object.values(tinderUser)); //[ 201, 'Rani', false ]

//entries - very less used 
console.log(Object.entries(tinderUser));  //[ [ 'id', 201 ], [ 'name', 'Rani' ], [ 'isLoggedin', false ] ]  --every key-value pair is converted to array. first is always key and second is always value


//ask if the object has a value -this prevents crashing when u loop through the object and u print a value but sometimes it doesn't exist
console.log(tinderUser.hasOwnProperty('isLoggedin'));  //true
console.log(tinderUser.hasOwnProperty('isLogged'));  //false


// de structure of objects - used when u work in react u get object and u need to de structure it and get values. You can get values directly but de structuring is easier.

const course={
    Nameofthecourse:"English",
    price:500,
    courseinstructor:"Ravi"
}

//course.courseinstructor  This is a way to access values but it is not very readable if u want to print course.name or course.price . doesn't look good. So to maker the code clean use this syntax:
const {courseinstructor}=course;
console.log(courseinstructor);

// if the name of key is big u can change it too
const{Nameofthecourse: coursename}=course;
console.log(coursename);  //this is how we destructure the object

/* de structuring in react
const navbar= ({company}) => {

}
navbar(company="Rani") */ // u call navbar and specify this particular has a particular value. instead of using props.company we use {} braces


/*API  - some values are returned by API,how we write those values. earlier these values used to be in xml structure which were complex, now mostly values come in JSON (it is object only but has no name). API is JSON format. Json is JS object notation, can work in php,rubicon..
{
    "name":"Gurjot",  //keys and values are usually strings. so use quotes but values can be nos. and boolean also
    "coursename":"English",
    "price":"free"
} */
 
//when JSON call API -what we receive,what happens  - can see above how we get values. how fetch method is used , how it call the url and then get the data,. We know object -will convert this data into object and then can get values

/*sometimes u don't receive api as object, can receive as array (we get objects as elements in array)
[
    {},
    {},
    {}
] */


//API - randomuser me api