const express = require("express");
const router = express.Router();
const productController = require("../controllers/mainProductControllers");

router.get("/detalle", productController.detail);
router.get("/carrito", productController.carrito);

module.exports = router