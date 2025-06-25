/*The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
JavaScript arrays are resizable and can contain a mix of different data types. 
JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on 
JavaScript array-copy operations create shallow copies. means any changes done affects the original data.A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. */

//there are many methods in prototype and you get another prototype which contains more methods(will discuss further)


//How to declare array
let myArr=[0,2,344,'Rani',true] //can contain different datatypes
console.log(myArr[1])  //2

//another way to initialize array
let arr2=new Array(1,2,4,3,5)
console.log(arr2)

//Array Methods
myArr.push('yo')  //push is used to add an element
console.log(myArr)  //[ 0, 2, 344, 'Rani', true, 'yo' ]
myArr.pop()  //pop deletes an element from the last of the array 
console.log(myArr)  //[ 0, 2, 344, 'Rani', true ]

//unshift() - is not preferred to use as it adds an element in the start of the array which makes all the elements of the array to shift,this is not feasible when we have large data - loads the system. However sometimes we need to add an element in the start so we use unshift()
myArr.unshift(7);
console.log(myArr)

//unshift -it removes the element at the start of the array
myArr.shift()
console.log(myArr)

//some methods tell true or false(boolean ) for some questions
console.log(myArr.includes(89))//gives true or false
console.log(myArr.indexOf(89)) // it returns the index of the element specified, If the array does not contaion the specified element then it returns -1
console.log(myArr.indexOf('Rani'))

//join- adds all the elements of an array into a string, separated by the specified separator
let newarr=myArr.join()
console.log(newarr)
console.log(typeof newarr)
console.log(myArr)

//slice and splice (v.imp)
console.log("A ",myArr);
const mynewarr=myArr.slice(1,3) //slice 
console.log(mynewarr)
console.log("B ",myArr);
const myarr2=myArr.splice(1,3)
console.log(myarr2) //also includes the range 
console.log("C ",myArr);  //splice deletes the elements from the original array -this is the main difference as slice does not alter the original array
