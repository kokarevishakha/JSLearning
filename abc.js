
function countTheWord(){
    var str = "I am Angular Developer";
   console.log(`Given The String:${str}`);

   var splitWord = str.split(" ");
   console.log(`Total of Word in string:  ${splitWord}`);

   var lengthOfWord = splitWord.length;
   console.log(`Count the word: ${lengthOfWord}`);

}
countTheWord();


// var result1;
// result1 = "4" + 2;
// console.log(`Result of "4" + 2 : ${result1}`);
// console.log("type of Given value : ", typeof result1);