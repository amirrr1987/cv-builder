const express = require("express");

const router = express.Router();

const { ProfileController } = require("../../controllers");

// router.get("/", ProfileController.GetAllProfile);

router.get("/:profileId", ProfileController.GetProfile);

router.post("/", ProfileController.CreateProfile);

router.put("/:profileId", ProfileController.UpdateProfile);

router.delete("/:profileId", ProfileController.DeleteProfile);

module.exports = router;