const express = require("express");

const router = express.Router();

const { UserController } = require("../controllers");

const { UserMiddleware } = require("../middlewares");

router.post("/login", UserController.LoginUser);

router.post("/register", UserController.RegisterUser);

router.put("/update/:id", UserMiddleware, UserController.UpdateUser);

router.delete("/delete/:id", UserMiddleware, UserController.DeleteUser);


module.exports = router;