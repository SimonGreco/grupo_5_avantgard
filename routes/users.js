const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const usersController = require("../controllers/UsersControllers");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware")



router.get("/control-panel", authMiddleware, usersController.controlPanel);


//Creacion de usuarios



   
  router.get("/register", guestMiddleware,  usersController.register);
  router.post("/", usersController.create);


  //LOGIN DE USUARIO
  router.get("/login", guestMiddleware, usersController.login);
  router.post("/login", usersController.loginProcess)

  //LOGOUT DE USUARIO
  router.get("/logout", usersController.logout);


module.exports = router