let number = 25;
let a = 10;
let b = 25;
let c = 15;
let price = 1200;
let password = "test123";
let role = "tester";


console.log("Check the Number ODD or EVEN " + number);

if(number % 2 == 0){
    console.log("Number is EVEN");
}else if(number === 0){
    console.log("zero");
}
else{
    console.log("Number is ODD");
}

if(a>b && a>c){
    console.log("Largest Number is " + a);
}else if(b>a && b>c){
console.log("Largest Number is " + b);
}else if(c>a && c>b){
    console.log("Largest Number is " + c);
}

let discountCheck = price>=1000 ? "DISCOUNT APPLIED" :"DISCOUNT NOT APPLIED";
console.log(discountCheck);

if(password.length >= 6){
  console.log("VALID PASSWORD");
}else{
    console.log("INVALID PASSWORD");
}

if(role == "admin"){
    console.log("FULL ACCESS");
}else if(role == "tester"){
console.log("TESTING ACESS");
}else if(role == "guest"){
console.log("LIMITED ACCESS");
}

