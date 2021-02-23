// by value (primitives)
var a = 3;
var b;

b = a;
a = 2; // not affecting b

console.log(a); // 2
console.log(b); // 3

// by reference (all objects (including functions))
var c = { greeting: "hi" };
var d;

d = c;
c.greeting = "hello"; // mutating the reference => affecting d

console.log(c); // { greeting: 'hello' }
console.log(d); // { greeting: 'hello' }

// by reference (even as parameters)
function changeGreeting(obj) {
  obj.greeting = "Hola"; // again mutating
}

changeGreeting(d); // affects c also
console.log(c); // { greeting: 'Hola' }
console.log(d); //  { greeting: 'Hola' }

// equals operator sets up new memory space (new address)
c = { greeting: "howdy" }; // a new reference
console.log(c); // { greeting: 'howdy' }
console.log(d); // { greeting: 'Hola' }

var e = { ...d };
e.greeting = "waza"; // NOT mutating d

console.log(e); // { greeting: 'waza' }
console.log(d); // { greeting: 'Hola' }

((primitive, ref) => {
  primitive = "Not affecting outside the IIFE";
  ref.mutate = "Oh no, affected";
  console.log(primitive); // Not affecting outside the IIFE
  console.log(ref); // { greeting: 'Hola'. mutate: 'Oh no, affected' }
})(a, d);

console.log(a); // 2
console.log(d); // { greeting: 'Hola'. mutate: 'Oh no, affected' }
