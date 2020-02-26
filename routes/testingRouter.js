const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    // res.json("working")

    throw new Error("this is awesome....");
})

module.exports = router;