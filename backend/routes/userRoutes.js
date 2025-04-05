const express = require("express");
const router = express.Router();


const uploadImage = require("../middlewares/uploadImage");
const { registerUser } = require("../controllers/userController");



router.post('/register',registerUser)

module.exports = router;
