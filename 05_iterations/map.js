//to add 10 in each no.This can't be done by filter as it only filters out the result
const mynum=[1,2,3,4,5,6,7,8,9,10];
const ll=mynum.filter( (item) => {
    return item+10;
})
console.log(ll);

//map-also a call back function.It returns the value unlike for each loop.Unlike filter which returns some of the things based on condition, map returns all the things. does computations unlike filter
const nums=[1,2,3,4,5,6,7,8,9,10];
const result=mynum.map( (item) => {
    return item+10;
})
console.log(result);

//doing same using for each
const newnum=[];
nums.forEach((val)=>{
    val=val+10;
    newnum.push(val);
})
console.log(newnum);

//Chaining method- 2 to 3 methods can be directly used 
//applying map then agin map then filter . the result of first method is given to the next method.
const res=nums.map((val)=>(val+10)).map((val)=>(val=val*10)).filter((num)=>(num>110));
console.log(res);
