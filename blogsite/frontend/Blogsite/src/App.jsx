import React, { useState, useEffect } from "react";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: "", content: "", author: "" });

  // Fetch blogs
  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit new blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const newBlog = await res.json();
    setBlogs([newBlog, ...blogs]);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>React + Node Blog</h1>

      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <input name="author" placeholder="Author" onChange={handleChange} required />
        <textarea name="content" placeholder="Content" onChange={handleChange} required />
        <button type="submit">Add Blog</button>
      </form>

      <h2>All Blogs</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <small>By {blog.author}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
