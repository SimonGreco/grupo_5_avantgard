const express = require("express");
const path = require("path");
const fs = require("fs");
const {
    json
} = require("express");

const bcryptjs = require("bcryptjs");
const session = require("express-session");

const {
    validationResult
} = require("express-validator");
const {
    localsName
} = require("ejs");
const db = require("../database/models");
const {
    waitForDebugger
} = require("inspector");
const {
    log
} = require("console");






let usersController = {
    login: function (req, res) {
        res.render("./users/login")
    },
    register: function (req, res) {
        res.render("./users/register")
    },
    controlPanel: function (req, res) {
        let categorias = db.categories.findAll()
        let productos = db.products.findAll()


        Promise.all([categorias, productos])
            .then(function ([categorias, productos]) {
                res.render("./users/admin-control-panel", {
                    productos: productos,
                    categorias: categorias
                })
            })

    },


    //CRUD DE USUARIO A PARTIR DE ACA; NO TOCAR
    create: function (req, res) {
        const resultValidation = validationResult(req)
        if (resultValidation.errors.length > 0) {
            res.render("./users/register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        } else {


            db.users.findOne({
                    where: {
                        email: req.body.email
                    }
                })
                .then(function (user) {
                    if (user == null) {
                        db.users.create({
                            id: "DEFAULT",
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            email: req.body.email,
                            password: bcryptjs.hashSync(req.body.password, 10),
                            admin: false,
                            image: "Default.jpg",
                            documento: "",
                            phone: "",
                            address: "",
                            cityId: 1,
                            creationDate: new Date()
                        })

                        res.redirect("/user/login");



                    } else {
                        res.render("./users/register", {
                            errors: {
                                email: {
                                    msg: "El mail ingresado pertenece a un usuario existente"
                                }
                            },
                            oldData: req.body



                        })

                    }
                })



        }


    },
    //LOGIN PROCESS

    loginProcess: function (req, res) {



        db.users.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(function (userToLog) {
                if (userToLog == undefined) {
                    res.render("./users/login", {
                        errors: {
                            email: {
                                msg: "No se encontro un email valido"
                            }
                        }
                    })
                } else {
                    if (bcryptjs.compareSync(req.body.password, userToLog.password) == true) {

                        req.session.userLoged = userToLog

                        if (req.body.recuerdame) {
                            res.cookie("userEmail", req.body.email, {
                                maxAge: Infinity
                            })
                        }
                        res.redirect("/")






                    } else {
                        res.render("./users/login", {
                            errors: {
                                password: {
                                    msg: "Las credenciales son invalidas"
                                }
                            }
                        })
                    }

                }



            })




    },
    //LOGOUT
    logout: function (req, res) {

        res.clearCookie("userEmail")
        req.session.destroy()

        return res.redirect("/")
    },
    //PROFILE Y EDICION
    profile: function (req, res) {
        res.render("./users/userProfile")
    },
    userEdit: function (req, res) {
        const resultValidation = validationResult(req)
        if (resultValidation.errors.length > 0) {
            res.render("./users/userProfile", {
                errors: resultValidation.mapped()
            })




        } else {

            if (req.body.email == req.session.userLoged.email) {






                db.users.update({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    documento: req.body.documento,
                    phone: req.body.phone,
                    addres: req.body.adress,
                    image: req.file ? req.file.filename : req.body.image

                }, {
                    where: {
                        email: req.session.userLoged.email
                    }
                }).then(function () {
                    res.redirect("../")
                })







            } else {
                res.render("./users/userProfile", {
                    errors: {
                        email: {
                            msg: "No podes cambiar tu email"
                        }
                    },
                    oldData: req.body



                })

            }




        }













    }

}

module.exports = usersController