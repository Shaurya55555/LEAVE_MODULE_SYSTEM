import { Router } from "express";
import { addEmployee, getLeaveBalance } from "../controllers/employeeController.js";

const router = Router();

// POST /api/employees
router.post("/", addEmployee);

// GET /api/employees/:id/leave-balance
router.get("/:id/leave-balance", getLeaveBalance);

export default router;
