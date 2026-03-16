  // loop - repeats code multiple time automatically
  // fpr loop

 /* for(let i = 1;i<=10;i++){
       console.log(i);
  }

  for(let i= 1;i<=20;i++){
    if(i % 2 == 0){
        console.log(i);
    }
  }

 for(let i = 1;i<=15;i++){
    if(i%2>=1){
         console.log(i);
    }
  }
 
  for(let i = 10; i >=1;i--){
        console.log(i);
    }
*/

  // While loop
/*let i = 1;
  while(i<=10){
console.log(i);
i++;
  }

  while(i<=20){
    i++;
    if(i % 2 == 0){
        console.log(i);
    } 
  }


  // do while loop

  do{
console.log(i);
i++;
  }while(i<=10); */



//====================================================================EXECISE

// TO FIND SUM OF NUMBERS FROM 1 TO 10 ;

/*let sum = 0;

for(let i=1;i<=10;i++){
   sum = sum +i;
   console.log(sum);    
} */

/* let a=5;
   for(let i=1;i<=10;i++){
    s=a*i;
     console.log(s);
     } */



/* let count = 0;

     for(let i =1;i<=20;i++){
        if(i % 2 == 0){
            console.log(i);
            count ++;
        }
     }
    console.log("Total Even Numbers " , count); */

   /* let num = 24;
    if(num % 2 == 0 ){
        console.log("NUMBER IS EVEN");
    }else if(num % 3 == 0){
        console.log("Number divisible by 3");
    }else{
            console.log("Other Number");
        } */

//Factorial 

/*let result = 1;
for(let i = 1;i<=5;i++){
result=result*i;
}
console.log(result); */

//Divisible by 5 ;

/*for(i=1;i<=50;i++){
    if(i % 5 == 0){
        console.log(i);
    }
} */

// Reverse number Pattern :
/*for(let i = 5;i>=1;i--){
   console.log(i);
}*/

//Function Check ;

/*function checkNum(num){
if(num>0){
console.log("POSITIVE");
}else if(num<0){
console.log("NEGATIVE");
}else{
    console.log(0)
}
}
checkNum(0); */

// SUM OF ODD NUMBERS 

 //  for(let i=1;i<=15;i++){
   //   if(i % 2 >=1){
     // console.log(i);
      //}
   //}
 
   //Largest of three Numbers :
       
   /*function largestNum(a,b,c){

        if(a>b && a>c){
         console.log(" LARGEST NUMBER IS " + a);
        }else if(b>a && b>c){
         console.log(" LARGEST NUMBER IS " + b);
        }else{
            console.log(" LARGEST NUMBER IS " + c);
        }
   }
   largestNum(23,43,55); */


// Multiples of 3 :

/* for(let i = 1;i<=20;i++){
      if( i % 3 ===0){
        console.log(i);
      }
} */


// Table of 6 in reverse order :

/*let a = 6;

for(let i=10;i>=1;i--){
  s=i*a;
  console.log(s);
} */

  /* function checkNum(num){
     if (num % 2 ==0 && num % 3 == 0){
            console.log("Number divisible by both 2 and 3");
     }else if(num % 2 == 0){
          console.log("Number divisible by 2");
     }else if (num % 3 == 0){
        console.log("Number Divisible by 3");
     }else{
        console.log("Other Number");
     }
     }

     checkNum(29); */


     //Qustion 1 --- Variables and Output :

     let nam = "Sakthi";
     let age = 28;
     let city = "Chennai";

     console.log(" My Name Is " + nam);
     console.log("i am "+age+" years old.");
     console.log("i am from "+city);



// Question 2 -- function and conditons (ODD or EVEN) :

function checkNum(num){
if(num % 2 === 0){
 console.log("Number is Even")
}else{
  console.log("Number is Odd ")
}
}
checkNum(7);

//Question 3 ----largest Number ;

function largestNumber(a,b,c){
if(a>b && a>c){
console.log("Largest number is " + a);
}else if(b>a && b>c){
console.log("Largest number is " + b);
}else if(c>a && c>b){
  console.log("Largest number is " + c);
}else{
  console.log("Number not defined");
}
}

// Question 5 --- Sum using loops (from 1 to 10):

let sum = 0;
for(let i=1;i<=10;i++){
  sum = sum + i;
  console.log(i);
}

//Question5 -- Multiplication table of 7 :
let d=7;
for(let i=1;i<=10;i++){
multiple = i * d;
console.log(multiple);
}

// Question 6 -- Number Type :

function checkNumber(numb){
if(numb % 2 === 0 && numb % 3 === 0){
console.log("Number Divisible by both 2 and 3");
}else if(numb % 2 === 0){
console.log("Number Divisible by 2");
}else if(numb % 3 === 0){
  console.log("Number Divisible by 3");
}else{
  console.log("Not Defined");
}
}

// Question 7 -- Factorial

function factorialOf(fac){
  let result = 1;
  for(let i=1;i<=fac;i++){
   result = result * i;
  }
  console.log(result);
}

factorialOf(5);