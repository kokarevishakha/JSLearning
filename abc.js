
// // // // function countTheWord(){
// // // //     var str = "I am Angular Developer";
// // // //    console.log(`Given The String:${str}`);

// // // //    var splitWord = str.split(" ");
// // // //    console.log(`Total of Word in string:  ${splitWord}`);

// // // //    var lengthOfWord = splitWord.length;
// // // //    console.log(`Count the word: ${lengthOfWord}`);

// // // // }
// // // // countTheWord();


// // // console.log(`=======Assignment===================`);
// // // var countCharA = function(str){
// // //         var count=0;
// // //         var upperCase ="A";
// // //         var lowerCase = "a";
// // //         var upperCase1 = "E";
// // //         var lowerCase1 = "e";
// // //         for(let i=0;i<=str.length-1;i++)
// // //         {
// // //             var char = str.charAt(i);
// // //             if(upperCase.includes(char) ||  lowerCase.includes(char) || upperCase1.includes(char) || lowerCase1.includes(char)){
// // //                 count=count+1;
// // //             }
// // //         }
// // //         return count; 
// // //     }
// // //  var str1 = countCharA("I am Angular Developer");
// // //  console.log(`String :=> "I am Angular Developer"`);
// // //  console.log(`Count Character "A" & "a" and also "E" & "e" both count :-> ${str1} `);

// // //  console.log(`---------------------------------------------------`);
// // //  console.log(`String :=> "I am React DevEloper"`);
// // //  var str2 = countCharA("I am React DevEloper");
// // //  console.log(`Count Character "A" & "a" and also "E" & "e" both count :-> ${str2}`);

// // // console.log(`---------------------------------------------------`);

// // //  var str3 = countCharA("Im Vishakha Kokare");
// // //  console.log(`String :=> "Im Vishakha Kokare"`);
// // //  console.log(`Count Character "A" & "a" and also "E" & "e" both count :-> ${str3}`);

// // //  console.log(`========END===============================`);


// // // // var result1;
// // // // result1 = "4" + 2;
// // // // console.log(`Result of "4" + 2 : ${result1}`);
// // // // console.log("type of Given value : ", typeof result1);


// // // // var countCharA = function(str){
// // // //     var count=0;
// // // //     var upperCase ="A";
// // // //     var lowerCase = "a";
// // // //     for(let i=0;i<=str.length-1;i++)
// // // //     {
// // // //         var char = str.charAt(i);
// // // //         if(upperCase.includes(char) ||  lowerCase.includes(char)){
// // // //             count=count+1;
// // // //         }
// // // //     }
// // // //     return count; 
// // // // }
// // // // var str = countCharA("I Am Learning JavaScript ,The Language of internet");
// // // // console.log(`First String is ===> "I Am Learning JavaScript ,The Language of internet"`);
// // // // console.log(`Count the Char of "A" & "a" : ${str}`);

// // // // console.log(`-------------------------------------------------------------------------------`);

// // // // var str1 = countCharA("My favourite movie is LAggAn");
// // // // console.log(`Second String is ===> "My favourite movie is LAggAn" `);
// // // // console.log(`Count the Char of "A" & "a" : ${str1}`);


// // // console.log(`-------------------pass argu nd retrun value------------`);

// // // let avc = function(a,b){
// // //     let temp = a;
// // //     a=b;
// // //     b=temp;
// // //     return [a,b];

// // // }
// // // let newW = avc(100,200);
// // // console.log(`iI given this value "100" & "200"`);
// // // console.log(`swap the values :- ${newW}`);

// // // console.log(`=======pass argu but no retrun value======`);
// // // function avc1(a,b) {
// // //     console.log(`Before swapping: a = ${a}, b = ${b}`);
// // //     let temp = a;
// // //     a = b;
// // //     b = temp;
// // //     console.log(`After swapping: a = ${a}, b = ${b}`);
// // // }

// // // avc1(100, 200);
// // // console.log(`----------no argu and no retuen type.-------------`);

// // // function avc2()
// // // {
// // //     let a=123;
// // //     let b=856;
// // //     let temp;
// // //     temp=a;
// // //     a=b;
// // //     b=temp;
// // //     console.log(a,b);
    
// // // }
// // // avc2();

// // // console.log(`----------no argu and with retuen type.-------------`);

// // // function avc3()
// // // {
// // //     let a=30;
// // //     let b=50;
// // //     let temp = a;
// // //     a = b;
// // //     b = temp;
// // //     return [a, b];
// // // }
// // // let new1=avc3();
// // // console.log(new1);
// // console.log(`---------Using For Loops----------------`);
// // function abc(){
  
// //     for(let i=5;i<=15;i++){
// //         console.log(i); 
// //     }
// // }
// // abc();

// // console.log(`------Using While Loop-------`);
// // function bcs(){
// //     let i=50;
// //     while(i>=40){
// //         console.log(i);
// //         i--;
// //     }

// // }
// // bcs()

// // console.log(`--------Do-While-Loop print 5 table--------------`);
// // let i=0;
// // do {
   
// //     i = i+5;
// //     console.log(i);
// // } while (i<50);


// // console.log(`------Even Number--------`);
// // // function evenNo(num){
    
// // //     if(num %2 == 0){
// // //        console.log(`Even no. :- ${num}`);
// // //     }
// // //     else{
// // //           console.log(`old no. :- ${num}`);
// // //     }
// // // }
// // // evenNo(2);
// // // evenNo(3);

// // function evenNo(num){
    
// //     if(num %2 == 0){
// //        console.log(`Even no. :- ${num}`);
// //     }
// //     // else{
// //     //       console.log(`old no. :- ${num}`);
// //     // }
// // }
// // for(let i=0;i<=10;i+=2){
// //     evenNo(i);
// // }



// // console.log(`-----old number------`);
// // function oldNo(num){
// //     if(num % 2!==0){
// //         console.log(`Old no. :-> ${num}`);
// //     }
// // }
// // for(let i = 0;i<=15;i++)
// // {
// //     oldNo(i);
// // }

// // console.log(`-------Print 10 Table -----`);
// // for(let i = 1; i <= 10; i++) {
// //     console.log(i*10);
// // }

// // console.log(`----------Reverse 10 table -----------------`);
// // for(let i=10; i>=1; i--)
// // {
// //     console.log(i*10);
// // }


// var swapVar = "Vishakha";
// var swapVar1 = "cute";
// console.log(`Before swapping: ${swapVar} ${swapVar1}`);
// var temp = swapVar;
// swapVar =swapVar1;
// swapVar1 = temp;
// console.log(`After swapping : ${swapVar} ${swapVar1}`);
// console.log(`\n`);

// var num1 = 100;
// var num2 = 200;
// var num3 = 300;
// console.log(`Before swapping: ${num1} ${num2} ${num3}`);
// var temp = num1;
// num1=num2;
// num2=num3;
// num3= temp;
// console.log(`After swapping: ${num1} ${num2} ${num3}`);

console.log(`========== String =====================`);

function abc(){
    
    console.log(`My Dream company is : AMDOCS`);
}
abc();

function abc1(h1,h2,h3){
       return `${h1},${h2},${h3}`;


}
var result1 = abc1('Dance','cycling','Reading');
console.log(`My Hobbies are :=> ${result1}`);