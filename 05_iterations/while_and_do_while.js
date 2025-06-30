//while
let i=1;
while (i<=10) {
    console.log(`Value:${i}`);
    i=i+2;
}

//array with while loop
let myarr=['hi','hey','hello'];
let j=0;
while (j<myarr.length) {
    console.log(`Element:${myarr[j]}`);
    j++;
}

//do while loop-it checks the condition at the end, first it executes.So it is sure the loop will get executed once even if the condition is not true - this loop is rarely used
let i1=1; //the variable must be initialized inside the loop, not inside the do scope 
do{
    console.log(`Value:${i1}`);
    i1++;
}while (i1<10);