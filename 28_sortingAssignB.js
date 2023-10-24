

console.log(`=============Assignment Sorting =========================`);
class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
   this.emp_id=emp_id;
   this.emp_name=emp_name;
   this.emp_dept=emp_dept;
   this.emp_salary=emp_salary;
   this.emp_company=emp_company;
   
   
       }
   }
   const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
   const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
   const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
   const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
   const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
   const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
   const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

   console.log(`------------Step 01 -------------------------`);
    const arrayPerson = [emp_anil, emp_radha, emp_rishi, emp_sonali,emp_monika,emp_viny,emp_mahi];

    //const arrayPerson = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

const arrayEmp = arrayPerson.sort((emp1, emp2) => {
return emp1.emp_id > emp2.emp_id ? -1 : 1
});

console.log(`Descending Order of employee_Department => `);
arrayEmp.forEach(emp => {
    console.log(`ID: ${emp.emp_id},       Name: ${emp.emp_name},       Department: ${emp.emp_dept}`);
});

console.log(`-------------Step 02 -------------------------------`);
const arrayDept = arrayPerson.sort((emp1,emp2)=>{
  return emp1.emp_dept > emp2.emp_dept ? 1 : -1
});
console.log(`Ascending Order of employee_id => `);
arrayDept.forEach(emp => {
    console.log(` Department: ${emp.emp_dept},       ID: ${emp.emp_id},       Company: ${emp.emp_company}`);
});

console.log(`--------------Step 03---------------------`);
const arraySalary = arrayPerson.sort((emp1,emp2)=>{
    return emp1.emp_salary > emp2.emp_salary ? -1 : 1
});
console.log(`Descending Order of employee_Salary => `);
arraySalary.forEach(emp =>{
    console.log(` Salary: ${emp.emp_salary},       Name: ${emp.emp_name},       Company: ${emp.emp_company}`);
})
