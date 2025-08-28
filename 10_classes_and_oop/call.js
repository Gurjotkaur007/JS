function SetUsername(username){
    this.username=username;
}

function createUser(username,email,password){
    SetUsername(username);  //here we don't directly set the username like here we did with email and password, SetUsername(username) will set the username. so here in this function we must get the username access eventually
    this.email=email;
    this.password=password;
}

const user1=new createUser("Rani",'rani98@gmail.com',578);
console.log(user1);



function SetUsername1(username){
    this.username=username;
}

function createUser1(username,email,password){
    SetUsername1.call(this,username);  
    this.email=email;
    this.password=password;
}

const user2=new createUser1("Rani",'rani98@gmail.com',578);
console.log(user2);