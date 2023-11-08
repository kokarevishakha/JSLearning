console.log(
  `===========* Assignment Array Position Of Odd Number. *===============`
);

let arrayNum = [22, 11, 44, 55, 77, 33];
for (let i = 0; i <= arrayNum.length - 1; i++) {
  if (arrayNum.indexOf(arrayNum[i]) % 2 !== 0) {
    console.log(`Position of Odd Number :- ${arrayNum[i]}`);
  }
}
console.log(
  `-------------------------------Q.1--------------------------------------------`
);
let arrayNum1 = [22, 11, 44, 55, 77, 33];
for (let i = 0; i <= arrayNum1.length - 1; i++) {
  if (arrayNum1.indexOf(arrayNum1[i]) % 2 == 0) {
    console.log(`Position of Even Number :- ${arrayNum1[i]}`);
  }
}
console.log(
  `------------------------------- Q.2 --------------------------------------------`
);

let arrayNum2 = [22, 11, 44, 55, 77, 33];
let sum = 0;
for (let i = 0; i <= arrayNum2.length - 1; i++) {
  sum += arrayNum2[i];
}
console.log(`Addition of Array :- ${sum}`);

console.log(
  `----------------------------------------- * REVERSE STRING * ------------------------------------`
);

let arrayNum3 = [22, 11, 44, 55, 77, 33];
for (let i = arrayNum3.length - 1; i >= 0; i--) {
  console.log(`Reverse Of Value : ${arrayNum3[i]}`);
}

console.log(
  `-----------------------------------------------------------------------------`
);
//    let arrayNum4 = [22, 11, 44, 55, 77, 33];
//    sub=arrayNum4[0];
//    for(let i=0;i<=arrayNum4.length-1;i++)
//    {
//       sub -= arrayNum4[i];
//    }
//    console.log(`Subtract is Array :=> ${sub}`);
console.log(
  `-----------------------------------------------------------------------------`
);
let arrayNum4 = [22, 11, 44, 55, 77, 33];
console.log(`====== Removing element in first position =========`);
arrayNum4.unshift();
console.log(`Adding Number in 1st Position :=> ${arrayNum4}`);

console.log(
  `-----------------------------------------------------------------------------`
);
let arrayNum5 = [22, 11, 44, 55, 77, 33];
console.log(`====== Removing element in first position =========`);
arrayNum5.shift();
console.log(`Removing Number in 1st Position :=> ${arrayNum5}`);

console.log(
    `-----------------------------------------------------------------------------`
  );

let arrayNumbers = [22, 11, 44, 55, 77, 33];
console.log(`====== Removing element in last=========`);
arrayNumbers.pop();
console.log(`Removing Number in 1st Position :=> ${arrayNumbers}`)

console.log(
    `-----------------------------------------------------------------------------`
  );

  let arrayNum6 = [22, 11, 44, 55, 77, 33];
console.log(`====== Adding element in last=========`);
arrayNum6.push(76);
console.log(`Adding Number :=> ${arrayNum6}`);