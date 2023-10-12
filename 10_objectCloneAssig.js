console.log(
  `================== Assignment Object, Array, Freeze, Merge ==============`
);

let personalDetails = {
  firstName: "Vishakha",
  lastName: "Kokare",
  city: "Pune",
  pinCode: 413110,
};

console.log(`Personal Details :->`);
console.table([personalDetails]);

console.log(
  `--------------College Details------------------------------------`
);
let collegeDetails = {
  collegeName: "SVPM COE-BMT",
  location: "Baramati",
  yearOfEstablishment: 1990,
  coursesOffered: "B.Tech",
};

console.log(`College Details :->`);
console.table([collegeDetails]);

let mergedDetails = { ...personalDetails, ...collegeDetails };

console.log(`--------------Merged Details------------------------------------`);
console.log(`Merge the College Details and Personal Details:->`);
console.table([mergedDetails]);

// Create an array of friend names
let friendNames = ["Vaishu", "Krishna", "Vishal", "Mohini"];
Object.freeze(friendNames);

// Create a new array with the additional name
// let updatedFriendNames = [...friendNames, "Eve"];

// console.log(updatedFriendNames);

// Freeze the array
//Object.freeze(friendNames);

// // Trying to modify the array will result in an error
// friendNames.push("Eve"); // This will throw an error

console.log(
  `--------------Freeze Friend Names------------------------------------`
);
console.log(`Freeze Friend Names:->`);
console.table([friendNames]);

console.log(`--------------Reverse String------------------------------------`);
let company = function () {
  let revStr = "";
  let string = "CodeMind Technology";
  for (let i = string.length - 1; i >= 0; i--) {
    let char = string.charAt(i);
    if (char == " ") {
      break;
    } else {
      revStr = revStr + char;
    }
  }
  return revStr;
};

let reversedString = company();
console.log(
  `Given String is "CodeMind Technology" but display Reverse only word "Technology" :=>  ${reversedString}`
);
