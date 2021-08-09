const express = require("express");
const router = express.Router();
const productController = require("../controllers/mainProductControllers");

router.get("/detalle", productController.detail);
router.get("/carrito", productController.carrito);
router.get("/edit", productController.edit);
router.get("/create", productController.newProduct)
router.get("/", productController.catalogo)
module.exports = router