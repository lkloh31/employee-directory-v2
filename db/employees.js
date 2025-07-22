const employees = [
  { id: 1, name: "Carolynn McGinlay" },
  { id: 2, name: "Lodovico Filon" },
  { id: 3, name: "Jefferey Wahlberg" },
  { id: 4, name: "Kayley Tures" },
  { id: 5, name: "Rickard Carver" },
  { id: 6, name: "Michael Stryde" },
  { id: 7, name: "Averell Santino" },
  { id: 8, name: "Constantina Connue" },
  { id: 9, name: "Verile Bondesen" },
  { id: 10, name: "Gwen Grollmann" },
];

export default employees;

export function getEmployees() {
  return employees;
}

export function getEmployeeById(id) {
  return employees.find((employee) => employee.id === +id);
}

export function addEmployee(name) {
  const newId =
    employees.length > 0 ? Math.max(...employees.map((e) => e.id)) + 1 : 1;
  const newEmployee = { id: newId, name: name };
  employees.push(newEmployee);
  return newEmployee;
}

export function getRandomEmployee() {
  const randomIndex = Math.floor(Math.random() * employees.length);
  return employees[randomIndex];
}
