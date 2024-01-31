const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    firstName: { type: String, require: true, trim: true },
    lastName: { type: String },
    email: { type: String, require: true, unique: true, trim: true },
    password: { type: String, require: true, trim: true },
    PhoneNumber: { type: String, require: true, trim: true }
}, { timestamps: true })
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;