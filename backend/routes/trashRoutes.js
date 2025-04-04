const express = require("express");
const router = express.Router();
const TrashReportModel = require("../models/trashReport");
const { reportTrashController } = require("../controllers/trashReportController");

const uploadImage = require("../middlewares/uploadImage");



router.post('/report',uploadImage,reportTrashController);

module.exports = router;
