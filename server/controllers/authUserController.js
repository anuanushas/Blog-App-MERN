
const userModel = require("../models/userModels");

const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
async function handleSignUp(req, res) {
    try {
        const { firstName, lastName, email, password, phoneNumber } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (existingUser)
            return res.status(400).json({
                message: "This email is already created Just try to login",
            });
        const hashpassword = await bcryptjs.hash(password, 8);
        const newUser = await userModel.create(
            { ...req.body, password: hashpassword });
        return res.status(201).json({ message: "user Registertation is successfully created" });
    }
    catch (err) {
        console.log(err);

        res.status(500).json({ message: "Internal server error" })

    }
}


async function handleLogin(req, res) {

    try {
        const { email, password } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (!existingUser)
            return res.status(401).json({ message: "Invalid email id or password" });

        const compair = await bcryptjs.compare(password, existingUser.password); //

        if (compair)
            return res
                .status(200)
                .json({
                    userId: existingUser._id,
                    firstName: existingUser.firstName,
                    lastName: existingUser.lastName,
                    email: existingUser.email,
                    phoneNumber: existingUser.phoneNumber,
                });
        else
            return res.status(401).json({ message: "Invalid email id or password" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server error" });
    }

}






module.exports = { handleSignUp, handleLogin };


