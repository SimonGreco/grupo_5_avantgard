const fs = require("fs")

 function guestMiddleware(req, res, next){


  
      let UserEmailInCookie = req.cookies.userEmail
      let allUsers = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"));
         let userToLog = allUsers.find(function(elemento){
             return elemento.email == UserEmailInCookie;
         })
      if(userToLog){
         req.session.userLoged = userToLog
         
      }   
        
      
   
      

     res.locals.isLogged = false
     if(req.session && req.session.userLoged){
        res.locals.isLogged = true
        res.locals.userLogged = req.session.userLoged
     }

     
      
       
    
    next()
   }
   module.exports = guestMiddleware