console.log(
  `-----------------Assignment * SET * --------------------------------`
);

class bank {
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

const axis_Bank = new bank("Axis_Bank", "Pune", "AXIS0007694", "089079", 4.5);
console.log(
  `Bank Name :- ${axis_Bank.bank_name} , Location :- ${axis_Bank.location} ,  Account_No :- ${axis_Bank.account_no} , IFSC Code :- ${axis_Bank.ifsc}, Interest_Rate :- ${axis_Bank.interest_rate}`
);

const sbi_Bank = new bank("SBI_Bank", "Mumbai", "SBI0006754", "908766", 6.4);
console.log(
  `Bank Name :- ${sbi_Bank.bank_name} , Location :- ${sbi_Bank.location} , Account No :- ${sbi_Bank.account_no} , IFSC Code :- ${sbi_Bank.ifsc} , Interest_Rate :- ${sbi_Bank.interest_rate} `
);

const icici_Bank = new bank(
  "ICICI_Bank",
  "Delhi",
  "ICICI0006754",
  "708766",
  5.4
);
console.log(
  `Bank Name :- ${icici_Bank.bank_name} , Location :- ${icici_Bank.location} , Account No :- ${icici_Bank.account_no} , IFSC Code :- ${icici_Bank.ifsc} , Interest_Rate :- ${icici_Bank.interest_rate} `
);

const kotak_Bank = new bank(
  "KOTAK_Bank",
  "Mumbai",
  "KOTAK0006754",
  "989766",
  8.89
);
console.log(
  `Bank Name :- ${kotak_Bank.bank_name} , Location :- ${kotak_Bank.location} , Account No :- ${kotak_Bank.account_no} , IFSC Code :- ${kotak_Bank.ifsc} , Interest_Rate :- ${kotak_Bank.interest_rate} `
);

const
 hdfc_Bank = new bank("HDFC_Bank", "Pune", "HDFC0006754", "908799", 89.4);
console.log(
  `Bank Name :- ${hdfc_Bank.bank_name} , Location :- ${hdfc_Bank.location} , Account No :- ${hdfc_Bank.account_no} , IFSC Code :- ${hdfc_Bank.ifsc} , Interest_Rate :- ${hdfc_Bank.interest_rate} `
);

const Panjab_Bank = new bank(
  "Panjab Bank",
  "Punjab",
  "Panjab0006754",
  "890766",
  6.8
);
console.log(
  `Bank Name :- ${sbi_Bank.bank_name} , Location :- ${Panjab_Bank.location} , Account No :- ${Panjab_Bank.account_no} , IFSC Code :- ${Panjab_Bank.ifsc} , Interest_Rate :- ${Panjab_Bank.interest_rate} `
);

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
  console.log(`Bank Name :- ${bank.bank_name} , Location:- ${bank.location}`);

  console.log("--------------------");
}
