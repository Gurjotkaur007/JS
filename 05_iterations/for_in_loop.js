//How to iterate objects- using for in loop. we can use for in loop on other objects like array

const myobj={
    js:"Javascript",
    cpp:"C++",
    rb:"ruby"
}

for (const key in myobj) {
    console.log(key); /*js
cpp
rb - it will only get you only keys, not the array containing key-value pairs */
}

// how to get objects (value)
for (const key in myobj) {
    console.log(myobj[key]);  /*Javascript
C++
ruby*/
}

for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`);  /*js shortcut is for Javascript
cpp shortcut is for C++
rb shortcut is for ruby*/
}

//for in loop with array
myarr=['hi','hey','hello'];
for (const key in myarr) {
    console.log(key);  /*0
1
2 */
}

for (const key in myarr) {
    console.log(myarr[key]);  /*hi
hey
hello */
}

for (let i = 0; i < 3; i++) {
    console.log(i);
    
}

for (let i = 0; i < 3; i++) {
    console.log(myarr[i]);
    
}

//for in loop don't work with map- it will not throw an arror but it will not executr anything