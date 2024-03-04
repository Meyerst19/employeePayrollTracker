// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

employeesArray = [];

const collectEmployees = function () {
  addNew = true;
  while (addNew) {
    let firstName = prompt("Enter First Name:");
    let lastName = prompt("Enter Last Name:");
    let salary = prompt("Enter salary");
    if (isNaN(salary)) {
      salary = 0;
    } else salary = salary;
    let newEmployee = [
      {
        lastName: `${lastName}`,
        firstName: `${firstName}`,
        salary: `${salary}`,
      },
    ];
    employeesArray = employeesArray.concat(newEmployee);

    addNew = confirm("Want to add another employee");
  }
  return employeesArray;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  sum = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    sum += Number(employeesArray[i].salary);
  }
  return sum / employeesArray.length;
};

// // Select a random employee
const getRandomEmployee = function (employeesArray) {
  index = Math.floor(Math.random() * (employeesArray.length + 1));
  return `Congradulations to ${employeesArray[index].firstName} ${employeesArray[index].lastName}, our winner of the random drawing!`;
};
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log(displayAverageSalary(employees));

  console.log("==============================");

  getRandomEmployee(employees);

  console.log(getRandomEmployee(employees));

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
