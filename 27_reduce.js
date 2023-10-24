
console.log(`======Reduce() Are used to sum or avg of number=======ss`);
const array =  [2, 5, 3, 2, 7, 11];
const sum = array.reduce( (runningTotal, value)=>{
    return runningTotal + value;
}, 0);
console.log(sum);

console.log(`====Flat Map()===========`);  //it is used the multiple dimension or nested array convert to single array
const nestedArray =  [ [2, 5], [4, 5, 6],[ 2, 7, 11] ];
const arrayNum = nestedArray.flatMap( (element => element));

console.log(arrayNum); 