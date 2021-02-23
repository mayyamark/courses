var a;
console.log(a); // undefined

if (a === undefined) {
  console.log("a is undefined!");
} else {
  console.log("a is defined!"); // runs
}

if (!a) {
  console.log("a is falsy"); // runs
} else {
  console.log("a is truthy!");
}

var b = "";
b = undefined; // BAD PRACTICE!

if (b === undefined) {
  console.log("b is undefined!"); // runs
} else {
  console.log("b is defined!");
}
