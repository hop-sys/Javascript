// Create a for loop that is able to print out all the leap years from 2000 to 2026
// task on page 28 and page 30
// Research on arrow functions in javascript.
// Research on functions with parameters and anonymous functions in javascript.
// Task 1
// For loop
const numbers = [10, 20, 4, 45, 99, 1];
let max = numbers[0];
for (let i = [1]; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max)

// while loop
const number = [10, 20, 4, 45, 99, 1];
let maximum = number[0];
let i = 1;
while (i < number.length) {
    if (number[i] > maximum) {
        maximum = number[i];
    }
    i++;
}
console.log(maximum);


// Task 2
// For loop
for (let a = 1; a <= 10; a++) {
    const b = 5
    let answer = b * a
    console.log(answer)
}


// While loop
const c = 5;
let d = 1;
while (d <= 10) {
    let ans = c * d;
    d++;
    console.log(ans)
}


// function
function myCountry() {
    console.log("My country is called Kenya")
    console.log("Kenya is found in East Africa")
    console.log("Kenya's Main export is Tea")
    console.log("Kenya has 47 tribes")
    console.log("Kenya is known for it's wildlife")
}
myCountry()

for (let year = 2000; year <= 2026; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year);
    }
}

function multiply(a, b) {
    return a * b;
}

console.log(multiply(4, 5)); 

function greet(name = "Hope") {
    return "Hello " + name;
}

console.log(greet()); 