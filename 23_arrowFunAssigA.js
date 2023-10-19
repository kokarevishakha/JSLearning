console.log(`========= Arrow function Assignment ===========================`);

let arrowMsg = () => {
  console.log(` Good Morning, Today is Wednesday `);
};
arrowMsg();

console.log(`----------- Q.2 with 3 argu and no return value-----------`);

let arrowFun = (n1, n2, n3 = 1) => {
  console.log("Multiplication of Values =>", n1 * n2 * n3);
};
console.log(`Given the Value :=> "5","5","2"`);
arrowFun(5, 5, 2);
console.log(`----------------Assign  Default value to 3rd arg as 1 ---------------------`);
console.log(`Given the Value :=> "10","4" `);
arrowFun(10, 4);

console.log(
  `--------------Q3.Addition Of 5 number & concat the string-----------------------`
);

let add = (n1, n2, n3, n4, n5) => {
  console.log("Addition of Values :=> ", n1 + n2 + n3 + n4 + n5);
};
add(100, 100, 200, 349, 756);

console.log(`------------Concat The String -----------------------`);
let arrowFun1 = () => {
  let strConcat =
    "I am" +
    " " +
    "learning" +
    "  " +
    "Es6" +
    "  " +
    "features" +
    " " +
    "in depth";
  return strConcat;
};
console.log(
  `Given The String is :=>  "I am", "learning","Es6", "features","in depth" `
);
let result = arrowFun1();
console.log(`Concat The String => ${result}`);
