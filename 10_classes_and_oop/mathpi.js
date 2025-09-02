console.log(Math.PI);

//You can't overwrite the value
Math.PI=5;
console.log(Math.PI); //3.141592653589793

const descripter=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descripter);

const coffee={
    name:'Mocha',
    price:250,
    isAvailable:true
}

console.log(coffee);
//do we have the descriptive properties of this coffee object- yes 

console.log(Object.getOwnPropertyDescriptor(coffee)); //undefined

console.log(Object.getOwnPropertyDescriptor(coffee,'name'));

Object.defineProperty(coffee,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(coffee,'name'))


const chai={
    name:'ginger tea',
    price:250,
    isAvailable:true
}

/*for(let [key,value] of chai){ //
    console.log(`${key}:${value}`);   
}
error - coffee is not iterable  as objet by default is terable or not depends on situations,so some objects are iterable and some are not so we use entries property   
*/

for(let [key,value] of Object.entries(chai)){ 
    console.log(`${key}:${value}`);   
}

//some scenario, your code may not logically works well for eg-
const chai2={
    name:'ginger tea',
    price:250,
    isAvailable:true,
    orderChai:function(){
        console.log("2 Chai");
    }
}
for(let [key,value] of Object.entries(chai2)){ 
    console.log(`${key}:${value}`);   
}
/*name:ginger tea
price:250
isAvailable:true
orderChai:function(){
        console.log("2 Chai");  //this is not a key-value pair
    } 

so we put a check with the help of if-else
*/

for(let [key,value] of Object.entries(chai2)){ 
    if(typeof value != 'function'){
        console.log(`${key}:${value}`); 
    }  
}

Object.defineProperty(chai2,'name',{
    enumerable:false  //now name:'ginger tea'is not iterable
})

for(let [key,value] of Object.entries(chai2)){ 
    if(typeof value != 'function'){
        console.log(`${key}:${value}`); 
    }  
} //price:250
//isAvailable:true

