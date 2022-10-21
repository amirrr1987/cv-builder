const express = require("express");

const router = express.Router();

const { CvController } = require("../controllers");

const { AuthMiddleware } = require("../middlewares");


router.get("/:id", CvController.GetAllCv);

router.get("/:id/:cvId", CvController.GetOneCv);

router.post("/:id", AuthMiddleware, CvController.CreateOneCv);

router.put("/:id/:cvId", AuthMiddleware, CvController.UpdateOneCv);

router.delete("/:id/:cvId", AuthMiddleware, CvController.DeleteOneCv);

module.exports = router;