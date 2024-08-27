import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js"

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json()); // to parse the incoming request with JSON payloads (form req.body)

// this is a middleware
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

// app.get("/", (req, res) => {
//   res.send("Hello World!")
// });

app.listen(PORT, () => {
  connectToMongoDB()
  console.log(`Server running on Port ${PORT}`)
});