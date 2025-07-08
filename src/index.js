import {app} from "./app.js"
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const port= process.env.PORT || 8001

connectDB()
  .then(() => {
    // ✅ success callback
    console.log("✅ Database connected");

  
    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    // ❌ error callback
    console.error("❌ Database connection failed:", err.message);
    process.exit(1); // optional: stop the app
  });
