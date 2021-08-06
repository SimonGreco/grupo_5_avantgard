const express = require("express");
const router = express.Router();

let mainController = {
    index: function(req, res){
        res.render("./index")
    },
}

module.exports = mainController