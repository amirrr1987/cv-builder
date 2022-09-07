const express = require("express");

const router = express.Router();

const { AuthController } = require("../../controllers");

router.get("/", AuthController.GetAuth);

router.post("/", AuthController.CreateAuth);

router.put("/", AuthController.UpdateAuth);

router.delete("/", AuthController.DeleteAuth);


module.exports = router;