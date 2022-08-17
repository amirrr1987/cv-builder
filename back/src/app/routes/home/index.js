const express = require('express');

const router = express.Router();

const controllers = require('../../controllers');


router.get("/", controllers.HomeController.getAll);

router.get("/pagination", controllers.HomeController.getPagination);

router.get("/:id", controllers.HomeController.getOne);

router.post("/", controllers.HomeController.setOne);

router.put("/:id", controllers.HomeController.updateOne);

router.delete("/:id", controllers.HomeController.deleteOne);


module.exports = router