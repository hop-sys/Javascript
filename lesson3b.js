// while loop
// below is a simple syntax of the while loop
// 1. initialization of a variable
// 2. the while keyword
// 3. the condition to be checked
// 4. the body of the while loop
// 5. increment

let i = 0;
while (i <=10){
    console.log("The value of i is: ", i);
    i++;
}
console.log("=======================")


let numbers = [1,2,3,4,5];
let squared = numbers.map(n => n**2);
console.log(squared);


const users = [
{ id: 1, name: 'Rumi', email: 'rumi@gmail.com' },
{ id: 2, name: 'Jinu', email: 'jinu@gmail.com' },
{ id: 3, name: 'Charlie', email: 'charlie@gmail.com' }
];
// Extract only the names into a simple string array
const userEmails = users.map(user => user.email);
console.log(userEmails);
// Output: ["Rumi", "Jinu", "Charlie"]