console.log(
  `=====================Object creation using object literals=========================`
);
let person = {
  name: "John",
  age: 23,
  marriage: true,
  show: function () {
    console.log(`Hi Hello,How Are You ?`);
  },
};
console.log(typeof person);
console.log(person);

//property access
//1. Dot Notation
console.log(
  `----------------------Property Access 1) Dot Notation -------------------------------------`
);
let personalName = person.name;
console.log(`Personal "Name" is : ${personalName}`);
console.log(`Personal "AGE" is : ${person.age}`);

// 1.[] Notation
console.log(
  `----------------------Property Access 2.1.[] Notation -------------------------------------`
);
let nameOfPerson = person["name"];
console.log(`Person name is : ${nameOfPerson}`);

let ageOfPerson = person["age"];
console.log(`Person Age is : ${ageOfPerson}`);

console.log(`-----------Adding property in object-----------`);
person.city = "Pune";
console.log(person);
console.table(person);

console.log(`---------Update property in object----------- `);
person.age = 20;
console.log(person);

console.log(
  `---------------Delete property in object--------------------------------`
);
delete person.age;
console.log(person);

console.log(
  `---------------Adding method in an object--------------------------------`
);
person.show();
person.display = function () {
  console.log(`I am inside display function`);
};
console.log(person);
person.display();

console.log(`--------------- NESTED LOOP --------------------------------`);
const personElan = {
  name: "Elan Musk",
  age: 54,
  totalCompanies: 9,

  companies: {
    tesla: {
      company: "Tesla",
      totalEmployees: 4500,
      location: "USA",
    },
    twitter: "150B USD",
    spacex: "200B USD",
  },
  kidsName: ["Deny", "weny", "Rony", "Randy"],
};
let lastKidName = personElan.kidsName[personElan.kidsName.length - 1];
console.log(`Last Kid Name Is : ${lastKidName}`);
console.log(
  `I want to display value tesla Location : ${personElan.companies.tesla.location}`
);
console.log(`I want to display kids 1st baby name : ${personElan.kidsName[0]}`);
console.log(`I want to display kids Length : ${personElan.kidsName.length}`);

//added stew kids name
console.log(
  `---------------Adding one baby  in an kids array--------------------------------`
);
personElan.kidsName.push("stew");
for (const kid of personElan.kidsName) {
  console.log(kid);
}
