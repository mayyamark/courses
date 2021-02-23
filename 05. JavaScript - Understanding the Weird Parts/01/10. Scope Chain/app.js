function a() {
  function b() {
    console.log(myVar); // 1, searches in the outer scope, in this case in the global scope
  }

  b();
}

var myVar = 1;
a();

// --------------- //
function b2() {
  console.log(myVar2); // 2, searches in the outer scope, in this case in the global scope
}

function a2() {
  var myVar2 = 22;

  b2();
}

var myVar2 = 2;
a2();

// --------------- //

function a3() {
  function b3() {
    console.log(myVar3); // 33, searches in the outer scope, in this case in the scope of a3()
  }

  var myVar3 = 33;

  b3();
}

var myVar3 = 3;
a3();
