class user{
    constructor(username){
        this.username=username;
    }

    logMe(){
        return this.username;
    }

    static createdID(){
        return 123; 
    }
}

const person= new user("Jaag");
console.log(person.logMe());
//console.log(person.createdID());  throws an error as person.createdID is not a function i.e createdID is only available to user not to its instances 

class Teacher extends user{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}

const person2=new user("Ravi","ravi@gmail.com");
console.log(person2.logMe());
//console.log(person2.createdID()); even the child class's instance can't access the method

console.log(user.createdID()); //123 - only accessible by the class itself
console.log(Teacher.createdID()); //Static methods can be inherited by subclasses.

class Counter {
  static count = 0;   // static property

  constructor() {
    Counter.count++; // access using class name
  }
}

new Counter();
new Counter();

console.log(Counter.count); // 2
