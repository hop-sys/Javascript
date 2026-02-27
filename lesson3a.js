// javascript for loop
// loops are used to iterate through something(repeat something a number of times)
// structure of the for loop
// 1. for keyword followed by parenthesis
// 2. initialization; set the condition; increment/decrement
// 3. body of the for loop


for (let i = 0; i<=10; i++){
    console.log("The new value of i is: ", i)
}

console.log("==========================")

for (let i = 0; i<=10; i++){
    if (i === 6){
        console.log("This is number is: ", i)
    } else{
        console.log("The new value of i is: ", i);
    }
}



let name = "Hope";

for (let letter of name){
    if (letter === "o"){
        console.log("This is letter o")
    } else{
        console.log(letter);
    }
}