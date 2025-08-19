import { Employee } from "../models/Employee.js";
import { LeaveRequest } from "../models/LeaveRequest.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { diffDaysInclusive, rangesOverlap } from "../utils/date.js";


// POST /api/leaves (apply)
export const applyLeave = asyncHandler(async (req, res) => {
const { employeeId, startDate, endDate } = req.body;
if (!employeeId || !startDate || !endDate) {
res.status(400);
throw new Error("employeeId, startDate, endDate are required");
}


const employee = await Employee.findById(employeeId);
if (!employee) {
res.status(404);
throw new Error("Employee not found");
}


const s = new Date(startDate);
const e = new Date(endDate);
const join = new Date(employee.joiningDate);


if (isNaN(s) || isNaN(e)) {
res.status(400);
throw new Error("Invalid dates");
}
if (e < s) {
res.status(400);
throw new Error("endDate cannot be before startDate");
}
if (s < join) {
res.status(400);
throw new Error("Cannot apply for leave before joining date");
}


const days = diffDaysInclusive(s, e);
if (days > employee.leaveBalance) {
res.status(400);
throw new Error("Requested days exceed available leave balance");
}


// Overlap check against PENDING or APPROVED leaves
const overlapping = await LeaveRequest.find({
employeeId: employee._id,
status: { $in: ["PENDING", "APPROVED"] },
});


const hasOverlap = overlapping.some((lr) =>
rangesOverlap(lr.startDate, lr.endDate, s, e)
);


if (hasOverlap) {
res.status(409);
throw new Error("Leave dates overlap with existing request");
}


const leave = await LeaveRequest.create({
employeeId: employee._id,
startDate: s,
endDate: e,
daysRequested: days,
status: "PENDING",
});
});