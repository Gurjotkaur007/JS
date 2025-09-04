//Lexical scoping- The inner function has the scope of the outer function.
function init() {
  var name = "Mozilla"; 
  function displayName() {
    console.log(name); 
  }
  displayName();
}
init();
//The inner function can access the outter function's properties/variables. But the outer functions can not access the inner function's varibales.

function outer(){
    let username='Ravi';

    function inner(){
        console.log(username);
        let secret=345;
    }
    inner();

    function inner2(){
        // console.log(secret); - gives an error as the function can't access the same level function's variables.
    }
    inner2();
}
outer();

//Closure- gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName; //previously we used to run the inner function here only but now, we have given the reference and returning the rference of the function.
}

const myFunc = makeFunc();
myFunc();
// so closure returns the function along with its lexical scope(i.e the execution context of inner function with its lexical scope)