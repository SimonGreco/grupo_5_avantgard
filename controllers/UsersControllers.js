const express = require("express");

const path = require("path");
const fs = require("fs");
const { json } = require("express");
const productsFilePath = path.join(__dirname, '../data/products.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const bcryptjs = require("bcryptjs");
const session = require("express-session");
const { validationResult } = require("express-validator")






let usersController = {
    login: function(req, res){
        res.render("./users/login")
    },
    register: function(req, res){
        res.render("./users/register")
    },
    controlPanel: function(req, res){
        res.render("./users/admin-control-panel", {productos:productos})
    },
    // userProfile: function(req,res){
    //     res.render("./users/userProfile")
    // },

    //CRUD DE USUARIO A PARTIR DE ACA; NO TOCAR
    create: function(req, res){
        const resultValidation = validationResult(req)
        if(resultValidation.errors.length > 0){
            res.render("./users/register", {
                errors : resultValidation.mapped(),
                oldData: req.body
            })
        }else{let userData = req.body
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
       
      
    }else{ res.render("./users/register", {
        errors: {email: {msg: "El mail ingresado pertenece a un usuario existente"}},
        oldData: req.body
    
    
    
    })

}

}
        
        
},
    loginProcess: function(req, res){
       
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
            })
        }else{
            if(bcryptjs.compareSync(req.body.password, userToLog.password) == true){
                delete userToLog;
                req.session.userLoged = userToLog
                
                if(req.body.recuerdame){
                res.cookie("userEmail", req.body.email, {maxAge: Infinity})
                 }
                res.redirect("/")
                


                


            }else{
                res.render("./users/login", {
                    errors: {
                        password: {
                            msg :"Las credenciales son invalidas"
                        }
                    }
                })
            }
            
        }
        


    },
    logout: function(req, res){

        res.clearCookie("userEmail")
        req.session.destroy()
    
        return res.redirect("/")
    }
    
}

module.exports = usersController