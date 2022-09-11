const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next) {
    const token = req.header("x-auth-")

    if (!token) return res.status(401).send("شما دسترسی ندارید")


    try {
        const user = jwt.verify(token, config.get("jwtPrivateKey"))
        req.user.user
        next();

    } catch (error) {
        res.status(401).send("شما دسترسی ندارید")
    }
}