// function statement
function greet(name) {
  console.log("Hello " + name);
}
greet("John"); // Hello John

// using a function expression
var greetFunc = function (name) {
  console.log("Hello " + name);
};
greetFunc("John"); // Hello John

// using an Immediately Invoked Function Expression (IIFE)
var greeting = (function (name) {
  return "Hello " + name;
})("John"); // Hello John

console.log(greeting);

var firstname = "John";

// 1) IIFE
(function (name) {
  var greeting = "Inside IIFE: Hello";
  console.log(greeting + " " + name);
})(firstname); // Inside IIFE: Hello John

// 2) IIFE
(function (name) {
  var greeting = "Inside IIFE 2: Hello";
  console.log(greeting + " " + name);
})(firstname); // Inside IIFE 2: Hello John
