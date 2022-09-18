const express = require("express");

const router = express.Router();

const { ProfileController } = require("../controllers");

const { AuthMiddleware } = require("../middlewares");

router.post("/", AuthMiddleware, ProfileController.CreateProfile);

router.get("/:profileId", AuthMiddleware, ProfileController.GetProfile);

router.put("/:profileId", AuthMiddleware , ProfileController.UpdateProfile);

router.delete("/:profileId", AuthMiddleware , ProfileController.DeleteProfile);

module.exports = router;