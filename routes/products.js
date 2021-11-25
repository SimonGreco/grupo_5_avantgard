const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductControllers");
const path = require("path");
const multer = require("multer");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  body
} = require("express-validator");
const adminAuthMiddleware = require("../middlewares/adminAuthMiddleware");

const validations = [
  body("name").notEmpty().withMessage("El campo no puede estar vacio").escape(),
  body("description").notEmpty().withMessage("El campo no puede estar vacio").escape(),
  body("price").notEmpty().withMessage("El campo no puede estar vacio").isNumeric().trim().escape(),
  body("marca").notEmpty().withMessage("El campo no puede estar vacio").escape(),
  body("modelo").notEmpty().withMessage("El campo no puede estar vacio").escape(),
  body("image").custom((value, {
    req
  }) => {
    if (req.file) {
      let file = req.file.originalname

      let acceptedExt = [".png", ".jpg", ".jpeg"]
      let extension = (path.extname(file)).toLowerCase();
      if (!acceptedExt.includes(extension))
        throw new Error("este tipo de archivo no esta permitido");
    }


    return true
  })
]


router.get("/carrito", productController.carrito);


//Creacion de productos
//MULTER

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = path.join(__dirname, "../public/img/Productos")
    cb(null, folder);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
  }
});
const upload = multer({
  storage: storage
});


router.get("/create", authMiddleware, adminAuthMiddleware, productController.newProduct);
router.post("/", upload.single("image"), validations, productController.create);

//---------------------------

//EDITAR PRODUCTOS
router.get("/:id/edit", authMiddleware, adminAuthMiddleware, productController.edit);
router.put("/:id", upload.single("image"), validations, productController.update)
//----------

//ELIMINAR PRODUCTOS
router.delete("/:id", authMiddleware, adminAuthMiddleware, productController.delete)


router.get("/", productController.catalogo);
router.get("/:id", productController.detail);
module.exports = router