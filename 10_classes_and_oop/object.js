function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power=2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);
function Multiply(num) {
  return this.num = num+5;
}

let obj = new Multiply(10);
console.log(Object.getPrototypeOf(obj));

Multiply.prototype.sayHello = function() {
  console.log("Hello from prototype!");
};

console.log(Multiply.prototype);
// { sayHello: [Function (anonymous)] }

let obj2 = new Multiply(10);
console.log(Object.getPrototypeOf(obj));
// { sayHello: [Function (anonymous)] }

obj2.sayHello(); // Hello from prototype!

console.log(Multiply.prototype.sayHello);
//[Function (anonymous)]


function createUser(username,price){
    this.username=username;
    this.price=price;
}

createUser.prototype.increment=function(){
    console.log(++this.price);
}

let user1=new createUser('chai',50);
let user2=new createUser('coffee',100);

user1.increment();

