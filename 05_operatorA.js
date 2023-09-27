console.log(
  "**************************************** ASSIGNMENTS_01: OPERATORS  ************************************************"
);

function squareOfWordLength(word) {
  console.log(`Given Word Is: ${word}`);

  var lengthStr = word.length;
  console.log(`1. Find the String length: ${lengthStr}`);

  var squareStr = lengthStr ** 2;
  console.log(`2. Find the Square of String: ${squareStr}`);

  return squareStr;
}

var result1 = squareOfWordLength("JavaScript");

console.log("--------------------------------------------------");

var result2 = squareOfWordLength("Google Chrome");

console.log("--------------------------------------------------");

var result3 = squareOfWordLength("Developer Smart");
console.log(
  "**************************************** STEP-02  ************************************************"
);

function angularDeveloper() {
  var strWord = "I am Angular Developer";
  console.log(`Given string is : ${strWord}`);

  var lengthOfWord = strWord.length;
  console.log(`Words In Given String : ${lengthOfWord}`);

  var splitWord = strWord.split(" ");
  console.log(`Words In Given String: ${splitWord}`);

  var splitWordLength = splitWord.length;
  console.log(`Number of Words In Given String : ${splitWordLength}`);

  console.log("----------------------------Step 2.1----------------------");

  var divide = lengthOfWord / splitWordLength;
  console.log(`Result of dividing String Length by Number Of Words: ${divide}`);

  console.log("----------------------------Step 2.2----------------------");

  var mul = lengthOfWord * splitWordLength;
  console.log(`Result of Multiplying String Length by Number Of Words: ${mul}`);
}

angularDeveloper();
