const express = require("express");

const router = express.Router();

const { PersonalController } = require("../../controllers");

router.get("/", PersonalController.getAll);

router.get("/:personalId", PersonalController.getPersonal);

router.post("/", PersonalController.postAll);

router.put("/:personalId", PersonalController.postPersonal);

module.exports = router;