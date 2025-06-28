//Earlier in all files , all the code is running but this should not happen, code should run on conditional basis-like if you are login then some code runs and if you are logout, some other code runs. This is called control flow or logic flow
//if 
if(true){  //condition- comparisions come
    //code 
}
//comparisions-< ,>,<=,>=,==,===,!=(negative checking), !== -strict inequality operator(strict checking in anti pattern)It checks whether two values are not equal in both value and type.
//a !== b  It returns true if a is not equal to b in either value or type, otherwise it returns false.

if(3 !== 4){
    console.log("executed");  //executed as condition is true
}
if(3 !== 3){
    console.log("not executed");  //not executed as condition is false
}
if(3 !== '4'){
    console.log("will be executed");  //executed as condition is true
}


//if-else 
let temperature=33;
if(temperature<40){
    console.log("Temperature is less 40");
    let weather='good';
}
else{
    console.log("Temperature is greater than 40");
    console.log(weather);  // ReferenceError: weather is not defined -- as the scope of weather is inside the if block only
}
//console.log(weather); //ReferenceError: weather is not defined -- as the scope of weather is inside the if block only

//Short hand notation  - implicit scope (execued in one line)
score=1000;
if(score>500) console.log("yes");

//for multiple line in this way - use comma,
sport="swimming";
if(sport=='swimming') console.log("yes, swimming"),
console.log("second line");
//Avoid writting these type of code beacuse it is every unreadable

//If want to check multiple conditions
let balance=1000;
if(balance<500){
    console.log("less than 500");
}else if(balance<700){
    console.log("less than 700");
}
else if(balance<900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}

//To check multiple condition in single if
const userLoggedin=true;
const debitcard=true;
if(userLoggedin && debitcard  && 2==2){  //all conditions must be true to work
    console.log("Allowed to buy");
}

//Multiple or (||)
const loggedinfromgoogle=true;
const loggedinFromEmail=false;
if (loggedinFromEmail || loggedinfromgoogle){
    console.log("User Logged in");
}