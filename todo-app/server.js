const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// MongoDB connection
const connectDB = require("./config/db");
connectDB();

// Routes
const todoRoutes = require("./routes/todoRoutes");
app.use("/api/todos", todoRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
