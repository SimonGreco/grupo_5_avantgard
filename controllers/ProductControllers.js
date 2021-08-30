const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const { json } = require("express");
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
            price: req.body.price,
            categoria: req.body.categoria,
            estado: req.body.estado,
            marca: req.body.marca,
            modelo: req.body.modelo,
            description: req.body.description,
            Oferta: req.body.Oferta,
            image: "Default.png"
        }
        if(req.file != undefined){
            productoNuevo.image = req.file.filename
        }
        let newJSON = productos.concat(productoNuevo);
		let productJSON = JSON.stringify(newJSON, null, 2);

		fs.writeFileSync( productsFilePath, productJSON);
        res.redirect("/products/")
        
        
        
    },
    //EDICION DE PRODUCTO
    update: function(req,res){
       var productoAEditar = productos.find(function(elemento){
           return elemento.id == req.params.id
       })
     
       
      productoAEditar.name = req.body.name; 
      productoAEditar.price = req.body.price;
      productoAEditar.categoria = req.body.categoria;
      productoAEditar.marca = req.body.marca;
      productoAEditar.description = req.body.description;
      productoAEditar.Oferta = req.body.Oferta;
      if(req.file != undefined){
          productoAEditar.image = req.file.filename
      }

      let indice = productos.indexOf(productoAEditar)
     
    
   var productos1 = productos
    productos1[indice] = productoAEditar
    
    productosJSON = JSON.stringify(productos1, null, 2);
    fs.writeFileSync(productsFilePath, productosJSON)
    res.redirect("/products")
   
    
},

//ELIMINAR PRODUCTO
delete: function(req,res){
    let productosSinEliminar = productos.filter(function(elemento){
        return elemento.id != req.params.id
    })
    
    productosJSON = JSON.stringify(productosSinEliminar, null, 2);
    fs.writeFileSync(productsFilePath, productosJSON)
    res.redirect("/products")
}
}

module.exports = productController