const { Schema, model } = require("mongoose")
userblogSchema = new Schema({

    title: { type: String, require: true, trim: true },
    body: { type: String, require: true, trim: true },
    author: { type: String, require: true, trim: true },


}, { timestamps: true })
const blogData = model("usersblog", userblogSchema);

module.exports = blogData;