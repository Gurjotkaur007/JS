function User(email,password){
    this._email=email;
    this.password=password;

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase();
        },
        set:function(value){
            this._email=value;
        }
    })
}

const person=new User('bass@gmail.com','abcdefg')
console.log(person.email);
