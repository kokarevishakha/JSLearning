// var isPrime = function(number) {
//     var count = 0;

//     for (let i = 1; i <= number; i++) {
//         if (number % i == 0) {
//             count++;
//         }
//     }

//     if (count == 2) {
//         console.log(`The given number is Prime`);
//     } else {
//         console.log(`Not Prime`);
//     }
// }

// isPrime(17); // Change the argument to check for different numbers
// isPrime(4);

// console.log(`----------------2nd prime number -----------------------`);
// const num = 7;

// function isPrimeNumber(num){

//     for (let index = 2; index < num; index++) {
//         if (num%index==0) {
//             return false;
//         }
//     }
//     return true;
// }
// const result = isPrimeNumber(7);
// console.log(`Is Number Prime: ${result}`);

console.log(`------------Assignment Prime No. ------------------------------`);

function isPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }

  for (let index = 2; index < number; index++) {
    if (number % index == 0) {
      return false;
    }
  }
  return true;
}

const array = [11, 3, 6, 10, 43, 29, 50];
console.log(`Given the Array :=> ${array}`);
for (const num of array) {
  const result = isPrimeNumber(num);
  console.log(`-----------------------------------`);
  console.log(`Given the number :=>${num}`);
  console.log(`Is Number ${num} Prime: ${result}`);
}
