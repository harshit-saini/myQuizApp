const { promisify } = require("util")
const jwt = require("jsonwebtoken");
const user = require("../model/users")

exports.backControll = async (req, res, next) => {

    let token;
    token = req.cookies.jwt


    const decoded = await promisify(jwt.verify)(token, "this-is-my-secret-key")


    const currentUser = await user.find({ _id: decoded.id })


    if (currentUser[0].quizDone) {
        res.render("error", {
            message: "you already submitted, now you can not"
        })
        return;
    }

    next();


}