const express = require("express");
const router = express.Router();

let productController = {
    detail: function(req, res){
        res.render("./products/productDetail")
    },
    carrito: function(req, res){
        res.render("./products/productCar")
    }
}

module.exports = productController