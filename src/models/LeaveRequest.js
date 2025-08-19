import mongoose from "mongoose";


const LeaveRequestSchema = new mongoose.Schema(
{
employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
startDate: { type: Date, required: true },
endDate: { type: Date, required: true },
status: { type: String, enum: ["PENDING", "APPROVED", "REJECTED"], default: "PENDING" },
daysRequested: { type: Number, required: true, min: 1 }
},
{ timestamps: true }
);


LeaveRequestSchema.index({ employeeId: 1, startDate: 1, endDate: 1 });


export const LeaveRequest = mongoose.model("LeaveRequest", LeaveRequestSchema);