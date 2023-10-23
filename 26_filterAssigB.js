// console.log(`=================== Assignment B ===========================`);

// class Employee {
//     constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
//         this.emp_id = emp_id;
//         this.emp_name = emp_name;
//         this.emp_dept = emp_dept;
//         this.emp_salary = emp_salary;
//         this.emp_company = emp_company;
//     }
// }

// const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
// const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
// const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
// const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
// const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
// const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
// const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

// console.log(`-------------- Q1. Display "TCS" Company Object -------------------`);

// const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

// const arrayTcsEmployees = arrayEmployees.filter((employee) => {
//     return employee.emp_company === "TCS";
// });

// arrayTcsEmployees.forEach((employee) => {
//     console.log(`Company Name:=> ${employee.emp_company}, Name :=> ${employee.emp_name}`);
// });


// console.log(`-------------------Q2.Salary Of Employee From Company Wipro -----------------`);

// const arrayEmp = arrayEmployees.filter((employee) => {
//     return employee.emp_company === "Wipro";
// }).map( (employee) => {
//     return employee.emp_salary;
//  });
//  console.log(` Salary Element in Wipro => ${arrayEmp}`);

//  const sum = arrayEmp.reduce((acc, curr) => acc + curr, 0);
//  const average = sum / arrayEmp.length;
 
//  console.log(`Average Salary in Wipro => ${average}`);



//  console.log(`-----------Q3.Display Salary for Wipro or Infy Company -----------`);

//  const arrayEmp1 = arrayEmployees.filter((employee)=>{
//      return employee.emp_company == "Wipro" || employee.emp_company == "Infy";
//  }).map( (employee) => {
//      return employee.emp_salary;
//   });
  
//  console.log(`Salary Elements in Wipro & Infy => ${arrayEmp1}`);
 
//  const sum1 = arrayEmp1.reduce((acc, curr) => acc + curr, 0);
//  const average1 = sum1 / arrayEmp1.length;
 
//  console.log(`Average Salary in Wipro & Infy => ${average1}`);
 

console.log(`======================================================= Assignment-04 (Filter) ==============================================`);
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
console.log(`------------------------------------------------- STEP-01 ----------------------------------------`);
const arrayPerson = [emp_anil, emp_radha, emp_rishi, emp_sonali,emp_monika,emp_viny,emp_mahi];
const arrayTcsEmployees = arrayPerson.filter( (employee) => {
    return employee.emp_company=='TCS';
 });
 console.log(`After Traversing Filtered Array ==>>`);
 arrayTcsEmployees.forEach((value)=>{

console.log(`Company Name : ${value.emp_company}  & Employee Name ${value.emp_name} `);
 });
 console.log(`---------------------------------------------------  STEP-02 --------------------------------------------`);
const arrayAvgSalary=arrayPerson.filter((value1)=>{
return value1.emp_company=="Wipro";

})
const arrayAvgSalary1=arrayAvgSalary.map((element)=>{

   return  element.emp_salary
     
})
console.log(`Total Salary Elements in  Wipro===>> ${arrayAvgSalary1}`);

let sum=0
arrayAvgSalary1.forEach( num => {
    sum += num/arrayAvgSalary1.length;
  })
  console.log(`Sum Of avg Salary Of Wipro Employee is ====>>>> ${sum}`);
  console.log(`-------------------------------------------------------- STEP-03 ----------------------------------------`);
  const arrayAvgSalary2=arrayPerson.filter((value2)=>{
    return value2.emp_company=="Wipro" || value2.emp_company=="Infy";
    
    })
    const arrayAvgSalary3=arrayAvgSalary2.map((element)=>{
    
       return  element.emp_salary
         
    })
    console.log(`Total Salary Elements in Infy & Wipro===>> ${arrayAvgSalary3}`);
    let sum1=0
    arrayAvgSalary3.forEach( num => {
        sum1 += num/arrayAvgSalary3.length;
      })
      console.log(`Sum Of avg Salary Of "Wipro" Employee Or "Infy" Employee is ====>>>> ${sum1}`);
      console.log(`============================================================= END ==============================================`);