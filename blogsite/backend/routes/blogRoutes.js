const express = require("express");
const router = express.Router();
const { getAllBlogs, getBlogById, createBlog, deleteBlog} =
 require("../controllers/blogController");

 router.get("/", blogController.getAllBlogs);
 router.get("/:id", blogController.getBlogById);
 router.post("/", blogController.createBlog);
 router.delete("/:id", blogController.deleteBlog);


 module.exports = router;