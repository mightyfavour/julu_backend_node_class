const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength:5,maxlength: 100,unique: true},
    content: { type: String, required:true, minlength:20},
    category: { type: String, enum:["Tech", "Bussiness","Lifestyle", "News"], default: "Tech"},
    author: { type: String, required: true}
},{timestamps: true});

module.exports = mongoose.model("Blog", blogSchema);