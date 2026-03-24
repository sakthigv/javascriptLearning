// Lesson $ - Arrays :

/*let numbers = [10,20,30,40];
let fruits = ["Apple","Mango","Banana","Orange"];

console.log(numbers[2]);
console.log(fruits[0]);

for(let i = 0; i<fruits.length;i++){
console.log(fruits[i]);
}
console.log("----------------------------------------------")
// Real Life Tester Example --- 
let user = ["Admin","Tester","Guest"];

for(let i = 0;i<user.length;i++){
console.log(user[i]);
}
console.log("----------------------------------------------")

//Exercise 
let mark = [60,70,40,90,80];

for(let i = 0;i<mark.length;i++){
console.log(mark[i]);
}

//=================================================
// Array Methods - push() and Pops() :
 
let users = ["admin","tester","guest"];
console.log(users.length); 

users.push("manager");
users.push("sakthi");
for(let i =0;i<users.length;i++){
console.log(users[i]);
}
console.log(users.length);

users.pop();

let is=0;
while(is<users.length){
console.log(users[i]);
is++;
}


// do while loop for printing arrays :

let n = [2,3,4,5,6];
let ii = 0;
do{
    console.log(n[ii]);
    ii++;
}while(ii<n.length); */

// Find Largest number in Array :

/*let numbers = [10,25,8,40,15];

let largest = numbers[0];

for(let i = 0;i<numbers.length;i++){

    if(numbers[i]>largest){
       largest = numbers[i];
    }
}
    console.log(largest); */

//==========================================================================

/*let fruits = ["apple","Orange","Pineapple","Mango"];

for(let i = 0; i<fruits.length;i++){
console.log(fruits[i]);
}

//2 --- print array using while loop

let numbers = [7,4,8,6,2,1];
let is = 0;
while(is<numbers.length){
    console.log(numbers[is]);
    is++;
}

//3 --- print using do while 

let animals = ["dog","cat","lion","tiger"];
let ii = 0;
do{
    console.log(animals[ii]);
    ii++;
}while(ii<animals.length);

//4 ---- Array Length :

let colours = ["red","blue","green","yellow"];
console.log(colours.length);

//5---- push()

let users = ["admin","tester","guest"];
users.push("manager");
for(let i=0;i<users.length;i++){
    console.log(users[i]);
}

//6 ---- pop()

let cities = ["Chennai","Bangalore","Madurai"];
cities.pop();
for(let i=0;i<cities.length;i++){
    console.log(cities[i]);
}

//7 ---- Find largest number in array 

let nos = [12,45,22,67,34];

let largest = nos[0];

for(let i=0;i<nos.length;i++){
    if(nos[i]>largest){
        largest = nos[i];
    }
}
console.log(largest);

//8 -- count even numbers 

let nums = [2,5,8,11,14];
let sum = [];

for(let i = 0;i<nums.length;i++){
if(nums[i] % 2 == 0){
    sum.push(nums[i]);
}
}
console.log(sum.length);

//9 --- Sum of Arrays :

let number = [10,20,30,40];

let sumOfNo = 0;
for(let i = 0;i<number.length;i++){
sumOfNo = sumOfNo + number[i];
}
console.log(sumOfNo);

// Reverse print Array 

let s =[1,2,3,4,5];

for(let i=s.length - 1;i>=0;i--){
console.log(s[i]);
} */

// mini interview question 

/*let number = [5,10,15,20,25];

console.log(number.length);
number[number.length-1];
console.log(number[4]);
*/

// TEST FOR BEGINNERS :

//Question 1 -- variable 
let a = 10;
let b = 20;
let sum = a+b;
console.log(sum);
console.log("==================================================");
//Question 2 -- If else 
 
    function checkIfGreater(num){
        if(num>10){
         console.log("Greater");
        }else{
            console.log("Smaller");
        }
    }
     checkIfGreater(34);
console.log("==================================================");
    //Question 3  -- Function

    function add(d,e){
        console.log(d+e);
    }

    add(23,44);
 
console.log("==================================================");
    // Question 4 --- For loop

   for(let i = 1;i<=5;i++){
      console.log(i);
   }
console.log("==================================================");
   // Question 5 --- While loop

   let s = 5;
   while(s>=1){
   console.log(s);
   s--;
   }
console.log("==================================================");
   //Question == Even numbers

   for(let i = 1;i<=10;i++){
      if(i % 2 === 0){
        console.log(i);
      }
   }
console.log("==================================================");
   //Array Print

   let aa =[10,20,30,40];

   for(let i = 0;i<aa.length;i++){
    console.log(aa[i]);
   }
   console.log("==================================================");
   // Largest Number 

   let lar =[12,45,22,67,34];
   let largest = lar[0];

   for(let i=0;i<lar.length;i++ ){
     if(lar[i]>largest){
        largest = lar[i];
     }
   }
   console.log(largest);
   console.log("======================================================");

   // Reverse Print 
   let rev = [1,2,3,4,5];
   for(let i = rev.length-1;i>=0;i--){
     console.log(rev[i]);
   }
console.log("==================================================");
   //push value 

   let users = ["Admin","Testers"];
   users.push("Guest");
   console.log(users);


   