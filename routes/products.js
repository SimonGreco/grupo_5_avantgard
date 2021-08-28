const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductControllers");
const path = require("path");
const multer = require("multer");


router.get("/carrito", productController.carrito);


//Creacion de productos
//MULTER

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
        let folder = path.join(__dirname, "../public")
       cb(null, "public"); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  });
  const upload = multer({ storage:storage });


router.get("/create", productController.newProduct);
router.post("/", upload.any(), productController.create);

//---------------------------

//EDITAR PRODUCTOS
router.get("/:id/edit", productController.edit);
router.put("/:id", productController.update)
//----------

//ELIMINAR PRODUCTOS
router.delete("/:id", productController.delete)


router.get("/", productController.catalogo);
router.get("/:id", productController.detail);
module.exports = router