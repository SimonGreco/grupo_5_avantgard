const express = require("express");
const router = express.Router();
const path = require("path")
const fs = require("fs");
const productsFilePath = path.join(__dirname, '../data/productsData.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let mainController = {
    index: function(req, res){
        res.render("./index", {productos: productos})
    },
}

module.exports = mainController