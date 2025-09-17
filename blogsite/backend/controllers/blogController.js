const Blog = require("../models/Blog");

//GET ALL BLOGS
const getAllBlogs = async (req, res) => {
    const blogs = (await Blog.find()).sort({createdAt: -1});
    res.json(blogs);
};

//GET A SINGLE BLOG
const getBlogById = async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
};

//CREATE NEW BLOG
const createBlog = async (req, res) =>{
    const blog = new Blog(req, res);
    await blog.save();
    res.json(blog);
};

//DELETE sinle BLOG
const deleteBlog = async(req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({message:"Blog Deleted"});
};

module.exports = { getAllBlogs, getBlogById, createBlog, deleteBlog};

// deleteAllBlogs
// updateBlog
// updateAllblogs
