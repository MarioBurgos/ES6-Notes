/** BLOCK 1 */

//using the var keyword allows to re-declare the variable multiple times.
var valueVar = 10;
console.log(`With var ${valueVar}`);

var valueVar = "hello";
console.log(`With var ${valueVar}`);

var valueVar = 30;
console.log(`With var ${valueVar}`);

/** BLOCK 2 */

// using the let keyword doesn't allows re-declarations with the same name in order to not to override variable values (it might cause difficult to debugging)
let valueLet = 50;
console.log(`With let ${valueLet}`);
//let valueLet = "hello"; // Uncaught SyntaxError: Identifier 'value' has already been declared
valueLet = "hello";
console.log(`With let ${valueLet}`);

/** BLOCK 3 */

// declaring a variable with var will make it available outside the IF scope 
var isValidVar = true;
if (isValidVar) {
    var numberVar = 10;
    console.log(`Inside if block: ${numberVar}`);
}
console.log(`Outside if block: ${numberVar}`);

// doing it so with let it won't make it available outside the scope
let isValidLet = true;
if (isValidLet) {
    let numberLet = 25;
    console.log(`Inside if block: ${numberLet}`);
}
//console.log(`Outside if block: ${numberLet}`);// Uncaught SyntaxError: Identifier 'value' has already been declared

// here there are 2 variables with same name but declared with let on both scopes
let numberLet = 150;
if (isValidLet) {
    let numberLet = 55;
    console.log(`Inside if block: ${numberLet}`); //inside: 55
}
console.log(`Outside if block: ${numberLet}`); // outside: 150