

console.log(`================ Assignment B Filter() =============================`);

const arrayNumber = [20,11,40,25,37,49,9,90,60,2,19];

console.log(`------------Q1. Greater than 50 ------------`);

const arrayNum = arrayNumber.filter( (currentValue) => {
         return currentValue>=50;
});
console.log(`Given The Array is :=> { ${arrayNumber} }`);
console.log(`Find Out all the numbers which are grater than 50 :=> { ${arrayNum} }`);
//console.log(`\n`);
console.log(`-------------- Q2. Even Number -------------------------------------`);
const arrayNum1 = arrayNumber.filter((currentValue) => {
      return currentValue%2==0;
});
console.log(`Given The Array is :=> { ${arrayNumber} }`);
console.log(`Find Out All The Even Number :=> { ${arrayNum1} }`);
//console.log(`\n`);
console.log(`------------Q3. Odd Number ------------------`);

const arrayNum2 = arrayNumber.filter((currentValue)=>{
     return currentValue%2!==0;
});
console.log(`Given The Array is :=> { ${arrayNumber} }` );
console.log(`Find Out All The Odd Numbers :=>{ ${arrayNum2} }`);
//console.log(`\n`);
console.log(`------ Q.4 Multiple of 5 ------------`);
const arrayNum3 = arrayNumber.filter((currentValue)=>{
    return currentValue % 5 === 0;
});

console.log(`Given The Array is :=> { ${arrayNumber} }`);
console.log(`Find Out All The Numbers Which Are Multiple of 5 :=> { ${arrayNum3} }`);
//console.log(`\n`);
console.log(`------------- Q5.Between 20 and 50 ----------------`);
const arrayNum4 = arrayNumber.filter((currentValue) => {
    return currentValue >= 20 && currentValue <= 50;
});

console.log(`Given The Array is :=> { ${arrayNumber} }`);
console.log(`Find Out All The Numbers Between 20 and 50 :=> { ${arrayNum4} }`);



