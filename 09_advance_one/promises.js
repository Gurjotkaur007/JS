// How to create promises
const promiseOne= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is completed.");
        
    },1000)
});

//the promise is created now we need to consume it also
//Now how to consume- .then - it has direct connection with resolve. In .then, you get a callback/function with which you work.This function automatically recieve the an argument that the value of what has been done in the promise
promiseOne.then();  // this prints Async task is completed.

promiseOne.then(function(){
    console.log("Promise completed"); // this prints Async task is completed.  promise consumed does not get printed
})

//But you didnt properly consumed the promise as you never connected then and resolve

const promiseTwo= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task2 is completed.");
        resolve();
    },1000)
    //this makes a connection with then and resolve
});

promiseTwo.then(function(){
    console.log("Promise2 completed");
})


//Not using a varible for promise i.e not promise in a varible
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("This Async task is done");
        resolve();
    },4000);
}).then(function(){
    console.log("Promise is done");
});

//consuming data from network through resolve() as parameters in resolve()
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"Gurjot",email:"gurjotkaur@gmail.com"});
    },5000);
});
promiseThree.then(function(user){
    console.log(user);
});


//reject()-this runs when promisse is failed.suppose here we get some error
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if (!error){
            resolve({user:'Gurjot',password:"123"});
        }
        else{
            reject("Error:Something went wrong")
        }
    },6000);
});

promiseFour.then(function(user){
    console.log(user.user);
}).catch(function(error){
    console.log(error);
})


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if (!error){
            resolve({user:'Gurjotkaur',password:"123"});
        }
        else{
            reject("Error:Something went wrong")
        }
    },6000);
});

promiseFive.then((user)=>{
    console.log(user);
    return user.user;
}).then((username)=> {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))  //it tells at the end whether the work is done or not whether fail or resolve.it always execute whether thr promise is resolved or rejected 


//async await


const promiseSix=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if (!error){
            resolve({user:'Harpreet',password:"123"});
        }
        else{
            reject("Error:Something went wrong")
        }
    },6000);
});
async function consume_promise(){
    const response=await promiseSix;
    console.log(response);
}

consume_promise(); 

//this does not handle error ,so we use try- catch block


const promiseSeven=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if (!error){
            resolve({user:'Harpreet',password:"123"});
        }
        else{
            reject("Error:Something went wrong")
        }
    },6000);
});

async function consuming_promise(){
    try{
        const response1=await promiseSeven; //this runs when no error-success no failure
        console.log(response1);

    }
    catch(error){
        console.log(error); //this runs when error comes
    }
}

consuming_promise();


//fetch-response type is promise so no need to give reference of another promise like previously
async function getusers(){
    try{
        const responses=await fetch('https://api.github.com/users/Gurjotkaur');
        console.log(responses);
    }
    catch(error){
        console.log('E:',error);
    }
}

getusers();

//to change format
async function getusers2(){
    try{
        const responses=await fetch('https://api.github.com/users/Gurjotkaur');
        const data=await responses.json(); //response.json also returns promise so we used await.changing takes time so need to use await otherwise no output
        console.log(data);
        
    }
    catch(error){
        console.log('E:',error);
    }
}

getusers2();

//with then, catch
fetch('https://api.github.com/users/Gurjotkaur').then((response)=> {
    const data=response.json();
    console.log(data);
}).catch((error)=>{
    console.log("Error:",error);
}) //this does not give output as At this point, data is still a pending Promise, so the console just shows something like Promise { <pending> }.To actually log the parsed JSON, you need to chain another .then():

fetch('https://api.github.com/users/Gurjotkaur').then((response)=> {
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("Error:",error);
})



