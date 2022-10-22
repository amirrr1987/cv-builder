const jwt = require('jsonwebtoken')
const {tokenKey} = require('../config')

module.exports = function (req, res, next) {
    const token = req.header("x-auth-token")

    if (!token) return res.status(401).send({
        message: "شما دسترسی ندارید",
        token: token
    })
    try {
        const user = jwt.verify(token, tokenKey)
        req.user = user
        next();

    } catch (error) {
        console.log(error);
        res.status(401).send("token is not valid")
    }
}