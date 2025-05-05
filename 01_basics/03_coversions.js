let score=45
console.log("the score is",score)
console.log("the type of score is",typeof score)
console.log("the type of score is(using type as method)",typeof(score)) // another way to use type as method

let score1="45"
let valueInNumber=Number(score1)
console.log("the type of score1('33') after conversion is",typeof score)  //string converted into number


let score2="33abc"
console.log("the type of score2(33abc) is",typeof score1)
let valueinnumber=Number(score2)
console.log("the type of score2('33abc') after conversion is",typeof score)
console.log("the value of valueinnumber(33abc) after conversion to number",valueinnumber) // NaN(not a number)
//check the value very carefully after converting (any not pure number) into number as it can give Nan. JS has some issues don't have strict checking

let age=null
console.log(typeof null)
let valueinnull=Number(null)
console.log(typeof valueinnull)
console.log(valueinnull) // converts null to 0.