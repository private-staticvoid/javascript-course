'use strict';

// working
console.log(varX); // is not something we could use in the future
//not working should properly intialize (temporal dead zone)
// console.log(letX);
// console.log(constX);

/*
What is meant by hoisted in JS?
In JavaScript, hoisting refers to the built-in behavior of the language through which declarations 
of functions, variables, and classes are moved to the top of their scope – all before code execution. 
In turn, this allows us to use functions, variables, and classes before they are declared.
*/

var varX = 1;
let letX = 2;
const constX = 3;

console.log(addDecl(2, 3)); // works
// console.log(addExpr(2, 3)); // does not work
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
