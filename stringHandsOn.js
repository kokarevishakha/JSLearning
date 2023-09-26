console.log(
  "**************************************** ASSIGNMENTS_02: STRING  ************************************************"
);
function stringHandsOn() {
  var stringVar = "     Hey you are doing good, Keep it up       ";
  console.log(`1. Given String is: ${stringVar}`);

  var lengthStr = stringVar.length;
  console.log(`2. Length Of String: ${lengthStr}`);

  var newVar = stringVar.trim();
  console.log(`3. String After Trim : ${newVar}`);

  var spacesRemoved = lengthStr - newVar.length;
  console.log(`4. Total Number of Spaces Removed: ${spacesRemoved}`);

  var firstChar = newVar[0];
  var lastChar = newVar[newVar.length - 1];
  console.log(`5. First Character: ${firstChar}, Last Character: ${lastChar}`);

//   var lengthWithoutSpaces = newVar.replace(/\s/g, "").length;
//   console.log(`6. Length Without Spaces: ${lengthWithoutSpaces}`);

  var wordsArray = newVar.split(/\s+/);
  var totalWords = wordsArray.length;
  console.log(`6. Total Word Available in String: ${totalWords}`);

  var indexOfGood = newVar.indexOf("good");
  console.log(`7. Index of Word "good" is: ${indexOfGood}`);

  var substringUsingSubstring = newVar.substring(22);
  console.log(`8. Substring Starting From Index "22" is: ${substringUsingSubstring}`);

  // var substringUsingSlice = newVar.slice(22);
  // console.log(`10. Substring using slice(): ${substringUsingSlice}`);

  var endsWithUp = newVar.endsWith("up");
  console.log(`9. String end with "up": ${endsWithUp}`);

  var endsWith = newVar.endsWith("up");
  console.log(`10. String Start With "Hey" : ${endsWith}`);
}

stringHandsOn();
