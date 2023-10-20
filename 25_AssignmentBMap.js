console.log(`=========Assignment B=================`);

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

  console.log(`====== Get The List of all Employee ===========`);
  const arrayNum = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
  const arrayEmp = arrayNum.map( (Employee) => {
         return Employee.emp_salary;
  } );
  
  console.log(`Display All Employee Salary :->{ ${arrayEmp} }`);
  console.log(`\n`);
  console.log(`========= Q2. List of Department ============`);
  const arrayEmp1 = arrayNum.map( (Employee) => {
    return Employee.emp_dept;

  });
  console.log(`Get The List Of Department :=> { ${arrayEmp1} }`);
console.log(`\n`);

  console.log(`========== Q3.List Of Id's ===============`);

  const arrayEmp2 = arrayNum.map( (Employee) =>{
    return Employee.emp_id;
  });
console.log(`Get The List of employee id's :=> { ${arrayEmp2} }`);