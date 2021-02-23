function makeGreeting(language) {
  // closure over language
  return function (firstname, lastname) {
    if (language === "en") {
      console.log("Hello " + firstname + " " + lastname);
    }

    if (language === "es") {
      console.log("Hola " + firstname + " " + lastname);
    }
  };
}

var greetEnglish = makeGreeting("en");
var greetSpanish = makeGreeting("es");

greetEnglish("John", "Doe"); // Hello John Doe
greetSpanish("John", "Doe"); // Hola John Doe
