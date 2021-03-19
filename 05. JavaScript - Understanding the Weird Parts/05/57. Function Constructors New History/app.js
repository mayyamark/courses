function Person(firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log("This function is invoked.");
}

var john = new Person("John", "Doe"); // Person{...}    This function is invoked.
console.log(john);

var jane = new Person("Jane", "Doe"); // Person{...}    This function is invoked.
console.log(jane);
