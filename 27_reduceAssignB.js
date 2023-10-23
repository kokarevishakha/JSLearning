
console.log(`============= Assignment B Reduce()=============================  `);

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

   console.log(`-----------STEP-2--------------------------`);
   const array_number = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
    
   const wiproCompany = array_number.filter((value1)=>{
      return value1.emp_company == "Wipro";
   });
   const arrayWipro1=wiproCompany.map((value0)=>{
    return value0.emp_name
})
console.log(`Employee Which Are Working In Wipro :=> ${arrayWipro1}`);

console.log(`--------------- Step 02 ---------------------`);
const arrayEmp = array_number.filter((employee)=>{
  return employee.emp_dept == "IT" || employee.emp_dept == "HR";
})

const arrayDept = arrayEmp.map((value0)=>{
        return value0.emp_name;
});
console.log(`Find all the employees with departments "IT" or "HR" :=> ${arrayDept}`);


console.log(`------------------ Step 03 ------------------------------------------`);

const arrayGreater = array_number.filter((greater)=>{
      return greater.emp_id >= 50;
});
const arrayEmp1 = arrayGreater.map((value1)=>{
    return value1.emp_name;
})
console.log(`Find The Employees whose emp id's are greater than 50 :=> ${arrayEmp1}`);

console.log(`------ Step 04 ----------------------------`);
const arrayName=array_number.filter((value)=>{
    return value.emp_name.startsWith("A") || value.emp_name.startsWith("V")|| value.emp_name.startsWith("M");
})
const arrayName1=arrayName.map((value3)=>{
    return value3.emp_name;
})
console.log(`Employee Name Starts With "A" , "V" , "M" :==> ${arrayName1}`);

console.log(`--------------------- Step 05 -----------------------------------------`);

// const arrayEmp11 = array_number.filter((employee)=>{
//     return employee.emp_dept == "Finance" || employee.emp_dept == "HR" || employee.emp_dept == "IT";
// }).map( (employee) => {
//     return employee.emp_salary;  
// });

// console.log(` Total Department of => ${arrayEmp11}`);

// const sum1 = arrayEmp11.reduce((acc, curr) => acc + curr, 0);
// const average1 = sum1 / arrayEmp11.length;

// console.log(`Average Salary in Wipro & Infy => ${average1}`);


const arraySalary=array_number.filter((element)=>{
    return element.emp_salary
})
const arraySalary1=arraySalary.map((element)=>{
    return element.emp_salary
})

const arraySalary2=arraySalary1.reduce((startElement,element)=>{
    return startElement+element
})
console.log(`Total Salary From All Dept :==> ${arraySalary2}`);
let avgSalary=arraySalary2/arraySalary1.length;
console.log(`Average Salary Of All Department :==> ${avgSalary}`);
 

console.log(`-------------- Step 06 ----------------------------`);
const itSalary =array_number.filter((output)=>{
    return output.emp_dept=="IT"
})
const itSalary1=itSalary.map((output1)=>{
    return output1.emp_salary
})
const itSalary2=itSalary1.reduce((initialValue,output2)=>{
    return initialValue+output2;
})
console.log(`Total Salary From IT Department :==> ${itSalary2}`);
let avgResult=itSalary2/itSalary1.length;
console.log(`Average Salary Of IT Department :==> ${avgResult}`);