const express = require("express");

const router = express.Router();

const controllers = require("../../controllers");

router.get("/", controllers.AuthController.getAll);

router.post("/", controllers.AuthController.postAll);

module.exports = router;