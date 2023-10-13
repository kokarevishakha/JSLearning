console.log(`========Swap Number using function pass argu and retrun value==========`);

function swap(value1, value2){
    console.log('Before swap ==>', value1, value2);
    let temp = value1;
    value1 = value2;
    value2 = temp;
    console.log('After swap ==>', value1, value2);
    return [value1, value2];
}

let swappedValues = swap(100, 300);
// console.log(`Swapped values: ${swappedValues}`);

console.log(`-------------------Swap the String-----------------------------`);

swappedValues = swap("Dhoni" , "Mahi");


console.log(`------------------Swap the Float Number------------------------------`);

swappedValues = swap(12.60, 56.9);


console.log(`========Swap Number using function NO argu and NO retrun value==========`);

let value1, value2;

function swap1(){
    console.log('Before swap ==>', value1, value2);
    let temp = value1;
    value1 = value2;
    value2 = temp;
    console.log('After swap ==>', value1, value2);
}

value1 = 100;
value2 = 300;
swap1();

value1 = "Dhoni";
value2 = "Mahi";
swap1();

value1 = 12.0;
value2 = 56.9;
swap1();

console.log("3. ====== Function type:function with arguments and no return type ===== ");

function swap(valueOne, valueTwo) {
    console.log('Before swap ==>', valueOne, valueTwo);
    var temp = valueOne;
    valueOne = valueTwo;
    valueTwo = temp;
    console.log('After swap ==>', valueOne, valueTwo);
}

swap(100, 200);
swap("Pune", "Mumbai");
swap("India", "USA");

// console.log("4. ====== Function type:function with NO arguments and using return type ===== ");

// let num1 = 100;
// let num2 = 300;

// function swap() {
//     console.log('Before swap ==>', num1, num2);
//     let temp = num1;
//     num1 = num2;
//     num2 = temp;
//     console.log('After swap ==>', num1, num2);
//     return [num1, num2];
// }

// let [swappedNum1, swappedNum2] = swap();
// console.log(`Swapped values: ${swappedNum1}, ${swappedNum2}`);
