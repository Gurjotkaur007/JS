//reduce=The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
//specially used in shopping cart -for adding the items for billing-mostly used. well this can be done with for or while loop also

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

//reduce also use a call back method ()=>()  - a function without name. You get accumulator and a current value(the current value of array),accumulator is an empty variable and what value it holds,depends on initial value declared in function declartion(acc+currval+....)here in ... comes the starting value of accumulator(this is value of accumulator for first loop then in execution it puts the result of acc+curval in the accumulator and it repeats the process for the other elements of array )

//reduce with arrow function with implicit return(see syntax carefully)
const mynums=[1,2,3];
const mytotal=mynums.reduce((acc,cur_val)=>acc+cur_val,0);  //here if you use parenthsis with arrow function like we did before like ()=>() - the second one then it gives wrong result, so don't use parenthesis. mistake- we can use parenthesis, just put inital value of acc after the parenthesis like see in next example 
console.log(mytotal);

const mynums1=[1,2,3];
const mytotal1=mynums.reduce((acc,cur_val)=>(acc+cur_val),0);  
console.log(mytotal1); //6 now it works perfectly fine

//reduce with arrow function with explicit return
const nums=[1,2,3];
const res=nums.reduce((acc,cur_val)=>{
    console.log(`acc=${acc}, val=${cur_val}`); /*works likea loop -acc=0, val=1
acc=1, val=2
acc=3, val=3 */
    return acc+cur_val;
},0);   // see we used 0 after scope of function
console.log(res);

const nums1=[1,2,3];
const res1=nums1.reduce((acc,cur_val)=>{
    console.log(`acc=${acc}, val=${cur_val}`); /*works likea loop -acc=0, val=1
acc=1, val=2
acc=3, val=3 */
    return acc+cur_val;
},3);   // see we used 0 after scope of function
console.log(res1);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);