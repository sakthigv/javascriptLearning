
//FUNCTION lesson

function welcome(){
    console.log("Welcome Sakthi");
 }
 welcome();


 function greet(name){
    console.log(" Hello " + name);
 }

 greet("Sakthi");

 function add(a,b){
   console.log(a+b);
 }
add(10,20);

function multiply(a,b){      // Return needed in order to set function values in a variable
return a * b;
}

let total = multiply(10,20) + 5;
console.log(total);

function check(s){

    if(s % 2 === 0){
        console.log("Given Number is EVEN");
    }else{
        console.log("Given Number is ODD");
    }
}
check(17);

function square(d){   //Exercise 1
console.log(d * d);
}
square(8);
 
//exercise 2
function welcomMessage(name,place){
    console.log(" Welcome " + name + " from "+ place);
}
welcomMessage("Sakthi","Chennai");

//exercise 3
function maxNum(e,f){
if(e>f){
    console.log("Maximum Number is " + e);
}else {
    console.log("Maximum Number is " + f);
}
}
maxNum(123,144);

//exercise 4
function checkTemp(t){
    if(t >= 30){
        console.log("Temperature is Hot");
    }else if(t<30){
        console.log("Temperature is Cold");
    }
}
checkTemp(27);

function checkResult(r){
    if (r>=50){
    console.log("PASS");
    }else{
        console.log("FAIL");
    }
}

checkResult(55);