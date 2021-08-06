const express = require("express");
const router = express.Router();

let usersController = {
    login: function(req, res){
        res.render("./users/login")
    },
    register: function(req, res){
        res.render("./users/register")
    }
}

module.exports = usersController