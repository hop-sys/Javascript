// Arrow functions
// below is an example of an arrow function without parameters
const greet = () => {
     console.log("Hello, world!")
};
greet();

// below is an example of an arrow function with parameters
const squared= x => x * x;
console.log(squared(6));

// below is an example of an arrow function with multiple parameters
const add = (a, b) => a + b;
console.log (add(6, 6));


// require()imports the module and its content into the current file
import * as task1 from "./task1.js";
console.log(task1.add(5, 10));
console.log(task1.multiply(5, 10));


import greet from "./task1.js";
console.log(greet("Hope"));

const square = num => num * num;

const isEven = (num) => {
    return num % 2 === 0
};

// create an arrow function that that takes an array of numbers and returns only numbers greater than 10
const graterThanTen = numbers => numbers.filter(num=> num > 10);