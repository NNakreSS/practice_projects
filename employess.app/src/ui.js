export default class UI {
  constructor() {
    this.employeesList = document.querySelector("#employees");
    this.buttonUpdate = document.querySelector("#update");
    this.inputName = document.querySelector("#name");
    this.inputSalary = document.querySelector("#salary");
    this.inputDepartment = document.querySelector("#department");
  }

  addAllEmployees = (employees) => {
    let html = "";
    employees.forEach((employee) => {
      html += `
        <tr>
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><button data-salary = "${employee.salary}" data-department = "${employee.department}" data-name = "${employee.name}" data-id = "${employee.id}" href="#" id = "update-employee" class= "btn btn-danger">Güncelle</button></td>
            <td><button data-id = "${employee.id}" href="#" id = "delete-employee" class= "btn btn-danger">Sil</button></td>   
        </tr>
        `;
    });
    this.employeesList.innerHTML += html;
  };

  clearInputs = () => {
    this.inputName.value = "";
    this.inputDepartment.value = "";
    this.inputSalary.value = "";
  };

  addNewEmployee = (employee) => {
    let html = `
    <tr>
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
        <td>${employee.id}</td>
        <td><button data-salary = "${employee.salary}" data-department = "${employee.department}" data-name = "${employee.name}" data-id = "${employee.id}" href="#" id = "update-employee" class= "btn btn-danger">Güncelle</button></td>
        <td><button data-id = "${employee.id}" href="#" id = "delete-employee" class= "btn btn-danger">Sil</button></td>   
    </tr>
    `;
    this.employeesList.innerHTML += html;
  };

  deleteEmployee = (employee) => employee.remove();

  toggleButton = (button) => {
    if (button.style.display === "none") {
      button.style.display = "block";
    } else {
      this.clearInputs();
      button.style.display = "none";
    }
  };

  addUpdateEmployeeInputs = (name, department, salary) => {
    this.inputName.value = name;
    this.inputDepartment.value = department;
    this.inputSalary.value = salary;
  };

  updateEmployee = (employee, target) => {
    target.innerHTML = `
    <tr>
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
        <td>${employee.id}</td>
        <td><button data-salary = "${employee.salary}" data-department = "${employee.department}" data-name = "${employee.name}" data-id = "${employee.id}" href="#" id = "update-employee" class= "btn btn-danger">Güncelle</button></td>
        <td><button data-id = "${employee.id}" href="#" id = "delete-employee" class= "btn btn-danger">Sil</button></td>   
    </tr>`;
  };
}
