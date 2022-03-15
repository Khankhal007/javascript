///---------------------------github link ---------------------------------------
              // https://github.com/Khankhal007/Node.js.git
///------------------------------------------------------------------------------
//// Object 10/01/22
///------------------------------------------------------------------------------
// let o1 = Object();
// console.log(o1);
// console.log(typeof (o1));
// var a
// var b = ''
// console.log(a)//undefine
// console.log(b)//null

// let o2 = new Object(undefined);
// console.log(o2);
// let o3 = new Object(null);
// console.log(o3);

// let car = new Object();
// car.brand = "maruti";
// car.color = "black";
// car.fueltype = "CNG";
// console.log(car);
// { brand: 'maruti', color: 'black', fueltype: 'CNG' }

// const newcar = {
//     brand: 'maruti',
//     color: 'black',
//     fueltype: 'CNG'
// }
// console.log(newcar['brand']);
// console.log(newcar.brand);
// newcar['seat'] = '4';
// const newcar = {
//     brand: 'maruti',
//     color: 'black',
//     fueltype: 'CNG',
//     type: {
//         small: 'hatchback',
//         med: 'seadan',
//         larg: 'suv'
//     }
// }

// console.log(newcar.type.larg);
// console.log(newcar['type']['larg']);

// function Bike(make, model, year, owner) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.owner = owner;
//     this.displayCar = displayCar;
//   }

//   console.log(Bike);

// var o = {
//     a: 7,
//     get b() {
//       return this.a + 1;
//     },
//     set c(x) {
//       this.a = x / 2;
//     }
//   };
// console.log(o)  ;

//    console.log(o.b); 
//    o.c = 50;         
//    console.log(o.a); 
//   console.log(o.b); 

// 11/01/2022-----------------------------------------

// let person={
//     fristName:'dhaval',
//     lastName:'khankhal',
//     middleName:'b.',
//     currentAge:'28'
// };
//  let {fristName,lastName,middleName,currentAge:age=18}=person;

//  console.log(middleName)//b
//  console.log(age)//28
//  let b=person

//  console.log(fristName)
//  console.log(typeof(fristName))
//  console.log(b)


// function getperson(){
//     return null;
// }
// let {fristName,lastName}=getperson()//error
// let {fristName,lastName}=getperson()||{};//null
// console.log(fristName,lastName);


let employee={
    id:1001,
    name:{
        fristName:'dhaval',
        // lastName:'khankhal',
        address:{
            city:'surat',
            state:'gujarat',
            country:'india'
        }
    }
};
let{
    name:{
        fristName,
        // lastName,
    }
}=employee;
// let{lastName,fristName:Name}=employee.name
// let{city,state}=employee.name.address
// console.log(name);
// console.log(fristName);
// console.log(city)
// console.log(state)

let {lastName,firstName,Name,...rest}=employee.name
console.log(typeof(rest))