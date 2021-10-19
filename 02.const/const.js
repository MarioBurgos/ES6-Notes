/** BLOCK 1 */

// const works exactly the same as the let keyword in its block scoping functionality.
// When we declare a variable as const, it's considered a constant variable whose value will never change.

// with let, it allows to assign a new value:
let number = 10;
number = 20;
console.log(number); // 20

// with const, it makes it a constant value:
const num = 10;
//num = 20; // Uncaught TypeError: Assignment to constant variable.

// We can't re-declare a const variable:
const n = 25;
console.log(n);
//const n = 10; // Uncaught SyntaxError: Identifier 'number' has already been declared