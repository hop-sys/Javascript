// comparison operators
// they usually evaluate to a boolean answer
let number1 = 5
let number2 = 10
let number3 = 20

console.log(number1 == number2)
console.log(number1 >= number2)
console.log(number1 <= number2)
console.log(number1 > number2)
console.log(number1 < number2)
console.log(number1 != number2)
console.log(number1 != number1)

// triple equal sign - Research
// logical operators are used to evaluate two or more conditions and they also give a boolean answer
// logical AND && evaluates to true if and only if all of the conditions/statements are true.
console.log((number1 < number2 && (number2 > number1) && (number3 > number2)))

// logical OR || evaluates to true if one of the condition is true.
console.log((number1 > number2 || (number2 > number1) ))

// logical NOT (!) negates a condition or statement
console.log(!(number1 < number2))
