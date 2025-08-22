//Object Literal- basic unit. here object means basic object like created objcets earlier

const user={
    name:"Gurjot",
    ID:578,
    signedIn:true,

    getUsserDetails: function(){
        console.log("Got Details");
        //console,log(`Username is ${username}`); // this gives error that username not defined due to context
        console.log(`Username is ${this.username}`)//this provides current context
        console.log(this); //gives current context that is object
    }
}   //can access object with dot notation or square brackects
console.log(user.name);  //Gurjot
user.getUsserDetails();  /*Got Details
undefined */

//object is the collection of properties and methods.Here name, id ,signedin are properties. getUserDetails is the method 

console.log(this);


//Constructor function

function User(username,loginCount,isLoggesIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggesIn=isLoggesIn;
    this.greet=function(){
        console.log("welcome",this.username);
    }
    return this
}

const userOne=new User('Gurjot',25,true);
const userTwo=new User('Rani',55,false);
console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);

function Usernn(username,loginCount,isLoggesIn){
    username=username;
    loginCount=loginCount;
    isLoggesIn=isLoggesIn;
    
}

const serOne=Usernn('Gurjot',25,true);
console.log(serOne); //undefined
