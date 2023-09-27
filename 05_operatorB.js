console.log(
  "**************************************** ASSIGNMENTS_02: TERNARY OPERATOR  ************************************************"
);

function greaterNumber() {
  var num1 = 10;
  var num2 = -10;
  console.log(`Given Number are : ${num1} , ${num2}`);

  var result = num1 > num2 ? " Is Greater" : "Not Greater";
  console.log(`${num1} ==> ${result}`);

  console.log("--------------------------------------------------");

  var num3 = 800;
  var num4 = 899;
  console.log(`Given Numbers are : ${num3} , ${num4}`);

  var result = num3 < num4 ? `${num4} is Greater` : `${num3} is Greater`;
  console.log(`${result}`);

  console.log(
    "**************************************** STEP 02  ************************************************"
  );
}
greaterNumber();

function isEvenOrOddNum() {
  var num5 = 29;
  console.log(`Given Number Is :${num5}`);

  var result = num5 % 2 == 0 ? "EVEN Number" : " ODD Number";
  console.log(` ==> ${result}`);

  console.log("--------------------------------------------------");
  var num6 = 44;
  console.log(`Given Number : ${num6}`);

  var result = num6 % 2 == 0 ? "EVEN Number" : " ODD Number";
  console.log(` ==> ${result}`);

  console.log("--------------------------------------------------");
  var numZero = 0;
  console.log(`Given Number : ${numZero}`);

  var result = numZero % 2 == 0 ? "EVEN Number" : " ODD Number";
  console.log(` ==> ${result}`);

  console.log("--------------------------------------------------");
  var num7 = 101;
  console.log(`Given Number : ${num7}`);

  var result = num7 % 2 == 0 ? "EVEN Number" : " ODD Number";
  console.log(`==> ${result}`);
}
isEvenOrOddNum();

console.log(
  "**************************************** STEP 03  ************************************************"
);

function wordLength() {
  var lengthOfWord = "JavaScript";
  console.log(`Given Word Is : ${lengthOfWord}`);

  var length = lengthOfWord.length;

  var result = length % 2 == 0 ? "Even Length" : "Odd Length";
  console.log(`${result}`);

  console.log("--------------------------------------------------");

  var lengthOfWord1 = "developer";
  console.log(`Given Word Is : ${lengthOfWord1}`);

  var length = lengthOfWord1.length;

  var result = length % 2 == 0 ? "Even Length" : "Odd Length";
  console.log(`${result}`);

  console.log("--------------------------------------------------");

  var lengthOfWord2 = "Google";
  console.log(`Given Word Is : ${lengthOfWord2}`);

  var length = lengthOfWord.length;

  var result = length % 2 == 0 ? "Even Length" : "Odd Length";
  console.log(`${result}`);
}
wordLength();
