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
