const jwt = require('jsonwebtoken')
const { tokenKey } = require('../config')

module.exports = function (req, res, next) {
    const token = req.header("x-auth-token")

    if (!token) return res.status(401).send({
        message: "token is not valid plz login",
        token: token
    })
    try {
        const user = jwt.verify(token, tokenKey)
        req.user = user
        next();

    } catch (error) {
        res.status(401).send(erorr)
    }
}