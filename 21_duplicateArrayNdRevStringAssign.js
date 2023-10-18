

console.log(`============ Duplicate Element Array Using Spread Set method ===============`);

var arrayNumber = [11, 3, 4, 11, 4, 7, 3];
arrayNumber = [...new Set(arrayNumber)];
console.log(`Given the Array :=> [11, 3, 4, 11, 4, 7, 3]`);
console.log(`Remove The Duplicate Array :-> ${arrayNumber}`);

console.log(`================2nd Logic  Duplicate Element Array ===============`);

let num = [11, 3, 4, 11, 4, 7, 3];
let uniqueNum = [];

for (let i = 0; i < num.length; i++) {
    if (!uniqueNum.includes(num[i])) {
        uniqueNum.push(num[i]);
    }
}

console.log("Original array:", num);
console.log("Array without duplicates:", uniqueNum);

console.log(`==========Reverse String =========================s`);

let str = "How are you mate";
// console.log(`Given String Is  ====>>>  ${str}`);

str=str.split(" ");
let newString="";
for (const element of str) {
   
   for (const key in element) {

      const char =element[key];
      if(key==0 || key==element.length-1){
         
         newString=newString+char.toUpperCase();
      }
      else{
         newString=newString+char;
      }
   }
   newString+=" ";
}
console.log(`Given This String :=> "How are you mate"`);
console.log(`Expected Output :=>  ${newString}`);






