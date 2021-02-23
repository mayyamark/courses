var greet = "Hello!";
var greet = "Hola!";

console.log(greet); // Hola

// Simulate namespace to prevent collisons
var english = {
  greetings: {
    basic: "Hello!",
    casual: "Hi!",
  },
};

var spanish = {};

// spanish.greetings.greet = "Hola!" // TypeErr: left associativity!
spanish.greet = "Hola!";

console.log(english); // { greetings: { basic: 'Hello!', casual: 'Hi!' }}
console.log(spanish); // { greet: 'Hola!' }
