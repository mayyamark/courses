function greet() {
  console.log("hi");
}

greet.language = "english"; // attach a property
console.log(greet.language); // english

console.log(greet); // greet () { console.log('hi')}
greet(); // hi

greet.greetInEnglish = function () {
  console.log("hello");
};

console.log(greet.greetInEnglish); // () { console.log('hello') }
greet.greetInEnglish(); // hello
