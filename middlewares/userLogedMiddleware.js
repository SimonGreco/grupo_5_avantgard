const fs = require("fs");
const db = require("../database/models");

 function guestMiddleware(req, res, next){


      
      let UserEmailInCookie = req.cookies.userEmail
     
      db.users.findOne({where: {email: req.cookies.userEmail ? req.cookies.userEmail: null}})
      .then(function(userToLog){
         
     if(userToLog){
        req.session.userLoged = userToLog
        
     }   
     
      })
        
      
      
   
      

     res.locals.isLogged = false
     if(req.session && req.session.userLoged){
        res.locals.isLogged = true
        res.locals.userLogged = req.session.userLoged
     }

     
      
       
    
    next()
   }
   module.exports = guestMiddleware