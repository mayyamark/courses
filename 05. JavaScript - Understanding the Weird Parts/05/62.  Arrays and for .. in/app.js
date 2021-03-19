Array.prototype.someString = "A big, nasty bug";

const arr = ["a", "b", "c"];

for (prop in arr) {
  console.log(prop); // 0 1 2 someString
}
