//for each can not return any value
const arr=['cpp','c','python','JS'];
const coding=arr.forEach((val)=>{
    console.log(val);  //cpp c python JS
})
console.log(coding); //undefined

const code=arr.forEach((val)=>{
    console.log(val); 
    return val;
})
console.log(code); //again undefined


//In order to return values- we have a inbuilt function- filter. Filter returns the values, ikt also needs a call back function.it is used in various cases

const nums=[1,2,3,4,5,6,7,8,9,10];
//filter with explicit return
const num= nums.filter((item)=>{
    return item>4; //specifies the condition
})
console.log(num); //[ 5, 6, 7, 8, 9, 10 ]

//filter with implicit return 
const number= nums.filter((item)=>item>4)
console.log(number); //[ 5, 6, 7, 8, 9, 10 ]

//Another way -using for each
const numbers=[1,2,3,4,5,6,7,8,9,10];
const num3=[]; //making use of global scope

numbers.forEach((item)=>{
    if(item>4){
        num3.push(item);
    }
})

console.log(num3); //[ 5, 6, 7, 8, 9, 10 ]


// Practice
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

//return all books whose genre is history
let username= books.filter((bk)=>{
    return bk.genre==='History';
})
console.log(username);
/*An array of objects is returned [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
] */

//Give all the book publish after 2000
let username2= books.filter((bk)=>{
    return bk.publish>2000;
})
console.log(username2);
/* [
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
] */

//Give all History book publish after 1995
username2= books.filter((bk)=>{
    return bk.publish>1995 && bk.genre==='History';
})
console.log(username2);
/* [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
] */