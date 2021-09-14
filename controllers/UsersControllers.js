const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const { json } = require("express");
const productsFilePath = path.join(__dirname, '../data/products.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const bcryptjs = require("bcryptjs");
const session = require("express-session");






let usersController = {
    login: function(req, res){
        res.render("./users/login", {session:session})
    },
    register: function(req, res){
        res.render("./users/register", {session:session})
    },
    controlPanel: function(req, res){
        res.render("./users/admin-control-panel", {productos:productos,session:session})
    },

    //CRUD DE USUARIO A PARTIR DE ACA; NO TOCAR
    create: function(req, res){
        let userData = req.body
        let allUsers = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"));
        if(allUsers.find(function(elemento){
            return elemento.email == req.body.email
        }) == undefined){
        
        userData.id = Date.now()
        userData.image = "Default.png"
        userData.password = bcryptjs.hashSync(req.body.password, 10);
        allUsers.push(userData)
        fs.writeFileSync("./data/users.json", JSON.stringify(allUsers, null, " "))
        res.redirect("/user/login");
       
        fs.writeFileSync(this.Filename, JSON.stringify(finalUser, null, " "))
    }else{res.send("el usuario ya existe")}
},
    loginProcess: function(req, res){
        let userData = req.body
        let allUsers = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"));
        let userToLog = allUsers.find(function(elemento){
            return elemento.email == req.body.email;

        })
        if(userToLog == undefined){
            res.render("./users/login", {
                errors: {
                    email: {
                        msg :"No se encontro un email valido"
                    }
                }
            },{session:session})
        }else{
            if(bcryptjs.compareSync(req.body.password, userToLog.password) == true){
                req.session.userLoged = userToLog
                res.redirect("/")
            }else{
                res.render("./users/login", {
                    errors: {
                        password: {
                            msg :"Las credenciales son invalidas"
                        }
                    }
                },{session:session})
            }
            
        }


    }
    
}

module.exports = usersController