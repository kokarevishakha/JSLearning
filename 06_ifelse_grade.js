console.log(
  "**************************************** If Else Condition ************************************************"
);

var voteEligible = function (age) {
  var result = +age;
  if (age == 0 || age < 0 || age > 130 || age == null || isNaN(result)) {
    console.log(`Invalid Values :${age}`);
  } else {
    if (age < 18) {
      console.log(
        `Sorry, you do not meet the age requirement to vote. Your age is: ${age}`
      );
    } else {
      console.log(`Congratulations! You are now eligible to vote. Age: ${age}`);
    }
  }
};
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible();
console.log("-----------------------Invalid Values---------------------------");
voteEligible("Vish");
voteEligible("Amdocs");
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);
console.log(
  "**************************************** END ************************************************"
);
