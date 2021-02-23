console.log(1 + "2"); // 12
console.log("1" + "2"); // 12
console.log(+"1" + +"2"); // 3

console.log("Hello " + undefined); // Hello undefined

console.log(3 == 3); // true
console.log("3" == 3); // true  does a coersion to a type then compares
console.log(false == 0); // true
console.log(null == 0); // !! false !!
console.log("" == 0); // true
console.log("" == false); // true
