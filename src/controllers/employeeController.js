import { Employee } from "../models/Employee.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";


// POST /api/employees
export const addEmployee = asyncHandler(async (req, res) => {
const { name, email, department, joiningDate, leaveBalance } = req.body;
if (!name || !email || !department || !joiningDate) {
res.status(400);
throw new Error("name, email, department, joiningDate are required");
}


const exists = await Employee.findOne({ email });
if (exists) {
res.status(409);
throw new Error("Employee with this email already exists");
}


const employee = await Employee.create({ name, email, department, joiningDate, leaveBalance });
res.status(201).json(employee);
});


// GET /api/employees/:id/leave-balance
export const getLeaveBalance = asyncHandler(async (req, res) => {
const emp = await Employee.findById(req.params.id);
if (!emp) {
res.status(404);
throw new Error("Employee not found");
}
res.json({ employeeId: emp._id, leaveBalance: emp.leaveBalance });
});