// asd(); // TypeError

var asd = () => console.log('omg');

asd(); // omg

var asd = () => console.log('omggg');

asd(); // omggg







const asd2 = asd;
asd2(); // omggg

console.log(asd == asd2); // true
console.log(asd === asd2); // true

