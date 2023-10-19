

let add = function(){
    console.log(`Inside function expression`);
}
add();
console.log(`============= Arrow function without using no argu ========== `);
let arrowFun = ()=> {
    console.log(`Inside arrow function...`);
}
arrowFun();

let sub = (num1, num2)=>{
    console.log(`Subtraction is: ${num1- num2}`);
}
sub(20, 10)

let square = (num)=>{
    let result = num * num;
    return result;
}
let result = square(7);
console.log(`Square of 7 is: ${result}`);

console.log(`=========================`);
let square1=(num) => num*num

let result1= square(7);
console.log(`Square of 7 is: ${result1}`);