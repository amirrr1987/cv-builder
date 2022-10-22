const express = require("express");

const router = express.Router();

const { CvController } = require("../controllers");

const { UserMiddleware } = require("../middlewares");


router.get("/:id", UserMiddleware, CvController.GetAllCv);

router.get("/:id/:cvId", UserMiddleware, CvController.GetOneCv);

router.post("/:id", UserMiddleware, CvController.CreateOneCv);

router.put("/:id/:cvId", UserMiddleware, CvController.UpdateOneCv);

router.delete("/:id/:cvId", UserMiddleware, CvController.DeleteOneCv);

module.exports = router;