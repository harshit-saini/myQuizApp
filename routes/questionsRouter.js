const express = require("express");
const question = require("../model/questions");
const jwt = require("jsonwebtoken")
const { promisify } = require("util")
const users = require("../model/users");

const check = require("../controller/check")
const protect = require("../controller/protect")
const back = require("../controller/backControll");

const router = express.Router();


router.get("/", protect.protect, async (req, res, next) => {
    const questions = await question.find({})


    res.render("questions", { data: questions })
    // res.json({
    //     data: questions
    // })
})

router.post("/quizSubmit", back.backControll, async (req, res, next) => {




    const decoded = await promisify(jwt.verify)(req.cookies.jwt, "this-is-my-secret-key")


    // const user = await users.find({ _id: decoded.id })

    res.render("thanku")

    check.check(req.body, decoded)

})

module.exports = router;