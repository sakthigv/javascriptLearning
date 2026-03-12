//LESSON ! - varuable,datatypes,conditional(if/else),operators)

let dash = "Sakthi";
let age = 28;
let isTester = true;
let firstPersonName = "Deepak";
let score = 90;
let day = 4;

console.log("Hello " + dash);
console.log(age);
console.log(isTester);

if(age >= 18){
    console.log("Adult");
}else{
    console.log("Minor");
}

if(score >= 50){
    console.log("Passed");
}else{
    console.log("Failed");
}

if(score >= 90){
    console.log("Grade A");
}else if(score >= 70){
    console.log("Grade B");
 }else if(score >=50){
    console.log("Grade c");
 }else{
    console.log("Grade D");
 }

 switch(day){
    case 1 :
        console.log("Sunday");
        break;
        case 2 :
            console.log("Monday");
            break;
            case 3 : 
            console.log("tuesday");
            break;
            default :
            console.log("Invalid Date");

 }
  
 let ageCatagory = age >= 18 ? "Adult": "Minor";
 console.log(ageCatagory);   // ternary operator  ?

 if(age >= 18 && score === 90){
console.log( "High School Student");
 } else if( age >= 18 || score != 90){
    console.log("primary School student");
 }else{
    console.log("Null");
 }

