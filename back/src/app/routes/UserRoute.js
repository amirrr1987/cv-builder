const express = require("express");

const router = express.Router();

const { UserController } = require("../controllers");

router.post("/login", UserController.LoginUser);

router.post("/register", UserController.RegisterUser);

router.put("/update/:id", UserController.UpdateUser);

router.delete("/delete/:id", UserController.DeleteUser);


module.exports = router;