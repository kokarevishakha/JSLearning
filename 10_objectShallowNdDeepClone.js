let bankSbi = {
  bankName: "SBI Bank",
  branch: "Mumbai",
  accountNo: 5566778899,
  ifscCode: "SBI112233",
};

let bankLocation = {
  street: "1234 Elm Street",
  city: "Pune",
  pin_code: 234566,
};

// console.log(`----------clone the Object---------------`);
// bankSbi = bankLocation;
console.log(`----------clone the Object---------------`);
console.log(`Clone the object of bankSbi And bankLocation :=>`);
bankSbi = { ...bankSbi, ...bankLocation };
console.table([bankSbi]);

console.log(`----------------Rate Of Interest-------------`);
let rateOfInterest = {
  homeLoanInterest: 4.5,
  personalLoanInterest: 10.0,
  duelInterest: 7.8,
};
console.log(`----------------Merge step 1 , step 2 ,step 4-------------`);

let sbiDetails = { ...bankSbi, ...bankLocation, ...rateOfInterest };

console.log(`Merge the "bankSbi" And "bankLocation" And "rateOfInterest" :->`);
console.table([sbiDetails]);

console.log(`----------------Traversing Merged Object-------------`);
for (let key in sbiDetails) {
  console.log(`${key}:
     ${sbiDetails[key]}`);
}
