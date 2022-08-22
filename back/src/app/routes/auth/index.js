const express = require("express");

const router = express.Router();

const { AuthController } = require("../../controllers");

router.get("/", AuthController.getAll);

router.post("/", AuthController.postAll);

module.exports = router;