const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const usersController = require("../controllers/UsersControllers");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware")
const { body } = require("express-validator");
const multer = require("multer");
const path = require("path")
const validations = [
  body("first_name").notEmpty().withMessage("El campo no puede estar vacio"),
  body("last_name").notEmpty().withMessage("El campo no puede estar vacio"),
  body("email").notEmpty().withMessage("El campo no puede estar vacio").bail().isEmail().withMessage("Tenes que escribir un formato de correo valido"),
  body("password").notEmpty().withMessage("El campo no puede estar vacio")
  .bail().isStrongPassword(
    { minLength: 8, minLowercase: 1, minUppercase: 0, minNumbers: 1, minSymbols: 0, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }



  )
  .withMessage("La contraseña debe tener al menos 8 caracteres y contener letras y numeros")

]




router.get("/control-panel", authMiddleware, usersController.controlPanel);


 //Creacion de usuarios



   
  router.get("/register",   guestMiddleware,  usersController.register);
  router.post("/", validations, usersController.create);


  //LOGIN DE USUARIO
  router.get("/login", guestMiddleware, usersController.login);
  router.post("/login", usersController.loginProcess)

  //LOGOUT DE USUARIO
  router.get("/logout", usersController.logout);
 
  //EDICION DE USUARIO Y ENTRADA AL PERFIL
  //MULTER

  const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
        let folder = path.join(__dirname, "../public/img/users")
      cb(null, folder); 
    }, 
    filename: function (req, file, cb) { 
      cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  });
  const upload = multer({ storage:storage });
  router.put("/profile", upload.single("image"), usersController.userEdit)
  router.get("/profile", authMiddleware,usersController.profile)
  
  

module.exports = router