console.log(
  `===================== Assignment Object =========================`
);
let professor = {
  Prof: "P.V Pawar",
  CollegeName: "SVPM'S COE-BMT",
  Designation: "Prof",
  Age: 45,
  Subject: "CPP",
  degree: {
    engineering: "CSC",
    PHD: "Adv Computing",
  },
  Certificates: [
    "Hacker Rank Participation",
    "Certificate in IFE Course",
    "Certificate in Adv Programming",
  ],
};

console.log(`Total Object:=>`);
console.log(professor);

console.log(`-----------------------------------------------------------`);
console.log(`Adding "Certificates" Array :=> ${professor.Certificates}`);

console.log(
  `--------------------------Added new property---------------------------------`
);
professor.totalExperience = "14 years";
console.log(`Added Total Experience :=> ${professor.totalExperience} `);

console.log(
  `-----------------------Modify College Name ------------------------------------`
);
professor.CollegeName = "SVPM COE-Baramati";
console.log(`Modified College Name:`, professor);

console.log(
  `--------------------------Add One Certificate---------------------------------`
);
professor.Certificates.push("Oracle Certificate");

for (const certificate of professor.Certificates) {
  console.log(certificate);
}

console.log(
  `--------------------Display Last Element in Array of Certificates------------------------`
);
let lastCertificate = professor.Certificates[professor.Certificates.length - 1];
console.log(`Last Certificate is :=> ${lastCertificate}`);

console.log(
  `----------------------Log Complete Object-------------------------------------`
);
console.log(`Complete Object:=>`);
console.log(professor);

console.log(
  `--------------------------Traveling of Array ---------------------------------`
);
console.log(`Certificates:=>`);

for (const certificate of professor.Certificates) {
  console.log(certificate);
}
