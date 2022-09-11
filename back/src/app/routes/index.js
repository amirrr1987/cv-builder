const express = require("express");
const middleWare = require('../middlewares')
const router = express.Router();

const ProfileRoutes = require("./profile");
const AuthRoutes = require("./auth");

router.use("/api/profile", middleWare.Auth, ProfileRoutes);

router.use("/api/auth", AuthRoutes);

router.use((req, res) => {
    res.status(404);
    res.send({ success: false, message: "route Not found" });
});

module.exports = router;