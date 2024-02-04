const express = require("express")
const userRoutes = require("../server/routes/userRoutes")
const blogRoutes = require("../server/routes/blogRoutes")
const cors = require("cors")

const mongoose = require("mongoose");

const port = 8000;

const app = express();

app.use(cors())

//http://127.0.0.1/
mongoose.connect("mongodb://127.0.0.1:27017/users").then(() =>
    console.log("mongoDb is connected")).catch((err) => console.log(err));

app.use(express.json());

app.use("/user", userRoutes)
app.use("/blog", blogRoutes)



app.listen(port, () => {
    console.log("server is running", +port)
})