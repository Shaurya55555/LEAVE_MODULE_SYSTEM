import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    department: { type: String, required: true, trim: true },
    joiningDate: { type: Date, required: true },
    leaveBalance: { type: Number, default: 20, min: 0 },
  },
  { timestamps: true }
);

export const Employee = mongoose.model("Employee", EmployeeSchema);
