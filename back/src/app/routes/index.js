const express = require("express");

const router = express.Router();

const PersonalRoutes = require("./personal");
const AuthRoutes = require("./auth");

router.use("/api/personal", PersonalRoutes);

router.use("/api/auth", AuthRoutes);

router.use((req, res) => {
    res.status(404);
    res.send({ success: false, message: "route Not found" });
});

module.exports = router;