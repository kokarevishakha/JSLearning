
console.log(`===========Assignment Sorting======================`);
// const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
// console.log(`Given the array :- ${arrayRollNumbers}`);
// for (let i = arrayRollNumbers.length - 1; i >= 0; i--) {
//     console.log(`Reversed The Array :- ${arrayRollNumbers[i]}`);
// }

const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`Given the array :- ${arrayRollNumbers}`);
let reversedString = "Reversed The Array: ";
for (let i = arrayRollNumbers.length - 1; i >= 0; i--) {
    reversedString += `${arrayRollNumbers[i]}  `;
}
console.log(` ${reversedString} `);

console.log(`--------------------Step 02----------------------------`);
const sortedArray = arrayRollNumbers.sort();
console.log(`Sorted the Number :=> ${sortedArray}`);

console.log(`------------step 03----------------------------------------`);
const newArray = arrayRollNumbers.sort( (a, b) => {
    return a>b ? 1 : -1;   
} );
console.log(`Sort array in Ascending Array :=> ${newArray}`);

console.log(`------------------step 04 --------------------------`);

//const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
//console.log(`Given the array :- ${arrayRollNumbers}`);

const newArray1 = arrayRollNumbers.sort((a, b) => {
    return a > b ? 1 : -1;
});

const greatestNumber = newArray1[newArray1.length - 1];
console.log(`The greatest number is: ${greatestNumber}`);

console.log(`-----------------Step-05------------------------------------`);
const newArray2 = arrayRollNumbers.sort((a, b) => {
    return a > b ? -1 : 1;
});

const greatestNumber1 = newArray1[newArray2.length - 1];
console.log(`The greatest number is: ${greatestNumber1}`);

console.log(`-------------------Step 06--------------------`);
const duplicateArray = new Set(arrayRollNumbers);

// Convert set back to an array for printing
const uniqueArray = Array.from(duplicateArray);
console.log(`Remove Duplicate Array :=> ${uniqueArray}`);







