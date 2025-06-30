//for each loop- this is mostly used and it is also given as a property in arrays that can be ditrectly used. This is a high order function
//for each says give a call back function. write fuction- as it is call back so the function has no name, it automatically takes the every element in array as the argument

const arr=['cpp','c','python','JS'];
arr.forEach( function(val){
    console.log(val);
})
/* cpp
c
python
JS */

//using arrow function it for each loop
arr.forEach( (val)=>{
    console.log(val);
})

//using outside function
function prints(item) {
    console.log(item);
}
arr.forEach(prints);  //don't execute the function here like prints(), only give reference


//for each loop can have more parameters like index(gives the index no.),arr(gives the entire array)

arr.forEach((val,index,arr)=>{
    console.log(val,index,arr);
})
/* cpp 0 [ 'cpp', 'c', 'python', 'JS' ]
c 1 [ 'cpp', 'c', 'python', 'JS' ]
python 2 [ 'cpp', 'c', 'python', 'JS' ]
JS 3 [ 'cpp', 'c', 'python', 'JS' ] */


//values from database are in form of array and every value is an object
let languages=[
    {
        lang:"JS",
        lang_file:"js"
    },
    {
        lang:"Python",
        lang_file:"py"  
    },
    {
        lang:"Ruby",
        lang_file:"rb"
    }
]

languages.forEach( (item)=> {
    console.log(item);
})
languages.forEach( (item)=> {
    console.log(item.lang_file); /* js
py
rb   -see item.lang_file (not languages.lang_file)  */
    
})