// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223

//anonymous function
var reverse = function(xyz)
{
    return String(xyz).split('').reverse().join("") //54123
}
a=32145
 console.log(reverse(a));

//arrow function
//1
 var reversee=()=>String(12345).split('').reverse().join('') //54321
 console.log(reversee())

//2
//  var reverseee=(num)=>num.split('').reverse().join('') //54321
//  console.log(reverseee(12345))


//call by function by anonymous
function reversee1(abc){
    console.log("ans : ",abc)      //     console.log("ans : ",ret)      
    console.log(abc(678))
}
reversee1(function(xyz)            // anonymous
{
    return String(xyz).split('').reverse().join("") //54123
})

//call by function by arrow
function reversee2(abc){
    console.log("ans : ",abc)           
    console.log(abc(345))
}
reversee2((xyz)=>String(xyz).split('').reverse().join("") )   //arrow