const express = require("express");
const path = require("path")
const fs = require("fs");
const db = require("../database/models");

let apiControllers = {
    userList: function (req, res) {

        db.users.findAll()
            .then(function (listado) {
                res.json({
                    count: listado.length,
                    users: listado.map(function (usuario) {
                        return {
                            id: usuario.id,
                            name: usuario.first_name,
                            last_name: usuario.last_name,
                            email: usuario.email,
                            detail: "/api/users/" + usuario.id

                        }
                    })

                })
            })
    },

    userDetail: function (req, res) {
        db.users.findByPk(req.params.id)
            .then(function (usuario) {
                res.json({
                    id: usuario.id,
                    firs_name: usuario.first_name,
                    last_name: usuario.last_name,
                    email: usuario.email,
                    imageUrl: "http://localhost:3000/img/users/" + usuario.image,
                    documento: usuario.documento,
                    phone: usuario.phone,
                    adress: usuario.adress,

                })
            })
    },

    productsList: function(req, res){

        db.products.findAll()
        .then(function(productos){
            res.json({
                count: productos.length,
                countByCategory: {
                    Auriculares : (productos.filter(function(producto){
                        if(producto.categoryId == 2){
                            return producto
                        }
                    })).length,
                    Sintetizadores: (productos.filter(function(producto){
                        if(producto.categoryId == 1){
                            return producto
                        }
                    })).length,
                    Microfonos: (productos.filter(function(producto){
                        if(producto.categoryId == 3){
                            return producto
                        }
                    })).length,
                    "Amplificadores y Parlantes":
                    (productos.filter(function(producto){
                        if(producto.categoryId == 4){
                            return producto
                        }
                    })).length,
                    Teclados : (productos.filter(function(producto){
                        if(producto.categoryId == 5){
                            return producto
                        }
                    })).length
                }
            })
        })

    }





}

module.exports = apiControllers