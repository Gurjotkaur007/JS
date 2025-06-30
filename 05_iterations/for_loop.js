// For loop -here the control jumps a lot like function.First it check the condition -if true then the contrl goes inside the block scope and executes there and then again jumps outside and oncrements the value of index by 1
for (let i = 0; i <=10; i++) {
    const element = i;
    if(i==5){
        console.log("This is 5.");
    }
    console.log(element); 
}

//loop inside loop
for (let i = 0; i <=10; i++) {
    console.log(`Outter loop i:${i}`);
    for (let j = 0; j <=10; j++) {
        console.log(`Outter loop i:${i}, Inner loop j:${j}`);
    }
}

for (let i = 1; i <=10; i++) {
    console.log(`Outter loop i:${i}`);
    for (let j = 1; j <=10; j++) {
        console.log(i,"*",j,"=",i*j);  //this prints table from 1 to 10
    }
}

//Array in loop
let myarray =['hi','yo','hey'];
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
}

for (let index = 0; index <4 ; index++) {
    const element = myarray[index];
    console.log(element); //hi
// yo
// hey
// undefined
}

/* for (let index = 0; index < myarray.length; index) { //if index value is not incremented then if can't come out of loop and infinately prints hi
    const element = myarray[index];
    console.log(element); 
} */


//break and continue  - in many cases- you don;t want the loop to print all the elements in the array like suppose you get values from database and in some condition you need to get out of loop 
for (let i = 0; i < 10; i++) {
    if(i==5){
        console.log("5 Detected!");
        break; //if does not execute and control comes out of the loop
    }
    console.log("i =",i);
}

console.log("CONTINUE");

for (let i = 0; i < 10; i++) {
    if(i==5){
        console.log("5 Detected!");
        continue; //it does not execute the current execution but executes next upcoming executions(this is like foul and gives a chance)
    }
    console.log("i =",i);  
}