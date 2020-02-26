exports.protect = async (req, res, next) => {

    let token;
    token = req.cookies.jwt

    if (!token) {
        res.render("error", {
            message: "you need to register first"
        })
    }

    next();
}