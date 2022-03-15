class Employee{
    empId;
    empName;
    salary;

    getEmployeeName(){
        return this.empName;
    }

    hikesalaey(amount){
        this.salary=this.salary+amount;
    }
}
let employee1=new Employee();
// console.log(employee1);
employee1.empId=101;
employee1.empName="scott";
employee1.salary=3000;
employee1.hikesalaey(800);
console.log(employee1);

let employee2=new Employee();
employee2.empId=102;
employee2.empName="john";
employee2.salary=5000;
employee2.hikesalaey(450);
console.log(employee2);