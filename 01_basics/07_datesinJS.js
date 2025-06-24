/*JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
an arbitrary date was taken 1st jan 1970 and from there dates are calculated .dates calculated in milliseconds,so when u declare date u get long strings , that is milliseconds time from jan1 ,1970
Temporal is global object (like math ) used for dates- right now not fullly implemented */

let myDate=new Date() //an object of date is declared (mydate) and its instance 
//how its instance:
console.log(myDate) //it gives current date and time
// 2025-06-24T17:41:03.122Z this is the result - not very readable
console.log(myDate.toString())  //Tue Jun 24 2025 23:13:11 GMT+0530 (India Standard Time) - more readable. here date is converted to string with the help of toString() Method
 
// More methods- you can choose according to your preference that which values you want
console.log(myDate.toDateString()) //Tue Jun 24 2025
console.log(myDate.toISOString()) //2025-06-24T17:47:24.694Z  =Converts a Date object into a string in ISO 8601 format (standard for date-time).
console.log(myDate.toJSON()) //2025-06-24T17:47:24.694Z  -Used when you serialize a date to JSON.Internally, it calls toISOString()-that's why the results are samme
console.log(myDate.toLocaleString()) // 24/6/2025, 11:23:44 pm
console.log(myDate.toLocaleDateString()) //24/6/2025

//Type of date
console.log(typeof myDate)  //object

//To declare specific date
let newDate= new Date(2022,0,24)
console.log(newDate.toDateString()) //Mon Jan 24 2022   months start with 0 i.e 8=sept

//u can specify more values like time,date ...
let newDate2= new Date(2022,0,24,5,7,34)  //5-hours,7-minutes,34=seconds
console.log(newDate2.toLocaleString()) 

// dd-mm-yy format
let newDate3= new Date("01-24-2020") //write as mm-dd-yyyy and the result will be in format dd-mm-yyyy
console.log(newDate3.toLocaleString()) 


//Timestamps- useful for designing quizes-to see exact timestamp -like who taped fastest
let myTimeStamp= Date.now()
console.log(myTimeStamp)  //1750789430178  -this long string is value calculated from 1 jan 1970
//it is difficult to find values from this milliseconds 


//to find date - used when you book rooms in a hotel app , we need to compare dates
console.log(newDate.getTime()); // you can compare the two values(with upper value)

//To convert in seconds (asked many times in Interview)
console.log(Date.now()/1000) // just divide by 1000  - result - 1750790054.897  - you get decimal value which is noy needed so to avoid it :
console.log(Math.floor(Date.now()/1000))

//some more methods 
//suppose i only want to know just month or year without converting to string
newdate4= new Date()
console.log(newdate4.getMonth()) // it starts from 0 be carefull  ,here result=5  i.e june
console.log(newdate4.getMonth()+1) // end user don't get confused so 1 is added  ,here result=6 i.e june - gives current month
console.log(newdate4.getDay()) // monday=1, here we got 3 that is wednesday - gives current day


//To customize LocaleString() - mostly used customizable
console.log(newdate4.toLocaleString('default',{
    weekday: "long"
}))
