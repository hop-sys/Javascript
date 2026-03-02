for (let i = 1; i <= 19; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

let numbers = [10, 20, 4, 45, 99, 1];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("Largest number is:", largest);

for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

for (let i = 1; i <= 19; i += 2) {
    console.log(i);
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}