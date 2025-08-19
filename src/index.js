import { app } from "./app.js";
import { connectDB } from "./config/db.js";


const PORT = process.env.PORT || 8000;


(async () => {
try {
await connectDB();
app.listen(PORT, () => {
console.log(` API running on http://localhost:${PORT}`);
});
} catch (err) {
console.error(" Fatal startup error:", err);
process.exit(1);
}
})();