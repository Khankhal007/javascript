var employee = {
    firstName: "Smith",
    lastName: "John",
    designation: "Clerk",
    salary: 3000,
    workExperienceYears: 4,
  
    getFullName:function(){
      return `${this.firstName} ${this.lastName}`;
    },

promote: function (){
  var isEligiblforpromotion;
  if(this.designation=="clerk"){
      if(this.workExperienceYears>=3){
        isEligiblforpromotion=true;
        this.designation="asst.manager";
        this.salary+=this.salary*10/100;
      }
      else{
        this.isEligiblforpromotion=false;
      }
  }else if(this.designation=="asst.manager"){
      if(this.workExperienceYears>=5){
        isEligiblforpromotion=true;
        this.designation="manager";
        this.salary+=this.salary*20/100;
      }
      else{
        this.isEligiblforpromotion=false;
      }
    }
    return isEligiblforpromotion;
  }
};

// console.log(employee.firstName);
// console.log(employee.lastName);
// console.log(employee.designation);
// console.log(employee.salary);
// console.log(employee.workExperienceYears);

console.log(employee.getFullName());
if (employee.promote() == true) {
  console.log("Congratulations! The Employee Promoted.");
  console.log("Updated Salary: " + employee.salary);
  console.log("Updated Designation: " + employee.designation);
}
else {
  console.log("Employee is not eligible.");
}