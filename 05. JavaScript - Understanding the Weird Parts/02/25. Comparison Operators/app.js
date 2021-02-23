console.log(1 < 2 < 3); // true     1) 1 < 2 = true        2) true < 1 = true
console.log(3 < 2 < 1); // true     1) 3 < 2 = false       2) false < 1  <=>  0 < 1  -->  = true
console.log(null < 1); // true

console.log(3 == 3); // true
console.log("3" == 3); // true  does a coersion to a type then compares
console.log(false == 0); // true
console.log(null == 0); // !! false !!
console.log("" == 0); // true
console.log("" == false); // true
