// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

//anonymous function
var palindromee=function(xyz)
{
    b=xyz.split('').reverse().join('')   //edoq lliks
    return (a==b)?console.log("palindrome"):console.log("Not palindrome")
}

var a='skill qode'
palindromee(a)



//arrow function
c='mom'
var d
var palindromee=()=>d=c.split('').reverse().join('');


palindromee(c)
var e=(c==d)?console.log("palindrome"):console.log(" Not palindrome")



// //call by function by anonymous
c="121"
function palindromee1(abc){
    console.log("ans : ",abc)
    console.log(abc(c))
}
palindromee1 (function(xyz){
    d=String(xyz).split('').reverse().join('')
    return d;
})
 var e=(c==d)?console.log("palindrome"):console.log(" Not palindrome")
