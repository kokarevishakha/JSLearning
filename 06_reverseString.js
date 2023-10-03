
//reverse the string ==> ahkahsiV yeH
var str = "Hey Vishakha";
var reverseStr = " ";
for(let i=str.length-1;i>=0;i--)
{
    reverseStr = reverseStr+str.charAt(i);
}
console.log(`${reverseStr}`);

//Reverse String ==>Vishakha Hey
var str = " Hey Vishakha";
var words = str.split(' ');

var reverseWords = [];
for(let i=words.length-1; i>=0; i--) {
    reverseWords.push(words[i]);
}

var reverseStr = reverseWords.join(' ');
console.log(`${reverseStr}`);