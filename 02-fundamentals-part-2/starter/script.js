// console.log("Java Script Fundamentals Part 2");

// // JavaScript Fundamentals Part 2 - Hour 1
// // Functions - Declarations and Expressions
// console.log(`=== FUNCTIONS - Declarations and Expressions ===`);

// function  logger() {
//     console.log("This function is working");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 2 oranges.`;

// const calAge = function (birthYear) {
//     return 2037 - birthYear;
// };

// const age1 = calAge(2000);
// console.log(age1);

// function calAge2 (birthYear, currentYear) {
//     const age = currentYear - birthYear;
//     return age;
// }

// const myAge = calAge2(2004, 2025);
// const someoneAge = calAge2(1999, 2025);

// console.log(`I am ${myAge} years old.`);
// console.log(`She is ${someoneAge} years old.`);

// function introduce(firstName, lastName, age) {
//     const introduction = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
//     return introduction;
// }

// console.log(introduce("Achiles", "Troy", 30));
// console.log(introduce("Sarah"));


// function calcAge3(birthYear) {
//     return 2037 - birthYear;
// }

// function yearsUntilRetirement(birthYear, firstName) {
//     const age = calcAge3(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years.`;
//     } else {
//         return `${firstName} has already retired.`;
//     }
// }

// console.log(yearsUntilRetirement(2004, "Aki"));
// console.log(yearsUntilRetirement(1940, "Agnes Tachyon"));


// const globalVar = `I am global!`;

// function testScope() {
//     const localVar = `I am local!`;
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope();
// console.log(globalVar);


// const userName = "Jonas";

// function createWelcomeMessage( user) {
//     const message = `Welcome ${user}!`;
//     const timestamp = new Date().toLocaleTimeString();
//     return `${message} Current time: ${timestamp}`;
// }

// console.log(createWelcomeMessage(userName));


// // Coding Challenge #1

// // Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//   const average = (score1 + score2 + score3) / 3;
//   return average;
// }

// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
//   } else {
//     return `No team wins.. (${avgDolphins} vs ${avgKoalas})`;
//   }
// }

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));


// //Exercise 1: Personal Greeting
// function greetStudent(name) {
//     return `Hello, ${name}, welcome to JavaScript!`;
// }

// const name1 = "Achiles";
// console.log(greetStudent(name1));

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;


// JavaScript Fundamentals Part 2 - Hour 2
// Arrays and Data Manipulation
console.log("Java Script Fundamentals Part 2 - Hour 2");

const student1Grade = 85;
const student2Grade = 92;
const student3Grade = 78;

console.log("=== ARRAYS AND DATA MANIPULATION ===");

const grades = [85, 92, 78, 96, 88];
console.log(grades);

const mixed = ["Achiles", 21, "Troy", true];
console.log(mixed);

const friends = ["Michael", "Steven", "Peters"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);

friends[0] = "Reinne";
console.log(friends[0]);

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const calcAge = function (birthYear) {
    return 2025 - birthYear;
};

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const ages = [calcAge(2000), calcAge(1995), calcAge(1991)];
console.log(ages);

ages[1] = calcAge(1800);
console.log(ages);

// Array Methods
const friends2 = ["Michael", "Steven", "Peter"];

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const newLength = friends2.push("Steve");
console.log(friends2);
console.log(newLength);

friends2.unshift("Achiles");
console.log(friends2);

const popped = friends2.pop();
console.log(friends2);

const calAge = function (birthYear) {
    return 2037 - birthYear;
};

const shifter = friends2.shift();
console.log(friends2);

const age1 = calAge(2000);
console.log(age1);

function calAge2(birthYear, currentYear) {
    const age = currentYear - birthYear;
    return age;
}

console.log(friends2.indexOf("Michael"));
console.log(friends2.indexOf("Reinne"));

console.log(friends2.includes("Steven"));
console.log(friends2.includes("Bob"));

for (let i = 0; i < friends2.length; i++) {
    console.log(friends2[i]);
}

const myAge = calAge2(2004, 2025);
const someoneAge = calAge2(1999, 2025);

friends2.forEach(function(friend, index) {
    console.log(`Friend ${index + 1}: ${friend}`);
});

console.log(`I am ${myAge} years old.`);
console.log(`She is ${someoneAge} years old.`);

const grades2 = [85, 92, 72, 96, 88];
let total = 0;

function introduce(firstName, lastName, age) {
    const introduction = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
    return introduction;
}

for (let i = 0; i < grades2.length; i++) {
    total += grades2[i];
}

console.log(introduce("Achiles", "Troy", 30));
console.log(introduce("Sarah"));

const average = total / grades2.length;
console.log(`Average grade: ${average.toFixed(2)}`);

let passCount = 0;

grades2.forEach((grade) => {
    if (grade >= 70) passCount++;
});

console.log(`${passCount} out of ${grades2.length} students passed.`);

function calcAge3(birthYear) {
    return 2037 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
    const age = calcAge3(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} has already retired.`;
    }
}

// Challenge #2
const grades3 = [78, 85, 92, 67, 88, 95, 73, 82];
let total3 = 0;

// Function to calculate average
function calculateAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
}

// Function to find highest grade
function findHighestGrade(grades) {
    let highest = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] > highest) {
            highest = grades[i];
        }
    }
    return highest;
}

// Function to find lowest grade
function findLowestGrade(grades) {
    let lowest = 100;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < lowest) {
            lowest = grades[i];
        }
    }
    return lowest;
}

console.log(`Average Grade (grades3): ${calculateAverage(grades3).toFixed(2)}`);
console.log(`Highest Grade: ${findHighestGrade(grades3)}`);
console.log(`Lowest Grade: ${findLowestGrade(grades3)}`);
