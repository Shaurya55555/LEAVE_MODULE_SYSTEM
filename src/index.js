import dotenv from "dotenv";
dotenv.config(); // Load .env before anything else

console.log("Loaded MONGODB_URI:", process.env.MONGODB_URI ? " Exists" : " Missing");

import { app } from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 8000;

(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`API running on http://localhost:${PORT}`);
      console.log(` Environment: ${process.env.NODE_ENV}`);
    });
  } catch (err) {
    console.error(" Fatal startup error:", err);
    process.exit(1);
  }
})();
