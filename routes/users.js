const express = require("express");
const router = express.Router();
const usersController = require("../controllers/UsersControllers");



router.get("/control-panel", usersController.controlPanel);


//Creacion de usuarios



   
  router.get("/register", usersController.register);
  router.post("/", usersController.create);


  //LOGIN DE USUARIO
  router.get("/login", usersController.login);
  router.post("/login", usersController.loginProcess)


module.exports = router