var greet = 'Good Morning';

console.log("========= length property =============");
var totalLength = greet.length;
console.log('Length of the string is: ', totalLength);

console.log("========== charAt() =============== ");
var charAt5 = greet.charAt(5);
console.log("Character at index 0 is: ", charAt5);

console.log('Char stored at index 5 is: ', greet.charAt(10));



var lastIndexChar = greet.charAt(greet.length-3);
console.log('Last index char is: ', lastIndexChar);

console.log("========== concatenation =============== ");
var firstName = "Jenny";
var lastName = " Gates"
var result = firstName.concat(lastName);
console.log(result);

console.log("========== indexOf =============== ");
var indexOfM = greet.indexOf('M');
console.log('Index of M is: ', indexOfM);

 console.log(greet.indexOf('nin'));

 console.log('Index of char z:',greet.indexOf('z'));

 console.log('Index of char D:',greet.indexOf('D'));

 console.log('Index of char o is:', greet.indexOf('o'));

 console.log("========== replace =============== ");
var result =greet.replace('Morning', "Afternoon");
console.log(result);
var result = greet.replace(' ', "-");
console.log(result);

console.log("========== trim() =============== ");
var str = "   Good Afternoon  ";
var lengthBeforeTrim = str.length;
console.log("Length before trim : ", str.length);
var result = str.trim();
console.log("Length after trim: ", result.length);
var lengthAfterTrim = result.length;
var result = lengthBeforeTrim - lengthAfterTrim;
console.log('Removed extra spaces are: ', result);

console.log("========== Includes() =============== ");

var result = greet.includes('Morning');
console.log("Is Morning word available :",result);

var result = greet.includes('nin');
console.log("Is nin word available :",result);

var result = greet.includes('morning');
console.log("Is Morning word Available :", result);

console.log("========== Search() =============== ");
var greet = 'good Morning';

var result = greet.search('orn');
console.log(result);

var result = greet.search('good');
console.log("Search this word :",result);

var result = greet.search('after');
console.log("Search this word :",result);

console.log("========== Slice() =============== ");

var result = greet.slice(6);
console.log('slice the this location :', result);   // display the direct word

var result = greet.slice(6, 10);
console.log(result);

console.log("========== Split() =============== ");
 
var result = greet.split(" ");
console.log(result);

//WAP to count the total number words  (Interview Qution)
var str = "I am UI Developer";
var word = str.split(" ");
console.log(word);
console.log(typeof word);


console.log("========== String Template =============== ");
var num1 = 10;
var num2 =20;

var result = num1 + num2;
console.log("Addition of ", num1, "and", num2, "is :",result);
console.log(`Addition of ${num1} and ${num2} is : ${result}`);