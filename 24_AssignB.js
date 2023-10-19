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

const arrayEmp = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

console.log(
  `----------Q1. Show Employee Working in "TCS" Company --------------`
);

arrayEmp.forEach((employee) => {
  if (employee.emp_company == "TCS") {
    console.log(
      `Emp_name :=> ${employee.emp_name}, Company :=> ${employee.emp_company}`
    );
  }
});

console.log(`------Q2.Find The "Finance" Department Employee ------- `);

arrayEmp.forEach((employee) => {
  if (employee.emp_dept == "Finance") {
    console.log(
      `Emp_dept :=> ${employee.emp_dept}, Employee_Name :=> ${employee.emp_name}`
    );
  }
});

console.log(`------Q3. Whose name starts with "R" --------------`);

arrayEmp.forEach((employee) => {
  if (employee.emp_name.startsWith("R")) {
    console.log(
      `Id:- ${employee.emp_id}, Name:- ${employee.emp_name}, Department:- ${employee.emp_dept}, Salary:- ${employee.emp_salary}, Company:- ${employee.emp_company}`
    );
  }
});

console.log(
  `--------Q4.Find the EMP Whose salary is greater than 75000 --------`
);
arrayEmp.forEach((employee) => {
  if (employee.emp_salary > 75000) {
    console.log(
      `Name :- ${employee.emp_name}, Comapny:- ${employee.emp_company}, Salary:- ${employee.emp_salary}`
    );
  }
});

console.log(
  `--------Q5.Find the EMP Whose salary greater than or equal 50000 &from IT Department --------`
);
arrayEmp.forEach((employee) => {
  if (employee.emp_salary >= 50000 && employee.emp_dept == "IT") {
    console.log(
      `Id:- ${employee.emp_id}, Name:- ${employee.emp_name}, Department:- ${employee.emp_dept}, Salary:- ${employee.emp_salary}, Company:- ${employee.emp_company}`
    );
  }
});

console.log(
  `------Q6. Find Out All the Employee from Company "Infy" ----------`
);
arrayEmp.forEach((employee) => {
  if (employee.emp_company == "Infy") {
    console.log(
      `Id:- ${employee.emp_id}, Name:- ${employee.emp_name}, Department:- ${employee.emp_dept}, Salary:- ${employee.emp_salary}, Company:- ${employee.emp_company}`
    );
  }
});
