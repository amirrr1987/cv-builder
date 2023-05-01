const express = require("express");

const router = express.Router();

const { CvController } = require("../controllers");

const { UserMiddleware } = require("../middlewares");


router.get("/:userId", UserMiddleware, CvController.GetAllCv);

router.get("/:userId/:cvId", UserMiddleware, CvController.GetOneCv);

router.post("/:userId", UserMiddleware, CvController.CreateOneCv);

router.put("/:cvId", UserMiddleware, CvController.UpdateOneCv);

router.delete("/:cvId", UserMiddleware, CvController.DeleteOneCv);

module.exports = router;