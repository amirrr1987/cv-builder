const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next) {
    const token = req.header("x-auth-token")

    if (!token) return res.status(401).send({
        message: "شما دسترسی ندارید",
        token: token
    })
    try {
        const user = jwt.verify(token, config.get('tokenKey'))
        req.user = user
        next();

    } catch (error) {
        console.log(error);
        res.status(401).send("شما دسترسی ندارید")
    }
}