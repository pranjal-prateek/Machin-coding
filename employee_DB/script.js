(async function () {
  const data = await fetch("./data.json");
  const jsonData = await data.json();
  let employee = jsonData;
  let selectedEmpId = employee[0].id;
  let selectedEmp = employee[0];
  const employeeList = document.querySelectorAll(".employee_name--list");
  const employeeInfo = document.querySelectorAll(".employee_single--info");

  const renderEmployees = () => {
    employeeList.innerHtml = "";
    employee.forEach((emp) => {
      const employee = document.createElement("span");
      employee.classList.add("employee_name--item");

      if(parseInt(selectedEmpId,10)===emp.id) {
        employee.classList.add("selected");
        
    });
  };
  renderEmployees();
})();
