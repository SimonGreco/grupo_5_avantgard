const express = require("express");
const router = express.Router();
const path = require("path")
const fs = require("fs");
const session = require("express-session");
const db = require("../database/models");

let mainController = {
    index: function (req, res) {

        db.products.findAll()
            .then(function (e) {
                res.render("./index", {
                    productos: e,
                    session: session
                })
            })

    },
}

module.exports = mainController