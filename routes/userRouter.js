const express = require("express");
const mongoose = require("mongoose");
const user = require("../model/users");
const jwt = require("jsonwebtoken");
const joi = require("@hapi/joi");
const { promisify } = require("util");
const protect = require("../controller/protect")



const userRouter = express.Router();

userRouter.post("/", async (req, res, next) => {


    try {
        const newUser = await user.create({
            name: req.body.name,
            email: req.body.email,
            phoneNo: req.body.phone,
        })



        if (newUser) {
            const token = jwt.sign({ id: newUser._id }, "this-is-my-secret-key", { expiresIn: "1d" })
            console.log(newUser, token);



            res.cookie("jwt", token, { expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000) })


            res.redirect("questions")
            // res.json({
            //     message: "done",
            //     token: token
            // })
        }
    } catch (error) {
        console.log(error)

        const decoded = await promisify(jwt.verify)(req.cookies.jwt, "this-is-my-secret-key")

        const currentUser = await user.find({ _id: decoded.id })

        console.log(currentUser)

        res.render("error", {
            message: "participation is allowed only once and it seems that you allready did",
            currentUser: currentUser
        })

    }





})


module.exports = userRouter;