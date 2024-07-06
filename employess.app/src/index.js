import Request from "./request";
import UI from "./ui";

const form = document.querySelector("#employee-form"),
  inputName = document.querySelector("#name"),
  inputDepartment = document.querySelector("#department"),
  inputSalary = document.querySelector("#salary"),
  employeesList = document.querySelector("#employees"),
  buttonEmployeeUpdate = document.querySelector("#update");

const req = new Request("http://localhost:3000/employees");
const ui = new UI();

let updateState = null;

const getAllEmployees = () => {
  req
    .get()
    .then((employees) => {
      ui.addAllEmployees(employees);
    })
    .catch((error) => console.log(error));
};

const addNewEmployee = (e) => {
  e.preventDefault();

  const name = inputName.value.trim();
  const department = inputDepartment.value.trim();
  const salary = Number(inputSalary.value.trim());
  if (name === "" || department === "" || salary === "")
    return alert("Tüm alanları doldurmalısınız.");

  req
    .post({
      name: name,
      salary: salary,
      department: department,
    })
    .then((response) => ui.addNewEmployee(response))
    .catch((error) => console.log(error));

  ui.clearInputs();
};

const deleteEmployee = (target) =>
  req
    .delete(target.dataset.id)
    .then(ui.deleteEmployee(target.parentElement.parentElement))
    .catch((error) => console.log(error));

const clickUpdateEmployee = (target) => {
  if (updateState) {
    updateState = null;
    ui.toggleButton(buttonEmployeeUpdate);
  } else {
    const name = target.dataset.name,
      department = target.dataset.department,
      salary = target.dataset.salary,
      id = target.dataset.id;
    updateState = {
      id: id,
      parent: target.parentElement.parentElement,
    };
    ui.addUpdateEmployeeInputs(name, department, salary);
    ui.toggleButton(buttonEmployeeUpdate);
  }
};

const clickEmployeeControl = (e) => {
  if (e.target.id === "delete-employee") {
    deleteEmployee(e.target);
  } else if (e.target.id === "update-employee") {
    clickUpdateEmployee(e.target);
  }
};

const updateEmployee = () => {
  if (updateState) {
    const empData = {
      name: inputName.value.trim(),
      department: inputDepartment.value.trim(),
      salary: Number(inputSalary.value.trim()),
    };
    req
      .put(updateState.id, empData)
      .then((updatedEmployee) => {
        ui.updateEmployee(updatedEmployee, updateState.parent);
      })
      .catch((err) => console.log(err));
    updateState = null;
    ui.clearInputs();
  }
};

(() => {
  document.addEventListener("DOMContentLoaded", getAllEmployees);
  form.addEventListener("submit", addNewEmployee);
  employeesList.addEventListener("click", clickEmployeeControl);
  buttonEmployeeUpdate.addEventListener("click", updateEmployee);
})();
