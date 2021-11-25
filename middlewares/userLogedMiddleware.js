const fs = require("fs");
const db = require("../database/models");

function guestMiddleware(req, res, next) {


   if (req.cookies.userEmail) {
      let UserEmailInCookie = req.cookies.userEmail
      db.users.findOne({
         where: {
            email: UserEmailInCookie
         }
      }).then(function (user) {
         if (user) {
            req.session.userLoged = user

         }
      })
   }






   res.locals.isLogged = false
   if (req.session && req.session.userLoged) {
      res.locals.isLogged = true
      res.locals.userLogged = req.session.userLoged
      db.users.findOne({
         where: {
            email: req.session.userLoged.email
         }
      }).then(function (user) {

         req.session.userLoged = user.dataValues
         res.locals.userLogged = req.session.userLoged
         //Al estar locals definido nuevamente dentro de un promise, next() se ejecuta por fuera antes de que locals tome un valor
         //para corregir errores defino locals antes de la promesa (de forma que next pueda ejecutarse, con los valores de locals sin actualizar)
         //y cuando la promesa se cumple los valores de locals quedan actualizados. 


      })

   }

   next()




}
module.exports = guestMiddleware