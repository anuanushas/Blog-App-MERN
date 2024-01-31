const express = require("express")
const authRoute = require("./routes/authRoute")
const cors = require("cors")

const mongoose = require("mongoose");

const port = 8000;

const app = express();

app.use(cors())

//http://127.0.0.1/
mongoose.connect("mongodb://127.0.0.1:27017/users").then(() =>
    console.log("mongoDb is connected")).catch((err) => console.log(err));

app.use(express.json());

app.use("/", authRoute)



app.listen(port, () => {
    console.log("server is running", +port)
})