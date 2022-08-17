const express = require('express');
const router = express.Router();

const controllers = require('../../controllers');


router.get("/", controllers.HomeController.getAllIndex);

module.exports = router