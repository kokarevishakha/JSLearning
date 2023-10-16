console.log(`----------------------- Find the Largest Number -----------------------------------`);

var largestNo = function(a,b,c){
      if(a>=b && a>=c){
        return a;
      }
      else if(b>=a && b>=c){
        return b;
      }
      else{
        return c;
      }
}
  var Result = largestNo(100,200,30);
  console.log(`Number is :- "100" , "200", "30"`);
  console.log(`Find the largest number :=> ${Result}`);
console.log(`----------------------------------------------`);
var result1 = largestNo(100.89, 43.87,33.83);
console.log(`Number is :-> "100.89", "43.87", "33.83"`);
console.log(`Find the largest Float Number :=> ${result1}`);

console.log(`----------------------- Find the Smallest Number -----------------------------------`);

var smallestNo = function(a,b,c){
      if(a<=b && a<=c){  
        return a;
      }
      else if(b<=a && b<=c){
        return b;
      }
      else{
        return c;
      }
}
  var Result = smallestNo(100,200,30);
  console.log(`Number is :- "100" , "200", "30"`);
  console.log(`Find the Smallest number :=> ${Result}`);
console.log(`----------------------------------------------`);
var result1 = smallestNo(100.89, 43.87,33.83);
console.log(`Number is :-> "100.89", "43.87", "33.83"`);
console.log(`Find the Smallest Float Number :=> ${result1}`);

