let i = 0;
let fruits=["strawberry","grapes","banana","apple"];
let numberOffruits=fruits.length+1;
function itrateoverArray(){
    console.log(fruits[i]);
    i++;
}
var printfruits=setInterval(itrateoverArray, 1000);
setTimeout(()=>{
    clearInterval(printfruits);
},5*1000);
