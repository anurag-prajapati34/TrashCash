const express = require("express");
const router = express.Router();
const TrashReportModel = require("../models/trashReport");
const { reportTrashController } = require("../controllers/trashReportController");

const uploadImage = require("../middlewares/uploadImage");
const { registerUser } = require("../controllers/userController");



router.post('/report',uploadImage,reportTrashController);
router.post('/register',registerUser)

module.exports = router;
