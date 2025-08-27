let myname="Gurjot     ";
let hername="Rani    ";
//using trim method again and again would be hectic, so we need to have a method which tells the true length of the string. We can create the method by injecting the method in the Object. ANY METHOD in OBJECT is AVAILABLE in array,function,string,etc...
//console.log(myname.truelength);


let fruit={
    name:'orange',
    color:'santri',
    type:'sweet'
};


Object.prototype.gurjot=function(){
    console.log("Gurjot method is present in all objects");
}

fruit.gurjot();

//gurjot method would be available in array also 

let myarray=['wonderland',"hardy's world",'Punjoy']
myarray.gurjot();

//now if any method injected in array or in string -is it available in object 

Array.prototype.hey=function(){
    console.log("This is in array.");
}
 
myarray.hey();
//fruit.hey(); error as object does not have the access to the methode defined in the array

 
//INHERITANCE
//prototypal inheritance-to access the properties of another object.
const Teacher={
    makeVideo: true
}

const Student={
    ListenToVideo:false,
    __proto__:Teacher //-can use this way or the one specified outside the object as if you used both then it may create cyclic __proto__ value
}

Student.__proto__ = Teacher;
 //this is an old method 

//Modern Syntax 
Object.setPrototypeOf(Student,Teacher);  //similar at backend, __proto__ is being used but here just for the purpose of syntactic sugar

//SOLUTION

String.prototype.trueLength=function(){
    console.log(`The true length of string is ${this.trim().length}`);
}

myname.trueLength();