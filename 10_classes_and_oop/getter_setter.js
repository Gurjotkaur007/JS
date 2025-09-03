class user{
    constructor(email,password){
        this.email=email,
        this.password=password
    }
}

const rani=new user('rani@gmail.com','abc');
console.log(rani.password);

//now in some cases, you need fine-grey-control that is if someone asks the password,either you don't want to return the password or return the encrypted password
//sometimes, we don't want to give the access or give the customised result.Here comes the role of getters and setters.By default, every class has the getters and setters but if don't code in them then the default behaviour stays. You can apply getter-setter on any variables/properties defined in the class.The names used for the properties, automatically their names' getter and setter methods are defined already.

class users{
    constructor(email,password){
        this.email=email,
        this.password=password
    }

    get password(){
    return this._password;
    }
    set password(value){
        this._password=value.toUpperCase();
    }
}

const Rani=new users('rani@gmail.com','abc');
console.log(Rani.password);



class UU{
    constructor(email,password){
        this.email=email,
        this.password=password
    }

    get password(){
    return `${this._password}hgf908`;
    }
    set password(value){
        this._password=value;
    }
}

const GR=new UU('GRani@gmail.com','yoyo');
console.log(GR.password);