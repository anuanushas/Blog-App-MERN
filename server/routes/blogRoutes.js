const { Router } = require("express")


const { handlenew, handleAllblog, handelAllAuthorBlogPost, handleBlogbyid, handleDeletebyid, handleEditbyid } = require("../controllers/authBlogController")

const blogRoutes = Router();


blogRoutes.post("/", handlenew)
blogRoutes.get("/", handleAllblog)// blogbyid = blog  blogId=id
blogRoutes.get("/myblog/:id", handelAllAuthorBlogPost)
blogRoutes.get("/:id", handleBlogbyid)
blogRoutes.delete("/:id", handleDeletebyid)
blogRoutes.put("/:id", handleEditbyid)

module.exports = blogRoutes;