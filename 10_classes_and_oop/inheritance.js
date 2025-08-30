class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

    addcourse(){
        console.log(`course added by ${this.username}`);
    }
}

// const person1=new user('Gurjot');
const person1=new Teacher('Gurjot','gurjot@gmail.com',55);

person1.addcourse();

const person2=new user('Rani');
person2.logMe();
// person2.addcourse();  class user can not access the properties of the class Teacher 
person1.logMe(); //class Teacher can access the properties of the class user as we used thye keyword extends which connects two classes


console.log(person1 ===person2);

console.log(user===Teacher);

console.log(person1 instanceof Teacher);
console.log(person1 instanceof user);
