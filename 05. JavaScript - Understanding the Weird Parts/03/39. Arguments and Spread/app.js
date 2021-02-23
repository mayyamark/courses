function greet(firstname, lastname, language) {
  language = language || "en"; // default value

  if (arguments.length === 0) {
    // if no args are passed
    console.log("Missing parameters!");
    console.log("-------------");
    return;
  }

  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(arguments);
  console.log("arg 0: " + arguments[0]);
  console.log("-------------");
}

greet(); // Missing parameters
greet("John"); // John  undefined   en  { "0": John, "1": undefined, "2": en }     arg0: John
greet("John", "Doe"); // John  Doe   en  { "0": John, "1": Doe, "2": en }     arg0: John
greet("John", "Doe", "en"); // John  Doe   es  { "0": John, "1": Doe, "2": es }     arg0: John

// in ES6 I can do:  function greet(firstname, ...other)
// and 'other' will be an array that contains the rest of the arguments
