

// Reverse the string with space
let str = "Vishakha kokare";
let reversedString = '';

for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === '') {
        reversedString += '';
    } else {
        reversedString += str[i];
    }
}
console.log(reversedString);