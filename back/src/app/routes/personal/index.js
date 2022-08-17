const express = require("express");

const router = express.Router();

const controllers = require("../../controllers");


router.get("/", controllers.PersonalController.getAll);

router.post("/", controllers.PersonalController.postAll);

module.exports = router;