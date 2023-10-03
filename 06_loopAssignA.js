console.log(
    `================================= * Total Number Vowel Including Small AND Capital Vowel   * ===============================`
  );

//  Vowel AEIOU, aeiou

 var str = "I am Very good IT Developer";
  var count=0;

 for(let i=0;i<=str.length-1;i++)
 {
    var char = str.charAt(i);
    if(char=='a' || char=='e' || char=='i' || char == 'o' || char == 'u' || char=='A' || char=='E' || char=='I' || char == 'O' || char == 'U')
    {
       count++;
    }

 }
 console.log(`Total Number of  Vowel are:${count}`);

console.log('\n');
console.log(
    `============================== * Total Number Vowel Using Function   * =================================`
  );
var vowelStr = function() {
    var str = "I am Very good IT Developer";
    var count = 0;
    var vowelsCap = "AEIOU";

    for (let i = 0; i <= str.length - 1; i++) {
        var char = str.charAt(i).toUpperCase();
        if (vowelsCap.includes(char)) {
            count = count + 1;
        }
    }

    console.log(`Total Number of Vowels are: ${count}`);
}

vowelStr();
console.log(`\n`);

console.log(
  `================ * Total Number Vowel Using Function with Pass argument but not pass the return value * ========`
);

function vowelStr(str) {
  var str = "I am Very good IT Developer";
  count = 0;
  var vowelsCap = "AEIOU";
  var vowelsLower = "aeiou";
  for (let i = 0; i <= str.length - 1; i++) {
    var char = str.charAt(i);
    if (vowelsCap.includes(char) || vowelsLower.includes(char)) {
      count = count + 1;
    }
  }

  console.log(`Count The Vowel : ${count}`);
}
vowelStr();

console.log(
  `========================================== * Q.2 Sum Of Cube Number * ========================================`
);

var CubeVar = 1;
var result = 0; //2nd step store the result for this step (result += i*i*i)<--result - like 1
for (let i = 1; i <= 5; i++) {
  result += i * i * i; //1*1*1 = 1 then goto step 2 - like (var result = 0)   //If you want to calculate the cube of each value from 1 to 5, you need to accumulate the results. You can do this by using result += i*i*i inside the loop.
}
console.log(`Sum Of Cube of Given Value: ${result}`);

console.log(
  `========================================== * Q.3 String Find the Odd Position * ========================================`
);
function oddPositionedChars(str) {
  var result = " ";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 !== 0 && str.charAt(i) !== " ") {
      result = result + str.charAt(i) + " "; //Added the space + " "
    }
  }
  return result;
  // console.log(`Giving String1 And String2 : ${result}`);
}

var str1 = oddPositionedChars("Hard work always pays back");
console.log(`Original String ==> "Hard work always pays back" `);
console.log(`Odd Position Characters ==> ${str1}`);

console.log(
  "----------------------------2nd string--------------------------------"
);

var str2 = oddPositionedChars("Soon I will be UI IT Champ");
console.log(`Original String ==> "Soon I will be UI IT Champ" `);
console.log(`Odd Position Characters ==> ${str2}`);
