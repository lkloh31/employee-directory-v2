import express from "express";
import {
  getEmployees,
  getEmployeeById,
  addEmployee,
  getRandomEmployee,
} from "#db/employees";

const router = express.Router();

export default router;

router
  .route("/")
  .get((req, res) => {
    const employees = getEmployees();
    res.send(employees);
  })
  .post((req, res) => {
    if (!req.body) return res.status(400).send("Request must have body.");

    const { name } = req.body;
    if (!name) return res.status(400).send("New employee must have name.");

    const employee = addEmployee(name);
    res.status(201).send(employee);
  });

router.route("/random").get((req, res) => {
  const employee = getRandomEmployee();
  res.send(employee);
});

router.route("/:id").get((req, res) => {
  const { id } = req.params;
  const employee = getEmployeeById(id);

  if (!employee) {
    return res.status(404).send("Employee not found");
  }

  res.send(employee);
});
