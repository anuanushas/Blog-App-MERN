const { Router } = require("express")

const { handleSignUp, handleLogin } = require("../controllers/authUserController")

const userRoutes = Router();

userRoutes.post("/signup", handleSignUp)
userRoutes.post("/login", handleLogin)



module.exports = userRoutes;