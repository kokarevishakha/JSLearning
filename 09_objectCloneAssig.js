console.log(
  `===================================================== Assignment-02 Created Object "bankSbi"=======================================`
);
let bankSbi = {
  bankName: "SBI Bank",
  branch: "Mumbai",
  accountNo: 5566778899,
  ifscCode: "SBI112233",
};

console.table([bankSbi]);

console.log(
  `------------------   Created Object "bankLocation"   ---------------------`
);

let bankLocation = {
  street: "MG Road, Mumbai",
  city: "Mumbai",
  pin: 400001,
};
console.table([bankLocation]);

console.log(
  `==========Cloning Object 1 & Object 2  Inside Empty Object============`
);
let clonebankSbi = Object.assign({}, bankSbi, bankLocation);
console.table(clonebankSbi);

console.log(
  `---------------------------------------------------------------------------------------------`
);

let sbiRateOfInterest = {
  homeLoanInterest: "12.5%",
  personalLoanInterest: "13%",
  carLoanInterest: "10.75%",
};

let sbiDetails = Object.assign({}, bankSbi, bankLocation, sbiRateOfInterest);
console.log(`Total "SBI" Bank Detail Are:=>`);
console.table(sbiDetails);
console.log(
  `----------------------------------------------------------------------------------------------`
);
console.log(`Traversing Merged Object By Using For In Loop:=> `);
for (const key in sbiDetails) {
  console.log(key, sbiDetails[key]);
}
