import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import employeesRouter from "./routes/employees.js";
import leavesRouter from "./routes/leaves.js";
import { errorHandler, notFound } from "./middlewares/errorHandler.js";


const app = express();


app.use(cors({ origin: process.env.CORS_ORIGIN || "*", credentials: true }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"));


app.use("/api/employees", employeesRouter);
app.use("/api/leaves", leavesRouter);


app.use(notFound);
app.use(errorHandler);


export { app };