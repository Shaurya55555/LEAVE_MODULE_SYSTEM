// controllers/employeeController.js
import { Employee } from "../models/Employee.js";
import { LeaveRequest } from "../models/LeaveRequest.js";

// Add employee
export const addEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all employees
export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get leave balance
export const getLeaveBalance = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    const approvedLeaves = await LeaveRequest.find({
      employeeId: id,
      status: "APPROVED",
    });

    const daysTaken = approvedLeaves.reduce(
      (sum, leave) => sum + leave.daysRequested,
      0
    );

    const totalLeaves = 30; // default annual quota
    const remainingLeaves = Math.max(0, totalLeaves - daysTaken);

    res.json({
      employeeId: id,
      totalLeaves,
      usedLeaves: daysTaken,
      remainingLeaves,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
