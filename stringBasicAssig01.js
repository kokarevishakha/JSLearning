console.log(
  "**************************************** ASSIGNMENT_03 STRING BASIC  ************************************************"
);
console.log(
  "**************************************** TASK-01  ************************************************"
);

function stringBasics() {
  console.log("My Dream Company is :  AMDOCS");
}
stringBasics();

console.log("\n\n"); // Add extra space for separation

console.log(
  "**************************************** TASK-02  ************************************************"
);

function myHobbies(hobby1, hobby2, hobby3) {
  console.log("Hobbies Are:", hobby1, hobby2, hobby3);

  var totalCharacters = hobby1.length + hobby2.length + hobby3.length;
  console.log("Total number of characters:", totalCharacters);
}
myHobbies("Cycling", "Traveling", "Cricket");
