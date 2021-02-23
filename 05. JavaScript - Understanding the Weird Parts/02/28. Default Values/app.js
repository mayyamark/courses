function greet(name) {
  name = name || "<Your name here>"; // a trick for a default value
  console.log("Hello " + name);
}

function greet2(name) {
  console.log("Hello " + name);
}

greet("Tony"); // Hello Tony
greet(); // Hello <Your name here>
greet2(); // Hello undefined
