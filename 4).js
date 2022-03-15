// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.


//anonymous function
var sorting = function (str)
{
    console.log(str.split('').sort().join('')); //abeemrstw
}
console.log(sorting('webmaster'))


//arrow function
var sorting =(str)=>str.split('').sort().join('') // dehllloorw
console.log(sorting('hello world'))


//call by function by anonymous
function sorting1(abc)
{
    console.log("ans :",abc)
    console.log(abc("zyx"))
}
sorting1 (function(strr)
{
    return d=strr.split("").sort().join("")
})