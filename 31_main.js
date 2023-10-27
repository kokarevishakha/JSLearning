
console.log(`=======click for heading then change the color ===========`);
const headClickColor = document.querySelector('#headColor');
headClickColor.addEventListener('mouseover', ()=>{
    headClickColor.style.color = 'darkslateblue';
    //liJavaScript.style.fontSize = '20px';
} );

console.log(`======= Color for heading ===========`);
const HeadingElementColor = document.querySelector('#colorHead');
HeadingElementColor.style.color = 'Red';

console.log(`============= Color For Background =====================`);
const bodyElementColor = document.querySelector('#body');
bodyElementColor.style.backgroundColor = 'darksalmon';

console.log(`===== Remove the one element of list ================`);
const listEle = document.querySelector('#list');
const angularOrJiraElement = document.querySelector('#removeElement');
listEle.removeChild(angularOrJiraElement);
