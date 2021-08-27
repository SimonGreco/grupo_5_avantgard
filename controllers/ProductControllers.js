const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const productsFilePath = path.join(__dirname, '../data/products.json');
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
        let idS = req.params.id
        res.render("./products/editProduct", {productos: productos, idS : idS})
    },
    newProduct: function(req, res){
        res.render("./products/newProduct")
    },
    catalogo: function(req, res){
        res.render("./products/productCtlg", {productos: productos})
    },
    create: function(req,res){
        let productoNuevo = {
            name: req.body.name,
            id: Date.now(),
            image: req.body.image,
            price: req.body.price,
            categoria: req.body.categoria,
            estado: req.body.estado,
            marca: req.body.marca,
            modelo: req.body.modelo,
            description: req.body.description,
            Oferta: req.body.Oferta,
        }
        let newJSON = productos.concat(productoNuevo);
		let productJSON = JSON.stringify(newJSON, null, 2);

		fs.writeFileSync( productsFilePath, productJSON);
        res.redirect("/products/")
        
    },
    //EDICION DE PRODUCTO
    update: function(req,res){
       var productoAEditar = productos.filter(function(elemento){
           return elemento.id == req.params.id
       })
      res.send(productoAEditar)

    
    }

}

module.exports = productController