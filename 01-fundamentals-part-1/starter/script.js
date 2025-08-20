// // // JavaScript Fundamentals - Hour 1
// // // My first JavaScript code!

// // let js = "amazing";
// // console.log(40 + 8 + 23 - 10);

// // console.log("=== VARIABLES ===");

// // let firstName = "Aki";
// // console.log(firstName);

// // let age = 30;
// // console.log(age);

// // age = 20;
// // console.log(age);

// // const birthYear = 2005;
// // console.log(birthYear);

// // const PI = 3.1415;
// // console.log(PI);

// // //do not use var
// // var job = "programmer";



// // // Good Variable Names
// // let lastName = "Feraren";
// // let myCurrentJob = "Developer";
// // let PIZ = 3.14


// // // Bad Variable Name
// // // let 3years
// // // let jonas&mathilda
// // // let new


// // const country = "Japan";
// // const language = "Japanese";
// // const population = 126476461;

// // // use let only when you need to change the value
// // let ageNow = 25;
// // ageNow = 26;


// // console.log("=== DATA TYPES ===");

// // let weight = 45;
// // console.log(weight);
// // console.log(typeof age);

// // // Boolean
// //  let javascriptIsFun = true;
// //  console.log(javascriptIsFun);
// //  console.log(typeof javascriptIsFun);

// //  let year;
// //  console.log(year);
// //  console.log(typeof year);

// //  console.log("=== DYNAMICVARIABLES ===");

// //  let dynamicVariable = 23;
// //  console.log(dynamicVariable, typeof dynamicVariable)

// //  dynamicVariable = "Now i am a string";
// //  console.log(dynamicVariable, typeof dynamicVariable)

// //  dynamicVariable = true;
// //  console.log(dynamicVariable, typeof dynamicVariable)



// //--------------------------------------------------------------------------------------------



// // Basic Operators - Math Operators
// console.log("=== MATH OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageAki = now - 2005;
// console.log(ageJonas, ageAki);


// console.log(ageJonas * 2, ageJonas/ 10, 2 **3);

// console.log("Math operationbs:")
// console.log("Adittion:", 10 + 5);
// console.log("Subtraction:", 20 + 8);
// console.log("Multiplication:", 4 * 7);
// console.log("division:", 15 / 5);
// console.log("Exponentation:", 2 ** 3);


// //String concat
// const firstName = "Jonas";
// const lastName = "doe";
// console.log(firstName + " " + lastName);

// console.log("hello" + "World" + "!");
// console.log("I am " + 25 + " years old");


// // Assignment operators
// console.log("==== ASSIGNMENT OPERATORS ====");

// let x = 10 + 5;
// console.log("x starts as:", x);

// x += 10
// console.log("x starts as:", x);

// x *= 4
// console.log("x starts as:", x);

// x /= 2
// console.log("x starts as:", x);

// // increment amd decrement
// x ++;
// console.log("x starts as:", x);

// x --;
// console.log("x starts as:", x);

// //Practice assignment operators:

// let score = 100;

// score += 50;
// console.log("your score is now:", score);
// score *= 2;
// console.log("your score is now:", score);
// score -= 25;
// console.log("your score is now:", score);
// score ++;
// console.log("your score is now:", score);
// score ++;
// console.log("your score is now:", score);


// ////////////////////////////////////
// // Comparison operators
// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison:");
// console.log(ageJonas > ageAki); // true (46 > 19)
// console.log(ageAki >= 18); // true (19 >= 18)
// console.log(ageJonas < 30); // false (46 < 30)

// console.log("Number comparisons:");
// console.log(25 > 20); // true
// console.log(15 < 10); // false
// console.log(18 >= 18); // true
// console.log(16 <= 15); // false


// const isFUllAge = ageAki >=18;
// console.log("AKi is adult:", isFUllAge);

// const isJonasOlder = ageJonas > ageAki;
// console.log("Jonas is Older: ", isJonasOlder);

// console.log("Complex Comparison:");
// console.log(now - 1991 > now - 2018);
// console.log(ageJonas > ageAki);

// ////////////////////////////////////
// Operator Precedence
console.log("=== OPERATOR PRECEDENCE ===");
const now = 2037;
const ageJonas = now - 1991;
const ageAki = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 -5;
console.log(x, y);

const averageAge = (ageJonas + ageAki) /2;
console.log(ageJonas, ageAki, averageAge);


//TEST DATA 1
let weightMark = 78;
let heightMark = 1.69;

let weightJohn = 92;
let heightJohn = 1.95;

let BMIMark = weightMark / heightMark ** 2;
let BMIJohn = weightJohn / heightJohn ** 2;

console.log(BMIMark);
console.log(BMIJohn);

console.log("Does Mark has a higher BMI than John", + BMIMark > BMIJohn);

let weightMark2 = 95;
let heightMark2 = 1.88;

let weightJohn2 = 85;
let heightJohn2 = 1.76;

let BMIMark2 = weightMark2 / heightMark2 ** 2;
let BMIJohn2 = weightJohn2 / heightJohn2 ** 2;

console.log(BMIMark);
console.log(BMIJohn);

console.log("Does Mark has a higher BMI than John", + BMIMark2 > BMIJohn2);

