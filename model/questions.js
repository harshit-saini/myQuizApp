const mongoose = require("mongoose");

const schema = mongoose.Schema({
    question: String,
    o1: String,
    o2: String,
    o3: String,
    o4: String,
    correct: String
})

const question = mongoose.model("question", schema);

module.exports = question;