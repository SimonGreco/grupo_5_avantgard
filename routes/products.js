const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductControllers");
const path = require("path");
const multer = require("multer");
const authMiddleware = require("../middlewares/authMiddleware")


router.get("/carrito", productController.carrito);


//Creacion de productos
//MULTER

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
        let folder = path.join(__dirname, "../public/img/Productos")
       cb(null, folder); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  });
  const upload = multer({ storage:storage });


router.get("/create", authMiddleware, productController.newProduct);
router.post("/", upload.single("image"), productController.create);

//---------------------------

//EDITAR PRODUCTOS
router.get("/:id/edit", authMiddleware, productController.edit);
router.put("/:id",upload.single("image"), productController.update)
//----------

//ELIMINAR PRODUCTOS
router.delete("/:id", authMiddleware, productController.delete)


router.get("/", productController.catalogo);
router.get("/:id", productController.detail);
module.exports = router