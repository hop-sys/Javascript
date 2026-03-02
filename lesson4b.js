// anonymous functions in javascript
// these are functions that exists without a name

// below is an example of such functions
// the below function shall take the name of the variable they are contained in

const greet = function(){
    console.log("Hello there, hope your Monday is fine...")
}
console.log(typeof(greet))
greet();

// below is an anonimous self executing function

(function(){
    console.log("Welcome to the world of programming...")
})();