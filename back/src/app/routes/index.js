const express = require("express");
const middleWare = require('../middlewares')
const router = express.Router();

const ProfileRoutes = require("./ProfileRoute");
const AuthRoutes = require("./AuthRoute");

router.use("/api/auth", AuthRoutes);

router.use("/api/profile", ProfileRoutes);


router.use((req, res) => {
    res.status(404);
    res.send({ success: false, message: "route Not found" });
});

module.exports = router;