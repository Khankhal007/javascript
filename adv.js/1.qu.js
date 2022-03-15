let i= 0;
// let numberOffruits=j.length+1;
function fun1(){
    console.log(x);
    i++;
}
var x= setInterval(fun1,100);
setTimeout(() => {
    clearInterval(fun1);
},4400);

let j=["strawberry","grapes","banana","apple"];
function fun2(){
    console.log([j])
    j++;
}
var z=setInterval(fun2,1100);
setTimeout(() => {
    clearInterval(fun2);
}, 4500);
