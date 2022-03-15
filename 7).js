//7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 

//anonymous function
var vowel =function (str)
{
    let vowels = /[aeiou]/gi;
    let result = str.match(vowels);
    let count = result.length;
    console.log(count);
}
vowel('skill qode')

//arrow function
var vowel = (str)=>{
    let vowels = /[aeiou]/gi;
    let result = str.match(vowels);
    let count = result.length;
    console.log(count);
}
vowel('jaldip')

//call by function by anonymous
function vowel1(abc)
{
    console.log("ans :",abc)
    console.log(abc('skill'))
}
vowel1 (function(stri){
    let vowels = /[aeiou]/gi;
    var result =stri.match(vowels)
    return result.length
    
})
