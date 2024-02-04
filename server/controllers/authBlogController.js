const blogData = require("../models/blog");

async function handlenew(req, res) {
    try {
        console.log(req.body);
        const newblogUser = await blogData.create(req.body);


        return res.status(201).json({ message: "New Blog Successfully created" });

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}
async function handleAllblog(req, res) {
    try {
        const allBlogData = await blogData.find().populate("authorId");
        return res.status(201).json(allBlogData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}
async function handelAllAuthorBlogPost(req, res) {
    try {
        const blogId = req.params.id;
        console.log(blogId);
        const allAuthorBlogData = await blogData.find({ authorId: blogId }).populate("authorId");
        console.log(allAuthorBlogData);
        return res.status(201).json(allAuthorBlogData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}


async function handleBlogbyid(req, res) {
    try {
        const id = req.params.id;
        const blog = await blogData.findById(id);
        return res.status(201).json(blog);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}


async function handleDeletebyid(req, res) {
    try {
        const id = req.params.id;
        const blog = await blogData.findByIdAndDelete(id);
        return res.status(201).json("Blog Successfully deleted");

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}



async function handleEditbyid(req, res) {
    try {
        const id = req.params.id;
        const blog = await blogData.findByIdAndUpdate(id, req.body);
        return res.status(201).json("Blog Successfully Updated");

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }
}



module.exports = { handlenew, handleAllblog, handelAllAuthorBlogPost, handleBlogbyid, handleDeletebyid, handleEditbyid };


