const express = require("express");
const router = express.Router();
const path = require("path")
const fs = require("fs");
const session = require("express-session");
const productsFilePath = path.join(__dirname, '../data/products.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let mainController = {
    index: function(req, res){
        res.render("./index", {productos: productos, session : session})
    },
}

module.exports = mainController