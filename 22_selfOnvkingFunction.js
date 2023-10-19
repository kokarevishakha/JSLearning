
(function(){
    console.log(' Inside IIFE ');
})()


console.log(`==========================`);
(function(n1,n2){
    console.log(' Addition of',n1+n2 );
})(10,10)

console.log(`==========================`);
(function(){
    console.log("Addition of ",10+10 );
})()