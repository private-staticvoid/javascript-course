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

//

// // Developer Skills Hour 3 - Research Skills & Debugging Fundamentals
// "use strict";

// console.log("=== HOUR 3: RESEARCH & DEBUGGING MASTERY ===");

// /*
// Random Googling vs Strategic Research:

// RANDOM GOOGLING (Beginner Approach):
// - Search only when completely stuck
// - Use vague search terms like "javascript array problem"
// - Copy-paste first solution found
// - Don't understand what the code does
// - Same problems happen repeatedly

// STRATEGIC RESEARCH (Professional Approach):
// - Research proactively to understand concepts
// - Use specific, targeted search terms
// - Evaluate multiple solutions
// - Understand solutions before implementing
// - Build knowledge for future problems
// */

// console.log(
//   "Goal: Master research and debugging like a professional developer"
// );
// console.log(
//   "Strategic research builds lasting knowledge, not just quick fixes"
// );

// ////////////////////////////////////
// // PROFESSIONAL GOOGLE RESEARCH TECHNIQUES

// /*
// RESEARCH CHALLENGE: Find Maximum Value in Array
// Search progression:
// 1. "javascript maximum value array"
// 2. "javascript Math.max array"
// 3. "javascript Math.max spread operator array"
// 4. "Math.max MDN javascript"
// */

// function demonstrateArrayMax(numbers) {
//   // ✅ Method 1 - Math.max with spread operator (modern + concise)
//   // Research: "Math.max MDN javascript"
//   const method1 = Math.max(...numbers);

//   // ✅ Method 2 - Classic for loop (manual comparison)
//   // Good for full control, no fancy syntax
//   let method2 = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > method2) {
//       method2 = numbers[i];
//     }
//   }

//   // ✅ Method 3 - Array.reduce (functional style)
//   // Clean one-liner for experienced devs
//   const method3 = numbers.reduce((max, current) =>
//     current > max ? current : max
//   );

//   return { method1, method2, method3 };
// }

// // Test data
// const testNumbers = [3, 7, 2, 9, 1, 5];

// // Run all methods
// const maxResults = demonstrateArrayMax(testNumbers);

// // Compare results
// console.log("Multiple approaches from research:", maxResults);

////////////////////////////////////
// STACK OVERFLOW RESEARCH RESULTS

// /*
// RESEARCH QUESTION:
// "How to reverse a string in JavaScript?"

// STACK OVERFLOW BEST PRACTICES FOLLOWED:
// - Checked answers with high votes
// - Compared multiple methods (not just one)
// - Looked at code examples AND explanations
// - Ignored outdated or over-complicated solutions

// METHODS FOUND:
// 1. split("") + reverse() + join("") → Most common + high-voted
// 2. Manual for-loop → Educational, shows step-by-step logic
// 3. Spread operator + reverse() + join("") → Modern ES6+ approach
// 4. reduce() → Functional programming style
// */

// function reverseStringMethods(str) {
//   // ✅ Method 1 - Most common Stack Overflow solution
//   const method1 = str.split("").reverse().join("");

//   // ✅ Method 2 - Manual loop approach (educational)
//   let method2 = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     method2 += str[i];
//   }

//   // ✅ Method 3 - Modern spread operator approach
//   const method3 = [...str].reverse().join("");

//   // ✅ Method 4 - Using reduce (functional style)
//   const method4 = str.split("").reduce((rev, char) => char + rev, "");

//   return { method1, method2, method3, method4 };
// }

// // Test our Stack Overflow research results
// const reverseResults = reverseStringMethods("hello");

// console.log("Stack Overflow research results:", reverseResults);

////////////////////////////////////
// MDN DOCUMENTATION MASTERY

// /*
// RESEARCH TOPIC: Array.concat()

// MDN NAVIGATION STRATEGY:
// 1. Start with overview → concat merges arrays into a new one
// 2. Syntax: array1.concat(array2, array3, ..., arrayN)
// 3. Parameters: items (arrays or values) to merge
// 4. Returns: NEW array (originals stay unchanged)
// 5. Examples: Most important section → shows simple and multiple concat
// 6. Related: Spread operator [...] can be an alternative
// */

// function demonstrateConcat() {
//   const array1 = [1, 2, 3];
//   const array2 = [4, 5, 6];
//   const array3 = [7, 8, 9];

//   // ✅ Example 1 - Simple concat (from MDN examples)
//   const simple = array1.concat(array2);

//   // ✅ Example 2 - Concatenating multiple arrays at once
//   const multiple = array1.concat(array2, array3);

//   // ✅ Example 3 - Concat with values (not just arrays)
//   const withValues = array1.concat(10, 11, 12);

//   // ✅ Verify concat doesn't modify originals
//   console.log("Original array1 unchanged:", array1);

//   return { simple, multiple, withValues };
// }

// // Run and check our MDN research results
// const concatResults = demonstrateConcat();
// console.log("MDN documentation applied:", concatResults);

// ////////////////////////////////////
// // SYSTEMATIC DEBUGGING METHODOLOGY (Fixed + Hardened)

// /*
// 5-STEP DEBUGGING PROCESS APPLIED:
// 1) IDENTIFY  - Buggy average returned NaN / wrong value
// 2) ISOLATE   - Problem was inside calculateAverageScore
// 3) INVESTIGATE - Found three issues:
//      - total was not initialized
//      - loop used <= which causes out-of-bounds access
//      - division used (length + 1) producing wrong denominator
// 4) FIX       - Initialize total, use correct loop bounds, divide by length
// 5) PREVENT   - Add validation, guard clauses, and an alternative reduce implementation
// */

// // === FIXED: simple, correct version ===
// function calculateAverageScore(scores) {
//   // Prevent misuse
//   if (!Array.isArray(scores)) {
//     throw new TypeError("calculateAverageScore: expected an array of numbers");
//   }

//   // Handle empty array (choose behavior: return 0 here)
//   if (scores.length === 0) return 0;

//   // Initialize accumulator
//   let total = 0;

//   // Correct loop: i < scores.length (not <=)
//   for (let i = 0; i < scores.length; i++) {
//     const value = scores[i];

//     // Validate each element is a number
//     if (typeof value !== "number" || Number.isNaN(value)) {
//       throw new TypeError(
//         `calculateAverageScore: element at index ${i} is not a valid number`
//       );
//     }

//     total += value;
//   }

//   // Correct denominator: scores.length (not length + 1)
//   return total / scores.length;
// }

// // === ALTERNATIVE: reduce-based, concise & validated ===
// function calculateAverageScoreReduce(scores) {
//   if (!Array.isArray(scores)) {
//     throw new TypeError(
//       "calculateAverageScoreReduce: expected an array of numbers"
//     );
//   }
//   if (scores.length === 0) return 0;

//   const total = scores.reduce((acc, cur, idx) => {
//     if (typeof cur !== "number" || Number.isNaN(cur)) {
//       throw new TypeError(
//         `calculateAverageScoreReduce: element at index ${idx} is not a valid number`
//       );
//     }
//     return acc + cur;
//   }, 0);

//   return total / scores.length;
// }

// // === TESTS ===
// const testScores = [85, 92, 78, 96, 88];
// console.log("Average (loop):", calculateAverageScore(testScores)); // 87.8
// console.log("Average (reduce):", calculateAverageScoreReduce(testScores)); // 87.8

// // Edge-case tests
// console.log("Empty array ->", calculateAverageScore([])); // 0

// // Demonstrate error handling (uncomment to test)
// // try {
// //   calculateAverageScore("not-an-array");
// // } catch (e) {
// //   console.error(e.message);
// // }

// // try {
// //   calculateAverageScore([1, 2, "bad", 4]);
// // } catch (e) {
// //   console.error(e.message);
// // // }

// ////////////////////////////////////
// // BROWSER DEVELOPER TOOLS MASTERY

// function demonstrateConsoleDebugging(data) {
//   console.group("Debugging Session");

//   console.log("Input data:", data);

//   if (typeof data !== "object") {
//     console.warn("Warning: Expected object, got", typeof data);
//   }

//   console.table(data);
//   console.groupEnd();

//   return Array.isArray(data) ? data.length : Object.keys(data).length;
// }

// // Test console debugging with different data types
// const arrayData = [1, 2, 3, 4, 5];
// const objectData = { name: "John", age: 30, city: "New York" };

// demonstrateConsoleDebugging(arrayData);
// demonstrateConsoleDebugging(objectData);

// ////////////////////////////////////
// // DEBUGGER STATEMENT AND BREAKPOINTS

// function stepThroughDebugging(numbers) {
//   debugger; // This will pause execution in browser dev tools

//   let sum = 0;
//   let count = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     const currentNumber = numbers[i];

//     console.log(`Processing index ${i}: value = ${currentNumber}`);

//     if (typeof currentNumber === "number") {
//       sum += currentNumber;
//       count++;
//     } else {
//       console.error(`Invalid number at index ${i}:`, currentNumber);
//     }
//   }

//   const average = count > 0 ? sum / count : 0;
//   console.log("Final results:", { sum, count, average });

//   return average;
// }

// // Test debugging function - open dev tools to see debugger in action
// const mixedNumbers = [10, 20, "error", 30, null, 40];
// const debugResult = stepThroughDebugging(mixedNumbers);
// console.log("Debug session result:", debugResult);

////////////////////////////////////
// SYSTEMATIC BUG FIXING APPLICATION

/*
DEBUGGING PROCESS APPLICATION:

STEP 1: IDENTIFY ✅
- Bug: calculateAverageScore returns NaN or wrong value
- Expected: Average of [85, 92, 78, 96, 88] should be 87.8
- Actual: Getting NaN or incorrect value

STEP 2: ISOLATE ✅
- Bug location: Inside calculateAverageScore function
- Specific issues: initialization, loop condition, division

STEP 3: INVESTIGATE ✅
- total starts as undefined (undefined + number = NaN)
- Loop goes one iteration too far (accesses undefined)
- Division uses wrong denominator

STEP 4: FIX ✅
- Initialize total to 0
- Change <= to < in loop condition
- Remove + 1 from division

// STEP 5: PREVENT ✅
// - Add input validation
// - Add type checking for array elements
// - Handle edge cases gracefully
// */

// function calculateAverageScoreFixed(scores) {
//   // STEP 5 - PREVENT: Add input validation
//   if (!Array.isArray(scores) || scores.length === 0) {
//     console.error("Invalid input: scores must be a non-empty array");
//     return 0;
//   }

//   // STEP 4 - FIX: Proper initialization
//   let total = 0; // FIXED: Initialize to 0, not undefined

//   // STEP 4 - FIX: Correct loop condition
//   for (let i = 0; i < scores.length; i++) {
//     // FIXED: < instead of <=
//     // STEP 5 - PREVENT: Add type checking
//     if (typeof scores[i] === "number" && !Number.isNaN(scores[i])) {
//       total += scores[i];
//     } else {
//       console.warn(`Skipping non-number value at index ${i}:`, scores[i]);
//     }
//   }

//   // STEP 4 - FIX: Correct division
//   return total / scores.length; // FIXED: Remove + 1
// }

// // ===============================
// // Comprehensive Debugging Tests
// // ===============================

// console.group("Debugging Verification Tests");

// // Test 1 - Normal case
// const normalScores = [85, 92, 78, 96, 88];
// const normalResult = calculateAverageScoreFixed(normalScores);
// console.log("Test 1 - Normal case result:", normalResult); // ✅ 87.8

// // Test 2 - Edge case with invalid data
// const mixedScores = [85, "invalid", 92, null, 78];
// const mixedResult = calculateAverageScoreFixed(mixedScores);
// console.log("Test 2 - Mixed data result:", mixedResult); // ✅ Should average valid numbers only

// // Test 3 - Error case with invalid input
// const errorResult = calculateAverageScoreFixed("not an array");
// console.log("Test 3 - Error case result:", errorResult); // ✅ 0 with error message

// // Test 4 - Edge case with empty array
// const emptyResult = calculateAverageScoreFixed([]);
// console.log("Test 4 - Empty array result:", emptyResult); // ✅ 0 with error message

// console.groupEnd();

// console.log("Systematic debugging process successfully applied!");
// console.log(
//   "All bugs identified, isolated, investigated, fixed, and prevented 🎉"
// );

// // Developer Skills Hour 4 - Advanced Problem-Solving & Real-World Challenges
// "use strict";

// console.log("=== HOUR 4: ADVANCED PROBLEM-SOLVING MASTERY ===");

// /*
// Your Developer Transformation Today:
// Hour 1: Professional tools and environment ✅
// Hour 2: Problem-solving framework and mindset ✅
// Hour 3: Research and debugging mastery ✅
// Hour 4: Apply everything to real challenges

// You're now solving unfamiliar problems independently.
// */

// console.log("Ready to tackle complex problems using systematic approaches");
// console.log("Challenge: Build solutions that work under pressure");

// ////////////////////////////////////
// // MAIN CHALLENGE: Weather Forecast String Builder

// /*
// WEATHER FORECAST CHALLENGE:
// Apply 4-step framework systematically:
// 1. UNDERSTAND:
//    - Transform an array of temps into a formatted forecast string
//    - Day numbering starts at 1 (index + 1)
//    - Format: "...17°C in 1 days...21°C in 2 days...23°C in 3 days..."
//    - Handle arrays of any length
// 2. DIVIDE:
//    - Loop/iterate through array
//    - Format each temperature with its day
//    - Concatenate into one string with separators
//    - Add starting/ending dots
// 3. RESEARCH:
//    - String concatenation vs template literals
//    - Array methods (map, join, reduce) as alternatives
// 4. IMPLEMENT:
//    - Start with loop solution, then provide alternatives
// */

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// // Primary loop-based solution
// function printForecast(arr) {
//   // Start with empty string accumulator
//   let str = "";

//   // Loop through array to build formatted string
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}°C in ${i + 1} days ... `;
//   }

//   // Add starting dots and log final result
//   console.log("..." + str);
// }

// // Test with provided data
// console.log("Primary loop solution:");
// printForecast(data1);
// printForecast(data2);

// console.log("Weather forecast formatter working correctly!");

// ////////////////////////////////////
// // ALTERNATIVE IMPLEMENTATIONS

// // Alternative 1 - Using array.map() + join()
// function printForecastMap(arr) {
//   const formatted = arr.map((temp, index) => `${temp}°C in ${index + 1} days`);
//   console.log("..." + formatted.join(" ... ") + " ...");
// }

// // Alternative 2 - Using array.reduce()
// function printForecastReduce(arr) {
//   const result = arr.reduce(
//     (acc, temp, index) => acc + `${temp}°C in ${index + 1} days ... `,
//     "..."
//   );
//   console.log(result);
// }

// // Test alternative approaches
// console.log("\nTesting alternative implementations:");
// printForecastMap(data1);
// printForecastReduce(data1);

// ////////////////////////////////////
// // TIME-PRESSURED CHALLENGE: Work Hours Analyzer

// /*
// JOB INTERVIEW SIMULATION (Non-Optimized):
// You have 10 minutes. Focus on correctness, not polish.
// Main goals:
// 1. Total hours
// 2. Average hours
// 3. Day with most hours
// 4. Days worked
// 5. Full-time check
// */

// function analyzeWorkWeek(dailyHours) {
//   // 1. Total hours (reduce pattern)
//   const totalHours = dailyHours.reduce((sum, h) => sum + h, 0);

//   // 2. Average hours (total ÷ 7 days, rounded to 1 decimal)
//   const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;

//   // 3. Find max hours + which day it happened
//   const maxHours = Math.max(...dailyHours);
//   const maxDayIndex = dailyHours.indexOf(maxHours);
//   const days = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];
//   const maxDay = days[maxDayIndex];

//   // 4. Count non-zero days
//   const daysWorked = dailyHours.filter((h) => h > 0).length;

//   // 5. Check full-time (35+ hours)
//   const isFullTime = totalHours >= 35;

//   return {
//     totalHours,
//     averageHours,
//     maxDay,
//     daysWorked,
//     isFullTime,
//   };
// }

// // Quick test
// const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
// console.log("Non-optimized:", analyzeWorkWeek(weeklyHours));

// ////////////////////////////////////
// // OPTIMIZED VERSION: Work Hours Analyzer

// /*
// Optimized & Polished:
// - Adds input validation (must be 7 numbers)
// - Extracts reusable constants (days of week)
// - Includes list of all working days
// - Cleaner, more robust
// */

// const dayNames = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// function analyzeWorkWeekOptimized(dailyHours) {
//   // Validate input
//   if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
//     console.error("❌ Invalid input: must be an array of 7 numbers.");
//     return null;
//   }

//   // Ensure all values are numbers
//   if (!dailyHours.every((h) => typeof h === "number" && !isNaN(h))) {
//     console.error("❌ Invalid input: all values must be numbers.");
//     return null;
//   }

//   // 1. Total hours
//   const totalHours = dailyHours.reduce((sum, h) => sum + h, 0);

//   // 2. Average (1 decimal place)
//   const averageHours = Math.round((totalHours / 7) * 10) / 10;

//   // 3. Max hours + day
//   const maxHours = Math.max(...dailyHours);
//   const maxDay = dayNames[dailyHours.indexOf(maxHours)];

//   // 4. Count worked days + list them
//   const workingDays = dailyHours
//     .map((h, i) => (h > 0 ? dayNames[i] : null))
//     .filter((d) => d !== null);
//   const daysWorked = workingDays.length;

//   // 5. Full-time check
//   const isFullTime = totalHours >= 35;

//   return {
//     totalHours,
//     averageHours,
//     maxDay,
//     daysWorked,
//     workingDays,
//     isFullTime,
//   };
// }

// // Optimized test
// const optimizedAnalysis = analyzeWorkWeekOptimized(weeklyHours);
// console.log("Optimized:", optimizedAnalysis);

// // Quick fixed version — small changes, keep original structure
// function legacyForecastFixed(temperatures) {
//   if (!Array.isArray(temperatures)) {
//     console.error("legacyForecastFixed: Expected an array of temperatures");
//     return "";
//   }
//   if (temperatures.length === 0) return "No forecast data.";

//   let result = "";
//   for (let i = 0; i < temperatures.length; i++) {
//     const value = temperatures[i];
//     // Skip invalid entries but warn
//     if (typeof value !== "number" || Number.isNaN(value)) {
//       console.warn(`Skipping invalid temperature at index ${i}:`, value);
//       continue;
//     }

//     // Keep similar wording to original but fixed indexing
//     result = result + value + " degrees in day " + (i + 1);
//     if (i < temperatures.length - 1) result += ", ";
//   }
//   return result;
// }

// // Test quick fix
// const testDataLegacy = [15, 18, 22, 19];
// console.log("Quick fixed output:", legacyForecastFixed(testDataLegacy));

// // Enhanced & optimized forecast function with options
// function legacyForecastEnhanced(temperatures, options = {}) {
//   /*
//     options:
//       - unit: 'C' | 'F'         (default: 'C')
//       - includeDots: true|false (default: true) adds "..." before and after
//       - separator: string       (default: ' ... ')
//       - returnObjects: boolean  (default: false) -> returns array of { day, temp, unit, text }
//       - roundDecimals: number   (default: 0) number of decimals for displayed temperature
//   */

//   const defaults = {
//     unit: "C",
//     includeDots: true,
//     separator: " ... ",
//     returnObjects: false,
//     roundDecimals: 0,
//   };
//   const opts = { ...defaults, ...options };

//   // Input validation
//   if (!Array.isArray(temperatures)) {
//     console.error("legacyForecastEnhanced: Expected an array of temperatures");
//     return null;
//   }
//   if (temperatures.length === 0)
//     return opts.returnObjects ? [] : "No forecast data.";

//   // Helper to convert and round temp if needed
//   const formatTemp = (celsius) => {
//     let t = celsius;
//     if (opts.unit === "F") {
//       t = (celsius * 9) / 5 + 32;
//     }
//     const factor = Math.pow(10, Math.max(0, opts.roundDecimals));
//     return Math.round(t * factor) / factor;
//   };

//   // Build entries
//   const entries = temperatures
//     .map((val, idx) => {
//       if (typeof val !== "number" || Number.isNaN(val)) {
//         console.warn(
//           `legacyForecastEnhanced: skipping invalid value at index ${idx}:`,
//           val
//         );
//         return null;
//       }
//       const day = idx + 1;
//       const tempFormatted = formatTemp(val);
//       const unitLabel = opts.unit;
//       const dayWord = day === 1 ? "day" : "days";
//       const text = `${tempFormatted}°${unitLabel} in ${day} ${dayWord}`;
//       return { day, temp: tempFormatted, unit: unitLabel, text };
//     })
//     .filter(Boolean); // remove nulls

//   if (entries.length === 0) {
//     return opts.returnObjects ? [] : "No valid forecast data.";
//   }

//   if (opts.returnObjects) {
//     return entries;
//   }

//   // Join into one string efficiently
//   const body = entries.map((e) => e.text).join(opts.separator);
//   const final =
//     (opts.includeDots ? "..." : "") + body + (opts.includeDots ? "..." : "");
//   return final;
// }

// // ----------------- Tests -----------------
// const testData = [15, 18, 22, 19];
// const testData2 = [17, "error", 21, null, 23];

// // Default enhanced (Celsius)
// console.log("Enhanced (default):", legacyForecastEnhanced(testData));

// // Fancy: Fahrenheit with 1 decimal
// console.log(
//   "Enhanced (F, 1 decimal):",
//   legacyForecastEnhanced(testData, { unit: "F", roundDecimals: 1 })
// );

// // Return structured objects
// console.log(
//   "Enhanced (objects):",
//   legacyForecastEnhanced(testData, { returnObjects: true })
// );

// // Handles invalid entries gracefully
// console.log("Enhanced (with invalids):", legacyForecastEnhanced(testData2));

// // Custom separator & no dots
// console.log(
//   "Custom formatting:",
//   legacyForecastEnhanced(testData, { includeDots: false, separator: " | " })
// );

// ///////////////////////////////////
// // SYSTEMATIC DEBUGGING AND ENHANCEMENT

// // Completely fixed and enhanced version
// function enhancedForecastFunction(temperatures, options = {}) {
//   // Step 5 - PREVENT: Add comprehensive input validation
//   if (!Array.isArray(temperatures) || temperatures.length === 0) {
//     console.error("Invalid input: temperatures must be a non-empty array");
//     return "";
//   }

//   // Step 4 - FIX: Use modern JavaScript with proper declarations
//   const { unit = "°C", separator = " ... ", includeIndex = true } = options;

//   // Step 4 - FIX: Correct loop bounds and string building
//   const parts = [];
//   for (let i = 0; i < temperatures.length; i++) {
//     const dayNumber = includeIndex ? i + 1 : i;
//     const dayWord = dayNumber === 1 ? "day" : "days";
//     parts.push(`${temperatures[i]}${unit} in ${dayNumber} ${dayWord}`);
//   }

//   // Step 5 - PREVENT: Return clean result with separators and leading/trailing dots
//   return "..." + parts.join(separator) + "...";
// }

// // ----------------- Tests -----------------
// const testData = [15, 18, 22, 19];

// console.log("Enhanced function (default):", enhancedForecastFunction(testData));

// console.log(
//   "Enhanced function (custom):",
//   enhancedForecastFunction(testData, {
//     unit: "°F",
//     separator: " | ",
//     includeIndex: true,
//   })
// );

// console.log("🎯 Complete developer skills successfully applied!");
// console.log("Legacy code debugged, fixed, and enhanced systematically");
