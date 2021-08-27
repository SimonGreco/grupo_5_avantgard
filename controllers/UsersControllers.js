const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const productsFilePath = path.join(__dirname, '../data/products.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
let usersController = {
    login: function(req, res){
        res.render("./users/login")
    },
    register: function(req, res){
        res.render("./users/register")
    },
    controlPanel: function(req, res){
        res.render("./users/admin-control-panel", {productos:productos})
    }
}

module.exports = usersController