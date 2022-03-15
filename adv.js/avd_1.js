// synchronous //

    // console.log("1");
    // console.log("2");
    // console.log("3");
    // console.log("4");
    // console.log("5");

// asynchronous

// console.log("1");
// console.log("2");
// setTimeout(()=>{

//     console.log("3");
// },2000)
// setTimeout(()=>{

//     console.log("4");
// },3000)
// console.log("5");

// call back 
// let fristFunc=()=>{                                                          
//     console.log("call frirst..");
// }
// let secondFunc=(friFunc)=>{
//     friFunc()
//     console.log("call second...");
// }
// secondFunc(fristFunc);

function fristFunc(){
    fristFunc()
    console.log("call second..");
}
let secondFunc=(()=>{console.log("call frist...")})
