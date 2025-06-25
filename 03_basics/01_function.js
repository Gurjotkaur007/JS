//Functions: the code of 10 lines or more are kept in a package and you can use copies of it anywhere anytime. Always name function as such which specifies what it does.
function myfun(){
    console.log('g');
    console.log('u');
    console.log('r');
    console.log('j');
    console.log('o');
    console.log('t');
}
myfun(); //this is execution
myfun; //this is reference-nothing gets printed

//function to add two nos
function addno(num1,num2){
    const a=num1;
    const b=num2;
    const sumofno =a+b;
    console.log(`Sum of ${num1} and ${num2} is ${sumofno}`);
}
addno(5,7);    //12
addno(5,"7");  //57
addno(5,"a");  //5a
addno(5,null); //5  
//so must check the datatypes before  

/* Parameter: defined in the function whatever string input u take. for eg in above function, parameters are num1 and num2
Arguments: when function is called and the values passed in it are called arguments.in above function argument were 5 and 7. */

const result=addno(7,7);  //Sum of 7 and 7 is 14
console.log("Result:",result);  //Result: undefined  
//now undefined is returned, we did not receive 14 as result. this is because the function is only printing the sum , it is not returning anything so nothing was stored in the result and undefined was printed

function addno2(num1,num2){
    const a=num1;
    const b=num2;
    const sumofno =a+b;
    console.log(`Sum of ${num1} and ${num2} is ${sumofno}`);
    return sumofno;
    console.log("This is unreachable coede.")  //anything written after return will not be executed.
}
const result2=addno2(7,7);  //Sum of 7 and 7 is 14
console.log("Result:",result2);  //Result: 14 - this came because we returned the value which gets stored in result and then it gets printes.


function addno3(num1,num2){
    return num1+num2;   //just another to write code -saves space and no need to declare a new variable
}

function loginUserMess(username){
    return `${username} just logged in !`;
}
loginUserMess();   //nothing gets printed as we only returned the value.
console.log(loginUserMess("Gurjot")); //Gurjot just logged in !  in order to print use console.log
console.log(loginUserMess());  //undefined just logged in ! - be careful while giving arguments  (asked in iv) so before printing check whether any value is given in the argumnmet or not using if else

function loginUserMess2(username){
    if(username===undefined){
        console.log("Please enter a username");
        return   //when this block retun is executed then the next return defined will not be executed
    }
    return `${username} just logged in !`;
}
loginUserMess2();

function loginUserMess3(username){
    if(!username){    //!-not means false i.e undefined and empty string ""is false. so this is equivalent to which we written earlier with===
        console.log("Please enter a username");
        return   
    }
    return `${username} just logged in !`;
}  //these type of code is usually used in react
loginUserMess3();

//if you want to avoid these situations , you can pass default values 
function loginUserMess4(username='Gurjot'){
    if(!username){
        console.log("Please enter a username");
        return   
    }  // this will never be executed as we have passed the defalut value in case the user does not pass any values
    return `${username} just logged in !`;
}
console.log(loginUserMess4());
console.log(loginUserMess4("Rani"));  //this overwrites the default value - Rani just logged in !

/*More ways to pass the parameters
for example in a e-commerce website, there is a shopping cart which calculates the total value (price) so here we don't know how many argumenets will be there, as in earlier functions , 2 parameters were specified so we knew we would receive 2 arguments. so for this use rest operator - function func_name(...parameter)  - this ... is known as the rest operator and spread operator as well, it depends what is referred on the use case. this keeps all the values passed in a array */
function calculateCartPrice(...num){
    return num;  //this returns the array
}
console.log(calculateCartPrice()); //[] - u get an empty string
console.log(calculateCartPrice(100,1370,290,3));  //[ 100, 1370, 290, 3 ]

function calculateCartPrice2(val1,val2,...num){
    return num;  //this returns the array
}
console.log(calculateCartPrice2(200,500,400,980));  //val1=200,val2=500 and num=[ 400, 980 ]

//Object as an argument
const obj1={
    username:"Gurjot",
    age:20
}

function handleObject(anyobj){  //this funtion will only work properly if object is passed as the argument
    return `${anyobj.username} is the username and ${anyobj.age} is the age `;
}
console.log(handleObject(obj1));  //Gurjot is the username and 20 is the age
//Must check whether the elements specified in the function ,exists in the object . For eg in obj1  name:"Gurjot" would be there instead of username:"Gurjot" then it returns undefined is the username

//Diret object can be passed as an argument
console.log(handleObject({
    username:"Rani",
    age:16
})); 

//arrys can also be passed as an argument
const myarr=[100,200,300,400,500];
function returnSecondValue(anyarr){
    return anyarr[1]  //returning the second value
} 
console.log(returnSecondValue(myarr));

//Diret Array can be passed as an argument
console.log(returnSecondValue([300,400,700]));