console.log(
  "\n ====== Function type: function with no arguments and no return type ====="
);

function greet_user() {
  console.log("Hello! Welcome to the program.👩🏼‍💻");
}

greet_user();

console.log(
  "\n====== 2nd Function type: function with no arguments and no return type ====="
);

function greetUser() {
  console.log("Hello! Welcome to our website.🖥️");
}
greetUser();

console.log("\n******************** Task - 02 ********************");

function myPersonalDetails(firstName, lastName, collegeName) {
  console.log("First Name: Vishakha");
  console.log("Last Name: Kokare");
  console.log("College Name: SVPM's COE-Baramati");
}

myPersonalDetails();

console.log("\n***************** Task - 03 **********************");

console.log(
  "\n====== Function type: function with arguments and no return type ====="
);

function swap(valueOne, valueTwo) {
  console.log("Before swap ==> ", valueOne, valueTwo);
  var temp = valueOne;
  valueOne = valueTwo;
  valueTwo = temp;
  console.log("After swap ==> ", valueOne, valueTwo);
}

swap("Virat", "Anushka");
swap("true", "False");
swap("India", "USA");
swap(1000, 2000);

console.log("\n***************** Task - 04 **********************");
function addThreeValues(valueOne, valueTwo, valueThree) {
  console.log("Values  ==> " + valueOne + " " + valueTwo + " " + valueThree);
  var add = valueOne + valueTwo + valueThree;
  return add;
}

var result1 = addThreeValues(10.23, 600, 40);
console.log("Addition Three Numbers  ==> ", result1);

var result2 = addThreeValues("Hello", "Good", "Morning");
console.log("Concatenated String  ==> ", result2);
