var a = 3;
console.log(typeof a); // number

var b = "Hello";
console.log(typeof b); // string

var c = {};
console.log(typeof c); // object

var d = [];
console.log(typeof d); // object
console.log(Object.prototype.toString.call(d)); // [object Array] :D

function Person(name) {
  this.name = name;
}

var e = new Person("Jane");
console.log(typeof e); // object
console.log(e instanceof Person); // true

console.log(typeof undefined); // undefined
console.log(typeof null); // object

var z = function () {};
console.log(typeof z); // function
