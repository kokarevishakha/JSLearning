console.log(
  "**************************************** Implicit Conversion to String ************************************************"
);

var result;
result1 = "3" + 2;
console.log(`Result of "3" + 2 ==> ${result1}`);
console.log("type of Given value : ", typeof result1);

console.log("--------------------------------------------------");

result2 = "3" + true;
console.log(`Result of "3" + 2 ==> ${result2}`);
console.log("type of Given value : ", typeof result2);

console.log("--------------------------------------------------");

result3 = "3" + undefined;
console.log(`Result of "3" + 2 ==> ${result3}`);
console.log("type of Given value : ", typeof result3);

console.log("--------------------------------------------------");

result4 = "3" + null;
console.log(`Result of "3" + 2 ==> ${result4}`);
console.log("type of Given value : ", typeof result4);

console.log(
  "**************************************** Implicit boolean Conversion to Number ************************************************"
);

var result;
result1 = "4" - true;
console.log(`Result of "4" - true ==> ${result1}`);
console.log("type of Given value : ", typeof result1);

console.log("--------------------------------------------------");

result2 = 4 + true;
console.log(`Result of 4 + true ==> ${result2}`);
console.log("type of Given value : ", typeof result2);

console.log("--------------------------------------------------");

result3 = 4 + false;
console.log(`Result of 4 + false ==> ${result3}`);
console.log("type of Given value : ", typeof result3);

console.log(
  "**************************************** Implicit String Conversion to Number ************************************************"
);

var num = "4" - "2";
console.log(`Result of '4' - '2' ==> ${num}`);
console.log("type of Given value : ", typeof num);

console.log("--------------------------------------------------");

var num1 = "4" - 2;
console.log(`Result of '4' - 2 ==> ${num1}`);
console.log("type of Given value : ", typeof num1);

console.log("--------------------------------------------------");

var num2 = "4" * 2;
console.log(`Result of '4' * 2 ==> ${num2}`);
console.log("type of Given value : ", typeof num2);

console.log("--------------------------------------------------");

var num3 = "4" / 2;
console.log(`Result of '4' / 2 ==> ${num3}`);
console.log("type of Given value : ", typeof num3);

console.log(
  "**************************************** Undefined used with number,boolean or null given null ************************************************"
);

var output = 4 + undefined;
console.log(`Result of 4 + undefined ==> ${output}`);
console.log("type of Given value : ", typeof output);

console.log("--------------------------------------------------");

var output2 = 4 - undefined;
console.log(`Result of 4 - undefined ==> ${output2}`);
console.log("type of Given value : ", typeof output2);

console.log("--------------------------------------------------");

var output3 = true + undefined;
console.log(`Result of true + undefined ==> ${output3}`);
console.log("type of Given value : ", typeof output3);

console.log("--------------------------------------------------");

var output4 = null + undefined;
console.log(`Result of null + undefined ==> ${output4}`);
console.log("type of Given value : ", typeof output4);

console.log(
  "**************************************** Explicit conversion: Convert number Strings and boolean values to numbers ************************************************"
);
var ex = Number("324");
console.log(`Result of  number('324') ==> ${ex}`);
console.log("type of Given value : ", typeof ex);

var ex1 = Number("324e-1");
console.log(`Result of   Number('324e-1') ==> ${ex1}`);
console.log("type of Given value : ", typeof ex1);

console.log(
  "-----------------------Boolean to number---------------------------"
);

var ex2 = Number(true);
console.log(`Result of   Number(true) ==> ${ex2}`);
console.log("type of Given value : ", typeof ex2);

var ex3 = Number(false);
console.log(`Result of   Number(false) ==> ${ex3}`);
console.log("type of Given value : ", typeof ex3);

console.log(
  "**************************************** Explicit conversion: Invalid string to number return NaN ************************************************"
);

var ex4 = Number("hello");
console.log(`Result of   Number('hello'); ==> ${ex4}`);
console.log("type of Given value : ", typeof ex4);

var ex5 = Number("undefined");
console.log(`Result of   Number('undefined'); ==> ${ex5}`);
console.log("type of Given value : ", typeof ex5);

var ex6 = Number(NaN);
console.log(`Result of   Number(NaN) ==> ${ex6}`);
console.log("type of Given value : ", typeof ex6);
