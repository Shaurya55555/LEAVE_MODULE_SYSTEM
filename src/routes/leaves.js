import { Router } from "express";
import { applyLeave, updateLeaveStatus } from "../controllers/leaveController.js";

const router = Router();

router.post("/", applyLeave);
router.post("/apply", applyLeave);
router.post("/:id", updateLeaveStatus);

export default router;