// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

//anonymous function
var upper = function (str)
{
    arr=str.split(" ")
    for(i=0;i<arr.length;i++)
    {
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
    }
    str2 = arr.join(" ");
    console.log(str2)
    
}
upper('the quick brown fox')

//arrow function
var upper = (str)=>{
    arr=str.split(" ")
    for(i=0;i<arr.length;i++)
    {
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
    }
    str2 = arr.join(" ");
    console.log(str2)
}
upper('the quick brown fox')

//call by function by anonymous
function upper1(abc){
    console.log("ans :",abc)
    console.log(abc("skill qode programming lab"))
}

upper1(function(strr){
    strr="skill qode programming lab"
    arr=strr.split(" ")
    for(i=0;i<arr.length;i++)
    {
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
    }
    return arr.join(" ");
    // return str2
})