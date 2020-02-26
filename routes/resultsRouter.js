const express = require("express");
const users = require("../model/users");

const router = express.Router();

router.get("/", async (req, res, next) => {

    const allUsers = await users.find({})

    res.render("results", { data: allUsers })
})

module.exports = router;