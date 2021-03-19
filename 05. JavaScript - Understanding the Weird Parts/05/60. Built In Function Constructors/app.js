String.prototype.isLengthGreaterThan = function (limit) {
  return this.length > limit;
};

console.log("John".isLengthGreaterThan(3)); // true

Number.prototype.isPositive = function () {
  return this > 0;
};

// console.log(3.isPositive()); // JS engine can't convert this one

const a = new Number(2);
console.log(typeof a); // object
console.log(a.isPositive()); // true

const b = 2;
console.log(typeof b); // number

console.log(a == b); // true
console.log(a === b); // false
