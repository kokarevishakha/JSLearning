console.log(
  `================================= * Assignment 02 For Array   * ======================`
);
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given the Array :=> ${arrayNumbers}`);

const lengthOfArray = arrayNumbers.length;
console.log(`Length Of Array :- ${lengthOfArray}`);

console.log(
  `-------------------------------Q.2--------------------------------------------`
);

console.log(`First Element :=> ${arrayNumbers[0]}`);
console.log(`Last Element :=> ${arrayNumbers[arrayNumbers.length - 1]}`);

console.log(
  `-------------------------------Q.3--------------------------------------------`
);
console.log(`3rd Last Element  :=> ${arrayNumbers[arrayNumbers.length - 3]}`);

console.log(
  `-------------------------------Q.4--------------------------------------------`
);
var arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array :=>${arrayNumber}`);
console.log(`Even Number :=>`);

var evenElements = "";
for (const element of arrayNumber) {
  if (element % 2 === 0) {
    evenElements += element + " ";
  }
}
console.log(evenElements.trim());

console.log(
  `-------------------------------Q.5--------------------------------------------`
);
var arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array :=>${arrayNumber}`);
console.log(`Odd elements:`);

var oddElements = "";
for (const element of arrayNumber) {
  if (element % 2 !== 0) {
    // Check if element is odd
    oddElements += element + " ";
  }
}

console.log(oddElements.trim()); // Trim to remove trailing space

console.log(
  `-------------------------------Q.6--------------------------------------------`
);

var arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Even elements:`);

var evenElements = "";
var evenSum = 0;

for (const element of arrayNumber) {
  if (element % 2 === 0) {
    evenElements += element + " ";
    evenSum += element;
  }
}

console.log(evenElements.trim()); // Trim to remove trailing space
console.log(`Sum of even elements: ${evenSum}`);

console.log(
  `-------------------------------Q.7--------------------------------------------`
);

var arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array :=>${arrayNumber}`);
console.log(`Odd elements:`);

var oddElements = "";
var oddSum = 0;
for (const element of arrayNumber) {
  if (element % 2 !== 0) {
    // Check if element is odd
    oddElements += element + " ";
    oddSum += element;
  }
}

console.log(oddElements.trim());
console.log(`Sum of Odd elements: ${oddSum}`);

console.log(
  `-------------------------------Q.8--------------------------------------------`
);
var arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Numbers that are multiples of 5:`);

var multiplesOf5 = "";
for (const element of arrayNumber) {
  if (element % 5 === 0) {
    multiplesOf5 += element + " ";
  }
}

console.log(multiplesOf5.trim());

console.log(
  `-------------------------------Q.9--------------------------------------------`
);
var arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Sum Of All Element :`);
var sum = 0;
for (const element of arrayNumber) {
  sum += element;
}
console.log(`Sum Of Element :=> ${sum}`);

console.log(
  `-------------------------------Q.10--------------------------------------------`
);
var arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
var is115Present = false;

for (const element of arrayNumber) {
  is115Present = is115Present || element === 115;
}

console.log(
  is115Present
    ? "115 is present in the array."
    : "115 is not present in the array."
);

console.log(
  `-------------------------------Q.11--------------------------------------------`
);
var arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
var is23Present = false;

for (const element of arrayNumber) {
  is23Present = is23Present || element === 23;
}

console.log(
  is23Present
    ? "23 is present in the array."
    : "23 is not present in the array."
);

console.log(
  `-------------------------------Q.12--------------------------------------------`
);
var arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given Original array  :=>${arrayNumber}`);

arrayNumber.splice(3, 0, 55, 66);
console.log(`Insert Number :=> ${arrayNumber}`);

console.log(
  `-------------------------------Q.13--------------------------------------------`
);

var arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Original Array: ${arrayNumber}`);

arrayNumber.splice(4, 3); // Starting from index 4, remove 3 elements

console.log(`Array after deletion: ${arrayNumber}`);
