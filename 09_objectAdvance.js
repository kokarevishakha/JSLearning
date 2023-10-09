
let person = {
    name: "John",
    age: 23,
    marriage: true,
}

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

// const valueArray = ['name','age','isMarriage','city'];
// console.log(`Display the array :-> ${valueArray}`);

// valueArray.splice(2, 1, "graduation"); 
// console.log(`Replace an Element :=> ${valueArray}`);
console.log(`===========display how many  array on  person object`);
const entry = Object.entries(person);
console.log(entry);

console.log(`==========particular display array like i want to display only name with john===========`);
const array0th = entry[0]; //name: "John",
console.log(array0th);

const entry1 = Object.entries(person); //[ [], [], [], []]
console.log(entry1);
for (const Element of entry1) {
    console.log(Element[0], Element[1]);
}

console.log('=======Traveling of an object=======');
for (const key in person) {
    console.log(key, person[key]);
}
console.log(`=====Check the key or item present or not in object========`);
const isNameAvailable = 'name' in person;
console.log(isNameAvailable);

const isPinAvailable = 'pin' in person;
console.log(isPinAvailable);

const personJenny = {
       name: "Jenny",
       age:22,
       isMarried: true,
       city:"Pune"

}
personJenny.age = 25;
console.log(personJenny);

//personJenny = { }  Not Allowed
//personJenny = person; Not Allowed

Object.freeze(personJenny);
personJenny.city ="Lucknow";
console.log(personJenny);

console.log(`==============Object assign==========`);
const elon = {
    name:"elon",
    age:54,
    isMarried:true,
    country:"USA"
}
const elonClone = Object.assign({},elon)
console.log(elonClone);

console.log(`Merging an objects`);
let stew = {
    name: "elon",
    age: 54,
    isMarried: true,
    country : "USA"
}

Object.assign(stew,address);
console.log(stew);