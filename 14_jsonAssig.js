console.log(`------------Assignment for JSON--------------`);

const postInString = `{
	"name": "Aleix Melon",
	"id": "E00245",
	"role": ["Dev" , "DBA"],
	"age": 23,
	"doj": "11-12-2019",
	"married": false,
	"address": {
		"street": "32,Laham St.",
		"city": "Innsbruck",
		"country": "Astria"
	},
	"referred-by": "E00245"
}`;

console.log(
  `---------Q1, Q2.  used backtick and Convert this one to object------------`
);
console.log(`\n`);
console.log(typeof postInString);
const convertToObj = JSON.parse(postInString);
console.log(`-----convert the String to Object....----------`);
console.log(typeof convertToObj);

console.log(`\n`);
console.log(`---------Q.3 Split()------------`);

// const roleArray = postInString.split('"role": ["')[1].split('" , "DBA"]')[0];
// console.log(roleArray); // Output: Dev

const role1 = JSON.parse(postInString).role[0];
console.log(`Display The Role :=> "${role1}" `);
console.log(`\n`);
console.log(`---------Q.4 Display Last Name------------`);
const lastName = JSON.parse(postInString).name.split(" ")[1];
console.log(`Display the Last Name :=> "${lastName}" `);
console.log(`\n`);
console.log(`---------Q.5 DOJ ------------`);

const dojDate = new Date(JSON.parse(postInString).doj);
const dojYear = dojDate.getFullYear();
console.log(`Date Of Joing Year :=> "${dojYear}" `);
