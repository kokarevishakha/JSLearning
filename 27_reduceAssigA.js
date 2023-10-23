
console.log(`==========Assignment A=====================`);

const array_number = [20,11,40,25,37,49,9,90,60,2,19];

console.log(`----------------Q1.Addition Of all Numbers Using reduce()-----------`);
const sum = array_number.reduce((currentValue,value)=>{
     return currentValue+value;
},0);
console.log(`Given The array is :=> ${array_number}`);
console.log(`Find the Sum of all Numbers :=> ${sum}`);

console.log(`------------Q2.Find the Multiple Number of 5 and then sum ----------------`);
const multipleOf5 = array_number.filter((value)=>{
          return value%5==0;
});
console.log(`Find the numbers multiple of 5 :=> ${multipleOf5}`);

const sumOfMulNo = multipleOf5.reduce((acc , value)=>{
         return acc + value;    
})
console.log(`Sum of multiples of 5 :=> ${sumOfMulNo}`);