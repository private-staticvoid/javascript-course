// // JavaScript Fundamentals - Hour 1
// // My first JavaScript code!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("=== VARIABLES ===");

// let firstName = "Aki";
// console.log(firstName);

// let age = 30;
// console.log(age);

// age = 20;
// console.log(age);

// const birthYear = 2005;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// //do not use var
// var job = "programmer";



// // Good Variable Names
// let lastName = "Feraren";
// let myCurrentJob = "Developer";
// let PIZ = 3.14


// // Bad Variable Name
// // let 3years
// // let jonas&mathilda
// // let new


// const country = "Japan";
// const language = "Japanese";
// const population = 126476461;

// // use let only when you need to change the value
// let ageNow = 25;
// ageNow = 26;


// console.log("=== DATA TYPES ===");

// let weight = 45;
// console.log(weight);
// console.log(typeof age);

// // Boolean
//  let javascriptIsFun = true;
//  console.log(javascriptIsFun);
//  console.log(typeof javascriptIsFun);

//  let year;
//  console.log(year);
//  console.log(typeof year);

//  console.log("=== DYNAMICVARIABLES ===");

//  let dynamicVariable = 23;
//  console.log(dynamicVariable, typeof dynamicVariable)

//  dynamicVariable = "Now i am a string";
//  console.log(dynamicVariable, typeof dynamicVariable)

//  dynamicVariable = true;
//  console.log(dynamicVariable, typeof dynamicVariable)



//--------------------------------------------------------------------------------------------



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
// console.log("=== OPERATOR PRECEDENCE ===");
// const now = 2037;
// const ageJonas = now - 1991;
// const ageAki = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 -5;
// console.log(x, y);

// const averageAge = (ageJonas + ageAki) /2;
// console.log(ageJonas, ageAki, averageAge);

// ////////////////////////////////////
// // Coding Challenge #1 - BMI Calculator
// //TEST DATA 1
// const weightMark = 78;
// const heightMark = 1.69;

// const weightJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = weightMark / heightMark ** 2;
// const BMIJohn = weightJohn / heightJohn ** 2;

// console.log(BMIMark);
// console.log(BMIJohn);

// console.log("Mark has a higher BMI than John =", + BMIMark > BMIJohn);

// //TEST DATA 2
// const weightMark2 = 95;
// const heightMark2 = 1.88;

// const weightJohn2 = 85;
// const heightJohn2 = 1.76;

// const BMIMark2 = weightMark2 / heightMark2 ** 2;
// const BMIJohn2 = weightJohn2 / heightJohn2 ** 2;

// console.log(BMIMark);
// console.log(BMIJohn);

// console.log("Mark has a higher BMI than John =", + BMIMark2 > BMIJohn2);


////////////////////////////////////
// Strings and Template Literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);



// // The modern way - ES6 Template Literals
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// // Any expression works inside ${}
// console.log(`I'm ${2037 - 1991} years old`)
// console.log(`Math works: ${2 + 3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`);

// console.log(`this is just a regular stringh?....`);

// ////////////////////////////////////
// // Taking Decisions: if / else Statements
// const age = 15;
// if (age >= 18){
//     console.log(`Aki can start driving license🚗`);
// }else{
//     const  yearLeft = 18 - age;
//     console.log(`Aki is too young. Wait another ${yearLeft} years!`);
// }

// ////////////////////////////////////
// // Truthy and Falsy Values
// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean("Jonas")); // true
// console.log(Boolean({})); // true (empty object)
// console.log(Boolean("")); // false (empty string)

// const money = 100;

// if (money) {
//     console.log((`Dont spent it all ;`));
// }else{
//     console.log(`You should get a job!`);
    
// }

// let height = 0;
// if (height) {
//     console.log(`yeyyyy Height is defined`);
// } else {
//     console.log(`Height is UNDEFINED`);
// }

// if (height !== undefined) {
//   console.log("Height is defined");
// }

// ////////////////////////////////////
// // Coding Challenge #2

// // Reuse your BMI calculation from Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// // Your if/else statement here:
// // Compare BMIs and create intelligent messages
// // Use template literals for beautiful output

// if (BMIMark > BMIJohn){
//     console.log(`Marks BMI is ${BMIMark} and is higher than Johns BMI of ${BMIJohn} and it is higher than ${BMIJohn}`)
    
// } else if (BMIJohn > BMIMark){
//     console.log(`Johns BMI is ${BMIJohn} and is higher than Marks BMI of ${BMIMark}`)
// }
// else {
//     console.log(`Both have the same BMI of ${BMIMark}`);
// }



////////////////////////////////////
// Type Conversion and Coercion
console.log("=== Type Conversion and Coercion ===");
// type conversion (manual)
const inputYear = "1991";
console.log(Number(inputYear), inputYear); 
console.log(Number(inputYear) + 18);

console.log(Number("Aki")); 
console.log(typeof NaN); 

console.log(String(23), 23); 
console.log(typeof String(23)); 

// type coercion (automatic)
console.log("I am " + 23 + " years old"); 
console.log("23" - "10" - 3); 
console.log("23" / "2"); 
console.log("23" * "2"); 


// guess the output
let n = "1" + 1; //11
n = n - 1; //10
console.log(n);

console.log(2 + 3 + 4 + "5"); 
console.log("10" - "4" - "3" - 2 + "5");

// Predict the output
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("5" / 2); // 2.5

// Convert values
const userAge = "25"; 
const userScore = 95;

const ageNumber = Number(userAge); // string → number
const scoreString = String(userScore); // number → string

console.log(ageNumber, typeof ageNumber);
console.log(scoreString, typeof scoreString);




////////////////////////////////////
// Equality Operators: == vs. ===
console.log("=== Equality Operators: === vs == ===");
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

// Let's see what happens:
console.log("18" === 18); // false - different types
console.log("18" == 18); // true - coercion happens
console.log(18 === 18); // true - same type and value

// Convert explicitly, then compare strictly
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

// Not-equal operator
if (favourite !== 23) console.log("Why not 23?");


//Exercise 1: Equality Detective
console.log(5 === "5"); // false (different types)
console.log(5 == "5");  // true  (string converted)
console.log(true === 1); // false (boolean vs number)
console.log(true == 1);  // true  (true → 1)
console.log(false === 0); // false (boolean vs number)
console.log(false == 0);  // true  (false → 0)

//Exercise 2: Fix the Login System
const username = prompt("Username:");
const password = prompt("Password:");

// Use strict equality
if (username === "admin" && password === "1234") {
  console.log("Welcome admin!");
} else {
  console.log("Access denied");
}



////////////////////////////////////
// Logical Operators
console.log("=== Logical Operators: ===");
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // AND: both must be true
console.log(hasDriversLicense || hasGoodVision); // OR: one must be true
console.log(!hasDriversLicense); // NOT: inverts the value
  

//Real-World Example
const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

// More complex scenarios
const driverAge = 20;
const hasPermission = true;
const hasExperience = false;

// Can drive if: (driverAge >= 18 OR has permission) AND has experience
if ((driverAge >= 18 || hasPermission) && hasExperience) {
  console.log("Approved to drive");
} else {
  console.log("Not approved to drive");
}

//Exercise 1: Club Entry System
const clubAge = 19; 
const hasID = true; 
const isVIP = false;

// Rule: (clubAge >= 21 && hasID) OR isVIP
if ((clubAge >= 21 && hasID) || isVIP) {
  console.log("Welcome to the club!");
} else {
  console.log("Sorry, you cannot enter");
}

//Exercise 2: Weather Advisor
const temperature = 25; 
const isRaining = false;
const isWindy = true;

// Rules
if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy) {
  console.log("Perfect day!");
} else if (temperature >= 15 && temperature <= 35 && !isRaining) {
  console.log("Good day!");
} else {
  console.log("Stay inside!");
}



////////////////////////////////////
// The Conditional (Ternary) Operator
console.log("=== The Conditional (Ternary) Operator: ===");
const agee = 23;

// Basic ternary
const drink = agee >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

// Equivalent if/else
let drink2;
if (agee >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

// Ternary inside template literals
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

// ✅ Good ternary use
const score = 75;
const isLoggedIn = true;
const isPremium = false;

const status = score >= 60 ? "passed" : "failed";
const message = isLoggedIn ? "Welcome back!" : "Please log in";
const discount = isPremium ? 0.2 : 0.1;

console.log(status, message, discount);

// ✅ Use if/else for complex logic
let grade;
if (score >= 90) {
  console.log("Excellent!");
  grade = "A";
} else if (score >= 80) {
  console.log("Good job!");
  grade = "B";
} else {
  grade = "C";
}
console.log(grade);


//Exercise 1: Status Messages (Convert to Ternary)
// 1. Login status
const isLoggedIn2 = true;
const welcomeMessage = isLoggedIn2 ? "Welcome back!" : "Please sign in";
console.log(welcomeMessage);

// 2. Price with discount
const isPremium2 = false;
const price = isPremium2 ? 100 * 0.8 : 100;
console.log(price);

//Exercise 2: Smart Responses
const score2 = 85;
const weather = "sunny";
const battery = 15;

// Score message
console.log(`Your score: ${score2} (${score2 >= 60 ? "Passed" : "Failed"})`);

// Weather message
console.log(
  `Weather is ${weather} (${
    weather === "sunny" ? "Great for outdoor activities" : "Stay inside"
  })`
);

// Battery message
console.log(
  `Battery: ${battery}% (${battery < 20 ? "Low battery warning" : "Battery OK"})`
);

////////////////////////////////////
// Coding Challenge #4

const bill = 275; // Test with 275, 40, and 430

// Step 1: Tip calculation with ternary
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Step 2: Output with template literal
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${
    bill + tip
  }`
);

// Expected outputs:
// Bill 275: "The bill was 275, the tip was 41.25, and the total value 316.25"
// Bill 40:  "The bill was 40, the tip was 8, and the total value 48"
// Bill 430: "The bill was 430, the tip was 86, and the total value 516"

////////////////////////////////////
// Coding Challenge #4

function tipCalculator(bill) {
  // Tip rule: 15% if bill is between 50 and 300, otherwise 20%
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

  // Output result
  console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
  );
}

// Test cases
tipCalculator(275); // 41.25 tip
tipCalculator(40);  // 8 tip
tipCalculator(430); // 86 tip
