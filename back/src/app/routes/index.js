const express = require("express");

const router = express.Router();

const ProfileRoutes = require("./profile");
const AuthRoutes = require("./auth");

router.use("/api/profile", ProfileRoutes);

router.use("/api/auth", AuthRoutes);

router.use((req, res) => {
    res.status(404);
    res.send({ success: false, message: "route Not found" });
});

module.exports = router;