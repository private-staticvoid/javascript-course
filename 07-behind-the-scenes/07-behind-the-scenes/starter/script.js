'use strict';

// // console.log(title); // Uncomment to test: TDZ with let
// let title = 'Behind the Scenes';

// // 2) Scope chain expectation
// function outer() {
//   const label = 'outer';
//   function inner() {
//     console.log('scope:', label); // expect 'outer'
//   }
//   inner();
// }
// outer();

// // 3) Call stack expectation
// function one() {
//   two();
// }
// function two() {
//   console.log('stack: two');
// }
// one(); // expect 'stack: two'

// // working
// console.log(varX); // is not something we could use in the future
// //not working should properly intialize (temporal dead zone)
// // console.log(letX);
// // console.log(constX);

// /*
// What is meant by hoisted in JS?
// In JavaScript, hoisting refers to the built-in behavior of the language through which declarations
// of functions, variables, and classes are moved to the top of their scope – all before code execution.
// In turn, this allows us to use functions, variables, and classes before they are declared.
// */

// var varX = 1;
// let letX = 2;
// const constX = 3;

// console.log(addDecl(2, 3)); // works
// // console.log(addExpr(2, 3)); // does not work
// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// let age = 40;

// let oldage = age;

// age = 41;
// console.log(`age`, age);
// console.log(`oldage`, oldage);

// const me = {
//   name: 'aki',
//   age: 20,
// };

// const friend = me;
// friend.name = 'moni';
// friend.age = 21;

// console.log(`friend`, friend);
// console.log(`me`, me);

// const original = {
//   name: 'aki',
//   age: 20,
//   husbands: ['moni', 'mingyu'],
// };

// const shallowCopy = { ...original };

// shallowCopy.name = 'macky';
// console.log(`original name: `, original.name);
// console.log(`shallowCopy name: `, shallowCopy.name);
// shallowCopy.husbands.push('jimin');
// console.log(`shallowCopy husbands: `, shallowCopy.husbands);
// console.log(`original husbands: `, original.husbands);

// const deepOriginal = {
//   name: 'aki',
//   age: 20,
//   //nested object
//   address: {
//     city: 'seoul',
//     country: 'korea',
//   },
//   //nested array
//   hobies: ['travel', 'music', 'movie'],
// };

// const deepCopy =  structuredClone(deepOriginal);
// deepCopy.name = 'macky';
// deepCopy.address.city = 'busan';
// deepCopy.hobies.push('reading');

// console.log(`deepOriginal`, deepOriginal);
// console.log(deepCopy);

// Example of an object with a method
// const person = {
//   name: 'Jonas',
//   greet: function () {
//     console.log(`Hello I am ${this.name}`);
//   },
// };

// person.greet(); // Logs: "Hello I am Jonas"

// Borrowing methods: another object can use the same function
// const anotherPerson = { name: 'Sarah' };
// anotherPerson.greet = person.greet;
// anotherPerson.greet(); // Logs: "Hello I am Sarah"

// Losing 'this' context: assigning method to a variable
// const greetFuction = person.greet;
// greetFuction(); // Logs: "Hello I am undefined" (or error in strict mode)
// because 'this' is no longer bound to an object.

// Difference between regular vs arrow functions in objects
// const obj = {
//   name: 'Objects',
//   regularMethod: function () {
//     console.log('Regular: ', this.name); // 'this' refers to obj
//   },
//   arrowMethod: () => {
//     console.log('Arrow: ', this.name); // 'this' does NOT refer to obj,
//     // instead it refers to the surrounding scope (likely undefined or global).
//   },
// };

// obj.regularMethod(); // Works -> "Regular: Objects"
// obj.arrowMethod();   // Likely undefined -> "Arrow: undefined"

// Using 'this' inside setTimeout (older workaround vs modern arrow)
// const timer = {
//   name: 'Timer',
//   start: function () {
//     console.log(`${this.name} starting...`);

//     const self = this; // capture 'this' in a variable

//     setTimeout(function () {
//       // 'this' inside here would normally lose context,
//       // so we use 'self' instead
//       console.log(`${self.name} finished.`);
//     }, 1000);
//   },
//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     // Arrow function keeps 'this' from the surrounding context
//     setTimeout(() => {
//       console.log(`${this.name} finished modern.`);
//     }, 1500);
//   },
// };

// timer.start();
// timer.startModern();

// Demonstrating function types and arguments behavior
const functionTypes = {
  // Regular function: has its own 'arguments' object
  regularFunction: function () {
    console.log('Arguments length:', arguments.length);
    console.log('First argument:', arguments[0]);
  },

  // Arrow function: does NOT have its own 'arguments',
  // it will reference outer scope's 'arguments' instead
  arrowFunction: () => {
    console.log(arguments); // refers to outer 'arguments' (not reliable here)
    console.log('Arrow function called');
  },

  // Modern function with rest parameters:
  // captures arguments in 'args' array
  modernFunction: (...args) => {
    console.log('Args length:', args.length);
    console.log('First arg:', args[0]);
  },
};

// Calling the functions
functionTypes.regularFunction('hello', 'world');
// → "Arguments length: 2", "First argument: hello"

// functionTypes.arrowFunction('test');
// → Would throw an error if uncommented because 'arguments' is not defined properly in this context

functionTypes.modernFunction('modern', 'approach');
// → "Args length: 2", "First arg: modern"
