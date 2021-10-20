/** the includes method is pretty handy when checking for values in an array. */


const numbers = ["one", "two", "three", "four"];
// console.log(numbers.indexOf("one") > -1); // true 
// console.log(numbers.indexOf("five") > -1); // false
// or
console.log(numbers.includes("one")); // true 
console.log(numbers.includes("five")); // false

/** */
const day = "monday";
// if (day === "monday" || day === "tuesday" || day === "wednesday") {
//     console.log(day);
// }
if (["monday", "tuesday", "wednesday"].includes(day)) {
    console.log(day);
}