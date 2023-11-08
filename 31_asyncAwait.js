
async function getData(){
    const promise = new Promise(function (resolve,reject){
        // console.log(resolve,typeof resolve);
        resolve('Promise resolved')
        // setTimeout(()=>{
        //     console.log('Inside setTimeOut()');
        // }, 4000);
    });
   return promise;
}
try{
    console.log(`=========== try() block =====================`);
    const promiseData = await getData();
    console.log(promiseData);
} catch(error){
    console.log(`=========== error() block =====================`);  // it is handle the error on try catch
    console.log(error);
}
// const promiseData = await getData();
// console.log(promiseData);
// promiseData.then((success)=>{
//     console.log(success);
// }).catch((failure)=>{
//     console.log(failure);
// }).finally(()=>{
//     console.log(`---------------------- Completed ---------------------`);
// });
console.log(`================= END ========================`);

async function show(){   // it is a simple function but used the try catch method..
    console.log('show function');
    return 'I am UI Developer';
}
const result = show();
console.log(result);
// console.log(promiseData);
// result.then((success)=>{
//     console.log(success);
// }).catch((failure)=>{
//     console.log(failure);
// }).finally(()=>{
//     console.log(`----------- completed ---------------------`);
// });
