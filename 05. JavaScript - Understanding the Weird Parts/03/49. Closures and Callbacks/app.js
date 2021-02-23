function sayHiLater() {
  var greeting = "Hi!";

  setTimeout(function () {
    // closure over greeting
    console.log(greeting);
  }, 3000);
}

sayHiLater();

// jQuery uses function expressions and first-class functions!
//$("button").click(function() {
//
//});

function tellMeWhenDone(callback) {
  console.log("Doing some work");

  callback(); // the 'callback', it runs the function I give it!
}

tellMeWhenDone(function () {
  console.log("I am done!");
});

tellMeWhenDone(function () {
  console.log("All done...");
});

console.log("---------------");
// Doing some work      I'm done
// Doing some work  All done...
// ---------------
// wait 3 sec and..           Hi!
