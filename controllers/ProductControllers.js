const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../database/models");
const fs = require("fs");
const { json } = require("express");
const productsFilePath = path.join(__dirname, '../data/products.json');
const productos =  JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const { localsName } = require("ejs");

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
        db.categories.findAll()
        .then(function(element){
            res.render("./products/editProduct", {
                productos: productos, idS : idS, categorias: element})
           
        })
        
    },
    newProduct: function(req, res){
        db.categories.findAll()
        .then(function(e){
            res.render("./products/newProduct" , {categorias: e})
            
        })
        
    },
    catalogo: function(req, res){
        let hola = db.users.findAll({
            include: [{association: "product"}, {association: "ciudad"}]
        }).catch(function(error){
            console.log(error)
        })
        
            res.render("./products/productCtlg", {productos: productos})
            console.log(hola)
        
        
    },
    create: function(req,res){
        
        db.products.create({
            id: "DEFAULT",
            name: req.body.name,
            price: req.body.price,
            estado:req.body.estado,
            marca:req.body.marca,
            modelo:req.body.modelo,
            description:req.body.description,
            image: req.file ? req.file.filename: "Default.png",
            oferta: req.body.oferta,
            categoria_id: req.body.categoria,
            usuario_id: 51 //req.session.userLoged.id ,
        }).then(function(){
            res.redirect("/products/")
        })
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