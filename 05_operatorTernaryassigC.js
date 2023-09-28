console.log(
  "**************************************** ASSIGNMENT-OPERATOR TERNARY ************************************************"
);

function maleMarriageEligibility(gender, age, boyName) {
  var result =
    gender == "Male" && age >= 21
      ? `Hey "${boyName}" You Are eligible, Congrats!`
      : `Sorry, "${boyName}" You Not Eligible, try next time`;
  return result;
}

console.log("\n");

console.log("---------------------1.3.2-----------------------------");
var result = maleMarriageEligibility("Male", "25", "Bill gates");
console.log(`${result}`);

console.log("\n");

console.log("---------------------1.3.2-----------------------------");

var result1 = maleMarriageEligibility("Male", "17", "Stew Jobs");
console.log(`${result1}`);

console.log(
  "**************************************** STEP 02 ************************************************"
);

function femaleMarriageEligibility(gender, age, girlName) {
  var result =
    gender == "Female" && age >= 18
      ? `Hey "${girlName}" Congrats! You Are Eligible For Marriage !`
      : `Sorry, "${girlName}" You Are Not Eligible For Marriage ! `;
  return result;
}
console.log("\n");
console.log("---------------------2.3.1-----------------------------");
var result = femaleMarriageEligibility("Female", "16", "Jenifer");
console.log(`${result}`);

console.log("\n");
console.log("---------------------2.3.2-----------------------------");

var result1 = femaleMarriageEligibility("Female", "27", "Malinda Gates");
console.log(`${result1}`);

console.log(
  "**************************************** END ************************************************"
);
