const fs = require("fs");
const db = require("../database/models");



function adminAuthMiddleware(req, res, next) {
    if (!res.locals.userLogged || res.locals.userLogged.admin == false) {
        res.redirect("/user/login")
    }

    next()
}




module.exports = adminAuthMiddleware