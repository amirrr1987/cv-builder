const express = require("express");

const router = express.Router();

const { ProfileController } = require("../../controllers");

const { Auth } = require("../../middlewares");

// router.get("/", ProfileController.GetAllProfile);

router.get("/:profileId", Auth, ProfileController.GetProfile);

router.post("/", ProfileController.CreateProfile);

router.put("/:profileId", ProfileController.UpdateProfile);

router.delete("/:profileId", ProfileController.DeleteProfile);

module.exports = router;