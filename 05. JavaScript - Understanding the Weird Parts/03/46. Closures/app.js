function greet(whattosay) {
  // closure over whattosay
  return function (name) {
    console.log(whattosay + " " + name);
  };
}

var sayHi = greet("Hi");
sayHi("Tony"); // Hi Tony
sayHi("Mayya");

var sayHolaToTony = greet("Hola")("Tony"); // Hola Tony
