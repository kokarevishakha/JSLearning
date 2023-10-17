

// const setOfRollNum = new Set();
// setOfRollNum.add(11);
// setOfRollNum.add(22);
// setOfRollNum.add(11);
// setOfRollNum.add(33);
// setOfRollNum.add(22);
// setOfRollNum.add(44);
// setOfRollNum.add(55);
// console.log(setOfRollNum);
// console.log(`Total element in set is: ${setOfRollNum.size}`);
// // setOfRollNum.clear();
// setOfRollNum.delete(22)
// console.log(setOfRollNum);
// let result =setOfRollNum.has(33);
// console.log(result);

// console.log(typeof setOfRollNum);


// for (const element of setOfRollNum) {
//     console.log(element);
// }

// var arrayNumber = [22, 11, 44, 22, 77, 11];
// const setNum = new Set(arrayNumber);
// console.log(setNum);
// console.log(`-----2nd logic for duplicate Array using spread set method---------`);
// arrayNumber = [...new Set(arrayNumber)];
// console.log(arrayNumber);

console.log(`-----ADDED Value usning set method`);
const setOfRollNum = new Set()
setOfRollNum.add(11);
setOfRollNum.add(22);
setOfRollNum.add(33);
console.log(setOfRollNum);

console.log(`-----find the length---------`);
console.log(`Total Element is set is :- ${setOfRollNum.size}`);

console.log(`---delete the element--`);
setOfRollNum.delete(11);
console.log(setOfRollNum);

console.log(`---------has method (searching the element -----`);
let abc = setOfRollNum.has(44);
console.log(abc);

console.log(`---duplicate element remove using spread method-----`);
var arrayNumber = [22, 11, 44, 22, 77, 11];
const setNum = new Set(arrayNumber);
console.log(setNum);

console.log(`-----2nd logic for duplicate Array using spread set method---------`);
arrayNumber = [...new Set(arrayNumber)];
console.log(arrayNumber);



// setOfRollNum.clear();
// console.log(setOfRollNum);