//Scope= {} these curly braces define the scope in context of functions or if else or loop
if (true){  // true is written so it will be executed no matter what
    const a=5;
    let b=7;
    var c=8;
}

//console.log(a);  ReferenceError: a is not defined. This is because a is defined in if block so it remains in if scope only.it should not come outside the if block and it does not come out of the if block
//console.log(b); ReferenceError: a is not defined. This is because a is defined in if block so it remains in if scope only.it should not come outside the if block and it does not come out of the if block
console.log(c);  //8 - this happens because var is not scope specific. it gets leaks out of the scope of the block

//Its impact
var c =300;
if (true){ 
    const a=5;
    let b=7;
    var c=8;
}
//the value of c gets changed (suppose this if block is imported from another file)

// let d =300;   be careful-already explained let d and var d pfoblem
// if (true){ 
//     const a=5;
//     let b=7;
//     var d=8;
// }

let a= 3000;  //global scope
if(true){
    let a= 10;  //this a is different from the above declared a
    const b=20;
    console.log("Inner:",a);  //block scope
}
console.log(a);  // this scope of let a= 10 doesn't get leaked, saves us from so many programming bugs 

//global scope in browser is different from global scope here in code environment (asked in iv)

//closure - a technique in JS , for this you should know dom (document object model) that is how HTML page is manupilated through JS (asked in iv)

//nested scope- can be function inside function , function inside loop , function inside if-else
function one(){
    const username="Gurjot";
    function two(){
        console.log("username is ",username);
        const website='yt';
    }
    //console.log(website); //ReferenceError: website is not defined - error comes because the scope of website is inside function tw0=o(), can not access oustside it. (block scope) , as error came so two() did not get executed 
    two()
}
one()

//for understanding= children can ask for ice cream from adults but adults can't ask for ice cream from children. child function can access the variables of parent function but not vice versa.  - this is closure(basic there is more to it)

//Whenever functions arec called, a separate call stack(i.e different scope) is made

//another example 
if(true){
    const username='Rani';
    if(username==='Rani'){
        const course='Cooking';
        console.log(username+course);
    }
    //console.log(course); gives error as can't access course outside the scope of if block
}
//console.log(username); gives error as can't access username outside the scope of if block

//++++++++++++++++++++Interesting++++++++++++++++++++++
addone(4)  // gives no error - can call function before function declaration here 
function addone(num){
    console.log(num+1);
}

//addtwo(4)  // ReferenceError: Cannot access 'addtwo' before initialization   here you can't access the function before declaration as while declaring , the variable holds the function - a concept- hoisting i.e what is execution context(can't use before declaration),where functions atre stored, how variables are treated , how final tree is made where all varibles and all functions are stored

const addtwo= function(num){    //sometimes called as an expression
    console.log(num+5);
}

//variables can hold fynction , array , object , JSON values,anything