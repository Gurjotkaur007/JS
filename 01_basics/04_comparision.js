// Basic Comparision which answers in true of false
console.log(2>3) //false
console.log(2<3) //true
console.log(2>=3) //false
console.log(2<=3) //true
console.log(2==3) //false
console.log(5==5) //true
console.log(2!=3) //true
console.log(5!=5) //false

//this converts to number but the comparision is not always predictable so be carefull always check the datatype that whether it is same or not. typescript does not allow to compare two different datatype.
console.log("5">2)
console.log("05">2)

//Strict check (===) checks the values strictly i.e it also checks the datatype
// simple == does conversion also 
console.log("2"==2) //true as does the conversion as well
console.log("2"===2) //gives false as it does not do the conversion


// Comparisions to avoid
console.log("null and comparisions:")  // always gives false with any number
console.log(null == 0)
console.log(null > 0)
console.log(null < 0)
console.log(null >= 0)
console.log(null <= 0)
// in >= and <= value conversion is done i.e null is converted to 0  that's why it is written true so predictable results don't come. so some convert to NaN or 0 so avoid these comparisions.


// Comparisions to avoid
console.log("underdefined and comparisions:")  // always gives false with any number
console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined >= 0)
console.log(undefined <= 0)

console.log(undefined == 7)
console.log(undefined > 7)
console.log(undefined < 7)
console.log(undefined >= 7)
console.log(undefined <= 7)

