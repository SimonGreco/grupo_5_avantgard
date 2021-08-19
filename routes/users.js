const express = require("express");
const router = express.Router();
const usersController = require("../controllers/UsersControllers");

router.get("/login", usersController.login);
router.get("/register", usersController.register);
router.get("/control-panel", usersController.controlPanel);

module.exports = router