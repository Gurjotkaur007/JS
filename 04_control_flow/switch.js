// Switch- a value needs to be checked through multiple cases
/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

const month=5;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    default:  //this is if nothing matches
        console.log("Default case");
        break;
}

//if break is not used then it also executes next following(coming) cases except default.This is called "fall-through" behavior.the switch stops comparing and just keeps executing the next code blocks.
//Without break, execution continues to the next case regardless of whether it matches.Use break to prevent accidental fall-through, unless you intentionally want multiple cases to share logic.


const months='May';
switch (months) {
    case "Jan":
        console.log("January");
        break;
    case "Feb":
        console.log("Feb");
        break;
    case "March":
        console.log("March");
        break;
    case "April":
        console.log("April");
        break;
    case "May":
        console.log("May");
        break;
    case 5:
        console.log("May"); //this works if const month=5
        break;
    default:  
        console.log("Default case");
        break;
}