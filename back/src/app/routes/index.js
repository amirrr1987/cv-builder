const express = require("express");
const router = express.Router();

const CvRoute = require("./CvRoute");
const UserRoute = require("./UserRoute");

router.use("/api/user", UserRoute);

router.use("/api/cv", CvRoute);

router.use((req, res) => {
    res.status(404);
    res.send({ success: false, message: "route Not found" });
});

module.exports = router;