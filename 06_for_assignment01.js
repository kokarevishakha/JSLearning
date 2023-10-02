console.log(
  "========================Assignment for Loop ====================="
);

var result = " ";
for (let i = 5; i <= 15; i++) {
  result = result + i + " ";
  //console.log(` Print the number from 5 to 15 by increment 1: ${i}`);
}
console.log(` Print the number from 5 to 15 by increment 1: ${result}`);

console.log(`--------------------------Q.2 -------------------------------`);

var result = " ";
for (let i = 50; i >= 40; i--) {
  result = result + i + " ";
}
console.log(`Decrement Number is : ${result}`);

console.log(`-------------------------- Q.3 -------------------------------`);
var result = " ";
for (let i = 1; i <= 30; i += 2) {
  result = result + i + " ";
}
console.log(`First 15 Odd Number :${result}`);

console.log(`-------------------------- Q.4 -------------------------------`);
var result = " ";
for (let i = 2; i <= 20; i += 2) {
  result = result + i + " ";
}
console.log(`First 10 Even Numbers: ${result}`);

console.log(`-------------------------- Q.5 -------------------------------`);
var result = " ";
for (let i = 5; i <= 50; i = i + 5) {
  result = result + i + " ";
}
console.log(`Table of 5 : ${result}`);

console.log(`-------------------------- Q.6 -------------------------------`);
var result = " ";
for (let i = 10; i <= 100; i = i + 10) {
  result = result + i + " ";
}
console.log(`Table of 10 : ${result}`);

console.log(`-------------------------- Q.7 -------------------------------`);
var result = " ";
for (let i = 100; i >= 10; i = i - 10) {
  result = result + i + " ";
}
console.log(`Reverse The 10 table : ${result}`);

console.log(`-------------------------- Q.8 -------------------------------`);
var result = " ";
for (let i = 50; i >= 5; i = i - 5) {
  result = result + i + " ";
}
console.log(`Reverse The 5 table : ${result}`);
