(function (name) {
  var greeting = "Hello";
  console.log(greeting + " " + name);
})("John"); // Hello John

console.log(greeting); // Hola

(function (global, name) {
  var greeting = "Hello";
  global.greeting = "Hello"; // mutating the greeting in greet.js

  console.log(greeting + " " + name);
})(window, "John"); // Hello John

console.log(greeting); // Hello
