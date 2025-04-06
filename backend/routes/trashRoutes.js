const express = require("express");
const router = express.Router();
const TrashReportModel = require("../models/trashReport");
const { reportTrashController, getTrashReports } = require("../controllers/trashReportController");

const uploadImage = require("../middlewares/uploadImage");
const { registerUser } = require("../controllers/userController");



router.post('/report',uploadImage,reportTrashController);
router.post('/register',registerUser)
router.get('/all',getTrashReports);
module.exports = router;
