const { Schema, model } = require("mongoose")
userblogSchema = new Schema({

    title: { type: String, required: true, trim: true },
    body: { type: String, required: true, trim: true },
    authorId: { type: Schema.Types.ObjectId, required: true, ref: "users" },


}, { timestamps: true })
const blogData = model("usersblog", userblogSchema);

module.exports = blogData;