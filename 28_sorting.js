const frdNames = ['Jenny', "Bill", 'Stew', "Elon"];
// Sorting in ascending order
const sortedArray = frdNames.sort();
console.log(sortedArray);// ['Bill', 'Elon', 'Jenny', 'Stew']

// Sorting in descending order
//Output  ['Stew', 'Jenny', 'Elon', 'Bill'];
const reverseArray = sortedArray.reverse();
console.log(reverseArray);

console.log('======= Sorting an array of number ================');
const array =  [29, 15, 31, 111, 27, 6];
// Sorting an array in ascending order
const newArray = array.sort( (a, b) => { //this called custom Logic
    return a>b ? 1 : -1;   //i want decending so i write the statement return a>b ? -1 : 1;
} );
console.log(newArray);
console.log(`=======Find the Last Element Array==========`);
const array1 = [29, 15, 31, 111, 27, 6];
const lastElement = array1[array1.length - 1];
console.log(lastElement); 