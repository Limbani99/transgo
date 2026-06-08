const express = require("express");
const router = express.Router();
const {login,resgister}= require("../controllers/userController");

// User registration and login routes
router.post("/register", resgister);
router.post("/login", login);

module.exports = router;
