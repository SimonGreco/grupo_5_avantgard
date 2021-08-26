const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const productsFilePath = path.join(__dirname, '../data/productsData.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let productController = {
    detail: function(req, res){
        let idS = req.params.id
        res.render("./products/productDetail", {productos: productos, idS : idS})
    },
    carrito: function(req, res){
        res.render("./products/productCar")
    },
    edit: function(req, res){
        res.render("./products/editProduct")
    },
    newProduct: function(req, res){
        res.render("./products/newProduct")
    },
    catalogo: function(req, res){
        res.render("./products/productCtlg", {productos: productos})
    }

}

module.exports = productController