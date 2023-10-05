// 1 to 10
var sum = 0;
for (let index = 0; index <=10; index++) {
    sum = sum + index; 
}
console.log(`Addition of 1 to 10 is: ${sum}`);

// Reverse the string
var str = "Developer";
var reverseStr = "";
for (let index = str.length-1; index >=0; index--) {
    reverseStr = reverseStr + str.charAt(index); 
}
console.log(`Reverse string is: ${reverseStr}`);


// Count the vowels
var str = "i am ui developer";
var count = 0;
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index);
    if(char=='a' || char=='e' || char=='i' || char=='o' || char == 'u'){
        count = count + 1;
    }  
}
console.log(`Total number of vowels are: ${count}`);

console.log(`=============================`);
var str = "I am ui developer";
var count = 0;
var vowelsCap = "AEIOU";
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index).toUpperCase();
    if(vowelsCap.includes(char)){
        count = count + 1;
    }  
}
console.log(`Total number of vowels are: ${count}`);


var result;
for(let i=0;i<=5;i++)
{
    result= result+i *i;
}
console.log(result);

var num1 = 10;
var num1 = 20;
num1 =200;
console.log(num1);

let num2 = 30;
num2 = 40;
num2 = 50;

const PI = 3.14;
// PI = 3.5678; Not allowed
console.log(PI);

console.log("==================================");
// Scope = Accessibility
function addition(){
    var greet = "Good Morning";
    if (30>20) {
        let num3= 100;
        const num4 = 200;
        var result = 10 + 20;     
    }
    console.log(result); 
    //console.log(num3); Not allowed
    // console.log(num4); Not allowed
}
// console.log(result); Not allowed
addition();

for (let index = 0; index < 3; index++) {
    console.log(index);  
}
// console.log(index); // Not allowed