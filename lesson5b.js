// Arrow functions with parameters

const greet = (name) =>{
    console.log("Hello " + name + " how have you been? I trust that you're good.")
}

greet("Raya");
greet("Maya");

// example 2

console.log("================================")

// below is a function to find the area of a circle
const circleArea = (radius) =>{
    const pi = 3.142
    let area = pi*radius*radius
    console.log("the area of the circle is: " + area + "cm\u00B2")
}
circleArea(7)
circleArea(28)

console.log("================================")

// example of an arrow function that utilizes three parameters
const multiply = (a, b, c) => a*b*c;
console.log(multiply(2, 2, 2))
console.log(multiply(5, 5, 5))

const simpleInterest = (principal, interest, time) =>(principal*interest*time)/100;
console.log(simpleInterest(2000, 100, 2))