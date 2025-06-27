// Immediately Invoked Function Expressions (IIFE) - when a function is written , you want to execute it immediately.Why used- suppose a file we write which only contains database connection and we want that whenever the application starts, the database connection starts at that same moment AND used - to avoid global scope pollution, so we make another separte scope-iife

/* Global scope pollution problem- Why it's a problem:
Accidental overwriting of variables or functions.
Hard to track where variables come from.
Memory issues, especially in large applications. */

//its example
var counter = 0;

function increment() {
    counter++;
    console.log("Counter is now:", counter);
}

function reset() {
    counter = 0; // Same global variable used
    console.log("Counter reset to:", counter);
}

increment(); // Counter is now: 1
reset();     // Counter reset to: 0
/*counter is a global variable accessible and modifiable by any function. 
If a third-party script also uses counter, it can accidentally overwrite or conflict with your code.*/

// Solution: use iife
(function () {
    // This variable is scoped inside this IIFE
    let counter = 0;

    function increment() {
        counter++;
        console.log("Counter is now:", counter);
    }

    function reset() {
        counter = 0;
        console.log("Counter reset to:", counter);
    }

    // Using the functions safely within scope
    increment();
    reset();
})();


(function myfun(){
    //these are named named.unamed(simple) iife is when we use arrow function
    console.log("IIFE function");
})();

//Arrow function with iify
( () => {
    console.log("Arrow function with iife")
} )();

//arrow fun with iify and parameters
( (num) => {
    console.log("num:",num)
} )(5);

// ()() - first parenthesis is for declaration and secind parenthesis is for execution

//If you want to use more than one iife in a program then explicitly put a semicolin to indicate the end of the function as it does not know where to end the context 