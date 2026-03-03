// Arrow functions
// This is a function that was introduced in the ECMA script 6 and they give us the latest
// At times the arrow function can be said to be anonymous functions why? This is because they use the names of the variables they are contained in.


const sayHello = () =>{
    console.log("This is an arrow function.")
}
sayHello();
console.log("==========================")

// const multiply = (a, b, c) => a*b*c;
// console.log(multiply(2, 2, 2))

const product = () => {
    let num1 = 3
    let num2 = 5
    let num3 = 4
    answer = num1*num2*num3
    console.log("This is the product:",answer)
}
product();