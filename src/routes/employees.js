// routes/employees.js
import express from "express";
import {
  addEmployee,
  getEmployees,
  getLeaveBalance,
} from "../controllers/employeeController.js";

const router = express.Router();

// Add a new employee
router.post("/", addEmployee);

// Get all employees
router.get("/", getEmployees);

// Get leave balance for a specific employee
router.get("/:id/leave-balance", getLeaveBalance);

export default router;
