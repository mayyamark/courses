function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  // when declaring the method here, any time when we create an instance, a new function would be created
  this.getFullName = function () {
    return this.firstname + " " + this.lastname;
  };
}

var john = new Person("John", "Doe");
// console.log(john.__proto__); // Person {}

var jane = new Person("Jane", "Doe"); // if no new => undefined

Person.prototype.getFormalFullName = function () {
  return this.lastname + ", " + this.firstname;
}; // add getFullName() to the Person prototype and only 1 function is created

console.log(john.getFullName()); // John Doe
console.log(john.getFullName === jane.getFullName); // false !!!

console.log(john.getFormalFullName()); // Doe, John
console.log(john.getFormalFullName === jane.getFormalFullName); // true !!!
