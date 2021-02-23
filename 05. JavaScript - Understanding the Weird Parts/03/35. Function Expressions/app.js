console.log((a = 3)); // 3  an expression, returns a value

if (true) {
  // statement, does not return a value
}

greet(); // hi  an expression

function greet() {
  console.log("hi");
} // a statement

// anonymousGreet(); // Type Error

var anonymousGreet = function () {
  // an anonymus function, we can invoke it by the variable's name
  console.log("hi");
}; // an expression!!   the result returns a value!!

anonymousGreet(); // hi     an expression

function log(a) {
  a();
} // a statement

log(function () {
  // create a function on the fly, because functions in JS are first class functions
  console.log("hi");
}); // hi       an expression
