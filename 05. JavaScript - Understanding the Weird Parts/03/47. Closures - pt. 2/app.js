function buildFunctions() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    // with 'let' we would get a RefError
    arr.push(function () {
      console.log(i); // creating the functions, NOT invoking it
    });
  }
  console.log("The value of i is: " + i);
  return arr; // At the end we have i = 3 and array of three functions, which log i, but i = 3 !!!
}

var fs = buildFunctions(); // The value of i is: 3

// invoking the functions and by this time we are logging i
fs[0](); // 3   logging i, but i doesn't exsist in its scope => up the chain i = 3
fs[1](); // 3   logging i, but i = 3
fs[2](); // 3   logging i, but i = 3

console.log("-----------------");

// FIRST WAY TO FIX:
function buildFunctions2() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    const j = i; // any time a new value is assigned to j
    arr.push(function () {
      console.log(j);
    });
  }

  return arr;
}

var fs2 = buildFunctions2();

fs2[0](); // 0
fs2[1](); // 1
fs2[2](); // 2

console.log("-----------------");

// SECOND WAY TO FIX:
function buildFunctions3() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i) // execute the function right after creating it, so in each iteration we push the result of the IIFE => 0, 1, 2 would be stored
    );
  }

  return arr;
}

var fs3 = buildFunctions3();

fs3[0](); // 0
fs3[1](); // 1
fs3[2](); // 2
