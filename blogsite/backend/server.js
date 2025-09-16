// importing all the external files needed
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const blogRoutes = require("./routes/blogRoutes");

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

// DB connection
mongoose.connect("mongodb://127.0.0.1:27017/blogdb")
.then(() => console.log("Mongo DB connected"))
.catch(err => console.log(err));

//Routes
app.use("/api/blogs", blogRoutes)

app.listen(5000, console.log("Server running on port 5000 or http://localhost:5000"));