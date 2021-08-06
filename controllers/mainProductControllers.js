const express = require("express");
const router = express.Router();

let productController = {
    detail: function(req, res){
        res.render("./products/productDetail")
    },
    carrito: function(req, res){
        res.render("./products/productCar")
    },
    edit: function(req, res){
        res.render("./products/editProduct")
    },
    newProduct: function(req, res){
        res.render("./products/newProduct")
    }

}

module.exports = productController