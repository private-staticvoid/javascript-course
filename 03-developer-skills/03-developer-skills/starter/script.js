// // Remember, we're gonna use strict mode in all scripts now!
// "use strict";

// ////////////////////////////////////
// // Professional Development Environment Setup

// console.log("=== DEVELOPMENT ENVIRONMENT SETUP ===");

// // Create some messy code - don't worry about formatting yet
// const messyExample = function (name, age) {
//   if (age >= 18) {
//     return "Hello " + name + ", you are an adult";
//   } else {
//     return "Hello " + name + ", you are a minor";
//   }
// };

// console.log("Current messy code example:", messyExample("John", 25));
// console.log("Goal: Automatic formatting, auto-refresh, and typing shortcuts");

////////////////////////////////////
// Extension Installation Test

// function testExtensions() {
//   const extensionTests = [
//     { name: "Prettier", status: "installed", purpose: "code formatting" },
//     { name: "Live Server", status: "installed", purpose: "auto refresh" },
//     {
//       name: "Auto Rename Tag",
//       status: "installed",
//       purpose: "HTML efficiency",
//     },
//   ];

//   return extensionTests;
// }

// const extensionStatus = testExtensions();
// console.log("Extension installation status:", extensionStatus);

////////////////////////////////////
// Prettier Configuration Test

// // This code has terrible formatting - Prettier will fix it!
// const prettierTest = {
//   firstName: "Sarah",
//   lastName: "Johnson",
//   skills: ["JavaScript", "React", "Node.js"],
//   isActive: true,
// };

// const messyFunction = function (x, y, z) {
//   if (x > 0 && y > 0) {
//     return x + y + z;
//   } else {
//     return 0;
//   }
// };

// const messyArrow = (items) => {
//   return items.map((item) => {
//     return item.toUpperCase();
//   });
// };

// console.log(
//   "Before Prettier formatting - this code works but looks unprofessional"
// );

// const studentTest = {
//   firstName: "your-name",
//   skills: ["HTML", "CSS", "JavaScript"],
//   experience: "beginner",
//   goals: ["become-developer", "build-projects"],
// };
// const testFunc = function (data) {
//   for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
//   }
// };

////////////////////////////////////
// Live Server Testing

// // Test 1: Basic live reload
// let liveServerTest = "Initial message - change #1";
// console.log("Live Server test:", liveServerTest);

// // Test 2: Time-based updates
// const timeStamp = new Date().toLocaleTimeString();
// const updateCount = 1;

// console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// // Test 3: Function testing
// function demonstrateLiveReload() {
//   const randomColor = ["red", "blue", "green", "purple", "orange"][
//     Math.floor(Math.random() * 5)
//   ];
//   const message = `Live Server rocks! Random color: ${randomColor}`;

//   console.log(message);
//   return message;
// }

// demonstrateLiveReload();

// // Student Exercise: Add this function and test live reload
// function showCurrentTime() {
//   const now = new Date().toLocaleTimeString();
//   console.log("Current time:", now);
//   return now;
// }

// showCurrentTime();

// ////////////////////////////////////
// // Code Snippets Testing

// // Type 'cl' then press Tab - it should expand to console.log();
// console.log("Testing snippet functionality - cl + Tab created this!");

// // Type 'func' then press Tab - it should create a function template
// function testSnippets() {
//   console.log("Function created with snippet - func + Tab!");
//   return "Snippets working perfectly!";
// }

// testSnippets();

// // Type 'arrow' then press Tab - it should create an arrow function template
// const snippetTest = (message) => {
//   console.log(`Arrow function from snippet: ${message}`);
//   return message;
// };

// snippetTest("Snippets save so much typing time!");

// ////////////////////////////////////
// // Environment Setup Verification

// console.log("🎉 Professional Development Environment Complete!");
// console.log("✅ Prettier: Automatic code formatting");
// console.log("✅ Live Server: Automatic browser refresh");
// console.log("✅ Snippets: Fast code generation");
// console.log("✅ Extensions: Enhanced productivity");
// console.log("Ready for professional JavaScript development!");

// // Calculate time savings
// function calculateTimeSavings() {
//   const dailyConsoleLogs = 50;
//   const keystrokesSavedPerLog = 11; // 'console.log()' vs 'cl' + Tab
//   const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
//   const monthlySavings = dailySavings * 22; // work days

//   console.log(`Daily keystrokes saved: ${dailySavings}`);
//   console.log(`Monthly keystrokes saved: ${monthlySavings}`);

//   return { daily: dailySavings, monthly: monthlySavings };
// }

// calculateTimeSavings();

// Developer Skills Hour 2 - Learning How to Code & Problem-Solving Framework
// "use strict";

// console.log("=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===");

// /*
// The Reality of Learning to Code:
// - Most people expect: Learn syntax → Become developer
// - Actual process: Learn basics → Feel confident → Try real project →
//   Get stuck everywhere → Question everything → Keep pushing →
//   Gradual improvement → Success
// - Key insight: Problem-solving matters more than syntax memorization
// */

// console.log(
//   "Key insight: Professional developers think systematically, not just code"
// );

// /*
// Beginner vs Professional Problem-Solving Approaches:

// BEGINNER APPROACH:
// 1. Jump straight into coding
// 2. Get stuck immediately
// 3. Google random solutions
// 4. Copy-paste without understanding
// 5. Get frustrated when nothing works

// PROFESSIONAL APPROACH:
// 1. Understand the problem completely
// 2. Break into smaller sub-problems
// 3. Research specific solutions
// 4. Implement step by step
// 5. Test and debug systematically

// Today we learn the professional approach!
// */

// console.log("Goal: Transform from beginner to professional problem-solver");
// ////////////////////////////////////
// // PRACTICAL PROBLEM-SOLVING: Smart Home Thermometer

// /*
// PROBLEM STATEMENT:
// Given an array of temperatures from one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error.

// Test data: [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// STEP 1: UNDERSTANDING THE PROBLEM
// - Temperature amplitude = difference between highest and lowest temperature
// - Sensor errors = 'error' strings that should be ignored
// - Return a number representing amplitude (max - min)

// STEP 2: SUB-PROBLEMS
// 1. How to ignore errors? (Skip non-number values)
// 2. Find max value in temperature array
// 3. Find min value in temperature array
// 4. Subtract min from max and return result
// */
// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const temps1 = [3, 5, 1, "error", 9];
// const temps2 = [10, 17, -3, 14, "error"];
// const amplitudeNew = calcTempAmplitudeNew(temps1, temps2);
// console.log(amplitudeNew); // Should be 20 (max 17 - min -3)
////////////////////////////////////
// EXTENDED PROBLEM: Two Arrays

/*
PROBLEM 2: Function should handle TWO arrays of temperatures

STEP 1: UNDERSTAND - Merge arrays, then apply existing logic
STEP 2: SUB-PROBLEMS - 1) Merge arrays 2) Use existing algorithm  
STEP 3: RESEARCH - array1.concat(array2) method
STEP 4: IMPLEMENT - Combine and reuse existing code
*/

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = [...t1, ...t2]; // alternative to concat
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const array1 = [3, 5, 1];
// const array2 = [9, 0, 5];
// const amplitudeNew = calcTempAmplitudeNew(array1, array2);
// console.log(amplitudeNew);

// console.log(
//   "Problem-solving framework applied successfully to extended challenge!"
// );

// ////////////////////////////////////
// // PRACTICAL PROBLEM-SOLVING: Smart Home Thermometer (My Way)

// /*
// PROBLEM STATEMENT:
// We need to calculate the "temperature amplitude" (max - min)
// from a day's readings. Some readings might be invalid ("error"),
// so we should ignore those.

// Test data: [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// STEP 1: UNDERSTANDING THE PROBLEM
// - Amplitude = max temperature - min temperature
// - Ignore any non-number values
// - Return the amplitude as a number

// STEP 2: SUB-PROBLEMS
// 1. Filter out invalid entries
// 2. Find maximum value
// 3. Find minimum value
// 4. Subtract min from max and return
// */

// const calcTempAmplitude = (temps) => {
//   // Step 1: Filter valid numbers only
//   const validTemps = temps.filter((t) => typeof t === "number");

//   // Step 2: Get max and min using built-in Math functions
//   const max = Math.max(...validTemps);
//   const min = Math.min(...validTemps);

//   // Step 3: Return amplitude
//   return max - min;
// };

// // Test data
// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// // Run function
// const amplitude = calcTempAmplitude(temperatures);

// // Output
// console.log("Amplitude:", amplitude); // Expected: 23

////////////////////////////////////
// EXTENDED PROBLEM: Two Arrays (My Way)

/*
PROBLEM 2:
Function should now handle TWO arrays of temperatures.

STEP 1: UNDERSTAND
- Merge the two arrays into one
- Apply the same amplitude logic

STEP 2: SUB-PROBLEMS
1. Merge arrays
2. Filter out invalid entries
3. Find max value
4. Find min value
5. Return max - min

STEP 3: RESEARCH
- Array merging: [...t1, ...t2] (spread operator)
- Math.max() / Math.min() with spread syntax

STEP 4: IMPLEMENT
- Combine arrays → clean → calculate amplitude
*/

const calcTempAmplitudeNew = (t1, t2) => {
  // Step 1: Merge arrays
  const temps = [...t1, ...t2];

  // Step 2: Keep only valid numbers
  const validTemps = temps.filter((t) => typeof t === "number");

  // Step 3: Use built-in functions for max/min
  const max = Math.max(...validTemps);
  const min = Math.min(...validTemps);

  // Step 4: Return amplitude
  return max - min;
};

// Test data
const array1 = [3, 5, 1];
const array2 = [9, 0, 5];

// Run function
const amplitudeNew = calcTempAmplitudeNew(array1, array2);

// Output
console.log("Amplitude (Two Arrays):", amplitudeNew); // Expected: 9
