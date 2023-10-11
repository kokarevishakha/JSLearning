console.log(`=========Assignment Function Constructor =============`);

function Bank(bankName,location,ifscCode,branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}
//console.table([Bank]);
//console.log(`-----------Q.2--------------------------------`);

const yesBank= new Bank("YES Bank","Pune","YES890658",978887);
console.log(`Bank Name : ${yesBank.bankName} , Location : ${yesBank.location} , IFSC Code : ${yesBank.ifscCode} , Branch Code : ${yesBank.branchCode}`);

console.log(`--------------------------------------------------`);
const sbiBank = new Bank('SBI Bank', 'Pune', 'SBIN0001234','001234');
console.log(`Bank Name:- ${sbiBank.bankName} , Location :- ${sbiBank.location} , IFSC Code :- ${sbiBank.ifscCode} , Branch Code :- ${sbiBank.branchCode}`);

console.log(`--------------------------------------------------`);

const mahBank = new Bank('MAH Bank', 'Pune', 'MAHN0008934','001276');
console.log(`Bank Name :- ${mahBank.bankName} , Location :- ${mahBank.location} , IFSC Code :- ${mahBank.ifscCode} , Branch Code :- ${mahBank.branchCode}`);

console.log(`--------------------------------------------------`);

const axisBank = new Bank('AXIS Bank', 'Delhi', 'AXIS0007694','089079');
console.log(`Bank Name :- ${axisBank.bankName} , Location :- ${axisBank.location} , IFSC Code :- ${axisBank.ifscCode} , Branch Code :- ${axisBank.branchCode}`);

// console.table([yesBank, sbiBank, mahBank, axisBank]);

//console.log(`-----------Q.3 Prototype OPEN _TIME--------------------------------`);

Bank.prototype.openTime = "9 AM IST";

//console.log(`-----------Q.4 Prototype CLOSE _TIME--------------------------------`);
Bank.prototype.closeTime = "6 PM IST";

console.log(`-----------------------------------Q.5. SBI BANK DETAILS--------------------------------------------------------------------`);
console.log(` - For all your banking needs, come visit our "${sbiBank.bankName}" branch. We're open from "${sbiBank.openTime}" to "${sbiBank.closeTime}". We look forward to serving you!`);


console.log(`---------------------------------------Q.6. AXIS BANK DETAILS ----------------------------------------------------------------`);

console.log(` - For all your banking needs, come visit our "${axisBank.bankName}" branch. We're closed from "${axisBank.closeTime}". We look forward to serving you!`);


console.log(`--------------------------------------Q.7 YES BANK DETAILS-----------------------------------------------------------------`);
console.log(` - For all your banking needs, come visit our "${yesBank.bankName}" branch located at "${yesBank.branchCode}". We're open from "${axisBank.openTime}". We look forward to serving you!`);




