console.log(
  "**************************************** ASSIGNMENT_01 STRING TEMPLATE  ************************************************"
);
console.log(
  "**************************************** TASK-01  ************************************************"
);

function stringBasics() {
  console.log(`My Dream Company is :  "AMDOCS" `);
}
stringBasics();

console.log("\n\n"); // Add extra space for separation

console.log(
  "**************************************** TASK-02  ************************************************"
);

function stringTemplateAssign() {
  var hobby1 = "Cycling";
  var hobby2 = "Traveling";
  var hobby3 = "Cricket";

  console.log(`My Hobbies Are: ${hobby1} 🚵🏼  ${hobby2}✈️   ${hobby3}🏏`);

  var concatenatedHobbies = hobby1 + "🚵🏼" + hobby2 + "✈️" + hobby3 + "🏏";
  console.log(`My Hobbies Are: ${concatenatedHobbies}`);
}
stringTemplateAssign();
