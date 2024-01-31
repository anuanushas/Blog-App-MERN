const express = require("express")

const authRoute = express.Router();
const { handleSignUp, handleLogin, handleBlognew, handleAllblogdata, handleBlogbyid } = require("../controllers/authController")




authRoute.post("/signup", handleSignUp)
authRoute.post("/login", handleLogin)
authRoute.post("/newblog", handleBlognew)
authRoute.get("/blogalldata", handleAllblogdata)
authRoute.get("/blogbyid/:blogId", handleBlogbyid)

module.exports = authRoute;