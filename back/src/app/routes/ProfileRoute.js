const express = require("express");

const router = express.Router();

const { ProfileController } = require("../controllers");

const { AuthMiddleware } = require("../middlewares");

router.post("/", AuthMiddleware, ProfileController.CreateProfile);

router.get("/:personalId", ProfileController.GetProfile);

router.put("/:personalId", AuthMiddleware , ProfileController.UpdateProfile);

router.delete("/:personalId", AuthMiddleware , ProfileController.DeleteProfile);

module.exports = router;