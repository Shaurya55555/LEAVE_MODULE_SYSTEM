import { Router } from "express";
import { applyLeave, updateLeaveStatus } from "../controllers/leaveController.js";

const router = Router();

router.post("/", applyLeave);       // Apply for leave
router.patch("/:id", updateLeaveStatus); // Approve/Reject leave

export default router;
