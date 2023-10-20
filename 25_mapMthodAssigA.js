
console.log(`----------------Assignment Map Method---------------------`);
const arrayNum = [20,11,40,25,23,11,9,31,60,2,19];

const array = arrayNum.map((currentValue) => {
    return  currentValue+10;
});
console.log(`Given The Array is  - "[20,11,40,25,23,11,9,31,60,2,19]"`);
console.log(`- Add 10 into Each Element :=> ${array}`);
console.log('\n');
console.log(`---------Q2. Cube The Each Array ---------------`);
const arrayNum1 = [20,11,40,25,23,11,9,31,60,2,19];
const arrayCube = arrayNum1.map((currentValue) => {
   return currentValue*currentValue*currentValue;
})
console.log(`Given The Array is  - "[20,11,40,25,23,11,9,31,60,2,19]"`);
console.log(`- Cube The Each Array Element is :- ${arrayCube}`);
console.log('\n');
console.log(`=============Q3. Add The Index =============================`);
const arrayIndex = arrayNum1.map((currentValue,index)=>{
    return currentValue + index
});
console.log(`Add the index value into its corresponding each array element:- ${arrayIndex}`);