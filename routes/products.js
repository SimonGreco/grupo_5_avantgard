const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductControllers");


router.get("/carrito", productController.carrito);
router.get("/edit", productController.edit);
router.get("/create", productController.newProduct);
router.get("/", productController.catalogo);
router.get("/:id", productController.detail);
module.exports = router