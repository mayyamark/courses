var person = {
  firstname: "Default",
  lastname: "Default",
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

for (var prop in john) {
  if (john.hasOwnProperty(prop)) {
    // without this condition it would log everything that the object has + everything in the prototype object => person
    console.log(prop + ": " + john[prop]); //firstname: John    lastname: Doe
  }
}

var jane = {
  address: "111 Main St.",
  getFormalFullName: function () {
    return this.lastname + ", " + this.firstname;
  },
};

var jim = {
  getFirstName: function () {
    return firstname;
  },
  getFullName: function () {
    return "Overridden!";
  },
};

_.extend(john, jane, jim); // now in john we have address getFirstName and getFormalFullName, getFullName is overridden!

console.log(john);
console.log(john.getFullName()); // Overridden!
