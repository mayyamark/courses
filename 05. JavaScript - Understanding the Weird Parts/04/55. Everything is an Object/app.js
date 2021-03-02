const a = {};
console.log(a.__proto__); // Object

const b = () => {};
console.log(b.__proto__); // Function
console.log(b.__proto__.__proto__); // Object

const c = [];
console.log(c.__proto__); // Array
console.log(c.__proto__.__proto__); // Object
