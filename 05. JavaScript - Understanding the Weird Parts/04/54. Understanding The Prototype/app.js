var person = {
  firstname: "Default",
  lastname: "Default",
  age: "Default",
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
};

var john = {
  firstname: "John",
  lastname: "Doe",
};

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;
console.log(john.getFullName()); // John Doe        searches in the prototype chain => person
console.log(john.firstname); // John

var jane = {
  firstname: "Jane",
};

jane.__proto__ = john;
console.log(jane.getFullName()); // Jane Doe    gets the lastname from the prototype object => john

person.getFormalFullName = function () {
  return this.lastname + ", " + this.firstname;
};

console.log(john.getFormalFullName()); // Doe, John
console.log(jane.getFormalFullName()); // Doe, Jane     gets the lastname from the prototype object => john
console.log(jane.age); // Default     gets the age from the prototype object of john => person
