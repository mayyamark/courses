var person = {
  firstname: "John",
  lastname: "Doe",
  getFullName: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

var logName = function (lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1 + " " + lang2);
  console.log("-----------");
};

// logName(); // TypeError, because there is no getFullName() in the global object
var logPersonName = logName.bind(person);
logPersonName("en"); // Logged: John Doe    Arguments: "en", undefined

logName.call(person, "en", "es"); // Logged: John Doe    Arguments: en, es
logName.apply(person, ["en", "es"]); // Logged: John Doe    Arguments: en, es

(function (lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1 + " " + lang2);
  console.log("-----------");
}.apply(person, ["es", "en"])); // Logged: John Doe    Arguments: es, en

// function borrowing
var person2 = {
  firstname: "Jane",
  lastname: "Doe",
};

console.log(person.getFullName.apply(person2)); // Logged: Jane Doe

// function currying
function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2); // Later passing the second parameter
console.log(multipleByTwo(4)); // 8

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(5)); // 15
