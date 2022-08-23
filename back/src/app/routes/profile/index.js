const express = require("express");

const router = express.Router();

const { ProfileController } = require("../../controllers");

router.get("/", ProfileController.getAll);

router.get("/:profileId", ProfileController.getProfile);

// router.post("/", ProfileController.postAll);

router.put("/:profileId", ProfileController.postProfile);

module.exports = router;