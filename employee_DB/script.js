(async function () {
  const data = await fetch("./data.json");
  const jsonData = await data.json();
  let employees = jsonData;
  let selectedEmpId = employees[0].id;
  let selectedEmp = employees[0];
  const employeeList = document.querySelector(".employee_name--list");
  const employeeInfo = document.querySelector(".employee_single--info");

  //selected emp logic
  employeeList.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" && e.target.id != selectedEmp) {
      selectedEmpId = e.target.id;

      // renderEmployeeInfo();
    }
  });

  const renderEmployees = () => {
    employeeList.innerHTML = "";
    employees.forEach((emp) => {
      const employee = document.createElement("span");
      employee.classList.add("employee_name--item");

      if (parseInt(selectedEmpId, 10) === emp.id) {
        employee.classList.add("selected");
        selectedEmp = emp;
      }
      employee.setAttribute("id", emp.id);
      employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class="employee_delete">X</i>`;
      employeeList.append(employee);
    });
  };
  renderEmployees();
})();
