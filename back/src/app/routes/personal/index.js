const express = require("express");

const router = express.Router();

const controllers = require("../../controllers");


router.get("/", controllers.PersonalController.getAll);

router.get("/:personalId", controllers.PersonalController.getPersonal);

router.post("/", controllers.PersonalController.postAll);

router.put("/:personalId", controllers.PersonalController.postPersonal);




module.exports = router;