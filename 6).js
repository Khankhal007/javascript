// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

//anonymous function
var long_word = function(str)
{
    max=-1
    a=str.split(" ")
    for(i=0;i<a.length;i++)
    {
        if(max<a[i].length)
        {
            max=a[i].length
            word=a[i]
        }
    }
    console.log(word)
}
long_word('Aeb Development Tutorial jaldipbhalani')

//arrow function
// var long_word =(str)=>{
//     max=-1
//     a=str.split(" ")
//     for(i=0;i<a.length;i++)
//     {
//         if(max<a[i].length)
//         {
//             max=a[i].length
//             word=a[i]
//         }
//     }
//     console.log(word)
// }
// long_word('jaldip g bhalani')


// //call by function by arrow
// function long(abc){
//     console.log("ans : ",abc)
//     console.log(abc("skill qode"))
// }

// long ((str)=>{
//     max=-1
//     a=str.split(" ")
//     for(i=0;i<a.length;i++)
//     {
//         if(max<a[i].length)
//         {
//             max=a[i].length
//             word=a[i]
//         }
//     }
//     return word
// })
