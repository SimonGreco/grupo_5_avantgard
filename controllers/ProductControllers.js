const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../database/models");
const fs = require("fs");
const { json } = require("express");
const { validationResult } = require("express-validator");

const { localsName } = require("ejs");

let productController = {
    detail: function (req, res) {

        
        let idS = req.params.id
        let producto = db.products.findAll();
        let categoria = db.categories.findAll()
      
        
        Promise.all([producto, categoria])
        .then(function([producto, categoria]){
             res.render("./products/productDetail", { producto: producto, idS: idS, categoria : categoria })
            
            
        })
      
    },
    carrito: function (req, res) {
        res.render("./products/productCar")
    },
    edit: function (req, res) {


        let idS = req.params.id
         let producto = db.products.findByPk(req.params.id);
         let categorias = db.categories.findAll()

        Promise.all([producto, categorias])
        .then(function([producto, categorias]){
            res.render("./products/editProduct", {
                producto: producto, categorias: categorias, idS : idS
            })
            console.log(categorias)
        })

              

    },
    newProduct: function (req, res) {
        db.categories.findAll()
            .then(function (e) {
                res.render("./products/newProduct", { categorias: e })

            })

    },
    catalogo: function (req, res) {

        db.products.findAll()
        .then(function(e){
            res.render("./products/productCtlg", { productos: e })
        })
        
               
                
    },
    create: function (req, res) {
        const resultValidation = validationResult(req)
        if (resultValidation.errors.length > 0) {
            db.categories.findAll()
            .then(function (e) {
                res.render("./products/newProduct", { categorias: e,
                    errors: resultValidation.mapped(),
                    oldData: req.body })

            })



        

            


        } else{

            db.products.create({
                id: "DEFAULT",
                name: req.body.name,
                price: req.body.price,
                estado: req.body.estado,
                marca: req.body.marca,
                modelo: req.body.modelo,
                description: req.body.description,
                image: req.file ? req.file.filename : "Default.png",
                oferta: req.body.oferta,
                categoryId: req.body.categoria,
                userId: req.session.userLoged.id ,
            }).then(function () {
                res.redirect("/products/")
            })


        }

        
    },
    //EDICION DE PRODUCTO
    update: function (req, res) {
        const resultValidation = validationResult(req)
        if (resultValidation.errors.length > 0) {






            let idS = req.params.id
         let producto = db.products.findByPk(req.params.id);
         let categorias = db.categories.findAll()
         Promise.all([producto, categorias])
         .then(function([producto, categorias]){
            res.render("./products/editProduct", {
                        errors: resultValidation.mapped(),
                        producto: producto, categorias: categorias, idS : idS
                        
         })})
        

            


        } else{


            db.products.update({
                name: req.body.name,
                price: req.body.price,
                estado: req.body.estado,
                marca: req.body.marca,
                modelo: req.body.modelo,
                description: req.body.description,
                image: req.file ? req.file.filename : req.body.image,
                oferta: req.body.oferta,
                categoryId: req.body.categoria,
                
            }, {where: {id: req.params.id}}).then(function () {
                res.redirect("/products/" + req.params.id)
            })
        }

       
        
        



    },

    //ELIMINAR PRODUCTO
    delete: function (req, res) {

        db.products.destroy({where: {id: req.params.id}})
        .then(function(){
            res.redirect("/products")
        })
        
    }
}

module.exports = productController