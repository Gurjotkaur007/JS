//You are doing this after ES6-evertything is syntactic sugar

class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encrypt_password(){
        return `Encrypted password is ${this.password}abc`;
    }
    changetoupper(){
        return `this.username.toUpperCase()`
    }
}

const gurjot=new user('Gurjot','gurjot@gmail.com',578);
console.log(gurjot.encrypt_password());
console.log(gurjot.changetoupper());


//BTS
function user1(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
 
user1.prototype.encrypt_password1=function(){
    return `Encrypted password is ${this.password}abc`;    
}

const rani=new user1('rani','rani@gmail.com',78);
console.log(rani.encrypt_password1());