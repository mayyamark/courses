console.log(this); // window/global object

function a() {
  console.log(this); // the function is in the window/global object
  this.newvariable = "hello"; // attach it to the global object
}

var b = function () {
  console.log(this); // the function is in the window/global object
};

a();

console.log(newvariable); // hello      it is a global variable

b(); // window/global object

var c = {
  name: "The c object",
  log: function () {
    console.log(this); // the function is in the c object  { name: "The c object", log: ƒ }
    console.log(this.name); // "The c object"
    var self = this; // this technique helps us to change the name property in the c object

    self.name = "Updated c object";
    console.log(self.name); // "Updated c object"

    var setname = function (newname) {
      // this.name = newname; // !!!!! this would be attached to the window/global object
      self.name = newname;
    };
    setname("Updated again! The c object");
    console.log(self.name); // "Updated again! The c object"
  },
};

c.log();
