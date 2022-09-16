const express = require("express");

const router = express.Router();

const { ProfileController } = require("../controllers");

const { Auth } = require("../middlewares");

// router.get("/", ProfileController.GetAllProfile);

router.get("/:profileId", Auth, ProfileController.GetProfile);

router.post("/", Auth, ProfileController.CreateProfile);

router.put("/:profileId" ,Auth , ProfileController.UpdateProfile);

router.delete("/:profileId", Auth , ProfileController.DeleteProfile);

module.exports = router;