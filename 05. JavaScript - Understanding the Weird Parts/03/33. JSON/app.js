var objectLiteral = {
  firstname: "Mary",
  isAProgrammer: true,
};

var json = JSON.stringify(objectLiteral);
console.log(json); // {"firstname":"Mary","isAProgrammer":true}

console.log(json.firstname); // undefined
console.log(json["firstname"]); // undefined

var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');

console.log(jsonValue);
