const express = require("express");

const router = express.Router();

const { AuthController } = require("../controllers");

router.post("/login", AuthController.LoginAuth);

router.post("/register", AuthController.RegisterAuth);

router.put("/update", AuthController.UpdateAuth);

router.delete("/delete", AuthController.DeleteAuth);


module.exports = router;