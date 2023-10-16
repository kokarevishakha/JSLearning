console.log(`-----------------Assignment * MAP * --------------------------------`);

class Bank {
  bank_name;
  location;
  account_no;
  ifsc;
  interest_rate;

  constructor(bank_name, location, account_no, ifsc, interest_rate) {
    this.bank_name = bank_name;
    this.location = location;
    this.account_no = account_no;
    this.ifsc = ifsc;
    this.interest_rate = interest_rate;
  }
}

const axis_Bank = new Bank("Axis_Bank", "Pune", "AXIS0007694", "089079", 4.5);
const sbi_Bank = new Bank("SBI_Bank", "Mumbai", "SBI0006754", "908766", 6.4);
const icici_Bank = new Bank("ICICI_Bank", "Delhi", "ICICI0006754", "708766", 5.4);
const kotak_Bank = new Bank("KOTAK_Bank", "Mumbai", "KOTAK0006754", "989766", 8.89);
const hdfc_Bank = new Bank("HDFC_Bank", "Pune", "HDFC0006754", "908799", 89.4);
const Panjab_Bank = new Bank("Panjab Bank", "Punjab", "Panjab0006754", "890766", 6.8);

const bankMap = new Map();
bankMap.set(axis_Bank.account_no, axis_Bank);
bankMap.set(sbi_Bank.account_no, sbi_Bank);
bankMap.set(icici_Bank.account_no, icici_Bank);
bankMap.set(kotak_Bank.account_no, kotak_Bank);
bankMap.set(hdfc_Bank.account_no, hdfc_Bank);
bankMap.set(Panjab_Bank.account_no, Panjab_Bank);

console.log(`----------------------------------Map---------------------------------------------`);
console.log(bankMap);
console.log(`----------------------------------------------------------------------------------------`);

let bankKeys = bankMap.keys();

console.log(`--------------------traveling Array--------------`);
const banks = [
  axis_Bank,
  sbi_Bank,
  icici_Bank,
  kotak_Bank,
  hdfc_Bank,
  Panjab_Bank,
];

for (const bank of banks) {
  console.log(
    `Bank Name :- ${bank.bank_name} , Location:- ${bank.location} , Account_Number :- ${bank.account_no} , Interest_Rate :- ${bank.interest_rate}`
  );
  console.log("--------------------");
}
