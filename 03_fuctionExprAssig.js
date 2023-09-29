console.log(
  "**************************************** Assign: Square Of Number ************************************************"
);

var square = function (val) {
  return val * val;
};
var result = square(5);
console.log(`Square of 5 is :  ${result}`);

var result = square(6);
console.log(`Square of 6 is :  ${result}`);

var result = square(25);
console.log(`Square of 25 is :  ${result}`);

var result = square(100);
console.log(`Square of 100 is :  ${result}`);

var result = square(67.89);
console.log(`Square of 67.89 is :  ${result}`);

var result = square(89);
console.log(`Square of 89 is :  ${result}`);

var result = square(59);
console.log(`Square of 59 is :  ${result}`);

console.log("-----------------------Q.2---------------------------");

console.log("Type of Square : ", typeof square);

console.log("-----------------------Q.3---------------------------");
var rectangle = function (l, w) {
  return l * w;
};
var result = rectangle(499, 917);
console.log(`Area Of Rectangle with length is 499 & width is 917 : ${result}`);

console.log("-----------------------Q.4---------------------------");

var swapValues = function (val1, val2) {
  var temp = val1;
  val1 = val2;
  val2 = temp;
  return [val1, val2];
};
var result = swapValues("Mahi", "Raina");
console.log(`Swapping this value "Mahi" & "Raina": ${result} `);

var result = swapValues("55", "77");
console.log(`Swapping this value "55" & "77": ${result} `);

console.log("-----------------------Q.5 - A---------------------------");
var strHandsOn = function () {
  var str = "JS the most Popular Language Of Internet ";
  console.log(`Given  String Is : ${str}`);

  var lengthVar = str.length;
  console.log(`1. Total Character  available in String ==> ${lengthVar}`);

  console.log("-----------------------Q.5 - B---------------------------");
  // var words = str.split(" ");
  var characterAt = str.charAt(6);
  console.log(`Character At "6"==> ${characterAt}`);

  console.log("-----------------------Q.5 - C---------------------------");

  var characterAt1 = str.charAt(11);
  console.log(`Character At "11" ==> ${characterAt1}`);

  console.log("-----------------------Q.5 - D---------------------------");
  var str = "JS the most Popular Language Of Internet";
  var lastIndex = str.charAt(str.length - 1);

  console.log(`Character at last index: ${lastIndex}`);

  console.log("-----------------------Q.5 - E---------------------------");
  var firstIndex = str.charAt(0);
  console.log(`Character at First index: ${firstIndex}`);

  console.log("-----------------------Q.5 - F---------------------------");
  var lastThreeIndex = str.charAt(str.length - 3);
  console.log(`Third Last Character at given index: ${lastThreeIndex}`);

  console.log("-----------------------Q.5 - G---------------------------");
  var splitWord = str.split(" ");
  console.log(`Total of Word in string:  ${splitWord}`);

  var lengthOfWord = splitWord.length;
  console.log(`Length of String: ${lengthOfWord}`);

  var squareWord = splitWord.length ** 2;
  console.log(`Square of word Length is : ${squareWord}`);
};
strHandsOn();
