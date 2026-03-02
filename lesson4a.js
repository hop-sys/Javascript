// functions with parameters
// parameters are values that get passed as arguuments when we invoke a function
// they help us to create functions that can be reusable through out a program.


function greeting(name) {
    console.log("Hello " + name, "How have you been?");
}
greeting("John Doe");
greeting("Beca Mumbi");
greeting("Jane Gitau");

console.log("===============================")

// below is a function with parameters to calculate the sum of two numbers
function addition(number1, number2){
    sum = number1 + number2
    console.log("The sum of the numbers is ", sum)
}
addition(45, 60)

console.log("===============================")
// by use of a function that accepts parameters, calculate the area of triangle whose base is 20 and height is 12cm
let half = 0.5
function trianglearea(base, height){
    area = base * height * half
    console.log("The area of the triangle is: ", area, "cm\u00B2")
}
trianglearea(20,12)

// find the simple interest given the principal as 50000 rate as 5% and time as 8yrs
function simpleinterest(principal, rate, time){
    simpleinterest = (principal * rate * time)/100
    console.log("the simple interest is: ", simpleinterest)
}
simpleinterest(50000, 5, 8)