const mongoose = require("mongoose");
const validator = require("validator");
const joi = require("@hapi/joi");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "please provide your name"]

    },
    email: {
        type: String,
        require: [true, "please provide an email"],
        unique: true,
        lowercase: true,
    },
    phoneNo: {
        type: Number,
        require: [true, "please provide an phone No"],
        unique: true

    },
    correctAns: {
        type: Number
    },
    quizDone: {
        type: Boolean
    },
    start: {
        type: Date,
        default: Date.now
    },
    end: {
        type: Date
    },
    time: {
        type: Date
    }



})



const user = mongoose.model("user", userSchema);


module.exports = user;