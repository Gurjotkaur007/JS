// Basically datatypes are of two types i.e Primitive and non primitive. this categorization is based on the basis of how data is stored and how data is accessed (call by value and call by reference)

// Primitive (call by value i.e whenever you copy them from anywhere so their original data i.e reference is not given from memory, its copy is given so whatever chances you do happens to the copy not to original )
// 7 Types : string, number , boolean , null, undefined , symbol, BigInt

// To declare symbol -to uniquely identify the components in react
const id=Symbol('123')
const id2=Symbol('123')
console.log("id == id2",id == id2) //gives false (but the value is same) as we used symbol which uniquely defines the components even though it seems same.


// BigInt
const BigNumber1=74535698734653563854638756 // backend , JS treats such big numbers as BigInt (datatype)
console.log(typeof BigNumber1) //returns number
//if it is not big enough number then you can use n in the end of number eg- 
BigNumber2=74535698734653563854638756n
console.log(typeof BigNumber2) // returns BigInt

// Non primitive (reference) - in memory , can allocate the reference directly
//types : Array, object ,functions

//Dynamic or static : JS is dynamic 
