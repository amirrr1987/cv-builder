const express = require("express");

const router = express.Router();

const HomeRoutes = require("./home");
// const AboutRoutes = require("./about");
const PersonalRoutes = require("./personal");

router.use("/api/home", HomeRoutes);
// router.use("/api/about", AboutRoutes);
router.use("/api/personal", PersonalRoutes);

router.use((req, res) => {
    res.status(404);
    res.send({ success: false, message: "route Not found" });
});

module.exports = router;